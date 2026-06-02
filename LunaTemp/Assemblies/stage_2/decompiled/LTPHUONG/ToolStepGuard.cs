using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
	public class ToolStepGuard : MonoBehaviour
	{
		[SerializeField]
		private ToolBase tool;

		[SerializeField]
		private Collider2D[] warningZones;

		public UnityEvent OnWrongUsage;

		private bool isActive;

		private bool pendingDeactivate;

		private bool wasDraggingTool;

		public void Activate()
		{
			isActive = true;
			pendingDeactivate = false;
		}

		public void Deactivate()
		{
			if (ClickController.Instance != null && ClickController.Instance.GetCurrentDragging() == tool)
			{
				pendingDeactivate = true;
			}
			else
			{
				isActive = false;
			}
		}

		private void Update()
		{
			if (tool == null || ClickController.Instance == null)
			{
				return;
			}
			bool isDraggingTool = ClickController.Instance.GetCurrentDragging() == tool;
			if (wasDraggingTool && !isDraggingTool && pendingDeactivate)
			{
				isActive = false;
				pendingDeactivate = false;
			}
			wasDraggingTool = isDraggingTool;
			if (isActive || !isDraggingTool)
			{
				return;
			}
			Collider2D[] array = warningZones;
			foreach (Collider2D zone in array)
			{
				if (zone != null && zone.OverlapPoint(tool.TF.position))
				{
					OnWrongUsage?.Invoke();
					tool.ForceReturn();
					ClickController.Instance.SetCurrentDragging(null);
					break;
				}
			}
		}
	}
}
