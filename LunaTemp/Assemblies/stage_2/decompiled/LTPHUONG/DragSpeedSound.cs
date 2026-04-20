using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

namespace LTPHUONG
{
	public class DragSpeedSound : MonoBehaviour
	{
		[SerializeField]
		private Collider2D[] targetZones;

		[SerializeField]
		private AudioSource audioSource;

		[SerializeField]
		private GameObject particleObject;

		[SerializeField]
		private float volume = 1f;

		private bool isPlaying;

		private bool isInZone;

		private bool isFadingOut;

		private Transform tf;

		private Tween fadeOutTween;

		private Vector3 lastPosition;

		private float idleTime;

		public bool IsPlaying => isPlaying;

		private void Awake()
		{
			tf = base.transform;
			lastPosition = tf.position;
		}

		private void Update()
		{
			if (targetZones == null || targetZones.Length == 0)
			{
				return;
			}
			if (!Input.GetMouseButton(0))
			{
				if (isPlaying)
				{
					StopSound();
				}
				isInZone = false;
				return;
			}
			bool wasInZone = isInZone;
			isInZone = false;
			Vector2 pos = tf.position;
			for (int i = 0; i < targetZones.Length; i++)
			{
				if (targetZones[i] != null && targetZones[i].OverlapPoint(pos))
				{
					isInZone = true;
					break;
				}
			}
			if (isInZone != wasInZone)
			{
				if (isInZone && audioSource.clip != null)
				{
					PlaySound();
				}
				else if (!isInZone)
				{
					StopSound();
				}
			}
			if (!isInZone)
			{
				return;
			}
			if ((Vector2)tf.position != (Vector2)lastPosition)
			{
				idleTime = 0f;
				if (!isPlaying && audioSource.clip != null)
				{
					PlaySound();
				}
			}
			else
			{
				idleTime += Time.deltaTime;
				if (idleTime >= 0.2f && isPlaying)
				{
					StopSound();
				}
			}
			lastPosition = tf.position;
		}

		private void PlaySound()
		{
			if (isPlaying && !isFadingOut)
			{
				return;
			}
			fadeOutTween?.Kill();
			if (isFadingOut)
			{
				isFadingOut = false;
				audioSource.volume = volume;
				if (particleObject != null)
				{
					particleObject.SetActive(true);
				}
				return;
			}
			isFadingOut = false;
			audioSource.volume = volume;
			audioSource.Play();
			isPlaying = true;
			if (particleObject != null)
			{
				particleObject.SetActive(true);
			}
		}

		private void StopSound()
		{
			if (!isPlaying || isFadingOut)
			{
				return;
			}
			isFadingOut = true;
			fadeOutTween = audioSource.DOFade(0f, 0.5f).OnComplete(delegate
			{
				if (isFadingOut)
				{
					audioSource.Stop();
					audioSource.volume = 0f;
					isPlaying = false;
					isFadingOut = false;
					if (particleObject != null)
					{
						particleObject.SetActive(false);
					}
				}
			});
		}

		private void OnDisable()
		{
			fadeOutTween?.Kill();
			if (isPlaying)
			{
				audioSource.Stop();
				audioSource.volume = 0f;
				isPlaying = false;
				isFadingOut = false;
				if (particleObject != null)
				{
					particleObject.SetActive(false);
				}
			}
		}

		private void OnDestroy()
		{
			fadeOutTween?.Kill();
		}

		public void SetTargetZones(Collider2D[] zones)
		{
			targetZones = zones;
		}

		public void AddTargetZone(Collider2D zone)
		{
			List<Collider2D> list = new List<Collider2D>(targetZones ?? new Collider2D[0]);
			if (!list.Contains(zone))
			{
				list.Add(zone);
				targetZones = list.ToArray();
			}
		}
	}
}
