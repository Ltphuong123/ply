using UnityEngine;

namespace LTPHUONG
{
    // Yêu cầu Collider2D để ClickController có thể raycast
    public class SinkValve : InteractableBase
    {
        [SerializeField] private AudioClip valveOnSfx;
        [SerializeField] private AudioClip valveOffSfx;

        public bool IsOn { get; private set; }

        public System.Action OnValveOn;
        public System.Action OnValveOff;

        public override void OnClick(Vector3 mouseWorldPosition)
        {
            if (IsBlocked()) return;
            Toggle();
        }

        private void Toggle()
        {
            IsOn = !IsOn;

            if (IsOn)
            {
                if (valveOnSfx != null) AudioManager.PlaySFX(valveOnSfx);
                OnValveOn?.Invoke();
            }
            else
            {
                if (valveOffSfx != null) AudioManager.PlaySFX(valveOffSfx);
                OnValveOff?.Invoke();
            }
        }

        public void ForceOff()
        {
            if (!IsOn) return;
            IsOn = false;
        }
    }
}
