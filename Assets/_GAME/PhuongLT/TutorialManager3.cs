using System;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Scripting;

namespace LTPHUONG
{
    public class TutorialManager3 : MonoBehaviour
    {
        [Serializable]
        public class TutorialStep
        {
            public Transform from;
            public Transform to;
        }

        [Serializable]
        public class DragInToDisappearStep
        {
            public DragInToDisappear[] targets;
        }

        [SerializeField] private TutorialHand tutorialHand;
        [SerializeField] private TutorialStep[] steps;
        [SerializeField] private float idleTimeout = 3f;

        [Header("DragInToDisappear Step")]
        [SerializeField] private DragInToDisappearStep dragSinkStep;

        [Header("Events")]
        public UnityEvent OnFirstInteraction;
        public UnityEvent OnEveryInteraction;

        private int currentStep = -1;
        private float lastActivityTime;
        private bool isActive;
        private bool hasFirstInteraction;
        private bool enableEveryInteraction;
        private bool wasDragging;
        private bool isInDragSinkStep;
        private Transform dummyTo;

        private void Awake()
        {
            dummyTo = new GameObject("_TutorialDummy").transform;
            dummyTo.SetParent(transform);
        }

        private void Start()
        {
            if (steps == null || steps.Length == 0) return;
            GoToStep(0);
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

            if (!isActive) return;

            bool isDragging = ClickController.Instance != null && ClickController.Instance.GetCurrentDragging() != null;

            if (isDragging)
            {
                if (!wasDragging)
                    tutorialHand?.Stop();
                lastActivityTime = Time.time;
                wasDragging = true;
                return;
            }

            wasDragging = false;

            if (Time.time - lastActivityTime >= idleTimeout)
                ShowCurrentStep();
        }

        [Preserve]
        public void NextStep()
        {
            if (currentStep + 1 >= steps.Length)
            {
                StopTutorial();
                return;
            }
            GoToStep(currentStep + 1);
        }

        [Preserve]
        public void StartDragSinkStep()
        {
            isInDragSinkStep = true;
            isActive = true;
            lastActivityTime = Time.time;
            ShowCurrentStep();
        }

        [Preserve]
        public void EndDragSinkStep()
        {
            isInDragSinkStep = false;
            tutorialHand?.Stop();
            NextStep();
        }

        [Preserve]
        public void EnableEveryInteractionEvent()
        {
            enableEveryInteraction = true;
            ReleaseCurrentDrag();
            GameState.Instance?.BlockInteract();
        }

        [Preserve]
        public void OnPlayerDragged()
        {
            lastActivityTime = Time.time;
            tutorialHand?.Stop();
        }

        [Preserve]
        public void StopTutorial()
        {
            isActive = false;
            tutorialHand?.Stop();
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

        private void GoToStep(int index)
        {
            isInDragSinkStep = false;
            currentStep = index;
            isActive = true;
            lastActivityTime = Time.time;
            ShowCurrentStep();
        }

        private void ShowCurrentStep()
        {
            if (tutorialHand == null) return;

            lastActivityTime = Time.time;

            if (isInDragSinkStep)
            {
                ShowDragSinkStep();
                return;
            }

            if (currentStep < 0 || currentStep >= steps.Length) return;
            TutorialStep step = steps[currentStep];
            if (step.from == null || step.to == null) return;

            tutorialHand.PlayDrag(step.from, step.to);
        }

        private void ShowDragSinkStep()
        {
            if (dragSinkStep == null || dragSinkStep.targets == null) return;

            foreach (var target in dragSinkStep.targets)
            {
                if (target != null && !target.IsGone)
                {
                    dummyTo.position = target.transform.position + Vector3.down * 2f;
                    tutorialHand.PlayDrag(target.transform, dummyTo);
                    return;
                }
            }
        }
    }
}
