using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
	public class DragInToDisappear : DragBase
	{
		[Header("Animation")]
		[SerializeField]
		private float sinkDistance = 0.5f;

		[SerializeField]
		private float sinkDuration = 0.25f;

		[SerializeField]
		private float fadeDuration = 0.35f;

		[SerializeField]
		private AudioClip dragSound;

		[HideInInspector]
		public UnityEvent OnDisappeared;

		private bool isAnimating;

		private Sequence seq;

		public bool IsGone => !base.gameObject.activeSelf;

		protected override void OnDragBegin(Vector3 position)
		{
			AudioManager.PlaySFX(dragSound);
		}

		protected override void OnDragEnd(Vector3 position)
		{
			PlayDisappear();
		}

		public void PlayDisappear()
		{
			if (isAnimating)
			{
				return;
			}
			isAnimating = true;
			Block();
			seq?.Kill();
			seq = DOTween.Sequence();
			Vector3 sinkTarget = tf.position + Vector3.down * sinkDistance;
			float totalDuration = Mathf.Max(sinkDuration, fadeDuration);
			seq.Append(tf.DOMove(sinkTarget, totalDuration).SetEase(Ease.InQuad));
			if (spriteRenderers != null)
			{
				SpriteRenderer[] array = spriteRenderers;
				foreach (SpriteRenderer sr in array)
				{
					if (sr != null)
					{
						seq.Join(sr.DOFade(0f, totalDuration).SetEase(Ease.InQuad));
					}
				}
			}
			seq.OnComplete(delegate
			{
				base.gameObject.SetActive(false);
				OnDisappeared?.Invoke();
			});
		}

		public override bool IsBlocked()
		{
			return isAnimating || base.IsBlocked();
		}

		private void OnDestroy()
		{
			seq?.Kill();
		}
	}
}
