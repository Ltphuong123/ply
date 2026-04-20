using DG.Tweening;
using UnityEngine;
using UnityEngine.Scripting;
using UnityEngine.UI;

namespace LTPHUONG
{
    public class UIButtonPulse : MonoBehaviour
    {
        [SerializeField] private Button button;
        [SerializeField] private RectTransform imageRect;
        [SerializeField] private float scaleMin = 0.9f;
        [SerializeField] private float scaleMax = 1.1f;
        [SerializeField] private float pulseDuration = 0.5f;

        [Header("Landscape Layout")]
        [SerializeField] private Vector2 landscapeImagePos;
        [SerializeField] private Vector2 landscapeButtonPos;

        private RectTransform rt;
        private Tween pulseTween;
        private Vector2 portraitImagePos;
        private Vector2 portraitButtonPos;
        private bool wasLandscape;

        private void Awake()
        {
            rt = button.GetComponent<RectTransform>();

            if (imageRect != null)
                portraitImagePos = imageRect.anchoredPosition;
            portraitButtonPos = rt.anchoredPosition;
            wasLandscape = Screen.width > Screen.height;

            button.gameObject.SetActive(false);
            ApplyLayout();
        }

        private void Update()
        {
            bool isLandscape = Screen.width > Screen.height;
            if (isLandscape != wasLandscape)
            {
                wasLandscape = isLandscape;
                ApplyLayout();
            }
        }

        private void ApplyLayout()
        {
            bool isLandscape = Screen.width > Screen.height;

            if (isLandscape)
            {
                if (imageRect != null)
                    imageRect.anchoredPosition = landscapeImagePos;
                rt.anchoredPosition = landscapeButtonPos;
            }
            else
            {
                if (imageRect != null)
                    imageRect.anchoredPosition = portraitImagePos;
                rt.anchoredPosition = portraitButtonPos;
            }
        }

        [Preserve] public void Show()
        {
            button.gameObject.SetActive(true);
            rt.localScale = Vector3.one * scaleMin;

            pulseTween?.Kill();
            pulseTween = rt.DOScale(scaleMax, pulseDuration)
                .SetEase(Ease.InOutSine)
                .SetLoops(-1, LoopType.Yoyo);
        }

        [Preserve] public void Hide()
        {
            pulseTween?.Kill();
            pulseTween = null;
            rt.localScale = Vector3.one;
            button.gameObject.SetActive(false);
        }

        private void OnDestroy()
        {
            pulseTween?.Kill();
        }
    }
}
