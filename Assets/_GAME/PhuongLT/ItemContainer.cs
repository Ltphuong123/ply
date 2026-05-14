using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
    public class ItemContainer : InteractableBase
    {
        [Header("Container Settings")]
        [SerializeField] private Item[] items;
        [SerializeField] private Transform spawnPoint;
        [SerializeField] private float minHeight = 0f;
        [SerializeField] private float maxHeight = -2f;
        [SerializeField] private float minHorizontal = 5f;
        [SerializeField] private float maxHorizontal = -5f;
        [SerializeField] private float minDistanceFromContainer = 3f;
        [SerializeField] private float launchDuration = 0.5f;
        
        [Header("Bounce Animation")]
        [SerializeField] private float bounceIntensity = 0.2f;
        [SerializeField] private float bounceDuration = 0.4f;
        
        [Header("Audio")]
        [SerializeField] private AudioClip bounceSfx;
        [SerializeField] private AudioClip spawnSfx;
        
        [Header("Events")]
        public UnityEvent OnFirstClick;
        public UnityEvent OnItemSpawned;
        
        private int currentItemIndex;
        private bool isAnimating;
        private bool hasClickedOnce;
        private Vector3 originalScale;
        private Sequence bounceSequence;

        protected override void Awake()
        {
            base.Awake();
            originalScale = tf.localScale;
            HideAllItems();
        }

        private void HideAllItems()
        {
            if (items == null) return;
            
            for (int i = 0; i < items.Length; i++)
            {
                if (items[i] != null)
                {
                    items[i].gameObject.SetActive(false);
                    items[i].Block();
                }
            }
        }

        public override bool IsBlocked() => isAnimating || base.IsBlocked();

        public override void OnClick(Vector3 mouseWorldPosition)
        {
            if (isAnimating || items == null || items.Length == 0) return;
            if (currentItemIndex >= items.Length) return;
            
            SpawnItem();
        }

        private void SpawnItem()
        {
            isAnimating = true;
            
            if (!hasClickedOnce)
            {
                hasClickedOnce = true;
                OnFirstClick?.Invoke();
            }
            
            // Play bounce animation
            PlayBounceAnimation();
            
            // Spawn item after bounce starts
            DOVirtual.DelayedCall(bounceDuration * 0.3f, () =>
            {
                if (currentItemIndex < items.Length && items[currentItemIndex] != null)
                {
                    LaunchItem(items[currentItemIndex]);
                    currentItemIndex++;
                }
                
                isAnimating = false;
            });
        }

        private void PlayBounceAnimation()
        {
            AudioManager.PlaySfxRandomPitch(bounceSfx, 1f, 0.9f, 1f);
            
            bounceSequence?.Kill();
            tf.localScale = originalScale;
            
            Vector3 squash = new Vector3(
                originalScale.x * (1f + bounceIntensity),
                originalScale.y * (1f - bounceIntensity),
                originalScale.z
            );
            
            Vector3 stretch = new Vector3(
                originalScale.x * (1f - bounceIntensity * 0.5f),
                originalScale.y * (1f + bounceIntensity * 0.5f),
                originalScale.z
            );
            
            float t1 = bounceDuration * 0.3f;
            float t2 = bounceDuration * 0.4f;
            float t3 = bounceDuration * 0.3f;
            
            bounceSequence = DOTween.Sequence()
                .Append(tf.DOScale(squash, t1).SetEase(Ease.OutQuad))
                .Append(tf.DOScale(stretch, t2).SetEase(Ease.OutQuad))
                .Append(tf.DOScale(originalScale, t3).SetEase(Ease.OutBack));
        }

        private void LaunchItem(Item item)
        {
            Vector3 startPos = spawnPoint != null ? spawnPoint.position : tf.position;
            Vector3 containerPos = tf.position;
            
            // Try to find a valid position that is at least minDistanceFromContainer away
            Vector3 finalPos;
            int maxAttempts = 20;
            int attempts = 0;
            
            do
            {
                float randomHeight = Random.Range(minHeight, maxHeight);
                float randomX = Random.Range(minHorizontal, maxHorizontal);
                finalPos = new Vector3(randomX, randomHeight, startPos.z);
                attempts++;
                
                // Check distance from container
                float distance = Vector2.Distance(
                    new Vector2(finalPos.x, finalPos.y),
                    new Vector2(containerPos.x, containerPos.y)
                );
                
                if (distance >= minDistanceFromContainer)
                    break;
                    
            } while (attempts < maxAttempts);
            
            // If couldn't find valid position after max attempts, push away from container
            if (attempts >= maxAttempts)
            {
                Vector2 direction = (new Vector2(finalPos.x, finalPos.y) - new Vector2(containerPos.x, containerPos.y)).normalized;
                Vector2 offset = direction * minDistanceFromContainer;
                finalPos = new Vector3(containerPos.x + offset.x, containerPos.y + offset.y, startPos.z);
            }
            
            item.transform.position = startPos;
            item.transform.localScale = Vector3.zero;
            item.gameObject.SetActive(true);
            
            if (spawnSfx != null)
                AudioManager.PlaySFX(spawnSfx);
            
            Sequence launchSeq = DOTween.Sequence()
                .Append(item.transform.DOScale(Vector3.one, 0.2f).SetEase(Ease.OutBack))
                .Join(item.transform.DOMove(finalPos, launchDuration).SetEase(Ease.OutQuad))
                .OnComplete(() =>
                {
                    item.Unblock();
                    item.StartIdleEffect();
                });
            
            OnItemSpawned?.Invoke();
        }

        private void OnDestroy()
        {
            bounceSequence?.Kill();
        }
    }
}
