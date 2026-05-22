using System;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
	public class CuttingFood : DragBase
	{
		public enum FoodState
		{
			OnPlate,
			OnBoard,
			ReturnedToPlate
		}

		[Header("Cut States")]
		[SerializeField]
		private GameObject[] cutStateObjects;

		[Header("Board Detection")]
		[SerializeField]
		private Transform boardZone;

		[SerializeField]
		private float boardRadius = 2f;

		[Header("Plate Zone")]
		[SerializeField]
		private Transform plateZone;

		[SerializeField]
		private float plateZoneRadius = 2f;

		[Header("Effects")]
		[SerializeField]
		private ParticleSystem cutParticle;

		[SerializeField]
		private AudioClip placeSfx;

		[Header("Events")]
		public UnityEvent OnPlacedOnBoard;

		public UnityEvent OnAllCutsDone;

		public UnityEvent OnReturnedToPlate;

		private int totalCuts = 3;

		private bool isReturning;

		private Vector3 platePosition;

		public bool IsCut { get; private set; }

		public FoodState State { get; private set; } = FoodState.OnPlate;


		public bool IsOnBoard => State == FoodState.OnBoard;

		protected override void Awake()
		{
			base.Awake();
			platePosition = tf.position;
			RefreshCutState(0);
		}

		public void InitCuts(int count)
		{
			totalCuts = count;
		}

		public void ReceiveCut(int cutIndex, Vector3 cutWorldPos)
		{
			if (!IsCut)
			{
				SpawnParticle(cutWorldPos);
				PlayShake();
				RefreshCutState(cutIndex + 1);
				if (cutIndex >= totalCuts - 1)
				{
					IsCut = true;
					OnAllCutsDone?.Invoke();
				}
			}
		}

		public override bool IsBlocked()
		{
			if (isReturning)
			{
				return true;
			}
			if (State == FoodState.OnBoard && !IsCut)
			{
				return true;
			}
			if (State == FoodState.ReturnedToPlate)
			{
				return true;
			}
			return base.IsBlocked();
		}

		protected override void OnDragStart(Vector3 position)
		{
			tf.DOKill();
			tf.DOShakeScale(0.15f, 0.08f, 10, 90f, false);
		}

		protected override void OnDragBegin(Vector3 position)
		{
			tf.DOKill();
			BringToFront();
			tf.DOScale(new Vector3(1.08f, 1.08f, 1f), 0.15f).SetEase(Ease.OutQuad);
		}

		protected override void OnDragEnd(Vector3 position)
		{
			switch (State)
			{
			case FoodState.OnPlate:
				TryPlaceOnBoard();
				break;
			case FoodState.OnBoard:
				TryReturnToPlate();
				break;
			}
		}

		private void TryPlaceOnBoard()
		{
			if (boardZone != null && Vector3.Distance(tf.position, boardZone.position) <= boardRadius)
			{
				tf.DOScale(Vector3.one, 0.1f).SetEase(Ease.OutQuad);
				if (placeSfx != null)
				{
					AudioManager.PlaySFX(placeSfx);
				}
				State = FoodState.OnBoard;
				OnPlacedOnBoard?.Invoke();
			}
			else
			{
				MoveToPlate(null);
			}
		}

		private void TryReturnToPlate()
		{
			if (plateZone != null && Vector3.Distance(tf.position, plateZone.position) <= plateZoneRadius)
			{
				MoveToPlate(delegate
				{
					State = FoodState.ReturnedToPlate;
					OnReturnedToPlate?.Invoke();
				});
			}
			else
			{
				tf.DOScale(Vector3.one, 0.1f).SetEase(Ease.OutQuad);
			}
		}

		private void MoveToPlate(Action onComplete)
		{
			isReturning = true;
			tf.DOKill();
			DOTween.Sequence().Append(tf.DOMove(platePosition, 0.3f).SetEase(Ease.OutQuad)).Join(tf.DOScale(Vector3.one, 0.25f).SetEase(Ease.OutQuad))
				.AppendCallback(delegate
				{
					if (placeSfx != null)
					{
						AudioManager.PlaySFX(placeSfx);
					}
				})
				.OnComplete(delegate
				{
					isReturning = false;
					onComplete?.Invoke();
				});
		}

		private void RefreshCutState(int activeIndex)
		{
			if (cutStateObjects == null || cutStateObjects.Length == 0)
			{
				return;
			}
			int clamped = Mathf.Clamp(activeIndex, 0, cutStateObjects.Length - 1);
			for (int i = 0; i < cutStateObjects.Length; i++)
			{
				if (cutStateObjects[i] != null)
				{
					cutStateObjects[i].SetActive(i == clamped);
				}
			}
		}

		private void PlayShake()
		{
			tf.DOKill();
			tf.DOShakePosition(0.15f, 0.15f, 20);
		}

		private void SpawnParticle(Vector3 pos)
		{
			if (!(cutParticle == null))
			{
				cutParticle.transform.position = pos + Vector3.up;
				cutParticle.Play();
			}
		}

		private void OnDestroy()
		{
			tf.DOKill();
		}
	}
}
