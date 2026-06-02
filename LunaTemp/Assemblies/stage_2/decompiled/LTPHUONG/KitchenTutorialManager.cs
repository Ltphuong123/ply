using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Scripting;

namespace LTPHUONG
{
	public class KitchenTutorialManager : MonoBehaviour
	{
		private enum Phase
		{
			Valve,
			WashVegetables,
			BasketVegetables,
			PlaceFoodOnBoard,
			CutFood,
			CallToAction,
			Done
		}

		[Header("Events")]
		public UnityEvent OnFirstInteraction;

		public UnityEvent OnEveryInteraction;

		[Header("Tutorial Hand")]
		[SerializeField]
		private TutorialHand tutorialHand;

		[SerializeField]
		private float idleTimeout = 3f;

		[Header("Step 1 - Valve")]
		[SerializeField]
		private SinkValve valve;

		[Header("Step 3 - Rua Rau")]
		[SerializeField]
		private SinkVegetable[] vegetables;

		[SerializeField]
		private Transform dropZone;

		[Header("Step 4 - Ro")]
		[SerializeField]
		private Transform basketPoint;

		[Header("Step 5 & 6 - Cat Thuc An")]
		[SerializeField]
		private CuttingFood[] cuttingFoods;

		[SerializeField]
		private Transform boardZone;

		[Header("Step 6 - Dao")]
		[SerializeField]
		private KnifeTool knife;

		[Header("Call To Action")]
		[SerializeField]
		private Transform ctaFrom;

