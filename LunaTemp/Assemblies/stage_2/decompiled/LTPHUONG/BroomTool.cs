using DG.Tweening;
using UnityEngine;

namespace LTPHUONG
{
	public class BroomTool : ToolBase
	{
		[SerializeField]
		private Transform sweepPoint;

		[SerializeField]
		private GameObject sweepParticle;

		private new Vector3 originalRotation;

		private Vector3 lastSweepPos;

		private float lastSweepTime;

		private float lastSweepEffectTime;

		private bool isPlayingSweepEffect;

		private Tween sweepEffectTween;

		private Tween particleTween;

		private readonly Collider2D[] hitBuffer = new Collider2D[10];

		protected override void Awake()
		{
			base.Awake();
			originalRotation = tf.eulerAngles;
		}

		protected override void OnDragStart(Vector3 position)
		{
			base.OnDragStart(position);
			lastSweepPos = GetSweepPosition();
			lastSweepTime = Time.time;
		}

		protected override void OnDragging(Vector3 currentPosition)
		{
			Vector3 currentSweepPos = GetSweepPosition();
			Vector3 delta = currentSweepPos - lastSweepPos;
			float distance = delta.magnitude;
			if (distance < 0.1f)
			{
				return;
			}
			float deltaTime = Time.time - lastSweepTime;
			if (!(deltaTime <= 0f))
			{
				float speed = distance / deltaTime;
				Vector3 direction = delta / distance;
				int steps = Mathf.CeilToInt(distance / 0.1f);
				float stepSize = 1f / (float)steps;
				for (int i = 1; i <= steps; i++)
				{
					TrySweep(Vector3.Lerp(lastSweepPos, currentSweepPos, (float)i * stepSize), speed, direction.x);
				}
				lastSweepPos = currentSweepPos;
				lastSweepTime = Time.time;
			}
		}

		protected override void OnDragEnd(Vector3 position)
		{
			StopSweepEffect();
			base.OnDragEnd(position);
		}

		private Vector3 GetSweepPosition()
		{
			return (sweepPoint != null) ? sweepPoint.position : tf.position;
		}

		private void TrySweep(Vector3 worldPos, float speed, float directionX)
		{
			if (speed < 20f || directionX >= 0f)
			{
				return;
			}
			int hitCount = Physics2D.OverlapCircleNonAlloc(worldPos, 0.5f, hitBuffer);
			if (hitCount == 0)
			{
				return;
			}
			bool hitWeb = false;
			for (int i = 0; i < hitCount; i++)
			{
				WebItem web = hitBuffer[i].GetComponent<WebItem>();
				if (web != null && !web.IsRemoved)
				{
					web.OnSwept(worldPos);
					hitWeb = true;
				}
			}
			if (hitWeb && !isPlayingSweepEffect && Time.time - lastSweepEffectTime >= 0.3f)
			{
				PlaySweepEffect();
			}
		}

		private void PlaySweepEffect()
		{
			isPlayingSweepEffect = true;
			lastSweepEffectTime = Time.time;
			sweepEffectTween?.Kill();
			if (sweepParticle != null)
			{
				particleTween?.Kill();
				sweepParticle.SetActive(true);
				particleTween = DOVirtual.DelayedCall(0.5f, delegate
				{
					sweepParticle?.SetActive(false);
				});
			}
			sweepEffectTween = DOTween.Sequence().Append(tf.DORotate(originalRotation + Vector3.forward * 30f, 0.1f).SetEase(Ease.OutQuad)).Append(tf.DORotate(originalRotation, 0.1f).SetEase(Ease.OutQuad))
				.OnComplete(delegate
				{
					isPlayingSweepEffect = false;
				});
		}

		private void StopSweepEffect()
		{
			sweepEffectTween?.Kill();
			isPlayingSweepEffect = false;
			tf.DORotate(originalRotation, 0.2f).SetEase(Ease.OutQuad);
			particleTween?.Kill();
			if (sweepParticle != null)
			{
				sweepParticle.SetActive(false);
			}
		}

		private void OnDestroy()
		{
			sweepEffectTween?.Kill();
			particleTween?.Kill();
		}
	}
}
