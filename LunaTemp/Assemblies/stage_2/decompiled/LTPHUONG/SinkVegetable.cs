using System;
using DG.Tweening;
using UnityEngine;

namespace LTPHUONG
{
	public class SinkVegetable : DragBase
	{
		[Header("Objects")]
		[SerializeField]
		private GameObject dirtyObj;

		[SerializeField]
		private GameObject cleanObj;

		[Header("Sink")]
		[SerializeField]
		private SinkSystem sinkSystem;

		[SerializeField]
		private Transform dropZone;

		[SerializeField]
		private float dropRadius = 2f;

		[SerializeField]
		private AudioClip splashSfx;

		[Header("Basket")]
		[SerializeField]
		private Transform basketPoint;

		[SerializeField]
		private float basketRadius = 1.5f;

		[SerializeField]
		private AudioClip basketSfx;

		[Header("Clean Effects")]
		[SerializeField]
		private AudioClip cleanSfx;

		[SerializeField]
		private ParticleSystem cleanParticle;

		[Header("In Water")]
		[SerializeField]
		private float waterScale = 0.7f;

		[Header("Float")]
		[SerializeField]
		private float floatAmplitude = 0.08f;

		[SerializeField]
		private float floatDuration = 2f;

		private Vector3 originalPosition;

		private Quaternion originalRotation;

		private Vector3 originalScale;

		private Vector3 washedPosition;

		private bool isFloating;

		private float floatTimeOffset;

		private float floatBaseY;

		private Tween returnTween;

		private const float TWO_PI = 3.14159265f * 2f;

		public bool IsWashed { get; private set; }

		public bool IsInBasket { get; private set; }

		protected override void Awake()
		{
			base.Awake();
			originalPosition = tf.position;
			originalRotation = tf.rotation;
			originalScale = tf.localScale;
			if (cleanObj != null)
			{
				cleanObj.SetActive(false);
			}
		}

		private void Update()
		{
			if (isFloating)
			{
				Vector3 pos = tf.position;
				pos.y = floatBaseY + Mathf.Sin((Time.time - floatTimeOffset) / floatDuration * (3.14159265f * 2f)) * floatAmplitude;
				tf.position = pos;
			}
		}

		protected override void OnDragStart(Vector3 position)
		{
			isFloating = false;
			returnTween?.Kill();
			tf.DOShakeScale(0.2f, 0.1f, 10, 90f, false);
		}

		protected override void OnDragBegin(Vector3 position)
		{
			BringToFront();
			tf.DOScale(originalScale * 1.1f, 0.2f).SetEase(Ease.OutQuad);
		}

		protected override void UpdatePosition(Vector3 targetPosition)
		{
			if (IsInBasket && basketPoint != null)
			{
				Vector2 center = basketPoint.position;
				Vector2 dir = (Vector2)targetPosition - center;
				if (dir.magnitude > basketRadius)
				{
					targetPosition = new Vector3(center.x + dir.normalized.x * basketRadius, center.y + dir.normalized.y * basketRadius, targetPosition.z);
				}
			}
			base.UpdatePosition(targetPosition);
		}

		protected override void OnDragEnd(Vector3 position)
		{
			if (IsInBasket)
			{
				PlayLandInBasket();
			}
			else if (IsWashed)
			{
				if (basketPoint != null && Vector2.Distance(tf.position, basketPoint.position) <= basketRadius)
				{
					DoBasket();
				}
				else
				{
					ReturnToSink();
				}
			}
			else if (dropZone != null && Vector2.Distance(tf.position, dropZone.position) <= dropRadius && sinkSystem != null && sinkSystem.HasWater)
			{
				DoWash();
			}
			else
			{
				ReturnToOrigin();
			}
		}

		private void DoWash()
		{
			IsWashed = true;
			if (splashSfx != null)
			{
				AudioManager.PlaySFX(splashSfx);
			}
			Vector3 landPos = tf.position;
			landPos.z = originalPosition.z;
			washedPosition = landPos;
			SetClickOrderAndSortingOrder(0);
			DOTween.Sequence().Append(tf.DOScale(originalScale * 0.85f, 0.1f).SetEase(Ease.OutQuad)).Append(tf.DOScale(originalScale * waterScale, 0.15f).SetEase(Ease.OutBack))
				.OnComplete(delegate
				{
					if (dirtyObj != null)
					{
						dirtyObj.SetActive(false);
					}
					if (cleanObj != null)
					{
						cleanObj.SetActive(true);
					}
					if (cleanSfx != null)
					{
						AudioManager.PlaySFX(cleanSfx);
					}
					if (cleanParticle != null)
					{
						cleanParticle.transform.position = tf.position;
						cleanParticle.Play();
					}
					StartFloat(landPos);
				});
		}

		private void DoBasket()
		{
			IsInBasket = true;
			isFloating = false;
			if (basketSfx != null)
			{
				AudioManager.PlaySFX(basketSfx);
			}
			PlayLandInBasket();
		}

		private void PlayLandInBasket()
		{
			returnTween?.Kill();
			returnTween = DOTween.Sequence().Append(tf.DOScale(originalScale * 0.85f, 0.08f).SetEase(Ease.OutQuad)).Append(tf.DOScale(originalScale * 1.1f, 0.12f).SetEase(Ease.OutBack))
				.Append(tf.DOScale(originalScale, 0.08f).SetEase(Ease.OutQuad));
		}

		private void ReturnToSink()
		{
			SetClickOrderAndSortingOrder(0);
			returnTween?.Kill();
			returnTween = DOTween.Sequence().Append(tf.DOMove(washedPosition, 0.3f).SetEase(Ease.OutQuad)).Join(tf.DOScale(originalScale * waterScale, 0.25f).SetEase(Ease.OutQuad))
				.OnComplete(delegate
				{
					StartFloat(washedPosition);
				});
		}

		private void ReturnToOrigin()
		{
			returnTween?.Kill();
			returnTween = DOTween.Sequence().Append(tf.DOMove(originalPosition, 0.35f).SetEase(Ease.OutQuad)).Join(tf.DORotateQuaternion(originalRotation, 0.3f).SetEase(Ease.OutQuad))
				.Join(tf.DOScale(originalScale, 0.2f).SetEase(Ease.OutQuad));
		}

		private void StartFloat(Vector3 basePos)
		{
			floatBaseY = basePos.y;
			floatTimeOffset = Time.time;
			isFloating = true;
		}

		public override bool IsBlocked()
		{
			return base.IsBlocked();
		}

		private void OnDestroy()
		{
			returnTween?.Kill();
		}
	}
}
