using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class WebItemGroup : MonoBehaviour
    {
        [SerializeField] private List<WebItem> webItems = new();
        
        public UnityEvent OnAllWebsRemoved;
        
        private int removedCount;
        private bool isCompleted;

        private void Start()
        {
            foreach (var web in webItems)
            {
                if (web != null)
                    web.OnRemoved += OnWebRemoved;
            }
        }

        private void OnWebRemoved()
        {
            if (isCompleted) return;
            
            removedCount++;
            
            if (removedCount >= webItems.Count)
            {
                isCompleted = true;
                OnAllWebsRemoved?.Invoke();
            }
        }

        private void OnDestroy()
        {
            foreach (var web in webItems)
            {
                if (web != null)
                    web.OnRemoved -= OnWebRemoved;
            }
        }

#if UNITY_EDITOR
        [ContextMenu("Setup Web Items")]
        private void SetupWebItems()
        {
            webItems.Clear();
            webItems.AddRange(GetComponentsInChildren<WebItem>(true));
            UnityEditor.EditorUtility.SetDirty(this);
        }
#endif
    }
}
