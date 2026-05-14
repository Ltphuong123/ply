using System;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
	public class Item : ItemBase
	{
		[Header("Placement Settings")]
		[SerializeField]
		private Placeholder[] validPlaceholders;

		[SerializeField]
		private Placeholder[] requiredPlaceholders;

		[SerializeField]
		protected int minLayer;

		[Header("Audio")]
		[SerializeField]
		private AudioClip pickSfx;

		[SerializeField]
		protected AudioClip correctPlaceSfx;

		[Header("Visual")]
		[SerializeField]
		private GameObject placeParticle;

		[SerializeField]
		private float dragOffsetY = 0f;

		[SerializeField]
		private float dropDistance = 1f;

		[SerializeField]
		protected float bounceIntensity = 0.5f;

		[SerializeField]
		private bool enableFloatEffect = true;

		[SerializeField]
		protected Vector3 SizeIncrease = new Vector3(1.05f, 1.05f, 1f);

		[Header("Events")]
		public UnityEvent OnDragStarted;

		public UnityEvent OnDragEnded;

		public UnityEvent OnPlacedCorrectly;

		private const float DRAG_FOLLOW_SPEED = 20f;

		private const float REACH_THRESHOLD_SQR = 0.01f;

		private const float FLOAT_DURATION = 4f;

		private float floatAmplitude = 0.08f;

		private const float TWO_PI = 3.14159265f * 2f;

		private static readonly Vector3 SizeInit = Vector3.one;

		private static readonly Vector3 Squash1 = new Vector3(1.15f, 0.85f, 1f);

		private static readonly Vector3 Stretch1 = new Vector3(0.92f, 1.08f, 1f);

		private static readonly Vector3 Squash2 = new Vector3(1.05f, 0.95f, 1f);

		private bool isDraggingMoved;

		private bool hasReachedTarget;

		protected bool isFloating;

		private bool hasBeenDragged;

		protected bool isPlacingAnimation;

		private Vector3 floatBasePosition;

		private float floatTimeOffset;

		private float dropDistanceSqr;

		protected Sequence placeSequence;

		private Placeholder currentHighlightedPlaceholder;

		protected override void Awake()
		{
			base.Awake();
			dropDistanceSqr = dropDistance * dropDistance;
		}

		private void Update()
		{
			if (isFloating && enableFloatEffect)
			{
				Vector3 pos = tf.position;
				pos.y = floatBasePosition.y + Mathf.Sin((Time.time - floatTimeOffset) / 4f * (3.14159265f * 2f)) * floatAmplitude;
				tf.position = pos;
			}
		}

		protected override void OnDragStart(Vector3 position)
		{
			if (!isPlacingAnimation && !base.IsCorrect)
			{
				tf.DOKill();
				tf.DOShakeScale(0.2f, 0.1f, 10, 90f, false);
				isDraggingMoved = false;
				hasReachedTarget = false;
				PlaySfx(pickSfx);
			}
		}

		protected override void OnDragBegin(Vector3 position)
		{
			if (isPlacingAnimation || base.IsCorrect || isDraggingMoved)
			{
				return;
			}
			tf.DOKill();
			BringToFront();
			isDraggingMoved = true;
			isFloating = false;
			tf.DORotate(Vector3.zero, 0.2f).SetEase(Ease.OutQuad);
			tf.localScale = SizeIncrease;
			if (!hasBeenDragged)
			{
				hasBeenDragged = true;
				for (int i = 0; i < spriteRenderers.Length; i++)
				{
					if (spriteRenderers[i] != null)
					{
						spriteRenderers[i].color = Color.white;
					}
				}
			}
			HighlightAvailablePlaceholder();
			OnDragStarted?.Invoke();
		}

		protected override void UpdatePosition(Vector3 targetPosition)
		{
			if (!isDraggingMoved)
			{
				base.UpdatePosition(targetPosition);
				return;
			}
			Vector3 target = new Vector3(targetPosition.x, targetPosition.y + dragOffsetY, targetPosition.z);
			if (!hasReachedTarget)
			{
				tf.position = Vector3.Lerp(tf.position, target, Time.deltaTime * 20f);
				if ((tf.position - target).sqrMagnitude < 0.01f)
				{
					hasReachedTarget = true;
				}
			}
			else
			{
				tf.position = target;
			}
		}

		protected override void OnDragEnd(Vector3 position)
		{
			if (!isPlacingAnimation && !base.IsCorrect && isDraggingMoved)
			{
				ClearHighlightedPlaceholder();
				OnDragEnded?.Invoke();
				Placeholder closest = FindClosestAvailablePlaceholder();
				if (closest != null && CanPlaceInto(closest))
				{
					PlaceCorrectly(closest);
				}
				else
				{
					PlaceIncorrectly();
				}
			}
		}

		protected virtual void PlaceCorrectly(Placeholder placeholder)
		{
			isPlacingAnimation = true;
			isFloating = false;
			tf.DOKill();
			placeSequence?.Kill();
			placeholder.SetItem(this);
			Vector3 targetPos = placeholder.TF.position;
			Vector3 midPos = (tf.position + targetPos) * 0.5f;
			midPos.y += 0.5f;
			Vector3 squash1 = new Vector3(1f + 0.15f * bounceIntensity, 1f - 0.15f * bounceIntensity, 1f);
			Vector3 stretch1 = new Vector3(1f - 0.08f * bounceIntensity, 1f + 0.08f * bounceIntensity, 1f);
			Vector3 squash2 = new Vector3(1f + 0.05f * bounceIntensity, 1f - 0.05f * bounceIntensity, 1f);
			placeSequence = DOTween.Sequence().Append(tf.DOMove(midPos, 0.2f).SetEase(Ease.OutQuad)).Join(tf.DOScale(SizeInit * 1.1f, 0.2f).SetEase(Ease.OutQuad))
				.Append(tf.DOMove(targetPos, 0.15f).SetEase(Ease.InQuad))
				.Join(tf.DOScale(SizeInit * 0.9f, 0.15f).SetEase(Ease.InQuad))
				.Insert(0f, tf.DORotate(placeholder.TF.eulerAngles, 0.35f).SetEase(Ease.InOutQuad))
				.AppendCallback(delegate
				{
					AudioManager.PlaySfxRandomPitch(correctPlaceSfx, 0.5f, 1f, 1f);
					SetClickOrderAndSortingOrder(minLayer);
					SpawnPlaceParticle(targetPos);
					OnPlacedCorrectly?.Invoke();
				})
				.Append(tf.DOScale(squash1, 0.08f).SetEase(Ease.OutQuad))
				.Append(tf.DOScale(stretch1, 0.1f).SetEase(Ease.OutQuad))
				.Append(tf.DOScale(squash2, 0.08f).SetEase(Ease.OutQuad))
				.Append(tf.DOScale(SizeInit, 0.1f).SetEase(Ease.OutQuad))
				.OnComplete(delegate
				{
					SetCorrect(true);
					isPlacingAnimation = false;
				});
		}

		private void PlaceIncorrectly()
		{
			tf.DOScale(SizeInit, 0.2f).SetEase(Ease.OutQuad);
			tf.DORotate(new Vector3(0f, 0f, UnityEngine.Random.Range(-10f, 10f)), 0.2f).SetEase(Ease.OutQuad);
			SetCorrect(false);
			if (enableFloatEffect)
			{
				StartFloat();
			}
		}

		public override void StartIdleEffect()
		{
			if (!base.IsCorrect && !isPlacingAnimation && enableFloatEffect)
			{
				StartFloat();
			}
		}

		private void StartFloat()
		{
			if (enableFloatEffect)
			{
				floatBasePosition = tf.position;
				if (!isFloating)
				{
					isFloating = true;
					floatTimeOffset = Time.time;
				}
			}
		}

		public override bool IsBlocked()
		{
			return base.IsBlocked() || base.IsCorrect || isPlacingAnimation;
		}

		private Placeholder FindClosestAvailablePlaceholder()
		{
			if (validPlaceholders == null)
			{
				return null;
			}
			Placeholder closest = null;
			float closestSqr = dropDistanceSqr;
			int i = 0;
			for (int count = validPlaceholders.Length; i < count; i++)
			{
				Placeholder p = validPlaceholders[i];
				if (!(p == null) && !p.IsOccupied && p.gameObject.activeInHierarchy)
				{
					float dx = tf.position.x - p.TF.position.x;
					float dy = tf.position.y - p.TF.position.y;
					float sqr = dx * dx + dy * dy;
					if (sqr < closestSqr)
					{
						closestSqr = sqr;
						closest = p;
					}
				}
			}
			return closest;
		}

		private bool CanPlaceInto(Placeholder placeholder)
		{
			if (requiredPlaceholders == null || requiredPlaceholders.Length == 0)
			{
				return true;
			}
			int i = 0;
			for (int count = requiredPlaceholders.Length; i < count; i++)
			{
				if (requiredPlaceholders[i] == placeholder)
				{
					return true;
				}
			}
			int j = 0;
			for (int count2 = requiredPlaceholders.Length; j < count2; j++)
			{
				if (requiredPlaceholders[j] != null && !requiredPlaceholders[j].IsOccupied)
				{
					return false;
				}
			}
			return true;
		}

		protected void PlaySfx(AudioClip clip)
		{
			if (clip != null)
			{
				AudioManager.PlaySfxRandomPitch(clip, 1f, 0.8f, 1.2f);
			}
		}

		private void SpawnPlaceParticle(Vector3 position)
		{
			if (!(placeParticle == null))
			{
				GameObject particle = UnityEngine.Object.Instantiate(placeParticle, position, Quaternion.identity);
				UnityEngine.Object.Destroy(particle, 3f);
			}
		}

		private void HighlightAvailablePlaceholder()
		{
			if (validPlaceholders == null || validPlaceholders.Length == 0 || ClickController.Instance == null)
			{
				return;
			}
			int currentOrder = ClickController.Instance.GetCurrentSortingOrder() - 3;
			for (int i = 0; i < validPlaceholders.Length; i++)
			{
				Placeholder p = validPlaceholders[i];
				if (p != null && !p.IsOccupied && p.gameObject.activeInHierarchy)
				{
					currentHighlightedPlaceholder = p;
					p.ShowHighlight();
					p.SetSortingOrder(currentOrder);
					break;
				}
			}
		}

		private void ClearHighlightedPlaceholder()
		{
			if (currentHighlightedPlaceholder != null)
			{
				currentHighlightedPlaceholder.HideHighlight();
				currentHighlightedPlaceholder = null;
			}
		}

		private void OnDestroy()
		{
			isFloating = false;
			placeSequence?.Kill();
			tf.DOKill();
			ClearHighlightedPlaceholder();
		}
	}
}
