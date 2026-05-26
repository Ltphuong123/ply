using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class ToolStepGuard : MonoBehaviour
    {
        [SerializeField] private ToolBase tool;
        [SerializeField] private Collider2D[] warningZones;

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
            bool isDragging = ClickController.Instance != null &&
                              ClickController.Instance.GetCurrentDragging() == tool;
            if (isDragging)
                pendingDeactivate = true;
            else
                isActive = false;
        }

        private void Update()
        {
            if (tool == null || ClickController.Instance == null) return;

            bool isDraggingTool = ClickController.Instance.GetCurrentDragging() == tool;

            if (wasDraggingTool && !isDraggingTool && pendingDeactivate)
            {
                isActive = false;
                pendingDeactivate = false;
            }
            wasDraggingTool = isDraggingTool;

            if (isActive) return;
            if (!isDraggingTool) return;

            foreach (var zone in warningZones)
            {
                if (zone != null && zone.OverlapPoint(tool.TF.position))
                {
                    OnWrongUsage?.Invoke();
                    tool.ForceReturn();
                    ClickController.Instance.SetCurrentDragging(null);
                    return;
                }
            }
        }
    }
}
