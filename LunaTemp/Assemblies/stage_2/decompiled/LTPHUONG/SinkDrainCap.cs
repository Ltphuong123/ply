using System;
using DG.Tweening;
using UnityEngine;

namespace LTPHUONG
{
	public class SinkDrainCap : DragBase
	{
		[SerializeField]
		private Transform drainPoint;

		[SerializeField]
		private float snapRadius = 1.5f;

		[SerializeField]
		private AudioClip plugSfx;

		[SerializeField]
		private AudioClip unplugSfx;

		[Header("Lock Condition")]
		[SerializeField]
		private SinkVegetable[] vegetables;

		public Action OnPlugged;

		public Action OnUnplugged;

		private Vector3 originalPosition;

		private Quaternion originalRotation;

		private Vector3 originalScale;

		private Tween returnTween;

		public bool IsPlugged { get; private set; }

		protected override void Awake()
		{
			base.Awake();
			originalPosition = tf.position;
			originalRotation = tf.rotation;
			originalScale = tf.localScale;
		}

		public override bool IsBlocked()
		{
			if (IsPlugged && !AllVegetablesWashed())
			{
				return true;
			}
			return base.IsBlocked();
		}

		private bool AllVegetablesWashed()
		{
			if (vegetables == null || vegetables.Length == 0)
			{
				return true;
			}
			for (int i = 0; i < vegetables.Length; i++)
			{
				if (vegetables[i] != null && !vegetables[i].IsInBasket)
				{
					return false;
				}
			}
			return true;
		}

		protected override void OnDragEnd(Vector3 position)
		{
			if (IsPlugged)
			{
				DoUnplug();
				return;
			}
			float dist = ((drainPoint != null) ? Vector3.Distance(tf.position, drainPoint.position) : float.MaxValue);
			if (dist <= snapRadius)
			{
				DoPlug();
			}
			else
			{
				ReturnToOrigin();
			}
		}

		private void DoPlug()
		{
			IsPlugged = true;
			Block();
			if (plugSfx != null)
			{
				AudioManager.PlaySFX(plugSfx);
			}
			returnTween?.Kill();
			returnTween = DOTween.Sequence().Append(tf.DOMove(drainPoint.position, 0.25f).SetEase(Ease.OutBack)).Join(tf.DORotateQuaternion(drainPoint.rotation, 0.2f).SetEase(Ease.OutQuad))
				.Join(tf.DOScale(originalScale, 0.2f).SetEase(Ease.OutQuad))
				.OnComplete(delegate
				{
					Unblock();
					OnPlugged?.Invoke();
				});
		}

		private void DoUnplug()
		{
			IsPlugged = false;
			if (unplugSfx != null)
			{
				AudioManager.PlaySFX(unplugSfx);
			}
			OnUnplugged?.Invoke();
			ReturnToOrigin();
		}

		private void ReturnToOrigin()
		{
			returnTween?.Kill();
			returnTween = DOTween.Sequence().Append(tf.DOMove(originalPosition, 0.35f).SetEase(Ease.OutQuad)).Join(tf.DORotateQuaternion(originalRotation, 0.3f).SetEase(Ease.OutQuad))
				.Join(tf.DOScale(originalScale, 0.2f).SetEase(Ease.OutQuad));
		}

		private void OnDestroy()
		{
			returnTween?.Kill();
		}
	}
}
