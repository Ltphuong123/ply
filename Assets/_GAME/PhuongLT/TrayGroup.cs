using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class TrayGroup : MonoBehaviour
    {
        [SerializeField] private List<Tray> trays;

        public UnityEvent OnAllDisappeared;

        private void Awake()
        {
            foreach (var tray in trays)
            {
                if (tray == null) continue;
                tray.OnDisappeared.AddListener(OnTrayDisappeared);
            }
        }

        public void BlockAll()
        {
            foreach (var tray in trays)
                tray?.Block();
        }

        public void UnblockAll()
        {
            foreach (var tray in trays)
                tray?.Unblock();
        }

        private void OnTrayDisappeared()
        {
            foreach (var tray in trays)
                if (tray != null && !tray.IsGone) return;

            OnAllDisappeared?.Invoke();
        }
    }
}
