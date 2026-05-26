using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class Tray : InteractableBase
    {
        [Header("Animation")]
        [SerializeField] private float sinkDistance = 1f;
        [SerializeField] private float sinkDuration  = 0.25f;

        [Header("Audio")]
        [SerializeField] private AudioClip clickSfx;

        [HideInInspector] public UnityEvent OnDisappeared;

        private bool isAnimating;
        private Sequence seq;

        public bool IsGone => !gameObject.activeSelf;

        public override void OnClick(Vector3 mouseWorldPosition)
        {
            if (IsBlocked()) return;
            Block();
            isAnimating = true;

            if (clickSfx != null) AudioManager.PlaySFX(clickSfx);
            SetSortingOrder(2000);

            seq?.Kill();
            seq = DOTween.Sequence();

            seq.Append(tf.DOShakePosition(0.2f, new Vector3(0.12f, 0.06f, 0f), 20, 90, false, true));
            seq.Append(tf.DOMove(tf.position + Vector3.down * sinkDistance, sinkDuration).SetEase(Ease.InQuad));
            seq.OnComplete(() =>
            {
                isAnimating = false;
                gameObject.SetActive(false);
                OnDisappeared?.Invoke();
            });
        }

        public override bool IsBlocked() => isAnimating || base.IsBlocked();

        private void OnDestroy() => seq?.Kill();
    }
}
