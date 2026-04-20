using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class ItemGroup : MonoBehaviour
    {
        [SerializeField] private List<Item> items = new();
        [SerializeField] private UnityEvent onAllCorrect;
        [SerializeField] private AudioClip allCorrectSfx;
        [SerializeField] private float delayBeforeComplete = 1f;

        private int correctCount;

        private void Start()
        {
            foreach (var item in items)
                if (item != null) item.OnPlacedCorrectly.AddListener(OnItemCorrect);
        }

        private void OnItemCorrect()
        {
            correctCount++;
            if (correctCount >= items.Count)
                StartCoroutine(DelayedComplete());
        }

        private IEnumerator DelayedComplete()
        {
            yield return new WaitForSeconds(delayBeforeComplete);
            if (allCorrectSfx != null) AudioManager.PlaySFX(allCorrectSfx);
            onAllCorrect?.Invoke();
        }

        public void BlockAll()
        {
            foreach (var item in items)
                if (item != null) item.Block();
        }

        public void UnblockAll()
        {
            foreach (var item in items)
                if (item != null) item.Unblock();
        }

        private void OnDestroy()
        {
            foreach (var item in items)
                if (item != null) item.OnPlacedCorrectly.RemoveListener(OnItemCorrect);
        }


    }
}
