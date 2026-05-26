using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class CuttingFood : DragBase
    {
        public enum FoodState { OnPlate, OnBoard, ReturnedToPlate }

        [Header("Cut States")]
        [SerializeField] private GameObject[] cutStateObjects; // index 0 = nguyen, 1,2,3... = sau moi nhat cat

        [Header("Board Detection")]
        [SerializeField] private Transform boardZone;       // tam vung that
        [SerializeField] private float boardRadius = 2f;    // ban kinh de xac dinh "tren that"

        [Header("Effects")]
        [SerializeField] private ParticleSystem cutParticle;
        [SerializeField] private AudioClip placeSfx;

        [Header("Events")]
        public UnityEvent OnPlacedOnBoard;
        public UnityEvent OnAllCutsDone;
        public UnityEvent OnReturnedToPlate;

        public bool IsCut { get; private set; }
        public FoodState State { get; private set; } = FoodState.OnPlate;
        public bool IsOnBoard => State == FoodState.OnBoard;

        private int totalCuts = 3;
        private bool isReturning;
        [SerializeField] private Vector3 platePosition;

        protected override void Awake()
        {
            base.Awake();
            if (platePosition == Vector3.zero) platePosition = tf.position;
            RefreshCutState(0);
        }

        public void InitCuts(int count) => totalCuts = count;

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
                // Tu dong quay ve dia sau khi cat xong
                MoveToPlate(() =>
                {
                    State = FoodState.ReturnedToPlate;
                    OnReturnedToPlate?.Invoke();
                });
            }
        }

        public override bool IsBlocked()
        {
            if (isReturning) return true;
            if (State == FoodState.OnBoard) return true;
            if (State == FoodState.ReturnedToPlate) return true;
            return base.IsBlocked();
        }

        protected override void OnDragStart(Vector3 position)
        {
            tf.DOKill();
            tf.DOShakeScale(0.15f, 0.08f, 10, 90, false);
        }

        protected override void OnDragBegin(Vector3 position)
        {
            tf.DOKill();
            BringToFront();
            tf.DOScale(new Vector3(1.08f, 1.08f, 1f), 0.15f).SetEase(Ease.OutQuad);
        }

        protected override void OnDragEnd(Vector3 position)
        {
            if (State != FoodState.OnPlate) return;
            TryPlaceOnBoard();
        }

        private void TryPlaceOnBoard()
        {
            bool nearBoard = boardZone != null && Vector3.Distance(tf.position, boardZone.position) <= boardRadius;
            if (nearBoard)
            {
                tf.DOScale(Vector3.one, 0.1f).SetEase(Ease.OutQuad);
                if (placeSfx != null) AudioManager.PlaySFX(placeSfx);
                State = FoodState.OnBoard;
                OnPlacedOnBoard?.Invoke();
            }
            else
            {
                MoveToPlate(null);
            }
        }

        private void MoveToPlate(System.Action onComplete)
        {
            isReturning = true;
            tf.DOKill();
            DOTween.Sequence()
                .AppendInterval(0.5f)
                .Append(tf.DOMove(platePosition, 0.35f).SetEase(Ease.OutQuad))
                .Join(tf.DOScale(Vector3.one, 0.3f).SetEase(Ease.OutQuad))
                .AppendCallback(() => { if (placeSfx != null) AudioManager.PlaySFX(placeSfx); })
                .OnComplete(() =>
                {
                    isReturning = false;
                    onComplete?.Invoke();
                });
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

        private void OnDestroy() => tf.DOKill();

#if UNITY_EDITOR
        private void OnDrawGizmosSelected()
        {
            if (boardZone != null)
            {
                Gizmos.color = new Color(0.2f, 1f, 0.2f, 0.35f);
                Gizmos.DrawWireSphere(boardZone.position, boardRadius);
            }

            Gizmos.color = new Color(1f, 0.4f, 0f, 0.6f);
            Gizmos.DrawSphere(transform.position, 0.1f);
        }
#endif
    }
}
