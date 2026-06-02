using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
	public class TrayGroup : MonoBehaviour
	{
		[SerializeField]
		private List<Tray> trays;

		[SerializeField]
		private AudioClip completeSfx;

		public UnityEvent OnAllDisappeared;

		private void Awake()
		{
			foreach (Tray tray in trays)
			{
				if (!(tray == null))
				{
					tray.OnDisappeared.AddListener(OnTrayDisappeared);
				}
			}
		}

		public void BlockAll()
		{
			foreach (Tray tray in trays)
			{
				tray?.Block();
			}
		}

		public void UnblockAll()
		{
			foreach (Tray tray in trays)
			{
				tray?.Unblock();
			}
		}

		private void OnTrayDisappeared()
		{
			foreach (Tray tray in trays)
			{
				if (tray != null && !tray.IsGone)
				{
					return;
				}
			}
			if (completeSfx != null)
			{
				AudioManager.PlaySFX(completeSfx);
			}
			OnAllDisappeared?.Invoke();
		}
	}
}
