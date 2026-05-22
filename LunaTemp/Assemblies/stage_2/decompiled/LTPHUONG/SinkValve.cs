using System;
using UnityEngine;

namespace LTPHUONG
{
	public class SinkValve : InteractableBase
	{
		[SerializeField]
		private AudioClip valveOnSfx;

		[SerializeField]
		private AudioClip valveOffSfx;

		[SerializeField]
		private float autoOffDelay = 2f;

		public Action OnValveOn;

		public Action OnValveOff;

		public bool IsOn { get; private set; }

		public override void OnClick(Vector3 mouseWorldPosition)
		{
			if (!IsBlocked())
			{
				Toggle();
			}
		}

		private void Toggle()
		{
			IsOn = !IsOn;
			if (IsOn)
			{
				if (valveOnSfx != null)
				{
					AudioManager.PlaySFX(valveOnSfx);
				}
				OnValveOn?.Invoke();
				CancelInvoke("AutoOff");
				Invoke("AutoOff", autoOffDelay);
			}
			else
			{
				CancelInvoke("AutoOff");
				if (valveOffSfx != null)
				{
					AudioManager.PlaySFX(valveOffSfx);
				}
				OnValveOff?.Invoke();
			}
		}

		private void AutoOff()
		{
			if (IsOn)
			{
				IsOn = false;
				if (valveOffSfx != null)
				{
					AudioManager.PlaySFX(valveOffSfx);
				}
				OnValveOff?.Invoke();
			}
		}

		public void ForceOff()
		{
			if (IsOn)
			{
				CancelInvoke("AutoOff");
				IsOn = false;
			}
		}
	}
}
