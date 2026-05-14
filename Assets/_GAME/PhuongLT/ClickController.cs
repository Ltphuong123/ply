using UnityEngine;

namespace LTPHUONG
{
    public class ClickController : MonoBehaviour
    {
        [SerializeField] private Camera mainCamera;

        private int maxRaycastHits = 100;
        private LayerMask draggableLayer = -1;
        private DragBase currentDragging;
        private bool isDragging;
        private int currentSortingOrder = 100;

        private RaycastHit2D[] raycastHitBuffer;

        public static ClickController Instance { get; private set; }

        public int GetNextSortingOrder()
        {
            int order = currentSortingOrder;
            currentSortingOrder+=2;
            return order;
        }

        public int GetCurrentSortingOrder() => currentSortingOrder;


        private void ResetSortingOrder() => currentSortingOrder = 100;

        private void Awake()
        {
            if (Instance == null)
                Instance = this;
            else
                Destroy(gameObject);

            if (mainCamera == null)
                mainCamera = Camera.main;

            raycastHitBuffer = new RaycastHit2D[maxRaycastHits];
        }

        private void Start() => ResetSortingOrder();

        private void Update()
        {
            if (GameState.Instance != null && !GameState.Instance.IsAllowInteract) return;

            if (Input.GetMouseButtonDown(0))
                OnMouseDown();
            else if (Input.GetMouseButton(0))
                OnMouseDrag();
            else if (Input.GetMouseButtonUp(0))
                OnMouseUp();
        }

        private void OnMouseDown()
        {
            if (GameState.Instance != null && !GameState.Instance.IsAllowInteract) return;

            Vector3 mouseWorld = GetMouseWorldPosition();
            InteractableBase topInteractable = GetTopInteractableAtPosition(mouseWorld);

            if (topInteractable != null && !topInteractable.IsBlocked())
            {
                topInteractable.HandleMouseDown(mouseWorld);

                if (topInteractable is DragBase draggable)
                {
                    currentDragging = draggable;
                    isDragging = true;
                }
                else
                {
                    topInteractable.OnClick(mouseWorld);
                }
            }
        }

        private InteractableBase GetTopInteractableAtPosition(Vector3 worldPosition)
        {
            int hitCount = Physics2D.RaycastNonAlloc(worldPosition, Vector2.zero, raycastHitBuffer, Mathf.Infinity, draggableLayer);

            if (hitCount == 0) return null;

            InteractableBase topInteractable = null;
            int highestClickOrder = int.MinValue;

            for (int i = 0; i < hitCount; i++)
            {
                Collider2D collider = raycastHitBuffer[i].collider;
                if (collider == null) continue;

                InteractableBase interactable = collider.GetComponent<InteractableBase>();

                if (interactable != null)
                {
                    int clickOrder = interactable.ClickOrder;
                    if (clickOrder > highestClickOrder)
                    {
                        highestClickOrder = clickOrder;
                        topInteractable = interactable;
                    }
                }
            }

            return topInteractable;
        }

        private void OnMouseDrag()
        {
            if (isDragging)
                currentDragging?.HandleMouseDrag(GetMouseWorldPosition());
        }

        private void OnMouseUp()
        {
            if (isDragging)
            {
                currentDragging?.HandleMouseUp(GetMouseWorldPosition());
                currentDragging = null;
            }
            isDragging = false;
        }

        public void SetCurrentDragging(DragBase newDragging)
        {
            currentDragging = newDragging;
            isDragging = newDragging != null;
        }

        public DragBase GetCurrentDragging() => currentDragging;

        public Vector3 GetMouseWorldPosition()
        {
            Vector3 pos = mainCamera.ScreenToWorldPoint(Input.mousePosition);
            pos.z = 0f;
            return pos;
        }
    }
}
