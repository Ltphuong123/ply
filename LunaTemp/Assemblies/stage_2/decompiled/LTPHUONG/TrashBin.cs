using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
	public class TrashBin : MonoBehaviour
	{
		[SerializeField]
		private Transform dropPoint;

		[SerializeField]
		private Transform topPoint;

		[SerializeField]
		private float attractRadius = 1.5f;

		private static readonly List<TrashBin> allBins = new List<TrashBin>();

		private Transform tf;

		private Tween shakeTween;

		private Vector3 originalScale;

		public UnityEvent OnItemTrashed;

		private void Awake()
		{
			tf = base.transform;
			originalScale = tf.localScale;
		}

		private void OnEnable()
		{
			allBins.Add(this);
		}

		private void OnDisable()
		{
			allBins.Remove(this);
		}

		public Vector3 GetDropPoint()
		{
			return (dropPoint != null) ? dropPoint.position : tf.position;
		}

		public Vector3 GetTopPoint()
		{
			return (topPoint != null) ? topPoint.position : (GetDropPoint() + Vector3.up * 1.5f);
		}

		public bool IsInRange(Vector3 worldPos)
		{
			return Vector2.SqrMagnitude((Vector2)worldPos - (Vector2)GetDropPoint()) <= attractRadius * attractRadius;
		}

		public void Shake()
		{
			shakeTween?.Kill();
			tf.localScale = originalScale;
			shakeTween = tf.DOPunchScale(Vector3.one * 0.1f, 0.2f, 8).OnComplete(delegate
			{
				tf.localScale = originalScale;
			});
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
				if (!(allBins[i] == null))
				{
					float sqr = Vector2.SqrMagnitude((Vector2)worldPos - (Vector2)allBins[i].GetDropPoint());
					if (sqr < closestSqr)
					{
						closestSqr = sqr;
						closest = allBins[i];
					}
				}
			}
			return closest;
		}

		private void OnDestroy()
		{
			shakeTween?.Kill();
		}
	}
}