		[SerializeField]
		private Transform ctaTo;

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
			bool isDragging = ClickController.Instance != null && ClickController.Instance.GetCurrentDragging() != null;
			if (!wasDragging && isDragging)
			{
				tutorialHand?.Stop();
				CancelInvoke("ShowCurrentPhase");
				CancelInvoke("ShowCallToAction");
			}
			if (isDragging || Input.GetMouseButtonDown(0))
			{
				lastActivityTime = Time.time;
			}
			wasDragging = isDragging;
			CheckPhaseCompletion();
			if (currentPhase != Phase.Done && Time.time - lastActivityTime >= idleTimeout)
			{
				ShowCurrentPhase();
			}
		}

		
		public void EnableEveryInteractionEvent()
		{
			enableEveryInteraction = true;
			ReleaseCurrentDrag();
			GameState.Instance?.BlockInteract();
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

		private void CheckPhaseCompletion()
		{
			switch (currentPhase)
			{
			case Phase.Valve:
				if (valve != null && valve.IsOn)
				{
					GoToPhase(Phase.WashVegetables);
				}
				break;
			case Phase.WashVegetables:
				if (AllVegetablesWashed())
				{
					GoToPhase(Phase.BasketVegetables);
				}
				break;
			case Phase.BasketVegetables:
				if (AllVegetablesInBasket())
				{
					GoToPhase(Phase.PlaceFoodOnBoard);
				}
				break;
			case Phase.PlaceFoodOnBoard:
				if (CurrentFoodOnBoard())
				{
					GoToPhase(Phase.CutFood);
				}
				break;
			case Phase.CutFood:
				if (!CurrentFoodReturned())
				{
					break;
				}
				currentFoodIndex++;
				if (currentFoodIndex >= cuttingFoods.Length)
				{
					if (AllStepsDone())
					{
						GoToPhase(Phase.CallToAction);
					}
				}
				else
				{
					GoToPhase(Phase.PlaceFoodOnBoard);
				}
				break;
			}
		}

		private void GoToPhase(Phase phase)
		{
			currentPhase = phase;
			tutorialHand?.Stop();
			CancelInvoke("ShowCurrentPhase");
			CancelInvoke("ShowCallToAction");
			switch (phase)
			{
			case Phase.Done:
				base.enabled = false;
				return;
			case Phase.CallToAction:
				Invoke("ShowCallToAction", 1f);
				return;
			case Phase.PlaceFoodOnBoard:
			{
				CuttingFood f = CurrentFood();
				if (f != null && f.State == CuttingFood.FoodState.ReturnedToPlate)
				{
					currentFoodIndex++;
					int num = currentFoodIndex;
					CuttingFood[] array = cuttingFoods;
					GoToPhase((num >= ((array != null) ? array.Length : 0) && AllStepsDone()) ? Phase.CallToAction : Phase.PlaceFoodOnBoard);
					return;
				}
				if (f != null && f.IsOnBoard)
				{
					GoToPhase(Phase.CutFood);
					return;
				}
				break;
			}
			}
			Invoke("ShowCurrentPhase", 1f);
		}

		private void ShowCallToAction()
		{
			if (ctaFrom != null && ctaTo != null)
			{
				tutorialHand?.PlayDrag(ctaFrom, ctaTo);
			}
			EnableEveryInteractionEvent();
		}

		private void ShowCurrentPhase()
		{
			if (tutorialHand == null || currentPhase == Phase.Done || currentPhase == Phase.CallToAction)
			{
				return;
			}
			lastActivityTime = Time.time;
			switch (currentPhase)
			{
			case Phase.Valve:
				if (valve != null)
				{
					tutorialHand.PlayClick(valve.TF);
				}
				break;
			case Phase.WashVegetables:
			{
				SinkVegetable unwashed = FirstUnwashedVeg();
				if (unwashed != null && dropZone != null)
				{
					tutorialHand.PlayDrag(unwashed.TF, dropZone);
				}
				break;
			}
			case Phase.BasketVegetables:
			{
				SinkVegetable notInBasket = FirstVegNotInBasket();
				if (notInBasket != null && basketPoint != null)
				{
					tutorialHand.PlayDrag(notInBasket.TF, basketPoint);
				}
				break;
			}
			case Phase.PlaceFoodOnBoard:
			{
				CuttingFood currentFood = CurrentFood();
				if (currentFood != null && boardZone != null)
				{
					tutorialHand.PlayDrag(currentFood.TF, boardZone);
				}
				break;
			}
			case Phase.CutFood:
			{
				CuttingFood foodToCut = CurrentFood();
				if (knife != null && foodToCut != null && !knife.IsBlocked())
				{
					tutorialHand.PlayDrag(knife.TF, foodToCut.TF);
				}
				break;
			}
			}
		}

		private bool AllVegetablesWashed()
		{
			if (vegetables == null)
			{
				return true;
			}
			SinkVegetable[] array = vegetables;
			foreach (SinkVegetable v in array)
			{
				if (v != null && !v.IsWashed)
				{
					return false;
				}
			}
			return true;
		}

		private bool AllVegetablesInBasket()
		{
			if (vegetables == null)
			{
				return true;
			}
			SinkVegetable[] array = vegetables;
			foreach (SinkVegetable v in array)
			{
				if (v != null && !v.IsInBasket)
				{
					return false;
				}
			}
			return true;
		}

		private bool AllStepsDone()
		{
			return AllVegetablesWashed() && AllVegetablesInBasket() && AllFoodsReturned();
		}

		private bool AllFoodsReturned()
		{
			if (cuttingFoods == null)
			{
				return true;
			}
			CuttingFood[] array = cuttingFoods;
			foreach (CuttingFood f in array)
			{
				if (f != null && f.State != CuttingFood.FoodState.ReturnedToPlate)
				{
					return false;
				}
			}
			return true;
		}

		private CuttingFood CurrentFood()
		{
			if (cuttingFoods == null || currentFoodIndex >= cuttingFoods.Length)
			{
				return null;
			}
			return cuttingFoods[currentFoodIndex];
		}

		private bool CurrentFoodOnBoard()
		{
			CuttingFood f = CurrentFood();
			return f != null && f.IsOnBoard;
		}

		private bool CurrentFoodReturned()
		{
			CuttingFood f = CurrentFood();
			return f != null && f.State == CuttingFood.FoodState.ReturnedToPlate;
		}

		private SinkVegetable FirstUnwashedVeg()
		{
			if (vegetables == null)
			{
				return null;
			}
			SinkVegetable[] array = vegetables;
			foreach (SinkVegetable v in array)
			{
				if (v != null && !v.IsWashed)
				{
					return v;
				}
			}
			return null;
		}

		private SinkVegetable FirstVegNotInBasket()
		{
			if (vegetables == null)
			{
				return null;
			}
			SinkVegetable[] array = vegetables;
			foreach (SinkVegetable v in array)
			{
				if (v != null && v.IsWashed && !v.IsInBasket)
				{
					return v;
				}
			}
			return null;
		}
	}
}
