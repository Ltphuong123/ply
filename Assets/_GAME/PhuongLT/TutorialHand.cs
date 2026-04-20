using System.Collections;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Scripting;

namespace LTPHUONG
{
    public class TutorialHand : MonoBehaviour
    {
        [SerializeField] private Transform point;
        [SerializeField] private float clickRotation = -20f;
        [SerializeField] private float clickDuration = 0.15f;
        [SerializeField] private float dragDuration = 0.6f;
        [SerializeField] private float loopDelay = 0.5f;

        [SerializeField] private SpriteRenderer handSprite;
        [SerializeField] private float fadeDuration = 0.25f;

        private Transform tf;
        private Vector3 originalRotation;
        private Vector3 originalScale;
        private Sequence currentSequence;
        private Tween hideTween;
        private Vector3 pointOffset;

        private void Awake()
        {
            tf = transform;
            originalRotation = tf.eulerAngles;
            originalScale = tf.localScale;
            pointOffset = tf.position - point.position;
        }

        public void PlayClick(Transform target = null)
        {
            Stop();
            tf.position = target.position + pointOffset;
            tf.eulerAngles = originalRotation;
            Show();

            currentSequence = DOTween.Sequence()
                .Append(tf.DORotate(originalRotation + Vector3.forward * clickRotation, clickDuration).SetEase(Ease.OutQuad))
                .Append(tf.DORotate(originalRotation, clickDuration).SetEase(Ease.InQuad))
                .AppendInterval(loopDelay)
                .SetLoops(-1, LoopType.Restart);
        }

        public void PlayDrag(Transform from, Transform to)
        {
            Stop();
            tf.position = from.position + pointOffset;
            tf.eulerAngles = originalRotation;
            Show();

            currentSequence = DOTween.Sequence()
                .AppendInterval(0.3f)
                .Append(tf.DORotate(originalRotation + Vector3.forward * clickRotation, clickDuration).SetEase(Ease.OutQuad))
                .Append(DOTween.To(() => tf.position, x => tf.position = x, to.position + pointOffset, dragDuration).SetEase(Ease.InOutQuad))
                .Append(tf.DORotate(originalRotation, clickDuration).SetEase(Ease.InQuad))
                .AppendInterval(loopDelay)
                .AppendCallback(() =>
                {
                    tf.position = from.position + pointOffset;
                    tf.eulerAngles = originalRotation;
                })
                .SetLoops(-1, LoopType.Restart);
        }

        [Preserve] public void Stop()
        {
            currentSequence?.Kill();
            currentSequence = null;
            hideTween?.Kill();

            if (!gameObject.activeSelf) return;

            hideTween = DOTween.Sequence()
                .Append(tf.DOScale(originalScale * 0.5f, fadeDuration).SetEase(Ease.InBack))
                .Join(handSprite != null
                    ? handSprite.DOFade(0f, fadeDuration).SetEase(Ease.InQuad)
                    : DOTween.Sequence())
                .OnComplete(() =>
                {
                    gameObject.SetActive(false);
                    tf.localScale = originalScale;
                    if (handSprite != null)
                        SetSpriteAlpha(1f);
                });
        }

        private void Show()
        {
            hideTween?.Kill();
            tf.localScale = originalScale;
            if (handSprite != null)
                SetSpriteAlpha(1f);
            gameObject.SetActive(true);
        }

        private void SetSpriteAlpha(float a)
        {
            Color c = handSprite.color;
            c.a = a;
            handSprite.color = c;
        }

        private void OnDestroy()
        {
            currentSequence?.Kill();
            hideTween?.Kill();
        }
    }
}
