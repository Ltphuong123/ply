using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class ClickMoveToPoint : InteractableBase
    {
        [Header("Target")]
        [SerializeField] private Transform targetPoint;
        
        [Header("Audio")]
        [SerializeField] private AudioClip moveSfx;
        
        [Header("Squash Stretch")]
        [SerializeField] private bool useSquashStretch;
        [SerializeField] private float squashDelay;
        [SerializeField] private float squashDuration = 0.36f;
        [SerializeField] private float squashIntensity = 1f;
        
        [Header("Move Back")]
        [SerializeField] private float moveBackDelay;
        
        [Header("Events")]
        [SerializeField] private UnityEvent onStartMoving;
        [SerializeField] private UnityEvent onCompleted;
        [SerializeField] private UnityEvent onMoveBackCompleted;

        private Tween moveTween;
        private bool isMoving;
        private Vector3 originalPosition;
        private Quaternion originalRotation;
        private Vector3 originalScale;

        public bool IsMoving => isMoving;

        protected override void Awake()
        {
            base.Awake();
            originalPosition = tf.position;
            originalRotation = tf.rotation;
            originalScale = tf.localScale;
        }

        public override bool IsBlocked() => isMoving || base.IsBlocked();

        public override void OnClick(Vector3 mouseWorldPosition)
        {
            if (isMoving || targetPoint == null) return;
            StartMove();
        }

        public void StartMove()
        {
            if (isMoving || targetPoint == null) return;

            isMoving = true;
            onStartMoving?.Invoke();
            moveTween?.Kill();

            if (moveSfx != null) AudioManager.PlaySFX(moveSfx);

            Vector3 targetPos = targetPoint.position;

            Sequence seq = DOTween.Sequence();
            seq.Append(tf.DOMove(targetPos, 0.5f).SetEase(Ease.OutQuad));

            tf.DORotateQuaternion(targetPoint.rotation, 0.5f).SetEase(Ease.OutQuad);
            tf.DOScale(targetPoint.localScale, 0.5f).SetEase(Ease.OutQuad);

            moveTween = seq.OnComplete(OnMoveComplete);
        }

        public void MoveBack()
        {
            if (isMoving) return;

            isMoving = true;
            moveTween?.Kill();
            tf.DOKill();

            Sequence seq = DOTween.Sequence();
            seq.AppendInterval(moveBackDelay);
            seq.AppendCallback(() => { if (moveSfx != null) AudioManager.PlaySFX(moveSfx); });
            seq.Append(tf.DOMove(originalPosition, 0.5f).SetEase(Ease.OutQuad));
            seq.Join(tf.DORotateQuaternion(originalRotation, 0.5f).SetEase(Ease.OutQuad));
            seq.Join(tf.DOScale(originalScale, 0.5f).SetEase(Ease.OutQuad));

            moveTween = seq.OnComplete(OnMoveBackComplete);
        }

        private void OnMoveBackComplete()
        {
            isMoving = false;
            if (useSquashStretch) PlaySquashStretch();
            onMoveBackCompleted?.Invoke();
        }

        private void OnMoveComplete()
        {
            isMoving = false;
            if (useSquashStretch) PlaySquashStretch();
            onCompleted?.Invoke();
        }

        private void PlaySquashStretch()
        {
            tf.DOKill();
            
            Vector3 baseScale = tf.localScale;
            Vector3 squash1 = new(baseScale.x * (1f + 0.15f * squashIntensity), baseScale.y * (1f - 0.15f * squashIntensity), baseScale.z);
            Vector3 stretch1 = new(baseScale.x * (1f - 0.08f * squashIntensity), baseScale.y * (1f + 0.08f * squashIntensity), baseScale.z);
            Vector3 squash2 = new(baseScale.x * (1f + 0.05f * squashIntensity), baseScale.y * (1f - 0.05f * squashIntensity), baseScale.z);

            float t1 = squashDuration * 0.22f;
            float t2 = squashDuration * 0.28f;
            float t3 = squashDuration * 0.22f;
            float t4 = squashDuration * 0.28f;

            DOTween.Sequence()
                .AppendInterval(squashDelay)
                .Append(tf.DOScale(squash1, t1).SetEase(Ease.OutQuad))
                .Append(tf.DOScale(stretch1, t2).SetEase(Ease.OutQuad))
                .Append(tf.DOScale(squash2, t3).SetEase(Ease.OutQuad))
                .Append(tf.DOScale(baseScale, t4).SetEase(Ease.OutQuad));
        }

        private void OnDestroy() => moveTween?.Kill();
    }
}
