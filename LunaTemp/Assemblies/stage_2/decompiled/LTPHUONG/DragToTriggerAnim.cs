using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
	public class DragToTriggerAnim : DragBase
	{
		[Header("Trigger")]
		[SerializeField]
		private Transform triggerPoint;

		[SerializeField]
		private float triggerRadius = 1.5f;

		[Header("Animation")]
		[SerializeField]
		private Vector3 midPosition = new Vector3(0.2f, 0f, 0f);

		[SerializeField]
		private float midRotationZ = -30f;

		[SerializeField]
		private Vector3 endPosition = new Vector3(-0.6f, 1.7f, 0f);

		[SerializeField]
		private float endRotationZ = -90f;

		[SerializeField]
		private Vector3 finalPosition = new Vector3(-0.6f, 2.3f, 0f);

		[SerializeField]
		private float finalRotationZ = -120f;

		[SerializeField]
		private float totalDuration = 0.8f;

		[SerializeField]
		private float fadeDuration = 0.4f;

		[Tooltip("Độ rộng đường cong. Dương = lệch trái theo chiều đi, âm = lệch phải")]
		[SerializeField]
		private float curveWidth = 1.2f;

		[Header("Events")]
		public UnityEvent OnAnimationStart;

		public UnityEvent OnMidPoint;

		public UnityEvent OnAnimationComplete;

		private bool isActive;

		private bool isAnimating;

		private Sequence animSequence;

		private Tween snapTween;

		private Vector3 originalPosition;

		private Quaternion originalRotation;

		protected override void Awake()
		{
			base.Awake();
			originalPosition = tf.position;
			originalRotation = tf.rotation;
		}

		public void Activate()
		{
			isActive = true;
		}

		protected override void OnDragging(Vector3 position)
		{
			if (isActive && !isAnimating)
			{
				Vector3 checkPoint = ((triggerPoint != null) ? triggerPoint.position : Vector3.zero);
				if (Vector3.Distance(tf.position, checkPoint) <= triggerRadius)
				{
					TriggerAnimation();
				}
			}
		}

		protected override void OnDragEnd(Vector3 position)
		{
			if (!isActive && !isAnimating)
			{
				snapTween?.Kill();
				snapTween = DOTween.Sequence().Append(tf.DOMove(originalPosition, 0.35f).SetEase(Ease.OutBack)).Join(tf.DORotateQuaternion(originalRotation, 0.25f).SetEase(Ease.OutQuad));
			}
		}

		private void TriggerAnimation()
		{
			if (isAnimating)
			{
				return;
			}
			isAnimating = true;
			Block();
			OnAnimationStart?.Invoke();
			Vector3 startPos = tf.position;
			float z = startPos.z;
			float startAngle = tf.eulerAngles.z;
			if (startAngle > 180f)
			{
				startAngle -= 360f;
			}
			float d1 = Vector2.Distance(startPos, midPosition);
			float d2 = Vector2.Distance(midPosition, endPosition);
			float d3 = Vector2.Distance(endPosition, finalPosition);
			float total = d1 + d2 + d3;
			float k1 = ((total > 0.001f) ? (d1 / total) : (1f / 3f));
			float k2 = ((total > 0.001f) ? ((d1 + d2) / total) : (2f / 3f));
			Vector3 mid3D = new Vector3(midPosition.x, midPosition.y, z);
			Vector3 end3D = new Vector3(endPosition.x, endPosition.y, z);
			Vector3 final3D = new Vector3(finalPosition.x, finalPosition.y, z);
			float rotT = 0f;
			animSequence = DOTween.Sequence();
			Vector3 arc1 = ArcControl(startPos, mid3D, curveWidth);
			Vector3 arc2 = ArcControl(mid3D, end3D, curveWidth);
			Vector3 arc3 = ArcControl(end3D, final3D, curveWidth);
			animSequence.Append(tf.DOPath(new Vector3[7] { startPos, arc1, mid3D, arc2, end3D, arc3, final3D }, totalDuration, PathType.CatmullRom).SetEase(Ease.InOutSine).SetOptions(false)
				.OnWaypointChange(delegate(int idx)
				{
					if (idx == 2)
					{
						OnMidPoint?.Invoke();
					}
				}));
			animSequence.Join(DOTween.To(() => rotT, delegate(float t)
			{
				rotT = t;
				float z2 = EvalRotation(t, startAngle, midRotationZ, endRotationZ, finalRotationZ, k1, k2);
				tf.rotation = Quaternion.Euler(0f, 0f, z2);
			}, 1f, totalDuration).SetEase(Ease.Linear));
			animSequence.AppendCallback(delegate
			{
				if (spriteRenderers != null)
				{
					SpriteRenderer[] array = spriteRenderers;
					for (int i = 0; i < array.Length; i++)
					{
						array[i]?.DOFade(0f, fadeDuration).SetEase(Ease.InQuad);
					}
				}
			});
			animSequence.AppendInterval(fadeDuration);
			animSequence.OnComplete(delegate
			{
				isAnimating = false;
				OnAnimationComplete?.Invoke();
				base.gameObject.SetActive(false);
			});
		}

		private float EvalRotation(float t, float r0, float r1, float r2, float r3, float k1, float k2)
		{
			float len2 = k2 - k1;
			float len3 = 1f - k2;
			float s = ((k1 > 0.001f) ? ((r1 - r0) / k1) : 0f);
			float s2 = ((len2 > 0.001f) ? ((r2 - r1) / len2) : 0f);
			float s3 = ((len3 > 0.001f) ? ((r3 - r2) / len3) : 0f);
			float m1 = (s + s2) * 0.5f;
			float m2 = (s2 + s3) * 0.5f;
			if (t <= k1)
			{
				float u3 = ((k1 > 0.001f) ? (t / k1) : 1f);
				return Hermite(u3, r0, r1, 0f, m1 * k1);
			}
			if (t <= k2)
			{
				float u2 = ((len2 > 0.001f) ? ((t - k1) / len2) : 1f);
				return Hermite(u2, r1, r2, m1 * len2, m2 * len2);
			}
			float u = ((len3 > 0.001f) ? ((t - k2) / len3) : 1f);
			return Hermite(u, r2, r3, m2 * len3, 0f);
		}

		private static Vector3 ArcControl(Vector3 a, Vector3 b, float width)
		{
			Vector3 mid = (a + b) * 0.5f;
			Vector3 dir = (b - a).normalized;
			Vector3 perp = new Vector3(0f - dir.y, dir.x, 0f);
			return mid + perp * width;
		}

		private static float Hermite(float t, float p0, float p1, float m0, float m1)
		{
			float t2 = t * t;
			float t3 = t2 * t;
			return (2f * t3 - 3f * t2 + 1f) * p0 + (t3 - 2f * t2 + t) * m0 + (-2f * t3 + 3f * t2) * p1 + (t3 - t2) * m1;
		}

		public override bool IsBlocked()
		{
			return isAnimating || base.IsBlocked();
		}

		private void OnDestroy()
		{
			animSequence?.Kill();
			snapTween?.Kill();
		}
	}
}
