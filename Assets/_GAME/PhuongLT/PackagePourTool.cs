using System;
using System.Collections;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Scripting;

namespace LTPHUONG
{
    /// <summary>
    /// Một bộ zone–điểm đổ–hiệu ứng độc lập.
    /// Nhiều PourTarget có thể dùng chung 1 PackagePourTool.
    /// </summary>
    [Serializable]
    public class PourTarget
    {
        [Tooltip("Collider2D trigger xác định vùng kích hoạt")]
        public Collider2D pourZone;

        [Tooltip("Vị trí + góc xoay khi đổ vào target này")]
        public Transform pourPoint;

        [Tooltip("Danh sách SpriteRenderer hiện dần khi đổ")]
        public SpriteRenderer[] fillSprites;

        [Tooltip("Event gọi khi target này hoàn thành đổ")]
        public UnityEvent onCompleted;

        // runtime
        [NonSerialized] public bool isDone;
    }

    /// <summary>
    /// Công cụ điều khiển gói đổ đồ — hỗ trợ nhiều PourTarget.
    ///
    /// - Kéo vào bất kỳ pourZone nào (chưa done) → snap đến pourPoint tương ứng.
    /// - Hiện dần fillSprites → đổ xong → fire OnPourCompleted, khoá target đó.
    /// - Kéo ra zone / nhả giữa chừng → huỷ, fire OnPourEnd.
    /// </summary>
    public class PackagePourTool : ToolBase
    {
        [Header("Pour Targets")]
        [SerializeField] private PourTarget[] pourTargets;

        [Header("Pour Effect")]
        [Tooltip("GameObject hiệu ứng đổ dùng chung cho tất cả target")]
        [SerializeField] private GameObject pourEffectObject;

        [Header("Pour Motion")]
        [SerializeField] private float pourMoveDuration   = 0.45f;
        [SerializeField] private float pourRotateDuration = 0.35f;
        [SerializeField] private Ease  pourMoveEase       = Ease.OutQuad;
        [SerializeField] private Ease  pourRotateEase     = Ease.OutQuad;

        [Header("Fill")]
        [Tooltip("Khoảng thời gian giữa mỗi sprite xuất hiện (giây)")]
        [SerializeField] private float fillInterval    = 0.5f;
        [Tooltip("Thời gian fade-in của mỗi sprite")]
        [SerializeField] private float fillFadeDuration = 0.2f;

        [Header("Exit Pour")]
        [SerializeField] private float catchUpSpeed         = 15f;
        [SerializeField] private float returnRotateDuration = 0.3f;

        [Header("Audio")]
        [SerializeField] private AudioClip pourStartSfx;
        [SerializeField] private AudioClip pourEndSfx;
        [SerializeField] private AudioClip fillStepSfx;

        [Header("Events")]
        public UnityEvent OnPourStart;
        public UnityEvent OnPourEnd;       // huỷ giữa chừng
        public UnityEvent OnPourCompleted; // đổ xong 1 target

        // ── runtime state ────────────────────────────────────────────────────
        private bool isPouring;
        private bool isExiting;
        private bool isCatchingUp;
        private bool isFilling;
        private PourTarget activeTarget;   // target đang đổ
        private Sequence pourSequence;
        private Coroutine fillCoroutine;

        public bool IsPouring => isPouring;

        // ── Awake ─────────────────────────────────────────────────────────────

        protected override void Awake()
        {
            base.Awake();
            if (pourTargets == null) return;
            foreach (var t in pourTargets)
                HideFillSprites(t);
        }

        private static void HideFillSprites(PourTarget t)
        {
            if (t?.fillSprites == null) return;
            foreach (var sr in t.fillSprites)
                if (sr != null) { var c = sr.color; c.a = 0f; sr.color = c; }
        }

        // ── Drag overrides ────────────────────────────────────────────────────

        protected override void OnDragEnd(Vector3 position)
        {
            if (isPouring || isExiting) { ExitPour(returnToPoint: true); return; }
            isCatchingUp = false;
            base.OnDragEnd(position);
        }

        protected override void OnDragging(Vector3 position)
        {
            if (isPouring)
            {
                if (!IsInActiveZone(position))
                    ExitPour(returnToPoint: false);
                return;
            }
            if (isCatchingUp) return;

            PourTarget hit = FindZoneAt(position);
            if (hit != null) StartPour(hit);
        }

        protected override void UpdatePosition(Vector3 targetPosition)
        {
            if (isPouring) return;
            if (isExiting) return;

            if (isCatchingUp)
            {
                Vector3 target = targetPosition;
                target.z = tf.position.z;
                tf.position = Vector3.Lerp(tf.position, target, Time.deltaTime * catchUpSpeed);
                if (Vector3.Distance(tf.position, target) < 0.15f)
                    isCatchingUp = false;
                return;
            }

            base.UpdatePosition(targetPosition);
        }

        // ── Zone helpers ──────────────────────────────────────────────────────

        /// Tìm PourTarget đầu tiên chưa done mà worldPos nằm trong zone của nó.
        private PourTarget FindZoneAt(Vector3 worldPos)
        {
            if (pourTargets == null) return null;
            foreach (var t in pourTargets)
                if (!t.isDone && t.pourZone != null && t.pourZone.OverlapPoint(worldPos))
                    return t;
            return null;
        }

        private bool IsInActiveZone(Vector3 worldPos)
        {
            if (activeTarget == null || activeTarget.pourZone == null) return false;
            return activeTarget.pourZone.OverlapPoint(worldPos);
        }

