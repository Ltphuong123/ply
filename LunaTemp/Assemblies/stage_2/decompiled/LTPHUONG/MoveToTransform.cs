using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

namespace LTPHUONG
{
	public class MoveToTransform : MonoBehaviour
	{
		[SerializeField]
		private Transform target;

		[SerializeField]
		private float delay = 0.5f;

		[SerializeField]
		private float duration = 0.5f;

		[SerializeField]
		private Ease ease = Ease.OutQuad;

		public UnityEvent OnMoveStart;

		public UnityEvent OnMoveComplete;

		private Sequence seq;

		public void Play()
		{
			if (!(target == null))
			{
				seq?.Kill();
				seq = DOTween.Sequence();
				seq.AppendInterval(delay);
				seq.AppendCallback(delegate
				{
					OnMoveStart?.Invoke();
				});
				seq.Append(base.transform.DOMove(target.position, duration).SetEase(ease));
				seq.Join(base.transform.DORotateQuaternion(target.rotation, duration).SetEase(ease));
				seq.Join(base.transform.DOScale(target.localScale, duration).SetEase(ease));
				seq.OnComplete(delegate
				{
					OnMoveComplete?.Invoke();
				});
			}
		}

		private void OnDestroy()
		{
			seq?.Kill();
		}
	}
}
