using Luna.Unity;
using UnityEngine;
using UnityEngine.Scripting;

namespace LTPHUONG
{
	public class GameState : MonoBehaviour
	{
		public static GameState Instance { get; private set; }

		public bool IsAllowInteract { get; set; } = true;


		private void Awake()
		{
			if (Instance != null)
			{
				Object.Destroy(base.gameObject);
			}
			else
			{
				Instance = this;
			}
		}

		
		public void gotoStore()
		{
			Debug.Log("Goto Store");
			LifeCycle.GameEnded();
			Playable.InstallFullGame();
		}

		
		public void BlockInteract()
		{
			IsAllowInteract = false;
		}

		
		public void UnblockInteract()
		{
			IsAllowInteract = true;
		}
	}
}
