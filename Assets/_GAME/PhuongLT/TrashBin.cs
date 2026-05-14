using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class TrashBin : MonoBehaviour
    {
        [SerializeField] private Transform dropPoint;
        [SerializeField] private Transform topPoint;
        [SerializeField] private float attractRadius = 1.5f;

        private static readonly List<TrashBin> allBins = new();

        private Transform tf;
        private Tween shakeTween;
        private Vector3 originalScale;

        public UnityEvent OnItemTrashed;

        private void Awake()
        {
            tf = transform;
            originalScale = tf.localScale;
        }
        private void OnEnable() => allBins.Add(this);
        private void OnDisable() => allBins.Remove(this);

        public Vector3 GetDropPoint() => dropPoint != null ? dropPoint.position : tf.position;
        public Vector3 GetTopPoint() => topPoint != null ? topPoint.position : GetDropPoint() + Vector3.up * 1.5f;

        public bool IsInRange(Vector3 worldPos) =>
            Vector2.SqrMagnitude((Vector2)worldPos - (Vector2)GetDropPoint()) <= attractRadius * attractRadius;

        public void Shake()
        {
            shakeTween?.Kill();
            tf.localScale = originalScale;
            shakeTween = tf.DOPunchScale(Vector3.one * 0.1f, 0.2f, 8)
                .OnComplete(() => tf.localScale = originalScale);
        }

        public void OnItemDropped()
        {
            Shake();
            OnItemTrashed?.Invoke();
        }

        public static TrashBin FindClosestBin(Vector3 worldPos)
        {
            TrashBin closest = null;
            float closestSqr = float.MaxValue;
            for (int i = 0; i < allBins.Count; i++)
            {
                if (allBins[i] == null) continue;
                float sqr = Vector2.SqrMagnitude((Vector2)worldPos - (Vector2)allBins[i].GetDropPoint());
                if (sqr < closestSqr) { closestSqr = sqr; closest = allBins[i]; }
            }
            return closest;
        }

        private void OnDestroy() => shakeTween?.Kill();

#if UNITY_EDITOR
        private void OnDrawGizmosSelected()
        {
            Vector3 center = dropPoint != null ? dropPoint.position : transform.position;
            Gizmos.color = new Color(0f, 1f, 0f, 0.3f);
            Gizmos.DrawWireSphere(center, attractRadius);
        }
#endif
    }
}
