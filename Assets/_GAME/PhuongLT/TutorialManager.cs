using System.Collections;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Scripting;

namespace LTPHUONG
{
    public class TutorialManager : MonoBehaviour
    {
        [Header("References")]
        [SerializeField] private ItemContainer itemContainer;
        [SerializeField] private Item[] items;
        [SerializeField] private TutorialHand tutorialHand;
        
        [Header("Settings")]
        [SerializeField] private float idleTimeBeforeTutorial = 2f;
        
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
            
            // Subscribe to events
            if (itemContainer != null)
                itemContainer.OnItemSpawned.AddListener(OnItemSpawned);
            
            foreach (var item in items)
            {
                if (item != null)
                {
                    item.OnDragStarted.AddListener(OnPlayerActivity);
                    item.OnPlacedCorrectly.AddListener(OnItemPlaced);
                }
            }
            
            // Show tutorial immediately at start
            CheckAndShowTutorial();
        }

        private void Update()
        {
            // Detect player input
            if (Input.GetMouseButtonDown(0))
            {
                OnScreenInteraction();
            }
            
            // Check if should show tutorial
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
                return; // Block all other interactions
            }
            
            OnPlayerActivity();
        }

        [Preserve]
        public void EnableEveryInteractionEvent()
        {
            enableEveryInteraction = true;
            
            // Block all game interactions
            if (GameState.Instance != null)
                GameState.Instance.BlockInteract();
        }

        private void CheckAndShowTutorial()
        {
            // Check if there are any active items on screen
            Item activeItem = GetFirstActiveItem();
            
            if (activeItem != null)
            {
                // Show drag tutorial
                ShowDragTutorial(activeItem);
            }
            else if (itemContainer != null)
            {
                // Show click container tutorial
                ShowClickContainerTutorial();
            }
        }

        private Item GetFirstActiveItem()
        {
            foreach (var item in items)
            {
                if (item != null && item.gameObject.activeInHierarchy && !item.IsCorrect && !item.IsBlocked())
                    return item;
            }
            return null;
        }

        private void ShowClickContainerTutorial()
        {
            if (tutorialHand == null || itemContainer == null) return;
            
            isShowingTutorial = true;
            tutorialHand.PlayClick(itemContainer.transform);
        }

        private void ShowDragTutorial(Item item)
        {
            if (tutorialHand == null || item == null) return;
            
            // Find first available placeholder
            Placeholder targetPlaceholder = GetFirstAvailablePlaceholder(item);
            if (targetPlaceholder == null) return;
            
            isShowingTutorial = true;
            tutorialHand.PlayDrag(item.transform, targetPlaceholder.transform);
        }

        private Placeholder GetFirstAvailablePlaceholder(Item item)
        {
            // Use reflection to access private validPlaceholders field
            var field = typeof(Item).GetField("validPlaceholders", 
                System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            
            if (field != null)
            {
                Placeholder[] validPlaceholders = field.GetValue(item) as Placeholder[];
                if (validPlaceholders != null)
                {
                    foreach (var placeholder in validPlaceholders)
                    {
                        if (placeholder != null && !placeholder.IsOccupied && placeholder.gameObject.activeInHierarchy)
                            return placeholder;
                    }
                }
            }
            
            return null;
        }

        [Preserve]
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
            if (!isShowingTutorial) return;
            
            isShowingTutorial = false;
            if (tutorialHand != null)
                tutorialHand.Stop();
        }

        private void OnDestroy()
        {
            // Unsubscribe from events
            if (itemContainer != null)
                itemContainer.OnItemSpawned.RemoveListener(OnItemSpawned);
            
            foreach (var item in items)
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
