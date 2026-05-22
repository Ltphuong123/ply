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

		[SerializeField]
		private TutorialHand tutorialHand;

		[SerializeField]
		private TutorialStep[] steps;

		[SerializeField]
		private float idleTimeout = 3f;

		[Header("DragInToDisappear Step")]
		[SerializeField]
		private DragInToDisappearStep dragSinkStep;

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
			dummyTo.SetParent(base.transform);
		}

		private void Start()
		{
			if (steps != null && steps.Length != 0)
			{
				GoToStep(0);
			}
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
			if (!isActive)
			{
				return;
			}
			if (ClickController.Instance != null && ClickController.Instance.GetCurrentDragging() != null)
			{
				if (!wasDragging)
				{
					tutorialHand?.Stop();
				}
				lastActivityTime = Time.time;
				wasDragging = true;
			}
			else
			{
				wasDragging = false;
				if (Time.time - lastActivityTime >= idleTimeout)
				{
					ShowCurrentStep();
				}
			}
		}

		
		public void NextStep()
		{
			if (currentStep + 1 >= steps.Length)
			{
				StopTutorial();
			}
			else
			{
				GoToStep(currentStep + 1);
			}
		}

		
		public void StartDragSinkStep()
		{
			isInDragSinkStep = true;
			isActive = true;
			lastActivityTime = Time.time;
			ShowCurrentStep();
		}

		
		public void EndDragSinkStep()
		{
			isInDragSinkStep = false;
			tutorialHand?.Stop();
			NextStep();
		}

		
		public void EnableEveryInteractionEvent()
		{
			enableEveryInteraction = true;
			ReleaseCurrentDrag();
			GameState.Instance?.BlockInteract();
		}

		
		public void OnPlayerDragged()
		{
			lastActivityTime = Time.time;
			tutorialHand?.Stop();
		}

		
		public void StopTutorial()
		{
			isActive = false;
			tutorialHand?.Stop();
		}

		private void ReleaseCurrentDrag()
		{
			if (ClickController.Instance == null)
			{
				return;
			}
			DragBase dragging = ClickController.Instance.GetCurrentDragging();
			if (!(dragging == null))
			{
				if (dragging is ToolBase tool)
				{
					tool.ForceReturn();
				}
				else
				{
					dragging.HandleMouseUp(ClickController.Instance.GetMouseWorldPosition());
				}
				ClickController.Instance.SetCurrentDragging(null);
			}
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
			if (tutorialHand == null)
			{
				return;
			}
			lastActivityTime = Time.time;
			if (isInDragSinkStep)
			{
				ShowDragSinkStep();
			}
			else if (currentStep >= 0 && currentStep < steps.Length)
			{
				TutorialStep step = steps[currentStep];
				if (!(step.from == null) && !(step.to == null))
				{
					tutorialHand.PlayDrag(step.from, step.to);
				}
			}
		}

		private void ShowDragSinkStep()
		{
			if (dragSinkStep == null || dragSinkStep.targets == null)
			{
				return;
			}
			DragInToDisappear[] targets = dragSinkStep.targets;
			foreach (DragInToDisappear target in targets)
			{
				if (target != null && !target.IsGone)
				{
					dummyTo.position = target.transform.position + Vector3.down * 2f;
					tutorialHand.PlayDrag(target.transform, dummyTo);
					break;
				}
			}
		}
	}
}
