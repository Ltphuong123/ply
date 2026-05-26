using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Scripting;

namespace LTPHUONG
{
    public class GameplayTutorialManager : MonoBehaviour
    {
        private enum Phase
        {
            Garbage,        // 1. Keo GarbageItem vao TrashBin
            Reveal1,        // 2. Keo RevealPen vao RevealImage
            Trays,          // 3. Keo Tray xuong
            Reveal2,        // 4. Keo RevealPen vao RevealImage
            Reveal3,        // 5. Keo RevealPen vao RevealImage
            CallToAction,   // 6. Keo transform + EnableEveryInteraction
            Done
        }

        [Header("Events")]
        public UnityEvent OnFirstInteraction;
        public UnityEvent OnEveryInteraction;

        [Header("Tutorial Hand")]
        [SerializeField] private TutorialHand tutorialHand;
        [SerializeField] private float idleTimeout = 3f;

        [Header("Step 1 - Garbage")]
        [SerializeField] private GarbageItem[] garbageItems;
        [SerializeField] private Transform trashBinTarget;

        [Header("Step 2 - Reveal 1")]
        [SerializeField] private RevealPen revealPen;
        [SerializeField] private RevealImage revealImage1;

        [Header("Step 3 - Trays")]
        [SerializeField] private Tray[] trays;

        [Header("Step 4 - Reveal 2")]
        [SerializeField] private RevealPen revealPen2;
        [SerializeField] private RevealImage revealImage2;

        [Header("Step 5 - Reveal 3")]
        [SerializeField] private RevealPen revealPen3;
        [SerializeField] private RevealImage revealImage3;

        [Header("Step 6 - CTA")]
        [SerializeField] private Transform ctaFrom;
        [SerializeField] private Transform ctaTo;

        private Phase currentPhase;
        private float lastActivityTime;
        private bool wasDragging;
        private bool enableEveryInteraction;
        private bool hasFirstInteraction;
        private Transform dummyDown;

        private const float STEP_DELAY = 1f;
        private const float CTA_DELAY  = 2f;

        private void Awake()
        {
            dummyDown = new GameObject("_TutDummy").transform;
            dummyDown.SetParent(transform);
        }

        private void Start()
        {
            currentPhase = Phase.Garbage;
            lastActivityTime = Time.time;

            SkipCompleted();

            if (currentPhase == Phase.Done) { enabled = false; return; }
            if (currentPhase == Phase.CallToAction)
            {
                Invoke(nameof(ShowCallToAction), CTA_DELAY);
                return;
            }
            Invoke(nameof(ShowCurrentPhase), STEP_DELAY);
        }

        // Nhay qua cac buoc da hoan thanh tu dau
        private void SkipCompleted()
        {
            if (currentPhase == Phase.Garbage  && AllGarbageGone())             { currentPhase = Phase.Reveal1;      SkipCompleted(); return; }
            if (currentPhase == Phase.Reveal1  && IsRevealDone(revealImage1))   { currentPhase = Phase.Trays;        SkipCompleted(); return; }
            if (currentPhase == Phase.Trays    && AllTraysGone())               { currentPhase = Phase.Reveal2;      SkipCompleted(); return; }
            if (currentPhase == Phase.Reveal2  && IsRevealDone(revealImage2))   { currentPhase = Phase.Reveal3;      SkipCompleted(); return; }
            if (currentPhase == Phase.Reveal3  && IsRevealDone(revealImage3))   { currentPhase = Phase.CallToAction; return; }
        }

        private void Update()
        {
            if (Input.GetMouseButtonDown(0))
            {
                if (!hasFirstInteraction)
                {
                    hasFirstInteraction = true;
                    OnFirstInteraction?.Invoke();
                }
                else if (enableEveryInteraction)
                {
                    ReleaseCurrentDrag();
                    OnEveryInteraction?.Invoke();
                    return;
                }
            }

            bool isDragging = ClickController.Instance != null &&
                              ClickController.Instance.GetCurrentDragging() != null;

            if (!wasDragging && isDragging)
            {
                tutorialHand?.Stop();
                CancelInvoke(nameof(ShowCurrentPhase));
                CancelInvoke(nameof(ShowCallToAction));
            }

            if (isDragging || Input.GetMouseButtonDown(0))
                lastActivityTime = Time.time;

            // Khi dang o buoc Trays: click bat ky dau -> an tay huong dan ngay
            if (currentPhase == Phase.Trays && Input.GetMouseButtonDown(0))
            {
                tutorialHand?.Stop();
                CancelInvoke(nameof(ShowCurrentPhase));
            }

            wasDragging = isDragging;

            CheckPhaseCompletion();

            if (currentPhase != Phase.Done && currentPhase != Phase.CallToAction &&
                Time.time - lastActivityTime >= idleTimeout)
                ShowCurrentPhase();
        }

