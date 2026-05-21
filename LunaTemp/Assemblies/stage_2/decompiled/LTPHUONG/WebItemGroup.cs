using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
	public class WebItemGroup : MonoBehaviour
	{
		[SerializeField]
		private List<WebItem> webItems = new List<WebItem>();

		public UnityEvent OnAllWebsRemoved;

		private int removedCount;

		private bool isCompleted;

		private void Start()
		{
			foreach (WebItem web in webItems)
			{
				if (web != null)
				{
					web.OnRemoved = (Action)Delegate.Combine(web.OnRemoved, new Action(OnWebRemoved));
				}
			}
		}

		private void OnWebRemoved()
		{
			if (!isCompleted)
			{
				removedCount++;
				if (removedCount >= webItems.Count)
				{
					isCompleted = true;
					OnAllWebsRemoved?.Invoke();
				}
			}
		}

		private void OnDestroy()
		{
			foreach (WebItem web in webItems)
			{
				if (web != null)
				{
					web.OnRemoved = (Action)Delegate.Remove(web.OnRemoved, new Action(OnWebRemoved));
				}
			}
		}
	}
}
