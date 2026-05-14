using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class ClickableObject : InteractableBase
    {
        [SerializeField] private UnityEvent onClick;
        [SerializeField] private AudioClip clickSound;

        public override void OnClick(Vector3 mouseWorldPosition)
        {
            if (IsBlocked()) return;
            
            if (clickSound != null)
                AudioManager.PlaySFX(clickSound);
            
            onClick?.Invoke();
        }
    }
}
