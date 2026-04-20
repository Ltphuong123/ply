using System.Collections;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Scripting;

namespace LTPHUONG
{
    public class CounterEvent : MonoBehaviour
    {
        [SerializeField] private int targetCount = 1;
        [SerializeField] private float delay;
        [SerializeField] private AudioClip sfx;

        public UnityEvent OnTargetReached;

        private int currentCount;
        private bool isCompleted;

        [Preserve] public void Invokde()
        {
            if (isCompleted) return;
            currentCount++;
            if (currentCount >= targetCount)
            {
                isCompleted = true;
                if (delay > 0f)
                    StartCoroutine(DelayedInvoke());
                else
                {
                    PlayEffects();
                    OnTargetReached?.Invoke();
                }
            }
        }

        private IEnumerator DelayedInvoke()
        {
            yield return new WaitForSeconds(delay);
            PlayEffects();
            OnTargetReached?.Invoke();
        }

        private void PlayEffects()
        {
            if (sfx != null)
                AudioManager.PlaySFX(sfx);
        }

        [Preserve] public void ResetCounter()
        {
            currentCount = 0;
            isCompleted = false;
            StopAllCoroutines();
        }
    }
}
