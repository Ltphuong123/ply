using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Scripting;

namespace LTPHUONG
{
    public class ToolBase : DragBase
    {
        [SerializeField] private Transform inPoint;
        [SerializeField] private Transform outPoint;
        [SerializeField] private bool autoReturnToPoint = true;
        [SerializeField] private float dragOffsetY = 1f;
        [SerializeField] private float dragRotationAngle = 0f;

        [SerializeField] protected UnityEvent onDragStarted;
        [SerializeField] protected UnityEvent onDragReleased;

        private float moveDuration = 1f;
        protected float moveToPointDuration = 0.4f;
        private Ease moveInEase = Ease.OutBack;
        private Ease moveOutEase = Ease.InOutQuad;
        private float bounceHeight = 0.5f;
        private bool useBounceAnimation = false;

        private float dragFollowSpeed = 20f;
        private float reachThreshold = 0.1f;

        protected Vector3 inPointPosition;
        private Vector3 outPointPosition;
        protected Vector3 originalRotation;
        protected bool isMoving;
        private bool isDraggingMoved;
        private bool hasReachedTarget;
        protected Tween moveTween;
        protected Tween rotationTween;

        public bool IsMoving => isMoving;

        protected override void Awake()
        {
            base.Awake();
            inPointPosition = inPoint != null ? inPoint.position : tf.position;
            outPointPosition = outPoint != null ? outPoint.position : tf.position;
            originalRotation = tf.eulerAngles;
        }

        protected override void OnDragStart(Vector3 position)
        {
            if (isMoving) return;

            moveTween?.Kill();
            isDraggingMoved = false;
            hasReachedTarget = false;
            tf.DOShakeScale(0.2f, 0.1f, 10, 90, false);
        }

        protected override void OnDragBegin(Vector3 position)
        {
            if (isMoving || isDraggingMoved) return;
            BringToFront();
            isDraggingMoved = true;
            onDragStarted?.Invoke();

            rotationTween?.Kill();
            rotationTween = tf.DORotate(originalRotation + new Vector3(0, 0, dragRotationAngle), 0.2f).SetEase(Ease.OutQuad);
        }

        protected override void UpdatePosition(Vector3 targetPosition)
        {
            if (isMoving) return;

            if (!isDraggingMoved)
            {
                base.UpdatePosition(targetPosition);
                return;
            }

            Vector3 targetWithOffset = targetPosition + new Vector3(0, dragOffsetY, 0);

            if (!hasReachedTarget)
            {
                tf.position = Vector3.Lerp(tf.position, targetWithOffset, Time.deltaTime * dragFollowSpeed);
                if (Vector3.Distance(tf.position, targetWithOffset) < reachThreshold)
                    hasReachedTarget = true;
            }
            else
            {
                targetWithOffset.z = tf.position.z;
                tf.position = targetWithOffset;
            }
        }

        protected override void OnDragEnd(Vector3 position)
        {
            if (isMoving || !autoReturnToPoint) return;

            rotationTween?.Kill();
            rotationTween = tf.DORotate(originalRotation, 0.2f).SetEase(Ease.OutQuad);

            onDragReleased?.Invoke();
            MoveToPoint();
        }

        public override bool IsBlocked() => isMoving || base.IsBlocked();

        [Preserve]
        public void MoveIn()
        {
            if (isMoving) return;
            StartMovementWithBounce(inPointPosition, moveDuration, moveInEase);
        }

        [Preserve]
        public void MoveOut()
        {
            isDraggingMoved = false;
            hasReachedTarget = false;

            rotationTween?.Kill();
            rotationTween = tf.DORotate(Vector3.zero, moveDuration).SetEase(moveOutEase);

            StartMovementWithBounce(outPointPosition, moveDuration, moveOutEase);
        }

        public void MoveToNewPoint(Vector3 newPoint)
        {
            if (isMoving) return;
            inPointPosition = newPoint;
            StartMovementWithBounce(inPointPosition, moveDuration, moveInEase);
        }

        protected void MoveToPoint()
        {
            if (isMoving) return;
            StartMovementWithBounce(inPointPosition, moveToPointDuration, Ease.OutQuad);
        }

        protected virtual void StartMovementWithBounce(Vector3 targetPosition, float duration, Ease ease)
        {
            isMoving = true;
            moveTween?.Kill();

            if (useBounceAnimation)
            {
                Vector3 startPos = tf.position;
                Vector3 midPoint = (startPos + targetPosition) * 0.5f;
                midPoint.y += bounceHeight;

                Vector3[] path = new Vector3[] { startPos, midPoint, targetPosition };

                moveTween = tf.DOPath(path, duration, PathType.CatmullRom)
                    .SetEase(ease)
                    .OnComplete(() => isMoving = false);
            }
            else
            {
                moveTween = tf.DOMove(targetPosition, duration)
                    .SetEase(ease)
                    .OnComplete(() => isMoving = false);
            }
        }

        private void OnDestroy()
        {
            moveTween?.Kill();
            rotationTween?.Kill();
        }

        private void OnValidate()
        {
            if (inPoint != null)
                inPointPosition = inPoint.position;
            else if (transform != null)
                inPointPosition = transform.position;

            if (outPoint != null)
                outPointPosition = outPoint.position;
            else if (transform != null)
                outPointPosition = transform.position;
        }
    }
}
