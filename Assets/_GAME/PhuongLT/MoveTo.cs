using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class MoveTo : MonoBehaviour
    {
        [SerializeField] private Vector2 targetPosition = new Vector2(-2.41f, 3.43f);
        [SerializeField] private float duration = 0.5f;
        [SerializeField] private Ease ease = Ease.OutQuad;
        [SerializeField] private AudioClip moveSound;

        public UnityEvent OnMoveComplete;

        private Tween moveTween;
        private Transform tf;

        private void Awake() => tf = transform;

        public void Move()
        {
            moveTween?.Kill();
            AudioManager.PlaySFX(moveSound);
            Vector3 target = new(targetPosition.x, targetPosition.y, tf.position.z);
            moveTween = tf.DOMove(target, duration).SetEase(ease)
                          .OnComplete(() => OnMoveComplete?.Invoke());
        }

        private void OnDestroy() => moveTween?.Kill();
    }
}
