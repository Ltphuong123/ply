using DG.Tweening;
using UnityEngine;

namespace LTPHUONG
{
	public class SpriteHighlight : MonoBehaviour
	{
		[SerializeField]
		private SpriteRenderer spriteRenderer;

		[SerializeField]
		private Material outlineMaterial;

		[SerializeField]
		private Color outlineColor = Color.white;

		[SerializeField]
		private float outlineSize = 1f;

		[SerializeField]
		private float showDuration = 0.25f;

		[SerializeField]
		private float pulseDuration = 0.8f;

		private MaterialPropertyBlock mpb;

		private float currentAlpha;

		private Tween alphaTween;

		private Sequence pulseSeq;

		private static readonly int PropOutlineColor = Shader.PropertyToID("_OutlineColor");

		private static readonly int PropOutlineSize = Shader.PropertyToID("_OutlineSize");

		private void Awake()
		{
			if (spriteRenderer == null)
			{
				spriteRenderer = GetComponent<SpriteRenderer>();
			}
			Material mat = ((outlineMaterial != null) ? new Material(outlineMaterial) : new Material(Shader.Find("LTPHUONG/SpriteOutlineSimple")));
			spriteRenderer.material = mat;
			mpb = new MaterialPropertyBlock();
			spriteRenderer.GetPropertyBlock(mpb);
			mpb.SetFloat(PropOutlineSize, outlineSize);
			spriteRenderer.SetPropertyBlock(mpb);
			SetAlpha(0f);
		}

		public void Show()
		{
			KillAll();
			alphaTween = DOTween.To(() => currentAlpha, SetAlpha, 1f, showDuration).SetEase(Ease.OutQuad);
		}

		public void Hide()
		{
			KillAll();
			alphaTween = DOTween.To(() => currentAlpha, SetAlpha, 0f, showDuration).SetEase(Ease.OutQuad);
		}

		public void Pulse()
		{
			KillAll();
			pulseSeq = DOTween.Sequence().Append(DOTween.To(() => currentAlpha, SetAlpha, 1f, pulseDuration * 0.5f).SetEase(Ease.InOutSine)).Append(DOTween.To(() => currentAlpha, SetAlpha, 0f, pulseDuration * 0.5f).SetEase(Ease.InOutSine))
				.SetLoops(-1, LoopType.Restart);
		}

		public void ShowInstant()
		{
			KillAll();
			SetAlpha(1f);
		}

		public void HideInstant()
		{
			KillAll();
			SetAlpha(0f);
		}

		private void SetAlpha(float a)
		{
			currentAlpha = a;
			spriteRenderer.GetPropertyBlock(mpb);
			mpb.SetColor(PropOutlineColor, new Color(outlineColor.r, outlineColor.g, outlineColor.b, a));
			spriteRenderer.SetPropertyBlock(mpb);
		}

		private void KillAll()
		{
			alphaTween?.Kill();
			pulseSeq?.Kill();
		}

		private void OnDestroy()
		{
			KillAll();
		}
	}
}
