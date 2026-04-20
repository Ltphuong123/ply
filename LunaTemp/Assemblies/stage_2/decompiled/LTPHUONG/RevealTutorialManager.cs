using System;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Scripting;

namespace LTPHUONG
{
	public class RevealTutorialManager : MonoBehaviour
	{
		[Serializable]
		public class DragStep
		{
			public RevealPen pen;

			public RevealImage image;

			[Tooltip("Point on the image to guide towards")]
			public Transform imageTarget;
		}

		[SerializeField]
		private TutorialHand hand;

		[SerializeField]
		private float idleTime = 3f;

		[Header("Step 1: Click")]
		[SerializeField]
		private Transform clickTarget;

		[Header("Drag Steps (in order)")]
		[SerializeField]
		private DragStep[] dragSteps;

		[Header("Events")]
		public UnityEvent OnAllStepsComplete;

		public UnityEvent OnFirstInteract;

		public UnityEvent OnInteract;

		private int currentStep = -1;

		private bool isFirstDragDone;

		private bool isComplete;

		private float lastInteractTime;

		private bool isShowingHint;

		private bool hasFirstInteracted;

		private bool trackEveryInteract;

		private void Start()
		{
			lastInteractTime = 0f - idleTime;
			isShowingHint = false;
		}

		private void Update()
		{
			if (Input.GetMouseButtonDown(0))
			{
				if (!hasFirstInteracted)
				{
					hasFirstInteracted = true;
					OnFirstInteract?.Invoke();
				}
				if (trackEveryInteract)
				{
					OnInteract?.Invoke();
				}
			}
			if (isComplete)
			{
				return;
			}
			if (Input.GetMouseButton(0) || Input.GetMouseButtonDown(0))
			{
				lastInteractTime = Time.time;
				if (isShowingHint)
				{
					isShowingHint = false;
					if (hand != null)
					{
						hand.Stop();
					}
				}
			}
			else if (!isShowingHint && Time.time - lastInteractTime >= idleTime)
			{
				ShowCurrentHint();
			}
		}

		private void ShowCurrentHint()
		{
			isShowingHint = true;
			if (currentStep == -1)
			{
				if (hand != null && clickTarget != null)
				{
					hand.PlayClick(clickTarget);
				}
				return;
			}
			if (currentStep >= 0 && dragSteps[currentStep].image != null && dragSteps[currentStep].image.IsComplete)
			{
				int next = FindNextIncompleteStep();
				if (next == -2)
				{
					isComplete = true;
					if (hand != null)
					{
						hand.Stop();
					}
					OnAllStepsComplete?.Invoke();
					return;
				}
				currentStep = next;
				dragSteps[currentStep].image.OnComplete.AddListener(OnCurrentStepComplete);
			}
			if (currentStep >= 0 && currentStep < dragSteps.Length)
			{
				DragStep step = dragSteps[currentStep];
				if (hand != null && step.pen != null)
				{
					Transform from = step.pen.transform;
					Transform to = ((step.imageTarget != null) ? step.imageTarget : step.image.transform);
					hand.PlayDrag(from, to);
				}
			}
		}

		
		public void OnClickTargetClicked()
		{
			if (currentStep == -1)
			{
				lastInteractTime = Time.time;
				isShowingHint = false;
				if (hand != null)
				{
					hand.Stop();
				}
				NextDragStep();
			}
		}

		
		public void EnableInteractTracking()
		{
			trackEveryInteract = true;
		}

		private void NextDragStep()
		{
			if (!isFirstDragDone)
			{
				isFirstDragDone = true;
				currentStep = 0;
			}
			else
			{
				currentStep = FindNextIncompleteStep();
			}
			if (currentStep == -2)
			{
				isComplete = true;
				if (hand != null)
				{
					hand.Stop();
				}
				OnAllStepsComplete?.Invoke();
				return;
			}
			DragStep step = dragSteps[currentStep];
			if (step.image != null)
			{
				step.image.OnComplete.AddListener(OnCurrentStepComplete);
			}
			lastInteractTime = Time.time;
			isShowingHint = false;
		}

		private int FindNextIncompleteStep()
		{
			for (int i = 0; i < dragSteps.Length; i++)
			{
				if (dragSteps[i].image != null && !dragSteps[i].image.IsComplete)
				{
					return i;
				}
			}
			return -2;
		}

		private void OnCurrentStepComplete()
		{
			if (!isComplete)
			{
				DragStep step = dragSteps[currentStep];
				if (step.image != null)
				{
					step.image.OnComplete.RemoveListener(OnCurrentStepComplete);
				}
				lastInteractTime = Time.time;
				isShowingHint = false;
				if (hand != null)
				{
					hand.Stop();
				}
				NextDragStep();
			}
		}

		private void OnDestroy()
		{
			if (dragSteps == null)
			{
				return;
			}
			for (int i = 0; i < dragSteps.Length; i++)
			{
				if (dragSteps[i].image != null)
				{
					dragSteps[i].image.OnComplete.RemoveListener(OnCurrentStepComplete);
				}
			}
		}
	}
}
