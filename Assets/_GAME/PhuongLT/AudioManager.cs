using UnityEngine;
using UnityEngine.Scripting;

namespace LTPHUONG
{
    public class AudioManager : MonoBehaviour
    {
        [SerializeField] private AudioSource sfxAudioSource;
        [SerializeField] private AudioSource bgmAudioSource;
        [SerializeField] private AudioClip bgmClip;

        private static AudioSource sfxSource;
        private static AudioSource bgmSource;

        private void Awake()
        {
            sfxSource = sfxAudioSource ?? CreateSource(false);
            bgmSource = bgmAudioSource ?? CreateSource(true);
        }

        private AudioSource CreateSource(bool loop)
        {
            var src = gameObject.AddComponent<AudioSource>();
            src.playOnAwake = false;
            src.loop = loop;
            return src;
        }

        [Preserve] public static void PlaySFX(AudioClip clip)
        {
            if (clip != null && sfxSource != null)
                sfxSource.PlayOneShot(clip);
        }

        [Preserve] public static void PlaySFX(AudioClip clip, float volume)
        {
            if (clip != null && sfxSource != null)
                sfxSource.PlayOneShot(clip, 0.2f);
        }

        [Preserve] public static void PlaySfxRandomPitch(AudioClip clip, float volume = 1f, float minPitch = 0.9f, float maxPitch = 1.1f)
        {
            if (clip == null || sfxSource == null) return;
            sfxSource.pitch = Random.Range(minPitch, maxPitch);
            sfxSource.PlayOneShot(clip, 0.2f);
            sfxSource.pitch = 1f;
        }

        [Preserve] public static void PlayBGM(AudioClip clip, float volume = 1f)
        {
            if (clip == null || bgmSource == null) return;
            if (bgmSource.clip == clip && bgmSource.isPlaying) return;
            bgmSource.clip = clip;
            bgmSource.volume = 0.3f;
            bgmSource.Play();
        }

        [Preserve] public static void StopBGM()
        {
            if (bgmSource != null) bgmSource.Stop();
        }

        [Preserve] public void StopBGMInstance() => StopBGM();
        [Preserve] public void PlayBGMInstance() { if (bgmClip != null) PlayBGM(bgmClip); }
    }
}
