using UnityEngine;

namespace LTPHUONG
{
	public class PlayVFX : MonoBehaviour
	{
		[SerializeField]
		private ParticleSystem vfx;

		[SerializeField]
		private AudioClip audioClip;

		public void Play()
		{
			vfx.Stop();
			vfx.Play();
			AudioManager.PlaySFX(audioClip);
		}
	}
}
