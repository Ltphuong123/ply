using DG.Tweening;
using UnityEngine;

namespace LTPHUONG
{
    public class KnifeTool : DragBase
    {
        [Header("Detection")]
        [SerializeField] private float detectRadius = 1.5f;

        [Header("Cut Motion")]
        [SerializeField] private int   cutCount          = 3;
        [SerializeField] private float cutSpacing        = 0.8f;
        [SerializeField] private float cutStartY         = -0.8f;
        [SerializeField] private float cutDepth          = 0.4f;
        [SerializeField] private float moveToPosDuration = 0.2f;
        [SerializeField] private float cutDownDuration   = 0.1f;

        [Header("Effects")]
        [SerializeField] private ParticleSystem cutParticle;

        [Header("Audio")]
        [SerializeField] private AudioClip cutSfx;

        private bool isCutting;
        private Vector3 originalPosition;
        private Quaternion originalRotation;
        private Vector3 originalScale;
        private Sequence cutSequence;

        private static readonly Collider2D[] overlapBuffer = new Collider2D[10];

        protected override void Awake()
        {
            base.Awake();
            originalPosition = tf.position;
            originalRotation = tf.rotation;
            originalScale    = tf.localScale;
        }

        protected override void OnDragEnd(Vector3 position)
        {
            CuttingFood food = FindFoodInRange();
            if (food != null && !food.IsCut)
                StartCutSequence(food);
            else
                ReturnToOrigin();
        }

        private CuttingFood FindFoodInRange()
        {
            int count = Physics2D.OverlapCircleNonAlloc(tf.position, detectRadius, overlapBuffer);
            CuttingFood closest   = null;
            float closestSqr = float.MaxValue;

            for (int i = 0; i < count; i++)
            {
                if (overlapBuffer[i] == null) continue;
                var food = overlapBuffer[i].GetComponent<CuttingFood>();
                if (food == null || food.IsCut) continue;

                float sqr = ((Vector2)tf.position - (Vector2)overlapBuffer[i].transform.position).sqrMagnitude;
                if (sqr < closestSqr) { closestSqr = sqr; closest = food; }
            }
            return closest;
        }

        private void StartCutSequence(CuttingFood food)
        {
            isCutting = true;

            Vector3 foodPos  = food.transform.position;
            float   z        = originalPosition.z;
            float   startX   = -(cutCount - 1) * 0.5f * cutSpacing;

            food.InitCuts(cutCount);

            cutSequence?.Kill();
            cutSequence = DOTween.Sequence();

            for (int i = 0; i < cutCount; i++)
            {
                float x     = startX + i * cutSpacing;
                int   index = i;

                Vector3 above = new(foodPos.x + x, foodPos.y + cutStartY,            z);
                Vector3 below = new(foodPos.x + x, foodPos.y + cutStartY - cutDepth, z);

                cutSequence
                    .Append(tf.DOMove(above, moveToPosDuration).SetEase(Ease.OutQuad))
                    .AppendCallback(() => cutParticle?.Play())
                    .Append(tf.DOMove(below, cutDownDuration).SetEase(Ease.InQuad))
                    .AppendCallback(() =>
                    {
                        if (cutSfx != null) AudioManager.PlaySFX(cutSfx);
                        food.ReceiveCut(index, below);
                    });
            }

            cutSequence
                .Append(tf.DOMove(originalPosition, 0.4f).SetEase(Ease.OutQuad))
                .Join(tf.DORotateQuaternion(originalRotation, 0.35f).SetEase(Ease.OutQuad))
                .Join(tf.DOScale(originalScale, 0.2f).SetEase(Ease.OutQuad))
                .OnComplete(() => isCutting = false);
        }

        private void ReturnToOrigin()
        {
            DOTween.Sequence()
                .Append(tf.DOMove(originalPosition, 0.35f).SetEase(Ease.OutQuad))
                .Join(tf.DORotateQuaternion(originalRotation, 0.3f).SetEase(Ease.OutQuad))
                .Join(tf.DOScale(originalScale, 0.2f).SetEase(Ease.OutQuad));
        }

        public override bool IsBlocked() => isCutting || base.IsBlocked();

        private void OnDestroy() => cutSequence?.Kill();

#if UNITY_EDITOR
        private void OnDrawGizmosSelected()
        {
            Gizmos.color = new Color(1f, 0.2f, 0.2f, 0.25f);
            Gizmos.DrawWireSphere(transform.position, detectRadius);
        }
#endif
    }
}
