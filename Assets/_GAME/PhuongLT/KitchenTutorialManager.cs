using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Scripting;

namespace LTPHUONG
{
    public class KitchenTutorialManager : MonoBehaviour
    {
        private enum Phase
        {
            Valve,              // Click van nuoc
            WashVegetables,     // Keo rau vao vung nuoc
            BasketVegetables,   // Keo rau da sach vao ro
            PlaceFoodOnBoard,   // Keo CuttingFood len that
            CutFood,            // Keo dao vao CuttingFood
            CallToAction,       // Huong dan cuoi - keo toi CTA
            Done
        }

        [Header("Events")]
        public UnityEvent OnFirstInteraction;
        public UnityEvent OnEveryInteraction;

        [Header("Tutorial Hand")]
        [SerializeField] private TutorialHand tutorialHand;
        [SerializeField] private float idleTimeout = 3f;

        [Header("Step 1 - Valve")]
        [SerializeField] private SinkValve valve;

        [Header("Step 3 - Rua Rau")]
        [SerializeField] private SinkVegetable[] vegetables;
        [SerializeField] private Transform dropZone;

        [Header("Step 4 - Ro")]
        [SerializeField] private Transform basketPoint;

        [Header("Step 5 & 6 - Cat Thuc An")]
        [SerializeField] private CuttingFood[] cuttingFoods;
        [SerializeField] private Transform boardZone;

        [Header("Step 6 - Dao")]
        [SerializeField] private KnifeTool knife;

        [Header("Call To Action")]
        [SerializeField] private Transform ctaFrom;
        [SerializeField] private Transform ctaTo;

        private Phase currentPhase = Phase.Valve;
        private float lastActivityTime;
        private bool wasDragging;
        private bool hasFirstInteraction;
        private bool enableEveryInteraction;
        private int currentFoodIndex = 0;

        private void Start()
        {
            lastActivityTime = Time.time;
            ShowCurrentPhase();
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

            wasDragging = isDragging;

            CheckPhaseCompletion();

            if (currentPhase != Phase.Done && Time.time - lastActivityTime >= idleTimeout)
                ShowCurrentPhase();
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

        private void CheckPhaseCompletion()
        {
            switch (currentPhase)
            {
                case Phase.Valve:
                    if (valve != null && valve.IsOn) GoToPhase(Phase.WashVegetables);
                    break;
                case Phase.WashVegetables:
                    if (AllVegetablesWashed()) GoToPhase(Phase.BasketVegetables);
                    break;
                case Phase.BasketVegetables:
                    if (AllVegetablesInBasket()) GoToPhase(Phase.PlaceFoodOnBoard);
                    break;
                case Phase.PlaceFoodOnBoard:
                    if (CurrentFoodOnBoard()) GoToPhase(Phase.CutFood);
                    break;
                case Phase.CutFood:
                    if (CurrentFoodReturned())
                    {
                        currentFoodIndex++;
                        if (currentFoodIndex >= cuttingFoods.Length)
                        {
                            if (AllStepsDone()) GoToPhase(Phase.CallToAction);
                        }
                        else
                            GoToPhase(Phase.PlaceFoodOnBoard);
                    }
                    break;
            }
        }

        private void GoToPhase(Phase phase)
        {
            currentPhase = phase;
            tutorialHand?.Stop();
            CancelInvoke(nameof(ShowCurrentPhase));
            CancelInvoke(nameof(ShowCallToAction));

            if (phase == Phase.Done)
            {
                enabled = false;
                return;
            }
            if (phase == Phase.CallToAction)
            {
                Invoke(nameof(ShowCallToAction), 1f);
                return;
            }

            if (phase == Phase.PlaceFoodOnBoard)
            {
                var f = CurrentFood();
                if (f != null && f.State == CuttingFood.FoodState.ReturnedToPlate)
                {
                    currentFoodIndex++;
                    GoToPhase(currentFoodIndex >= (cuttingFoods?.Length ?? 0) && AllStepsDone()
                        ? Phase.CallToAction
                        : Phase.PlaceFoodOnBoard);
                    return;
                }
                if (f != null && f.IsOnBoard)
                {
                    GoToPhase(Phase.CutFood);
                    return;
                }
            }

            Invoke(nameof(ShowCurrentPhase), 1f);
        }

        private void ShowCallToAction()
        {
            if (ctaFrom != null && ctaTo != null)
                tutorialHand?.PlayDrag(ctaFrom, ctaTo);
            EnableEveryInteractionEvent();
        }

        private void ShowCurrentPhase()
        {
            if (tutorialHand == null || currentPhase == Phase.Done || currentPhase == Phase.CallToAction) return;
            lastActivityTime = Time.time;

            switch (currentPhase)
            {
                case Phase.Valve:
                    if (valve != null)
                        tutorialHand.PlayClick(valve.TF);
                    break;

                case Phase.WashVegetables:
                    var unwashed = FirstUnwashedVeg();
                    if (unwashed != null && dropZone != null)
                        tutorialHand.PlayDrag(unwashed.TF, dropZone);
                    break;

                case Phase.BasketVegetables:
                    var notInBasket = FirstVegNotInBasket();
                    if (notInBasket != null && basketPoint != null)
                        tutorialHand.PlayDrag(notInBasket.TF, basketPoint);
                    break;

                case Phase.PlaceFoodOnBoard:
                    var currentFood = CurrentFood();
                    if (currentFood != null && boardZone != null)
                        tutorialHand.PlayDrag(currentFood.TF, boardZone);
                    break;

                case Phase.CutFood:
                    var foodToCut = CurrentFood();
                    if (knife != null && foodToCut != null && !knife.IsBlocked())
                        tutorialHand.PlayDrag(knife.TF, foodToCut.TF);
                    break;

            }
        }

        // --- Kiem tra hoan thanh ---

        private bool AllVegetablesWashed()
        {
            if (vegetables == null) return true;
            foreach (var v in vegetables)
                if (v != null && !v.IsWashed) return false;
            return true;
        }

        private bool AllVegetablesInBasket()
        {
            if (vegetables == null) return true;
            foreach (var v in vegetables)
                if (v != null && !v.IsInBasket) return false;
            return true;
        }

        private bool AllStepsDone()
        {
            return AllVegetablesWashed() && AllVegetablesInBasket() && AllFoodsReturned();
        }

        private bool AllFoodsReturned()
        {
            if (cuttingFoods == null) return true;
            foreach (var f in cuttingFoods)
                if (f != null && f.State != CuttingFood.FoodState.ReturnedToPlate) return false;
            return true;
        }

        private CuttingFood CurrentFood()
        {
            if (cuttingFoods == null || currentFoodIndex >= cuttingFoods.Length) return null;
            return cuttingFoods[currentFoodIndex];
        }

        private bool CurrentFoodOnBoard()
        {
            var f = CurrentFood();
            return f != null && f.IsOnBoard;
        }

        private bool CurrentFoodReturned()
        {
            var f = CurrentFood();
            return f != null && f.State == CuttingFood.FoodState.ReturnedToPlate;
        }

        // --- Tim phan tu can huong dan tiep theo ---

        private SinkVegetable FirstUnwashedVeg()
        {
            if (vegetables == null) return null;
            foreach (var v in vegetables)
                if (v != null && !v.IsWashed) return v;
            return null;
        }

        private SinkVegetable FirstVegNotInBasket()
        {
            if (vegetables == null) return null;
            foreach (var v in vegetables)
                if (v != null && v.IsWashed && !v.IsInBasket) return v;
            return null;
        }

    }
}
