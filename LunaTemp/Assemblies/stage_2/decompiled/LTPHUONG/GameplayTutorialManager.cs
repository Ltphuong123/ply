using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Scripting;

namespace LTPHUONG
{
	public class GameplayTutorialManager : MonoBehaviour
	{
		private enum Phase
		{
			Garbage,
			Reveal1,
			Trays,
			Reveal2,
			Reveal3,
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

		[Header("Step 1 - Garbage")]
		[SerializeField]
		private GarbageItem[] garbageItems;

		[SerializeField]
		private Transform trashBinTarget;

		[Header("Step 2 - Reveal 1")]
		[SerializeField]
		private RevealPen revealPen;

		[SerializeField]
		private RevealImage revealImage1;

		[Header("Step 3 - Trays")]
		[SerializeField]
		private Tray[] trays;

		[Header("Step 4 - Reveal 2")]
		[SerializeField]
		private RevealPen revealPen2;

		[SerializeField]
		private RevealImage revealImage2;

		[Header("Step 5 - Reveal 3")]
		[SerializeField]
		private RevealPen revealPen3;

		[SerializeField]
		private RevealImage revealImage3;

		[Header("Step 6 - CTA")]
		[SerializeField]
		private Transform ctaFrom;

		[SerializeField]
		private Transform ctaTo;

		private Phase currentPhase;

		private float lastActivityTime;

		private bool wasDragging;

		private bool enableEveryInteraction;

		private bool hasFirstInteraction;

		private Transform dummyDown;

		private const float STEP_DELAY = 1f;

		private const float CTA_DELAY = 2f;

		private void Awake()
		{
			dummyDown = new GameObject("_TutDummy").transform;
			dummyDown.SetParent(base.transform);
		}

		private void Start()
		{
			currentPhase = Phase.Garbage;
			lastActivityTime = Time.time;
			SkipCompleted();
			if (currentPhase == Phase.Done)
			{
				base.enabled = false;
			}
			else if (currentPhase == Phase.CallToAction)
			{
				Invoke("ShowCallToAction", 2f);
			}
			else
			{
				Invoke("ShowCurrentPhase", 1f);
			}
		}

		private void SkipCompleted()
		{
			if (currentPhase == Phase.Garbage && AllGarbageGone())
			{
				currentPhase = Phase.Reveal1;
				SkipCompleted();
			}
			else if (currentPhase == Phase.Reveal1 && IsRevealDone(revealImage1))
			{
				currentPhase = Phase.Trays;
				SkipCompleted();
			}
			else if (currentPhase == Phase.Trays && AllTraysGone())
			{
				currentPhase = Phase.Reveal2;
				SkipCompleted();
			}
			else if (currentPhase == Phase.Reveal2 && IsRevealDone(revealImage2))
			{
				currentPhase = Phase.Reveal3;
				SkipCompleted();
			}
			else if (currentPhase == Phase.Reveal3 && IsRevealDone(revealImage3))
			{
				currentPhase = Phase.CallToAction;
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
			if (currentPhase == Phase.Trays && Input.GetMouseButtonDown(0))
			{
				tutorialHand?.Stop();
				CancelInvoke("ShowCurrentPhase");
			}
			wasDragging = isDragging;
			CheckPhaseCompletion();
			if (currentPhase != Phase.Done && currentPhase != Phase.CallToAction && Time.time - lastActivityTime >= idleTimeout)
			{
				ShowCurrentPhase();
			}
		}

		private void CheckPhaseCompletion()
		{
			switch (currentPhase)
			{
			case Phase.Garbage:
				if (AllGarbageGone())
				{
					GoToPhase(Phase.Reveal1, 1f);
				}
				break;
			case Phase.Reveal1:
				if (IsRevealDone(revealImage1))
				{
					GoToPhase(Phase.Trays, 1f);
				}
				break;
			case Phase.Trays:
				if (AllTraysGone())
				{
					GoToPhase(Phase.Reveal2, 1f);
				}
				break;
			case Phase.Reveal2:
				if (IsRevealDone(revealImage2))
				{
					GoToPhase(Phase.Reveal3, 1f);
				}
				break;
			case Phase.Reveal3:
				if (IsRevealDone(revealImage3))
				{
					GoToPhase(Phase.CallToAction, 2f);
				}
				break;
			}
		}

		private void GoToPhase(Phase phase, float delay)
		{
			currentPhase = phase;
			tutorialHand?.Stop();
			CancelInvoke("ShowCurrentPhase");
			CancelInvoke("ShowCallToAction");
			switch (phase)
			{
			case Phase.Done:
				base.enabled = false;
				break;
			case Phase.CallToAction:
				Invoke("ShowCallToAction", delay);
				break;
			default:
				Invoke("ShowCurrentPhase", delay);
				break;
			}
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
			case Phase.Garbage:
			{
				GarbageItem garbage = FirstActiveGarbage();
				if (garbage != null && trashBinTarget != null)
				{
					tutorialHand.PlayDrag(garbage.TF, trashBinTarget);
				}
				break;
			}
			case Phase.Reveal1:
				if (revealPen != null && revealImage1 != null)
				{
					tutorialHand.PlayDrag(revealPen.TF, revealImage1.transform);
				}
				break;
			case Phase.Trays:
			{
				Tray tray = FirstActiveTray();
				if (tray != null)
				{
					dummyDown.position = tray.TF.position + Vector3.down;
					tutorialHand.PlayDrag(tray.TF, dummyDown);
				}
				break;
			}
			case Phase.Reveal2:
				if (revealPen2 != null && revealImage2 != null)
				{
					tutorialHand.PlayDrag(revealPen2.TF, revealImage2.transform);
				}
				break;
			case Phase.Reveal3:
				if (revealPen3 != null && revealImage3 != null)
				{
					tutorialHand.PlayDrag(revealPen3.TF, revealImage3.transform);
				}
				break;
			}
		}

		private void ShowCallToAction()
		{
			if (ctaFrom != null && ctaTo != null)
			{
				tutorialHand?.PlayDrag(ctaFrom, ctaTo);
			}
			EnableEveryInteractionEvent();
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

		private bool AllGarbageGone()
		{
			if (garbageItems == null || garbageItems.Length == 0)
			{
				return false;
			}
			GarbageItem[] array = garbageItems;
			foreach (GarbageItem g in array)
			{
				if (g != null && g.gameObject.activeInHierarchy)
				{
					return false;
				}
			}
			return true;
		}

		private bool AllTraysGone()
		{
			if (trays == null || trays.Length == 0)
			{
				return false;
			}
			Tray[] array = trays;
			foreach (Tray t in array)
			{
				if (t != null && !t.IsGone)
				{
					return false;
				}
			}
			return true;
		}

		private static bool IsRevealDone(RevealImage img)
		{
			return img != null && img.IsComplete;
		}

		private GarbageItem FirstActiveGarbage()
		{
			if (garbageItems == null)
			{
				return null;
			}
			GarbageItem[] array = garbageItems;
			foreach (GarbageItem g in array)
			{
				if (g != null && g.gameObject.activeInHierarchy)
				{
					return g;
				}
			}
			return null;
		}

		private Tray FirstActiveTray()
		{
			if (trays == null)
			{
				return null;
			}
			Tray[] array = trays;
			foreach (Tray t in array)
			{
				if (t != null && !t.IsGone)
				{
					return t;
				}
			}
			return null;
		}
	}
}
