using UnityEngine;

namespace LTPHUONG
{
    public class DragBase : InteractableBase
    {
        
        [SerializeField] private float minY = -10f;
        [SerializeField] private float maxY = 7f;

        protected Camera MainCamera { get; private set; }
        float clickThreshold = 0.1f;
        private Vector3 mouseDownPosition;
        private bool hasMoved;
        private bool isDragging;

        protected override void Awake()
        {
            base.Awake();
            MainCamera = Camera.main;
        }

        public override void HandleMouseDown(Vector3 mouseWorldPosition)
        {
            if (IsBlocked()) return;

            mouseDownPosition = mouseWorldPosition;
            hasMoved = false;
            isDragging = true;
            OnDragStart(mouseWorldPosition);
        }

        public override void HandleMouseDrag(Vector3 mouseWorldPosition)
        {
            if (!isDragging) return;

            if (IsBlocked())
            {
                isDragging = false;
                hasMoved = false;
                return;
            }

            if (!hasMoved && Vector3.Distance(mouseDownPosition, mouseWorldPosition) > clickThreshold)
            {
                hasMoved = true;
                OnDragBegin(mouseWorldPosition);
            }

            if (hasMoved)
            {
                Vector3 clampedPosition = ClampToCameraBounds(mouseWorldPosition);
                UpdatePosition(clampedPosition);
                OnDragging(clampedPosition);
            }
        }

        public override void HandleMouseUp(Vector3 mouseWorldPosition)
        {
            if (!isDragging) return;

            isDragging = false;

            if (hasMoved)
                OnDragEnd(mouseWorldPosition);
            else
                OnClick(mouseWorldPosition);

            hasMoved = false;
        }

        protected virtual void UpdatePosition(Vector3 targetPosition)
        {
            targetPosition.z = tf.position.z;
            tf.position = targetPosition;
        }

        private Vector3 ClampToCameraBounds(Vector3 worldPosition)
        {
            Vector3 minBounds = MainCamera.ScreenToWorldPoint(new Vector3(0, 0, MainCamera.nearClipPlane));
            Vector3 maxBounds = MainCamera.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height, MainCamera.nearClipPlane));

            return new Vector3(
                Mathf.Clamp(worldPosition.x, minBounds.x, maxBounds.x),
                Mathf.Clamp(worldPosition.y, minY, Mathf.Min(maxY, maxBounds.y)),
                worldPosition.z
            );
        }

        protected virtual void OnDragStart(Vector3 position) { }
        protected virtual void OnDragBegin(Vector3 position) { }
        protected virtual void OnDragging(Vector3 position) { }
        protected virtual void OnDragEnd(Vector3 position) { }
    }
}
