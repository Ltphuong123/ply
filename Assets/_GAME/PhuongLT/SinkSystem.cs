using UnityEngine;

namespace LTPHUONG
{
    public class SinkSystem : MonoBehaviour
    {
        [Header("Components")]
        [SerializeField] private SinkValve valve;

        [Header("Water GameObjects")]
        [SerializeField] private GameObject waterSurface;
        [SerializeField] private GameObject waterFlow;

        [Header("Audio")]
        [SerializeField] private AudioSource waterLoopSource; // AudioSource voi Loop = true, Play On Awake = false

        public bool HasWater => waterFilled;

        private bool waterFilled;

        private void Start()
        {
            waterSurface?.SetActive(false);
            waterFlow?.SetActive(false);

            valve.OnValveOn  += HandleValveOn;
            valve.OnValveOff += HandleValveOff;
        }

        // Mo van → bat dong chay + lan dau bat mat nuoc
        private void HandleValveOn()
        {
            waterFlow?.SetActive(true);
            waterLoopSource?.Play();

            if (!waterFilled)
            {
                waterFilled = true;
                waterSurface?.SetActive(true);
            }
        }

        // Tat van → chi tat dong chay, mat nuoc giu nguyen
        private void HandleValveOff()
        {
            waterFlow?.SetActive(false);
            waterLoopSource?.Stop();
        }

        private void OnDestroy()
        {
            if (valve != null)
            {
                valve.OnValveOn  -= HandleValveOn;
                valve.OnValveOff -= HandleValveOff;
            }
        }
    }
}
