using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
	public class GarbageItem : ItemBase
	{
		[SerializeField]
		private bool enablePeel = true;

		[SerializeField]
		private AudioClip pickSfx;

		[SerializeField]
		private AudioClip peelSnapSfx;

		[SerializeField]
		private AudioClip flyUpSfx;

		[SerializeField]
		private AudioClip dropInBinSfx;

		[SerializeField]
		private int minLayer;

		[SerializeField]
		private float dragOffsetY = 1f;

		private const float DRAG_FOLLOW_SPEED = 20f;

		private const float REACH_THRESHOLD_SQR = 0.01f;

		private const float PEEL_DISTANCE = 3f;

		private const float MAX_STRETCH = 1.2f;

		private const float SHAKE_INTENSITY = 0.15f;

		private const float FLY_DURATION = 0.45f;

		private const float FLY_TOP_RATIO = 0.55f;

		private const float TOP_DETECT_DIST = 0.3f;

		private static readonly Vector3 SizeIncrease = new Vector3(1.05f, 1.05f, 1f);

		private Vector3 originalPosition;

		private Vector3 originalScale;

		private Quaternion originalRotation;

		private float peelProgress;

		private float originalZ;

		private bool isPeeled;

		private bool isFlying;

		private bool isDraggingMoved;

		private bool hasReachedTarget;

		private Tween returnTween;

		private Tween snapTween;

		private Sequence flySequence;

		private Tween shakeTween;

		public UnityEvent OnPeeled;

		public UnityEvent OnTrashed;

		public bool IsTrashed { get; private set; }

		protected override void Awake()
		{
			base.Awake();
			originalPosition = tf.position;
			originalScale = tf.localScale;
			originalRotation = tf.rotation;
			originalZ = tf.position.z;
		}

		protected override void OnDragStart(Vector3 position)
		{
			if (!isFlying && !IsTrashed)
			{
				KillTweens();
				isDraggingMoved = false;
				hasReachedTarget = false;
				peelProgress = 0f;
				tf.DOShakeScale(0.2f, 0.1f, 10, 90f, false);
				if (pickSfx != null)
				{
					AudioManager.PlaySFX(pickSfx);
				}
			}
		}

		protected override void OnDragBegin(Vector3 position)
		{
			if (!isFlying && !IsTrashed && !isDraggingMoved && (!enablePeel || isPeeled))
			{
				BringToFront();
				isDraggingMoved = true;
				tf.DORotate(Vector3.zero, 0.2f).SetEase(Ease.OutQuad);
				tf.localScale = SizeIncrease;
			}
		}

		protected override void UpdatePosition(Vector3 targetPosition)
		{
			if (isFlying || IsTrashed)
			{
				return;
			}
			if (isPeeled || !enablePeel)
			{
				if (!isDraggingMoved)
				{
					base.UpdatePosition(targetPosition);
					return;
				}
				Vector3 target = new Vector3(targetPosition.x, targetPosition.y + dragOffsetY, originalZ);
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
			else
			{
				float dist = Vector3.Distance(targetPosition, originalPosition);
				peelProgress = Mathf.Clamp01(dist / 3f);
				ApplyStretchEffect(targetPosition);
				ApplyShake();
				if (peelProgress >= 1f)
				{
					PeelOff(targetPosition);
				}
			}
		}

		protected override void OnDragEnd(Vector3 position)
		{
			if (isFlying || IsTrashed)
			{
				return;
			}
			StopShake();
			if (isPeeled || !enablePeel)
			{
				TrashBin bin = TrashBin.FindClosestBin(tf.position);
				if (bin != null && bin.IsInRange(tf.position))
				{
					tf.localScale = Vector3.one;
					FlyToBin(bin);
				}
				else if (isDraggingMoved)
				{
					tf.localScale = Vector3.one;
					tf.DORotate(new Vector3(0f, 0f, Random.Range(-10f, 10f)), 0.2f).SetEase(Ease.OutQuad);
				}
			}
			else
			{
				SnapBack();
			}
		}

		private void ApplyStretchEffect(Vector3 targetPosition)
		{
			Vector3 dir = targetPosition - originalPosition;
			dir.z = 0f;
			tf.localScale = new Vector3(originalScale.x * Mathf.Lerp(1f, 0.8f, peelProgress), originalScale.y * Mathf.Lerp(1f, 1.2f, peelProgress), originalScale.z);
			Vector3 pos = originalPosition + dir.normalized * (peelProgress * 3f * 0.3f);
			pos.z = originalZ;
			tf.position = pos;
		}

		private void ApplyShake()
		{
			if (peelProgress > 0.3f && shakeTween == null)
			{
				float i = 0.15f * peelProgress;
				shakeTween = tf.DOShakePosition(0.1f, new Vector3(i, i, 0f), 30).SetLoops(-1, LoopType.Restart);
			}
		}

		private void StopShake()
		{
			shakeTween?.Kill();
			shakeTween = null;
		}

		private void PeelOff(Vector3 fingerPosition)
		{
			isPeeled = true;
			StopShake();
			BringToFront();
			tf.localScale = originalScale;
			tf.rotation = originalRotation;
			Vector3 snapPos = new Vector3(fingerPosition.x, fingerPosition.y, originalZ);
			snapTween = DOTween.Sequence().Append(tf.DOMove(snapPos, 0.1f).SetEase(Ease.OutBack)).Join(tf.DOScale(originalScale * 1.15f, 0.08f).SetEase(Ease.OutQuad))
				.Append(tf.DOScale(originalScale, 0.08f).SetEase(Ease.InQuad))
				.OnUpdate(FixZ);
			if (peelSnapSfx != null)
			{
				AudioManager.PlaySFX(peelSnapSfx);
			}
			OnPeeled?.Invoke();
		}

		private void SnapBack()
		{
			returnTween?.Kill();
			SetClickOrderAndSortingOrder(minLayer);
			Vector3 target = new Vector3(originalPosition.x, originalPosition.y, originalZ);
			returnTween = DOTween.Sequence().Append(tf.DOMove(target, 0.35f).SetEase(Ease.OutElastic)).Join(tf.DOScale(originalScale, 0.2f).SetEase(Ease.OutQuad))
				.Join(tf.DORotateQuaternion(originalRotation, 0.2f).SetEase(Ease.OutQuad))
				.OnUpdate(FixZ);
		}

		private void StartFloating()
		{
			tf.DORotate(new Vector3(0f, 0f, Random.Range(-10f, 10f)), 0.2f).SetEase(Ease.OutQuad);
		}

		public override void StartIdleEffect()
		{
			if (!IsTrashed && !isFlying)
			{
				tf.DORotate(new Vector3(0f, 0f, Random.Range(-10f, 10f)), 0.2f).SetEase(Ease.OutQuad);
			}
		}

		private void FlyToBin(TrashBin bin)
		{
			isFlying = true;
			flySequence?.Kill();
			Vector3 startPos = new Vector3(tf.position.x, tf.position.y, originalZ);
			Vector3 topPos = bin.GetTopPoint();
			topPos.z = originalZ;
			Vector3 dropPos = bin.GetDropPoint();
			dropPos.z = originalZ;
			bool passedTop = false;
			float topDur = 0.2475f;
			float dropDur = 0.45f - topDur;
			flySequence = DOTween.Sequence().Append(tf.DOPath(new Vector3[3] { startPos, topPos, dropPos }, 0.45f, PathType.CatmullRom).SetEase(Ease.InOutQuad).OnUpdate(delegate
			{
				FixZ();
				if ((!passedTop && (Vector2)tf.position == (Vector2)topPos) || (!passedTop && Vector2.SqrMagnitude((Vector2)tf.position - (Vector2)topPos) < 0.09f))
				{
					passedTop = true;
					if (flyUpSfx != null)
					{
						AudioManager.PlaySFX(flyUpSfx);
					}
					SetClickOrderAndSortingOrder(minLayer);
				}
			})).Join(tf.DOScale(originalScale * 0.7f, topDur).SetEase(Ease.OutQuad))
				.Join(tf.DORotate(Vector3.zero, topDur).SetEase(Ease.OutQuad))
				.Insert(topDur, tf.DOScale(originalScale * 0.3f, dropDur).SetEase(Ease.InQuad))
				.AppendCallback(delegate
				{
					if (dropInBinSfx != null)
					{
						AudioManager.PlaySFX(dropInBinSfx);
					}
					bin.Shake();
				})
				.Append(tf.DOScale(Vector3.zero, 0.1f).SetEase(Ease.InQuad))
				.OnComplete(delegate
				{
					IsTrashed = true;
					isFlying = false;
					SetCorrect(true);
					bin.OnItemDropped();
					OnTrashed?.Invoke();
					base.gameObject.SetActive(false);
				});
		}

		public override bool IsBlocked()
		{
			return isFlying || IsTrashed || base.IsBlocked();
		}

		private void FixZ()
		{
			Vector3 pos = tf.position;
			pos.z = originalZ;
			tf.position = pos;
		}

		private void KillTweens()
		{
			returnTween?.Kill();
			snapTween?.Kill();
			flySequence?.Kill();
			StopShake();
		}

		private void OnDestroy()
		{
			KillTweens();
		}
	}
}