        // ── Pour logic ────────────────────────────────────────────────────────

        private void StartPour(PourTarget target)
        {
            if (isPouring || target.pourPoint == null) return;

            activeTarget = target;
            isPouring    = true;
            isCatchingUp = false;

            moveTween?.Kill();
            rotationTween?.Kill();
            pourSequence?.Kill();

            if (pourStartSfx != null) AudioManager.PlaySFX(pourStartSfx);

            Vector3 targetPos = target.pourPoint.position;
            targetPos.z = tf.position.z;

            pourSequence = DOTween.Sequence()
                .Append(tf.DOMove(targetPos, pourMoveDuration).SetEase(pourMoveEase))
                .Join(tf.DORotate(target.pourPoint.eulerAngles, pourRotateDuration).SetEase(pourRotateEase))
                .OnComplete(OnSnapComplete);
        }

        private void OnSnapComplete()
        {
            if (activeTarget == null) return;
            pourEffectObject?.SetActive(true);
            OnPourStart?.Invoke();

            if (activeTarget.fillSprites != null && activeTarget.fillSprites.Length > 0)
            {
                isFilling      = true;
                fillCoroutine  = StartCoroutine(FillRoutine(activeTarget));
            }
            else
            {
                CompletePour();
            }
        }

        private IEnumerator FillRoutine(PourTarget target)
        {
            foreach (var sr in target.fillSprites)
            {
                if (!isPouring) yield break;
                if (sr != null)
                {
                    if (fillStepSfx != null) AudioManager.PlaySFX(fillStepSfx);
                    sr.DOFade(1f, fillFadeDuration).SetEase(Ease.OutQuad);
                }
                yield return new WaitForSeconds(fillInterval);
            }
            isFilling = false;
            CompletePour();
        }

        private void CompletePour()
        {
            if (activeTarget != null)
            {
                activeTarget.isDone = true;
                activeTarget.onCompleted?.Invoke();
            }
            pourEffectObject?.SetActive(false);

            OnPourCompleted?.Invoke();

            isPouring = false;
            isExiting = true;
            rotationTween?.Kill();

            bool mouseStillDown = Input.GetMouseButton(0);

            rotationTween = tf.DORotate(originalRotation, returnRotateDuration)
                .SetEase(Ease.OutQuad)
                .OnComplete(() =>
                {
                    isExiting    = false;
                    activeTarget = null;
                    if (mouseStillDown) isCatchingUp = true;
                    else { isMoving = false; MoveToPoint(); }
                });
        }

        private void ExitPour(bool returnToPoint)
        {
            if (fillCoroutine != null) { StopCoroutine(fillCoroutine); fillCoroutine = null; }
            isFilling = false;

            pourEffectObject?.SetActive(false);

            isPouring = false;
            isExiting = true;
            pourSequence?.Kill();

            if (pourEndSfx != null) AudioManager.PlaySFX(pourEndSfx);
            OnPourEnd?.Invoke();

            rotationTween?.Kill();
            rotationTween = tf.DORotate(originalRotation, returnRotateDuration)
                .SetEase(Ease.OutQuad)
                .OnComplete(() =>
                {
                    isExiting    = false;
                    activeTarget = null;
                    if (returnToPoint) { isMoving = false; MoveToPoint(); }
                    else isCatchingUp = true;
                });
        }

        // ── HandleMouseUp ─────────────────────────────────────────────────────

        public override void HandleMouseUp(Vector3 mouseWorldPosition)
        {
            if (isPouring || isExiting) { ExitPour(returnToPoint: true); return; }
            isCatchingUp = false;
            base.HandleMouseUp(mouseWorldPosition);
        }

        // ── Public API ────────────────────────────────────────────────────────

        [Preserve] public void ForceEndPour() { if (isPouring) ExitPour(returnToPoint: true); }

        /// <summary>Reset tất cả target (fill sprite + isDone) để dùng lại màn.</summary>
        [Preserve]
        public void ResetAll()
        {
            if (pourTargets == null) return;
            foreach (var t in pourTargets)
            {
                t.isDone = false;
                HideFillSprites(t);
            }
        }

        /// <summary>Reset 1 target theo index.</summary>
        [Preserve]
        public void ResetTarget(int index)
        {
            if (pourTargets == null || index < 0 || index >= pourTargets.Length) return;
            pourTargets[index].isDone = false;
            HideFillSprites(pourTargets[index]);
        }

        // ── Cleanup ───────────────────────────────────────────────────────────

        private void OnDestroy()
        {
            pourSequence?.Kill();
            if (fillCoroutine != null) StopCoroutine(fillCoroutine);
        }

#if UNITY_EDITOR
        private void OnDrawGizmosSelected()
        {
            if (pourTargets == null) return;
            foreach (var t in pourTargets)
            {
                if (t == null) continue;
                if (t.pourPoint != null)
                {
                    Gizmos.color = t.isDone
                        ? new Color(0.5f, 0.5f, 0.5f, 0.4f)
                        : new Color(1f, 0.6f, 0f, 0.6f);
                    Gizmos.DrawWireSphere(t.pourPoint.position, 0.15f);
                    Gizmos.DrawLine(transform.position, t.pourPoint.position);
                }
                if (t.pourZone != null)
                {
                    Gizmos.color = t.isDone
                        ? new Color(0.4f, 0.4f, 0.4f, 0.15f)
                        : new Color(0f, 1f, 0.8f, 0.2f);
                    Bounds b = t.pourZone.bounds;
                    Gizmos.DrawWireCube(b.center, b.size);
                }
            }
        }
#endif
    }
}
