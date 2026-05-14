using DG.Tweening;
using UnityEngine;

namespace LTPHUONG
{
    public class FadeSprite : MonoBehaviour
    {
        [SerializeField] private SpriteRenderer[] spriteRenderers;
        [SerializeField] private float fadeDuration = 0.5f;
        [SerializeField] private float targetAlpha = 1f;

        private Tween[] fadeTweens;

        private void Awake()
        {
            if (spriteRenderers == null || spriteRenderers.Length == 0)
            {
                var sr = GetComponent<SpriteRenderer>();
                if (sr != null)
                    spriteRenderers = new SpriteRenderer[] { sr };
            }

            if (spriteRenderers != null)
                fadeTweens = new Tween[spriteRenderers.Length];
        }

        public void FadeIn()
        {
            if (spriteRenderers == null) return;

            for (int i = 0; i < spriteRenderers.Length; i++)
            {
                if (spriteRenderers[i] == null) continue;
                fadeTweens[i]?.Kill();
                fadeTweens[i] = spriteRenderers[i].DOFade(targetAlpha, fadeDuration).SetEase(Ease.OutQuad);
            }
        }

        public void FadeOut()
        {
            if (spriteRenderers == null) return;

            for (int i = 0; i < spriteRenderers.Length; i++)
            {
                if (spriteRenderers[i] == null) continue;
                fadeTweens[i]?.Kill();
                fadeTweens[i] = spriteRenderers[i].DOFade(1f, fadeDuration).SetEase(Ease.OutQuad);
            }
        }

        private void OnDestroy()
        {
            if (fadeTweens == null) return;
            for (int i = 0; i < fadeTweens.Length; i++)
                fadeTweens[i]?.Kill();
        }
    }
}
