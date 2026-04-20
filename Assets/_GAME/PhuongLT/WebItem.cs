using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class WebItem : MonoBehaviour
    {
        [SerializeField] protected SpriteRenderer spriteRenderer;
        [SerializeField] protected AudioClip sweepSfx;
        public UnityEvent OnRemovedEvent;

        protected Vector3 originalScale;
        protected int currentSweepCount;
        protected float lastSweepTime;
        protected bool isRemoved;
        private Sequence flingSequence;

        public virtual bool IsRemoved => isRemoved;
        public System.Action OnRemoved;

        protected float originalZ;

        protected virtual void Awake()
        {
            originalScale = transform.localScale;
            originalZ = transform.position.z;
        }

        public virtual void OnSwept(Vector3 sweepPosition)
        {
            if (isRemoved || Time.time - lastSweepTime < 0.3f) return;

            lastSweepTime = Time.time;
            currentSweepCount++;

            if (sweepSfx != null)
                AudioManager.PlaySFX(sweepSfx);

            if (currentSweepCount >= 3)
            {
                Vector3 flingDirection = (transform.position - sweepPosition).normalized;
                if (flingDirection.sqrMagnitude < 0.01f)
                    flingDirection = Vector3.right;

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
            Vector3 currentPos = transform.position;
            transform.DOShakePosition(0.15f, 0.2f, 20, 90, false, true)
                .OnComplete(() =>
                {
                    var pos = currentPos;
                    pos.z = originalZ;
                    transform.position = pos;
                });
        }

        private void ShakeAndFling(Vector3 direction)
        {
            Vector3 currentPos = transform.position;
            transform.DOShakePosition(0.15f, 0.2f, 20, 90, false, true)
                .OnComplete(() =>
                {
                    var pos = currentPos;
                    pos.z = originalZ;
                    transform.position = pos;
                    Fling(direction);
                });
        }

        private void Fling(Vector3 direction)
        {
            isRemoved = true;
            OnRemoved?.Invoke();
            OnRemovedEvent?.Invoke();

            direction.z = 0f;
            Vector3 flingPos = transform.position + direction * 2f;
            flingPos.z = originalZ;
            Vector3 fallPos = flingPos + Vector3.down * 4f;
            fallPos.z = originalZ;

            flingSequence = DOTween.Sequence()
                .Append(transform.DOMove(flingPos, 0.15f).SetEase(Ease.OutQuad))
                .Append(transform.DOMove(fallPos, 0.6f).SetEase(Ease.InQuad))
                .Join(transform.DOScale(originalScale * 0.3f, 0.6f).SetEase(Ease.InQuad));

            if (spriteRenderer != null)
                flingSequence.Join(spriteRenderer.DOFade(0f, 0.6f).SetEase(Ease.InQuad));

            flingSequence.OnComplete(() =>
            {
                Destroy(gameObject);
            });
        }

        private void OnDestroy()
        {
            transform.DOKill();
            flingSequence?.Kill();
        }
    }
}
