using DG.Tweening;
using UnityEngine;

namespace LTPHUONG
{
	public class SquashStretchEffect : MonoBehaviour
	{
		[SerializeField]
		private float delay;

		[SerializeField]
		private float duration = 0.36f;

		[SerializeField]
		private float intensity = 1f;

		[SerializeField]
		private AudioClip sfx;

		[SerializeField]
		private ParticleSystem vfx;

		private Vector3 originalScale;

		private Sequence squashSequence;

		private void Awake()
		{
			originalScale = base.transform.localScale;
		}

		public void PlaySquashStretch()
		{
			base.transform.DOKill();
			squashSequence?.Kill();
			Vector3 baseScale = base.transform.localScale;
			Vector3 squash1 = new Vector3(baseScale.x * (1f + 0.15f * intensity), baseScale.y * (1f - 0.15f * intensity), baseScale.z);
			Vector3 stretch1 = new Vector3(baseScale.x * (1f - 0.08f * intensity), baseScale.y * (1f + 0.08f * intensity), baseScale.z);
			Vector3 squash2 = new Vector3(baseScale.x * (1f + 0.05f * intensity), baseScale.y * (1f - 0.05f * intensity), baseScale.z);
			float t1 = duration * 0.22f;
			float t2 = duration * 0.28f;
			float t3 = duration * 0.22f;
			float t4 = duration * 0.28f;
			squashSequence = DOTween.Sequence().AppendInterval(delay).AppendCallback(delegate
			{
				if (sfx != null)
				{
					AudioManager.PlaySfxRandomPitch(sfx, 1f, 0f);
				}
				if (vfx != null)
				{
					vfx.Stop();
					vfx.Play();
				}
			})
				.Append(base.transform.DOScale(squash1, t1).SetEase(Ease.OutQuad))
				.Append(base.transform.DOScale(stretch1, t2).SetEase(Ease.OutQuad))
				.Append(base.transform.DOScale(squash2, t3).SetEase(Ease.OutQuad))
				.Append(base.transform.DOScale(baseScale, t4).SetEase(Ease.OutQuad));
		}

		private void OnDestroy()
		{
			base.transform.DOKill();
			squashSequence?.Kill();
		}
	}
}