        private void CheckPhaseCompletion()
        {
            switch (currentPhase)
            {
                case Phase.Garbage:
                    if (AllGarbageGone())           GoToPhase(Phase.Reveal1,      STEP_DELAY);
                    break;
                case Phase.Reveal1:
                    if (IsRevealDone(revealImage1)) GoToPhase(Phase.Trays,        STEP_DELAY);
                    break;
                case Phase.Trays:
                    if (AllTraysGone())             GoToPhase(Phase.Reveal2,      STEP_DELAY);
                    break;
                case Phase.Reveal2:
                    if (IsRevealDone(revealImage2)) GoToPhase(Phase.Reveal3,      STEP_DELAY);
                    break;
                case Phase.Reveal3:
                    if (IsRevealDone(revealImage3)) GoToPhase(Phase.CallToAction, CTA_DELAY);
                    break;
            }
        }

        private void GoToPhase(Phase phase, float delay)
        {
            currentPhase = phase;
            tutorialHand?.Stop();
            CancelInvoke(nameof(ShowCurrentPhase));
            CancelInvoke(nameof(ShowCallToAction));

            if (phase == Phase.Done)        { enabled = false; return; }
            if (phase == Phase.CallToAction){ Invoke(nameof(ShowCallToAction), delay); return; }

            Invoke(nameof(ShowCurrentPhase), delay);
        }

        private void ShowCurrentPhase()
        {
            if (tutorialHand == null || currentPhase == Phase.Done || currentPhase == Phase.CallToAction) return;
            lastActivityTime = Time.time;

            switch (currentPhase)
            {
                case Phase.Garbage:
                    var garbage = FirstActiveGarbage();
                    if (garbage != null && trashBinTarget != null)
                        tutorialHand.PlayDrag(garbage.TF, trashBinTarget);
                    break;

                case Phase.Reveal1:
                    if (revealPen != null && revealImage1 != null)
                        tutorialHand.PlayDrag(revealPen.TF, revealImage1.transform);
                    break;

                case Phase.Trays:
                    var tray = FirstActiveTray();
                    if (tray != null)
                    {
                        dummyDown.position = tray.TF.position + Vector3.down;
                        tutorialHand.PlayDrag(tray.TF, dummyDown);
                    }
                    break;

                case Phase.Reveal2:
                    if (revealPen2 != null && revealImage2 != null)
                        tutorialHand.PlayDrag(revealPen2.TF, revealImage2.transform);
                    break;

                case Phase.Reveal3:
                    if (revealPen3 != null && revealImage3 != null)
                        tutorialHand.PlayDrag(revealPen3.TF, revealImage3.transform);
                    break;
            }
        }

        private void ShowCallToAction()
        {
            if (ctaFrom != null && ctaTo != null)
                tutorialHand?.PlayDrag(ctaFrom, ctaTo);
            EnableEveryInteractionEvent();
        }

        [Preserve]
        public void EnableEveryInteractionEvent()
        {
            enableEveryInteraction = true;
            ReleaseCurrentDrag();
            GameState.Instance?.BlockInteract();
        }

        private void ReleaseCurrentDrag()
        {
            if (ClickController.Instance == null) return;
            DragBase dragging = ClickController.Instance.GetCurrentDragging();
            if (dragging == null) return;

            if (dragging is ToolBase tool)
                tool.ForceReturn();
            else
                dragging.HandleMouseUp(ClickController.Instance.GetMouseWorldPosition());

            ClickController.Instance.SetCurrentDragging(null);
        }

        // --- Kiem tra hoan thanh ---

        private bool AllGarbageGone()
        {
            if (garbageItems == null || garbageItems.Length == 0) return false;
            foreach (var g in garbageItems)
                if (g != null && g.gameObject.activeInHierarchy) return false;
            return true;
        }

        private bool AllTraysGone()
        {
            if (trays == null || trays.Length == 0) return false;
            foreach (var t in trays)
                if (t != null && !t.IsGone) return false;
            return true;
        }

        private static bool IsRevealDone(RevealImage img) => img != null && img.IsComplete;

        // --- Tim phan tu can huong dan ---

        private GarbageItem FirstActiveGarbage()
        {
            if (garbageItems == null) return null;
            foreach (var g in garbageItems)
                if (g != null && g.gameObject.activeInHierarchy) return g;
            return null;
        }

        private Tray FirstActiveTray()
        {
            if (trays == null) return null;
            foreach (var t in trays)
                if (t != null && !t.IsGone) return t;
            return null;
        }
    }
}
