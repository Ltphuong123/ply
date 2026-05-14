using System.Collections;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Scripting;

namespace LTPHUONG
{
	public class SimpleTutorialManager : MonoBehaviour
	{
		[Header("References")]
		[SerializeField]
		private TutorialHand tutorialHand;

		[SerializeField]
		private Transform clickTarget;

		[SerializeField]
		private GarbageItem[] garbageItems;

		[SerializeField]
		private TrashBin trashBin;

		[Header("Custom Drag Tutorial")]
		[SerializeField]
		private Transform customDragFrom;

		[SerializeField]
		private Transform customDragTo;

		[Header("Settings")]
		[SerializeField]
		private float idleTimeBeforeTutorial = 2f;

		[Header("Events")]
		public UnityEvent OnFirstInteraction;

		public UnityEvent OnEveryInteraction;

		private float lastActivityTime;

		private bool isShowingTutorial;

		private bool hasFirstInteraction;

		private bool isClickPhase = true;

		private bool isDragPhase;

		private bool isCustomDragPhase;

		private bool isDragging;

		private bool enableEveryInteraction;

		private void Start()
		{
			ResetActivityTimer();
			if (garbageItems != null)
			{
				GarbageItem[] array = garbageItems;
				foreach (GarbageItem item in array)
				{
					if (item != null)
					{
						item.OnPeeled.AddListener(OnPlayerActivity);
						item.OnTrashed.AddListener(OnPlayerActivity);
					}
				}
			}
			if (trashBin != null)
			{
				trashBin.OnItemTrashed.AddListener(OnPlayerActivity);
			}
			CheckAndShowTutorial();
		}

		private void Update()
		{
			if (Input.GetMouseButtonDown(0))
			{
				OnScreenInteraction();
				isDragging = true;
			}
			else if (Input.GetMouseButtonUp(0))
			{
				isDragging = false;
				ResetActivityTimer();
			}
			if (!isDragging && !isShowingTutorial && Time.time - lastActivityTime >= idleTimeBeforeTutorial)
			{
				CheckAndShowTutorial();
			}
		}

		private void OnScreenInteraction()
		{
			if (!hasFirstInteraction)
			{
				hasFirstInteraction = true;
				OnFirstInteraction?.Invoke();
			}
			if (enableEveryInteraction)
			{
				OnEveryInteraction?.Invoke();
			}
			else
			{
				OnPlayerActivity();
			}
		}

		private void CheckAndShowTutorial()
		{
			if (isClickPhase && clickTarget != null)
			{
				ShowClickTutorial();
			}
			else if (isCustomDragPhase && customDragFrom != null && customDragTo != null)
			{
				ShowCustomDragTutorial();
			}
			else if (isDragPhase)
			{
				ShowDragGarbageTutorial();
			}
		}

		private void ShowClickTutorial()
		{
			if (!(tutorialHand == null) && !(clickTarget == null))
			{
				isShowingTutorial = true;
				tutorialHand.PlayClick(clickTarget);
			}
		}

		private void ShowCustomDragTutorial()
		{
			if (!(tutorialHand == null) && !(customDragFrom == null) && !(customDragTo == null))
			{
				isShowingTutorial = true;
				tutorialHand.PlayDrag(customDragFrom, customDragTo);
			}
		}

		private void ShowDragGarbageTutorial()
		{
			if (!(tutorialHand == null) && !(trashBin == null))
			{
				GarbageItem activeItem = GetFirstActiveGarbageItem();
				if (!(activeItem == null))
				{
					isShowingTutorial = true;
					tutorialHand.PlayDrag(activeItem.transform, trashBin.transform);
				}
			}
		}

		private GarbageItem GetFirstActiveGarbageItem()
		{
			if (garbageItems == null)
			{
				return null;
			}
			GarbageItem[] array = garbageItems;
			foreach (GarbageItem item in array)
			{
				if (item != null && item.gameObject.activeInHierarchy && !item.IsTrashed && !item.IsBlocked())
				{
					return item;
				}
			}
			return null;
		}

		
		public void StartDragGarbageTutorial()
		{
			isClickPhase = false;
			isDragPhase = true;
			isCustomDragPhase = false;
			OnPlayerActivity();
		}

		
		public void SetCustomDragFrom(Transform from)
		{
			customDragFrom = from;
		}

		
		public void SetCustomDragTo(Transform to)
		{
			customDragTo = to;
		}

		
		public void EnableEveryInteractionEvent()
		{
			enableEveryInteraction = true;
			if (isDragging)
			{
				isDragging = false;
				if (ClickController.Instance != null)
				{
					DragBase currentDragging = ClickController.Instance.GetCurrentDragging();
					if (currentDragging != null)
					{
						currentDragging.HandleMouseUp(ClickController.Instance.GetMouseWorldPosition());
						ClickController.Instance.SetCurrentDragging(null);
					}
				}
			}
			StartCoroutine(BlockInteractAfterDelay());
		}

		private IEnumerator BlockInteractAfterDelay()
		{
			yield return new WaitForSeconds(0.5f);
			if (GameState.Instance != null)
			{
				GameState.Instance.BlockInteract();
			}
		}

		
		public void StartCustomDragTutorial()
		{
			isClickPhase = false;
			isDragPhase = false;
			isCustomDragPhase = true;
			OnPlayerActivity();
		}

		
		public void OnPlayerActivity()
		{
			ResetActivityTimer();
			HideTutorial();
		}

		private void ResetActivityTimer()
		{
			lastActivityTime = Time.time;
		}

		private void HideTutorial()
		{
			if (isShowingTutorial)
			{
				isShowingTutorial = false;
				if (tutorialHand != null)
				{
					tutorialHand.Stop();
				}
			}
		}

		private void OnDestroy()
		{
			if (garbageItems != null)
			{
				GarbageItem[] array = garbageItems;
				foreach (GarbageItem item in array)
				{
					if (item != null)
					{
						item.OnPeeled.RemoveListener(OnPlayerActivity);
						item.OnTrashed.RemoveListener(OnPlayerActivity);
					}
				}
			}
			if (trashBin != null)
			{
				trashBin.OnItemTrashed.RemoveListener(OnPlayerActivity);
			}
		}
	}
}
