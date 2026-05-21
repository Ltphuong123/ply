using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class CuttingFood : MonoBehaviour
    {
        [Header("Cut States")]
        [SerializeField] private GameObject[] cutStateObjects; // index 0 = nguyên, 1,2,3 = sau mỗi nhát cắt

        [Header("Effects")]
        [SerializeField] private ParticleSystem cutParticle;
        [SerializeField] private AudioClip cutSfx;

        [Header("Events")]
        public UnityEvent OnAllCutsDone;

        public bool IsCut { get; private set; }

        private int totalCuts = 3;
        private Transform tf;

        private void Awake()
        {
            tf = transform;
            RefreshCutState(0);
        }

        // Gọi bởi KnifeTool trước khi bắt đầu sequence để đồng bộ số nhát
        public void InitCuts(int count) => totalCuts = count;

        // Gọi bởi KnifeTool sau mỗi nhát (index 0,1,2,...)
        public void ReceiveCut(int cutIndex, Vector3 cutWorldPos)
        {
            if (IsCut) return;

            SpawnParticle(cutWorldPos);
            PlayShake();
            RefreshCutState(cutIndex + 1);

            if (cutIndex >= totalCuts - 1)
            {
                IsCut = true;
                OnAllCutsDone?.Invoke();
            }
        }

        private void RefreshCutState(int activeIndex)
        {
            if (cutStateObjects == null || cutStateObjects.Length == 0) return;
            int clamped = Mathf.Clamp(activeIndex, 0, cutStateObjects.Length - 1);
            for (int i = 0; i < cutStateObjects.Length; i++)
                if (cutStateObjects[i] != null)
                    cutStateObjects[i].SetActive(i == clamped);
        }

        private void PlayShake()
        {
            tf.DOKill();
            tf.DOShakePosition(0.15f, 0.15f, 20, 90, false, true);
        }

        private void SpawnParticle(Vector3 pos)
        {
            if (cutParticle == null) return;
            cutParticle.transform.position = pos + Vector3.up;
            cutParticle.Play();
        }
    }
}
