using DG.Tweening;
using UnityEngine;

namespace LTPHUONG
{
    public class FadeSprite : MonoBehaviour
    {
        [SerializeField] private SpriteRenderer spriteRenderer;
        [SerializeField] private float fadeDuration = 0.5f;
        [SerializeField] private float targetAlpha = 1f;

        private Tween fadeTween;

        private void Awake()
        {
            if (spriteRenderer == null)
                spriteRenderer = GetComponent<SpriteRenderer>();
        }

        public void FadeIn()
        {
            if (spriteRenderer == null) return;
            fadeTween?.Kill();
            fadeTween = spriteRenderer.DOFade(targetAlpha, fadeDuration).SetEase(Ease.OutQuad);
        }

        public void FadeOut()
        {
            if (spriteRenderer == null) return;
            fadeTween?.Kill();
            fadeTween = spriteRenderer.DOFade(0f, fadeDuration).SetEase(Ease.OutQuad);
        }

        private void OnDestroy() => fadeTween?.Kill();
    }
}
