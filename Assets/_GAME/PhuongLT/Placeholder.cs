using DG.Tweening;
using UnityEngine;
using UnityEngine.Scripting;

namespace LTPHUONG
{
	public class Placeholder : MonoBehaviour
	{
		private Transform tf;

		private SpriteRenderer spriteRenderer;

		private Tween blinkTween;

		private float blinkMin = 0f;

		private float blinkMax = 0.8f;

		private float blinkDuration = 1f;

		public bool IsOccupied { get; set; }

		public ItemBase CurrentItem { get; set; }

		public Transform TF => tf ?? (tf = base.transform);

		private void Awake()
		{
			spriteRenderer = GetComponent<SpriteRenderer>();
		}

		public void SetItem(ItemBase item)
		{
			CurrentItem = item;
			IsOccupied = item != null;
		}

		public void ClearItem()
		{
			CurrentItem = null;
			IsOccupied = false;
		}

		
		public void StartBlink()
		{
			if (!(spriteRenderer == null))
			{
				StopBlinkInternal();
				Color c = spriteRenderer.color;
				c.a = blinkMax;
				spriteRenderer.color = c;
			}
		}

		
		public void StopBlink()
		{
			StopBlinkInternal();
			if (spriteRenderer != null)
			{
				spriteRenderer.DOKill();
				spriteRenderer.DOFade(blinkMin, 0.2f);
			}
		}

		private void StopBlinkInternal()
		{
			if (blinkTween != null)
			{
				blinkTween.Kill();
				blinkTween = null;
			}
		}

		private void OnDestroy()
		{
			StopBlinkInternal();
			if (spriteRenderer != null)
			{
				spriteRenderer.DOKill();
			}
		}
	}
}
