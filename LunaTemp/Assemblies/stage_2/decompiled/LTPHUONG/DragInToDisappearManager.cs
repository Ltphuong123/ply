using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
	public class DragInToDisappearManager : MonoBehaviour
	{
		[SerializeField]
		private List<DragInToDisappear> items;

		public UnityEvent OnAllDisappeared;

		private void Awake()
		{
			foreach (DragInToDisappear item in items)
			{
				if (!(item == null))
				{
					item.Block();
					item.OnDisappeared.AddListener(OnItemDisappeared);
				}
			}
		}

		public void Unblock()
		{
			foreach (DragInToDisappear item in items)
			{
				item?.Unblock();
			}
		}

		private void OnItemDisappeared()
		{
			foreach (DragInToDisappear item in items)
			{
				if (item != null && !item.IsGone)
				{
					return;
				}
			}
			OnAllDisappeared?.Invoke();
		}
	}
}
