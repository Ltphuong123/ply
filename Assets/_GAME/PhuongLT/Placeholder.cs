using UnityEngine;

namespace LTPHUONG
{
	public class Placeholder : MonoBehaviour
	{
		private Transform tf;
		private SpriteRenderer spriteRenderer;

		public bool IsOccupied { get; set; }

		public ItemBase CurrentItem { get; set; }

		public Transform TF => tf ?? (tf = base.transform);

		private void Awake()
		{
			spriteRenderer = GetComponent<SpriteRenderer>();
		}

		public void SetItem(ItemBase item)
		{
			CurrentItem = item;
			IsOccupied = item != null;
		}

		public void ClearItem()
		{
			CurrentItem = null;
			IsOccupied = false;
		}

		public void ShowHighlight()
		{
			if (spriteRenderer != null)
				spriteRenderer.enabled = true;
		}

		public void HideHighlight()
		{
			if (spriteRenderer != null)
				spriteRenderer.enabled = false;
		}

		public void SetSortingOrder(int order)
		{
			if (spriteRenderer != null)
				spriteRenderer.sortingOrder = order;
		}
	}
}
