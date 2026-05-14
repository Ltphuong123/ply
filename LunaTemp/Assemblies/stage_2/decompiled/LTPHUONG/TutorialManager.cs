using System.Reflection;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Scripting;

namespace LTPHUONG
{
	public class TutorialManager : MonoBehaviour
	{
		[Header("References")]
		[SerializeField]
		private ItemContainer itemContainer;

		[SerializeField]
		private Item[] items;

		[SerializeField]
		private TutorialHand tutorialHand;

		[Header("Settings")]
		[SerializeField]
		private float idleTimeBeforeTutorial = 2f;

		[Header("Events")]
		public UnityEvent OnFirstInteraction;

		public UnityEvent OnEveryInteraction;

		private float lastActivityTime;

		private bool isShowingTutorial;

		private bool hasFirstInteraction;

		private bool enableEveryInteraction;

		private void Start()
		{
			ResetActivityTimer();
			if (itemContainer != null)
			{
				itemContainer.OnItemSpawned.AddListener(OnItemSpawned);
			}
			Item[] array = items;
			foreach (Item item in array)
			{
				if (item != null)
				{
					item.OnDragStarted.AddListener(OnPlayerActivity);
					item.OnPlacedCorrectly.AddListener(OnItemPlaced);
				}
			}
			CheckAndShowTutorial();
		}

		private void Update()
		{
			if (Input.GetMouseButtonDown(0))
			{
				OnScreenInteraction();
			}
			if (!isShowingTutorial && Time.time - lastActivityTime >= idleTimeBeforeTutorial)
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
			else if (enableEveryInteraction)
			{
				OnEveryInteraction?.Invoke();
				return;
			}
			OnPlayerActivity();
		}

		
		public void EnableEveryInteractionEvent()
		{
			enableEveryInteraction = true;
			if (GameState.Instance != null)
			{
				GameState.Instance.BlockInteract();
			}
		}

		private void CheckAndShowTutorial()
		{
			Item activeItem = GetFirstActiveItem();
			if (activeItem != null)
			{
				ShowDragTutorial(activeItem);
			}
			else if (itemContainer != null)
			{
				ShowClickContainerTutorial();
			}
		}

		private Item GetFirstActiveItem()
		{
			Item[] array = items;
			foreach (Item item in array)
			{
				if (item != null && item.gameObject.activeInHierarchy && !item.IsCorrect && !item.IsBlocked())
				{
					return item;
				}
			}
			return null;
		}

		private void ShowClickContainerTutorial()
		{
			if (!(tutorialHand == null) && !(itemContainer == null))
			{
				isShowingTutorial = true;
				tutorialHand.PlayClick(itemContainer.transform);
			}
		}

		private void ShowDragTutorial(Item item)
		{
			if (!(tutorialHand == null) && !(item == null))
			{
				Placeholder targetPlaceholder = GetFirstAvailablePlaceholder(item);
				if (!(targetPlaceholder == null))
				{
					isShowingTutorial = true;
					tutorialHand.PlayDrag(item.transform, targetPlaceholder.transform);
				}
			}
		}

		private Placeholder GetFirstAvailablePlaceholder(Item item)
		{
			FieldInfo field = typeof(Item).GetField("validPlaceholders", BindingFlags.Instance | BindingFlags.NonPublic);
			if (field != null && field.GetValue(item) is Placeholder[] validPlaceholders)
			{
				Placeholder[] array = validPlaceholders;
				foreach (Placeholder placeholder in array)
				{
					if (placeholder != null && !placeholder.IsOccupied && placeholder.gameObject.activeInHierarchy)
					{
						return placeholder;
					}
				}
			}
			return null;
		}

		
		public void OnPlayerActivity()
		{
			ResetActivityTimer();
			HideTutorial();
		}

		private void OnItemSpawned()
		{
			OnPlayerActivity();
		}

		private void OnItemPlaced()
		{
			OnPlayerActivity();
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
			if (itemContainer != null)
			{
				itemContainer.OnItemSpawned.RemoveListener(OnItemSpawned);
			}
			Item[] array = items;
			foreach (Item item in array)
			{
				if (item != null)
				{
					item.OnDragStarted.RemoveListener(OnPlayerActivity);
					item.OnPlacedCorrectly.RemoveListener(OnItemPlaced);
				}
			}
		}
	}
}
