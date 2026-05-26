using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class MoveToTransform : MonoBehaviour
    {
        [SerializeField] private Transform target;
        [SerializeField] private float delay = 0.5f;
        [SerializeField] private float duration = 0.5f;
        [SerializeField] private Ease ease = Ease.OutQuad;

        public UnityEvent OnMoveStart;
        public UnityEvent OnMoveComplete;

        private Sequence seq;

        public void Play()
        {
            if (target == null) return;

            seq?.Kill();
            seq = DOTween.Sequence();

            seq.AppendInterval(delay);
            seq.AppendCallback(() => OnMoveStart?.Invoke());
            seq.Append(transform.DOMove(target.position, duration).SetEase(ease));
            seq.Join(transform.DORotateQuaternion(target.rotation, duration).SetEase(ease));
            seq.Join(transform.DOScale(target.localScale, duration).SetEase(ease));
            seq.OnComplete(() => OnMoveComplete?.Invoke());
        }

        private void OnDestroy() => seq?.Kill();
    }
}
