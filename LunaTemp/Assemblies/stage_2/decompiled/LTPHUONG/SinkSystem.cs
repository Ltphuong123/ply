using System;
using UnityEngine;

namespace LTPHUONG
{
	public class SinkSystem : MonoBehaviour
	{
		[Header("Components")]
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
			SinkValve sinkValve = valve;
			sinkValve.OnValveOn = (Action)Delegate.Combine(sinkValve.OnValveOn, new Action(HandleValveOn));
			SinkValve sinkValve2 = valve;
			sinkValve2.OnValveOff = (Action)Delegate.Combine(sinkValve2.OnValveOff, new Action(HandleValveOff));
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
