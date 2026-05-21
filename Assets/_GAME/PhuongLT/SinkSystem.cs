using UnityEngine;

namespace LTPHUONG
{
    public class SinkSystem : MonoBehaviour
    {
        [Header("Components")]
        [SerializeField] private SinkDrainCap drainCap;
        [SerializeField] private SinkValve valve;

        [Header("Water GameObjects")]
        [SerializeField] private GameObject waterSurface;
        [SerializeField] private GameObject waterFlow;

        [Header("Audio")]
        [SerializeField] private AudioSource waterLoopSource; // AudioSource voi Loop = true, Play On Awake = false

        public bool HasWater => waterFilled;

        // Mặt nước chỉ tắt khi kéo nắp ra, không tắt khi tắt van
        private bool waterFilled;

        private void Start()
        {
            waterSurface?.SetActive(false);
            waterFlow?.SetActive(false);

            // Van bị khóa cho đến khi nắp được đặt vào
            valve?.Block();

            drainCap.OnPlugged  += HandleDrainPlugged;
            drainCap.OnUnplugged += HandleDrainUnplugged;
            valve.OnValveOn     += HandleValveOn;
            valve.OnValveOff    += HandleValveOff;
        }

        // Nắp đặt vào → mở khóa van
        private void HandleDrainPlugged()
        {
            valve?.Unblock();
        }

        // Kéo nắp ra → tắt tất cả, khóa van
        private void HandleDrainUnplugged()
        {
            waterFilled = false;
            waterSurface?.SetActive(false);
            waterFlow?.SetActive(false);
            waterLoopSource?.Stop();

            valve?.ForceOff();
            valve?.Block();
        }

        // Mở van → bật dòng chảy + lần đầu bật mặt nước
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

        // Tắt van → chỉ tắt dòng chảy, mặt nước giữ nguyên (nắp còn đó)
        private void HandleValveOff()
        {
            waterFlow?.SetActive(false);
            waterLoopSource?.Stop();
        }

        private void OnDestroy()
        {
            if (drainCap != null)
            {
                drainCap.OnPlugged   -= HandleDrainPlugged;
                drainCap.OnUnplugged -= HandleDrainUnplugged;
            }
            if (valve != null)
            {
                valve.OnValveOn  -= HandleValveOn;
                valve.OnValveOff -= HandleValveOff;
            }
        }
    }
}
