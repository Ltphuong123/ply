using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class GarbageItem : ItemBase
    {
        [SerializeField] private bool enablePeel = true;
        [SerializeField] private AudioClip pickSfx;
        [SerializeField] private AudioClip peelSnapSfx;
        [SerializeField] private AudioClip flyUpSfx;
        [SerializeField] private AudioClip dropInBinSfx;
        [SerializeField] private int minLayer;
        [SerializeField] private float dragOffsetY = 1f;

        private const float DRAG_FOLLOW_SPEED = 20f;
        private const float REACH_THRESHOLD_SQR = 0.01f;
        private const float PEEL_DISTANCE = 3f;
        private const float MAX_STRETCH = 1.2f;
        private const float SHAKE_INTENSITY = 0.15f;
        private const float FLY_DURATION = 0.45f;
        private const float FLY_TOP_RATIO = 0.55f;
        private const float TOP_DETECT_DIST = 0.3f;

        private static readonly Vector3 SizeIncrease = new(1.05f, 1.05f, 1f);

        private Vector3 originalPosition;
        private Vector3 originalScale;
        private Quaternion originalRotation;
        private float peelProgress;
        private float originalZ;
        private bool isPeeled;
        private bool isFlying;
        private bool isDraggingMoved;
        private bool hasReachedTarget;
        private Tween returnTween;
        private Tween snapTween;
        private Sequence flySequence;
        private Tween shakeTween;

        public UnityEvent OnPeeled;
        public UnityEvent OnTrashed;
        public bool IsTrashed { get; private set; }

        protected override void Awake()
        {
            base.Awake();
            originalPosition = tf.position;
            originalScale = tf.localScale;
            originalRotation = tf.rotation;
            originalZ = tf.position.z;
        }

        protected override void OnDragStart(Vector3 position)
        {
            if (isFlying || IsTrashed) return;
            KillTweens();
            isDraggingMoved = false;
            hasReachedTarget = false;
            peelProgress = 0f;
            tf.DOShakeScale(0.2f, 0.1f, 10, 90, false);
            if (pickSfx != null) AudioManager.PlaySFX(pickSfx);
        }

        protected override void OnDragBegin(Vector3 position)
        {
            if (isFlying || IsTrashed || isDraggingMoved) return;
            if (enablePeel && !isPeeled) return;
            BringToFront();
            isDraggingMoved = true;
            tf.DORotate(Vector3.zero, 0.2f).SetEase(Ease.OutQuad);
            tf.localScale = SizeIncrease;
        }

        protected override void UpdatePosition(Vector3 targetPosition)
        {
            if (isFlying || IsTrashed) return;

            if (isPeeled || !enablePeel)
            {
                if (!isDraggingMoved) { base.UpdatePosition(targetPosition); return; }

                Vector3 target = new(targetPosition.x, targetPosition.y + dragOffsetY, originalZ);
                if (!hasReachedTarget)
                {
                    tf.position = Vector3.Lerp(tf.position, target, Time.deltaTime * DRAG_FOLLOW_SPEED);
                    if ((tf.position - target).sqrMagnitude < REACH_THRESHOLD_SQR)
                        hasReachedTarget = true;
                }
                else tf.position = target;
                return;
            }

            float dist = Vector3.Distance(targetPosition, originalPosition);
            peelProgress = Mathf.Clamp01(dist / PEEL_DISTANCE);
            ApplyStretchEffect(targetPosition);
            ApplyShake();
            if (peelProgress >= 1f) PeelOff(targetPosition);
        }

        protected override void OnDragEnd(Vector3 position)
        {
            if (isFlying || IsTrashed) return;
            StopShake();

            if (isPeeled || !enablePeel)
            {
                TrashBin bin = TrashBin.FindClosestBin(tf.position);
                if (bin != null && bin.IsInRange(tf.position))
                {
                    tf.localScale = Vector3.one;
                    FlyToBin(bin);
                    return;
                }
                if (isDraggingMoved)
                {
                    tf.localScale = Vector3.one;
                    tf.DORotate(new Vector3(0, 0, Random.Range(-10f, 10f)), 0.2f).SetEase(Ease.OutQuad);
                }
            }
            else SnapBack();
        }

        private void ApplyStretchEffect(Vector3 targetPosition)
        {
            Vector3 dir = targetPosition - originalPosition;
            dir.z = 0f;
            tf.localScale = new Vector3(
                originalScale.x * Mathf.Lerp(1f, 0.8f, peelProgress),
                originalScale.y * Mathf.Lerp(1f, MAX_STRETCH, peelProgress),
                originalScale.z);
            Vector3 pos = originalPosition + dir.normalized * (peelProgress * PEEL_DISTANCE * 0.3f);
            pos.z = originalZ;
            tf.position = pos;
        }

        private void ApplyShake()
        {
            if (peelProgress > 0.3f && shakeTween == null)
            {
                float i = SHAKE_INTENSITY * peelProgress;
                shakeTween = tf.DOShakePosition(0.1f, new Vector3(i, i, 0f), 30, 90, false, true)
                    .SetLoops(-1, LoopType.Restart);
            }
        }

        private void StopShake() { shakeTween?.Kill(); shakeTween = null; }

        private void PeelOff(Vector3 fingerPosition)
        {
            isPeeled = true;
            StopShake();
            BringToFront();
            tf.localScale = originalScale;
            tf.rotation = originalRotation;
            Vector3 snapPos = new(fingerPosition.x, fingerPosition.y, originalZ);
            snapTween = DOTween.Sequence()
                .Append(tf.DOMove(snapPos, 0.1f).SetEase(Ease.OutBack))
                .Join(tf.DOScale(originalScale * 1.15f, 0.08f).SetEase(Ease.OutQuad))
                .Append(tf.DOScale(originalScale, 0.08f).SetEase(Ease.InQuad))
                .OnUpdate(FixZ);
            if (peelSnapSfx != null) AudioManager.PlaySFX(peelSnapSfx);
            OnPeeled?.Invoke();
        }

        private void SnapBack()
        {
            returnTween?.Kill();
            SetClickOrderAndSortingOrder(minLayer);
            Vector3 target = new(originalPosition.x, originalPosition.y, originalZ);
            returnTween = DOTween.Sequence()
                .Append(tf.DOMove(target, 0.35f).SetEase(Ease.OutElastic))
                .Join(tf.DOScale(originalScale, 0.2f).SetEase(Ease.OutQuad))
                .Join(tf.DORotateQuaternion(originalRotation, 0.2f).SetEase(Ease.OutQuad))
                .OnUpdate(FixZ);
        }

        private void StartFloating()
        {
            tf.DORotate(new Vector3(0, 0, Random.Range(-10f, 10f)), 0.2f).SetEase(Ease.OutQuad);
        }

        public override void StartIdleEffect()
        {
            if (IsTrashed || isFlying) return;
            tf.DORotate(new Vector3(0, 0, Random.Range(-10f, 10f)), 0.2f).SetEase(Ease.OutQuad);
        }

        private void FlyToBin(TrashBin bin)
        {
            isFlying = true;
            flySequence?.Kill();

            Vector3 startPos = new(tf.position.x, tf.position.y, originalZ);
            Vector3 topPos = bin.GetTopPoint(); topPos.z = originalZ;
            Vector3 dropPos = bin.GetDropPoint(); dropPos.z = originalZ;

            bool passedTop = false;
            float topDur = FLY_DURATION * FLY_TOP_RATIO;
            float dropDur = FLY_DURATION - topDur;

            flySequence = DOTween.Sequence()
                .Append(tf.DOPath(new[] { startPos, topPos, dropPos }, FLY_DURATION, PathType.CatmullRom)
                    .SetEase(Ease.InOutQuad)
                    .OnUpdate(() =>
                    {
                        FixZ();
                        if (!passedTop && (Vector2)tf.position == (Vector2)topPos || 
                            !passedTop && Vector2.SqrMagnitude((Vector2)tf.position - (Vector2)topPos) < TOP_DETECT_DIST * TOP_DETECT_DIST)
                        {
                            passedTop = true;
                            if (flyUpSfx != null) AudioManager.PlaySFX(flyUpSfx);
                            SetClickOrderAndSortingOrder(minLayer);
                        }
                    }))
                .Join(tf.DOScale(originalScale * 0.7f, topDur).SetEase(Ease.OutQuad))
                .Join(tf.DORotate(Vector3.zero, topDur).SetEase(Ease.OutQuad))
                .Insert(topDur, tf.DOScale(originalScale * 0.3f, dropDur).SetEase(Ease.InQuad))
                .AppendCallback(() =>
                {
                    if (dropInBinSfx != null) AudioManager.PlaySFX(dropInBinSfx);
                    bin.Shake();
                })
                .Append(tf.DOScale(Vector3.zero, 0.1f).SetEase(Ease.InQuad))
                .OnComplete(() =>
                {
                    IsTrashed = true;
                    isFlying = false;
                    SetCorrect(true);
                    bin.OnItemDropped();
                    OnTrashed?.Invoke();
                    gameObject.SetActive(false);
                });
        }

        public override bool IsBlocked() => isFlying || IsTrashed || base.IsBlocked();

        private void FixZ()
        {
            Vector3 pos = tf.position;
            pos.z = originalZ;
            tf.position = pos;
        }

        private void KillTweens()
        {
            returnTween?.Kill();
            snapTween?.Kill();
            flySequence?.Kill();
            StopShake();
        }

        private void OnDestroy() => KillTweens();
    }
}
