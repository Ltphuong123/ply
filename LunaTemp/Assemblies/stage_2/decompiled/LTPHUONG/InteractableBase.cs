using UnityEngine;
using UnityEngine.Scripting;

namespace LTPHUONG
{
	public abstract class InteractableBase : MonoBehaviour
	{
		[SerializeField]
		protected SpriteRenderer[] spriteRenderers;

		[SerializeField]
		protected int clickOrder;

		[SerializeField]
		protected bool isBlocked;

		protected Transform tf;

		public int ClickOrder
		{
			get
			{
				return clickOrder;
			}
			private set
			{
				clickOrder = value;
			}
		}

		public Transform TF => tf;

		public SpriteRenderer[] SpriteRenderers => spriteRenderers;

		protected virtual void Awake()
		{
			tf = base.transform;
		}

		
		public void BringToFront()
		{
			if (!(ClickController.Instance == null))
			{
				SetClickOrderAndSortingOrder(ClickController.Instance.GetNextSortingOrder());
			}
		}

		
		public void SetClickOrder(int order)
		{
			ClickOrder = order;
		}

		
		public void SetSortingOrder(int baseSortingOrder)
		{
			if (spriteRenderers == null)
			{
				return;
			}
			for (int i = 0; i < spriteRenderers.Length; i++)
			{
				if (spriteRenderers[i] != null)
				{
					spriteRenderers[i].sortingOrder = baseSortingOrder;
				}
			}
		}

		
		public void SetClickOrderAndSortingOrder(int order)
		{
			ClickOrder = order;
			SetSortingOrder(order);
		}

		
		public void Block()
		{
			isBlocked = true;
		}

		
		public void Unblock()
		{
			isBlocked = false;
		}

		
		public void SetBlocked(bool blocked)
		{
			isBlocked = blocked;
		}

		public virtual bool IsBlocked()
		{
			return isBlocked || (GameState.Instance != null && !GameState.Instance.IsAllowInteract);
		}

		public virtual void HandleMouseDown(Vector3 mouseWorldPosition)
		{
		}

		public virtual void HandleMouseDrag(Vector3 mouseWorldPosition)
		{
		}

		public virtual void HandleMouseUp(Vector3 mouseWorldPosition)
		{
		}

		public virtual void OnClick(Vector3 mouseWorldPosition)
		{
		}
	}
}
