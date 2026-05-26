using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class GarbageGroup : MonoBehaviour
    {
        [SerializeField] private List<GarbageItem> items = new();
        [SerializeField] private AudioClip completeSfx;

        public UnityEvent OnAllTrashed;

        private int trashedCount;
        private bool isCompleted;

        private void Start()
        {
            for (int i = 0; i < items.Count; i++)
                if (items[i] != null) items[i].OnTrashed.AddListener(OnItemTrashed);
        }

        private void OnItemTrashed()
        {
            if (isCompleted) return;
            trashedCount++;
            if (trashedCount >= items.Count)
            {
                isCompleted = true;
                if (completeSfx != null) AudioManager.PlaySFX(completeSfx);
                OnAllTrashed?.Invoke();
            }
        }

        public void BlockAll()
        {
            for (int i = 0; i < items.Count; i++)
                if (items[i] != null) items[i].Block();
        }

        public void UnblockAll()
        {
            for (int i = 0; i < items.Count; i++)
                if (items[i] != null) items[i].Unblock();
        }

        private void OnDestroy()
        {
            for (int i = 0; i < items.Count; i++)
                if (items[i] != null) items[i].OnTrashed.RemoveListener(OnItemTrashed);
        }



    }
}
