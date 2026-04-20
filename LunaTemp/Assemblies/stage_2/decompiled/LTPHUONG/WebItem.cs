using System;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
	public class WebItem : MonoBehaviour
	{
		[SerializeField]
		protected SpriteRenderer spriteRenderer;

		[SerializeField]
		protected AudioClip sweepSfx;

		public UnityEvent OnRemovedEvent;

		protected Vector3 originalScale;

		protected int currentSweepCount;

		protected float lastSweepTime;

		protected bool isRemoved;

		private Sequence flingSequence;

		public Action OnRemoved;

		protected float originalZ;

		public virtual bool IsRemoved => isRemoved;

		protected virtual void Awake()
		{
			originalScale = base.transform.localScale;
			originalZ = base.transform.position.z;
		}

		public virtual void OnSwept(Vector3 sweepPosition)
		{
			if (isRemoved || Time.time - lastSweepTime < 0.3f)
			{
				return;
			}
			lastSweepTime = Time.time;
			currentSweepCount++;
			if (sweepSfx != null)
			{
				AudioManager.PlaySFX(sweepSfx);
			}
			if (currentSweepCount >= 3)
			{
				Vector3 flingDirection = (base.transform.position - sweepPosition).normalized;
				if (flingDirection.sqrMagnitude < 0.01f)
				{
					flingDirection = Vector3.right;
				}
				ShakeAndFling(flingDirection);
				AudioManager.PlaySFX(sweepSfx);
			}
			else
			{
				Shake();
			}
		}

		protected void Shake()
		{
			Vector3 currentPos = base.transform.position;
			base.transform.DOShakePosition(0.15f, 0.2f, 20).OnComplete(delegate
			{
				Vector3 position = currentPos;
				position.z = originalZ;
				base.transform.position = position;
			});
		}

		private void ShakeAndFling(Vector3 direction)
		{
			Vector3 currentPos = base.transform.position;
			base.transform.DOShakePosition(0.15f, 0.2f, 20).OnComplete(delegate
			{
				Vector3 position = currentPos;
				position.z = originalZ;
				base.transform.position = position;
				Fling(direction);
			});
		}

		private void Fling(Vector3 direction)
		{
			isRemoved = true;
			OnRemoved?.Invoke();
			OnRemovedEvent?.Invoke();
			direction.z = 0f;
			Vector3 flingPos = base.transform.position + direction * 2f;
			flingPos.z = originalZ;
			Vector3 fallPos = flingPos + Vector3.down * 4f;
			fallPos.z = originalZ;
			flingSequence = DOTween.Sequence().Append(base.transform.DOMove(flingPos, 0.15f).SetEase(Ease.OutQuad)).Append(base.transform.DOMove(fallPos, 0.6f).SetEase(Ease.InQuad))
				.Join(base.transform.DOScale(originalScale * 0.3f, 0.6f).SetEase(Ease.InQuad));
			if (spriteRenderer != null)
			{
				flingSequence.Join(spriteRenderer.DOFade(0f, 0.6f).SetEase(Ease.InQuad));
			}
			flingSequence.OnComplete(delegate
			{
				UnityEngine.Object.Destroy(base.gameObject);
			});
		}

		private void OnDestroy()
		{
			base.transform.DOKill();
			flingSequence?.Kill();
		}
	}
}
