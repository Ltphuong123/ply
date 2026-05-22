using System;
using UnityEngine;

namespace LTPHUONG
{
	public class SinkSystem : MonoBehaviour
	{
		[Header("Components")]
		[SerializeField]
		private SinkDrainCap drainCap;

		[SerializeField]
		private SinkValve valve;

		[Header("Water GameObjects")]
		[SerializeField]
		private GameObject waterSurface;

		[SerializeField]
		private GameObject waterFlow;

		[Header("Audio")]
		[SerializeField]
		private AudioSource waterLoopSource;

		private bool waterFilled;

		public bool HasWater => waterFilled;

		private void Start()
		{
			waterSurface?.SetActive(false);
			waterFlow?.SetActive(false);
			valve?.Block();
			SinkDrainCap sinkDrainCap = drainCap;
			sinkDrainCap.OnPlugged = (Action)Delegate.Combine(sinkDrainCap.OnPlugged, new Action(HandleDrainPlugged));
			SinkDrainCap sinkDrainCap2 = drainCap;
			sinkDrainCap2.OnUnplugged = (Action)Delegate.Combine(sinkDrainCap2.OnUnplugged, new Action(HandleDrainUnplugged));
			SinkValve sinkValve = valve;
			sinkValve.OnValveOn = (Action)Delegate.Combine(sinkValve.OnValveOn, new Action(HandleValveOn));
			SinkValve sinkValve2 = valve;
			sinkValve2.OnValveOff = (Action)Delegate.Combine(sinkValve2.OnValveOff, new Action(HandleValveOff));
		}

		private void HandleDrainPlugged()
		{
			valve?.Unblock();
		}

		private void HandleDrainUnplugged()
		{
			waterFilled = false;
			waterSurface?.SetActive(false);
			waterFlow?.SetActive(false);
			waterLoopSource?.Stop();
			valve?.ForceOff();
			valve?.Block();
		}

		private void HandleValveOn()
		{
			waterFlow?.SetActive(true);
			waterLoopSource?.Play();
			if (!waterFilled)
			{
				waterFilled = true;
				waterSurface?.SetActive(true);
			}
		}

		private void HandleValveOff()
		{
			waterFlow?.SetActive(false);
			waterLoopSource?.Stop();
		}

		private void OnDestroy()
		{
			if (drainCap != null)
			{
				SinkDrainCap sinkDrainCap = drainCap;
				sinkDrainCap.OnPlugged = (Action)Delegate.Remove(sinkDrainCap.OnPlugged, new Action(HandleDrainPlugged));
				SinkDrainCap sinkDrainCap2 = drainCap;
				sinkDrainCap2.OnUnplugged = (Action)Delegate.Remove(sinkDrainCap2.OnUnplugged, new Action(HandleDrainUnplugged));
			}
			if (valve != null)
			{
				SinkValve sinkValve = valve;
				sinkValve.OnValveOn = (Action)Delegate.Remove(sinkValve.OnValveOn, new Action(HandleValveOn));
				SinkValve sinkValve2 = valve;
				sinkValve2.OnValveOff = (Action)Delegate.Remove(sinkValve2.OnValveOff, new Action(HandleValveOff));
			}
		}
	}
}
