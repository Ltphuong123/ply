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
                Destroy(gameObject);
                return;
            }
            Instance = this;
        }
        
        [Preserve]
        public void gotoStore()
        {
            Debug.Log("Goto Store");
            // Luna.Unity.LifeCycle.GameEnded();
            // Luna.Unity.Playable.InstallFullGame();
        }

        [Preserve] public void BlockInteract() => IsAllowInteract = false;
        [Preserve] public void UnblockInteract() => IsAllowInteract = true;
    }
}
