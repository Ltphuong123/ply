using DG.Tweening;
using UnityEngine;

namespace LTPHUONG
{
    public class ButterflyWingFlap : MonoBehaviour
    {
        [SerializeField] private SpriteRenderer[] wingsOpen;    // 2 sprite cánh mở
        [SerializeField] private SpriteRenderer[] wingsClosed;  // 2 sprite cánh khép
        [SerializeField] private float flapDuration = 0.1f;     // thời gian mỗi pha fade

        private Sequence seq;

        private void Start()
        {
            SetAlpha(wingsOpen, 1f);
            SetAlpha(wingsClosed, 0f);
            PlayFlap();
        }

        private void PlayFlap()
        {
            seq?.Kill();
            seq = DOTween.Sequence().SetLoops(-1);

            // Pha 1: cánh mở ẩn dần + cánh khép hiện dần
            AppendFadePhase(fadeOut: wingsOpen, fadeIn: wingsClosed);
            // Pha 2: cánh khép ẩn dần + cánh mở hiện dần
            AppendFadePhase(fadeOut: wingsClosed, fadeIn: wingsOpen);
        }

        private void AppendFadePhase(SpriteRenderer[] fadeOut, SpriteRenderer[] fadeIn)
        {
            bool isFirst = true;
            foreach (var sr in fadeOut)
            {
                var t = sr.DOFade(0f, flapDuration);
                if (isFirst) { seq.Append(t); isFirst = false; }
                else seq.Join(t);
            }
            foreach (var sr in fadeIn)
                seq.Join(sr.DOFade(1f, flapDuration));
        }

        private void SetAlpha(SpriteRenderer[] sprites, float alpha)
        {
            foreach (var sr in sprites)
            {
                Color c = sr.color;
                c.a = alpha;
                sr.color = c;
            }
        }

        private void OnDestroy() => seq?.Kill();
    }
}
