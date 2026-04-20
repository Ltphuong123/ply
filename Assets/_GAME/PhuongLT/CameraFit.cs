using UnityEngine;

namespace LTPHUONG
{
    public class CameraFit : MonoBehaviour
    {
        [SerializeField] private Camera cam;
        [SerializeField] private float designWidth = 9f;
        [SerializeField] private float designHeight = 16f;

        private void Awake()
        {
            if (cam == null) cam = Camera.main;
            Fit();
        }

        private void Fit()
        {
            float designRatio = designWidth / designHeight;
            float screenRatio = (float)Screen.width / Screen.height;

            if (screenRatio < designRatio)
            {
                cam.orthographicSize *= designRatio / screenRatio;
            }
        }
    }
}
