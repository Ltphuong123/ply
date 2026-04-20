using UnityEngine;

namespace LTPHUONG
{
	public class RevealPen : ToolBase
	{
		[SerializeField]
		private Transform penTip;

		[SerializeField]
		private RevealImage[] revealImages;

		[SerializeField]
		private float paintInterval = 0.01f;

		private float lastPaintTime;

		private bool isPainting;

		private Vector3 PenTipPosition => (penTip != null) ? penTip.position : tf.position;

		protected override void OnDragBegin(Vector3 position)
		{
			base.OnDragBegin(position);
			isPainting = true;
			DoPaint(PenTipPosition);
		}

		protected override void OnDragging(Vector3 position)
		{
			if (isPainting && Time.time - lastPaintTime >= paintInterval)
			{
				DoPaint(PenTipPosition);
				lastPaintTime = Time.time;
			}
		}

		protected override void OnDragEnd(Vector3 position)
		{
			isPainting = false;
			base.OnDragEnd(position);
		}

		private void DoPaint(Vector3 worldPos)
		{
			for (int i = 0; i < revealImages.Length; i++)
			{
				if (revealImages[i] != null)
				{
					revealImages[i].Paint(worldPos);
				}
			}
		}
	}
}
