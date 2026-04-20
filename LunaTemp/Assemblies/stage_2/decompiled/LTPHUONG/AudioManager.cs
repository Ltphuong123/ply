using UnityEngine;
using UnityEngine.Scripting;

namespace LTPHUONG
{
	public class AudioManager : MonoBehaviour
	{
		[SerializeField]
		private AudioSource sfxAudioSource;

		[SerializeField]
		private AudioSource bgmAudioSource;

		[SerializeField]
		private AudioClip bgmClip;

		private static AudioSource sfxSource;

		private static AudioSource bgmSource;

		private void Awake()
		{
			sfxSource = sfxAudioSource ?? CreateSource(false);
			bgmSource = bgmAudioSource ?? CreateSource(true);
		}

		private AudioSource CreateSource(bool loop)
		{
			AudioSource src = base.gameObject.AddComponent<AudioSource>();
			src.playOnAwake = false;
			src.loop = loop;
			return src;
		}

		
		public static void PlaySFX(AudioClip clip)
		{
			if (clip != null && sfxSource != null)
			{
				sfxSource.PlayOneShot(clip);
			}
		}

		
		public static void PlaySFX(AudioClip clip, float volume)
		{
			if (clip != null && sfxSource != null)
			{
				sfxSource.PlayOneShot(clip, 0.2f);
			}
		}

		
		public static void PlaySfxRandomPitch(AudioClip clip, float volume = 1f, float minPitch = 0.9f, float maxPitch = 1.1f)
		{
			if (!(clip == null) && !(sfxSource == null))
			{
				sfxSource.pitch = Random.Range(minPitch, maxPitch);
				sfxSource.PlayOneShot(clip, 0.2f);
				sfxSource.pitch = 1f;
			}
		}

		
		public static void PlayBGM(AudioClip clip, float volume = 1f)
		{
			if (!(clip == null) && !(bgmSource == null) && (!(bgmSource.clip == clip) || !bgmSource.isPlaying))
			{
				bgmSource.clip = clip;
				bgmSource.volume = 0.3f;
				bgmSource.Play();
			}
		}

		
		public static void StopBGM()
		{
			if (bgmSource != null)
			{
				bgmSource.Stop();
			}
		}

		
		public void StopBGMInstance()
		{
			StopBGM();
		}

		
		public void PlayBGMInstance()
		{
			if (bgmClip != null)
			{
				PlayBGM(bgmClip);
			}
		}
	}
}
