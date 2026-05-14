using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace LTPHUONG
{

    public class PlayVFX : MonoBehaviour
    {
        [SerializeField] ParticleSystem vfx;
        [SerializeField] AudioClip audioClip;

        public void Play()
        {
            vfx.Stop();
            vfx.Play();
            AudioManager.PlaySFX(audioClip);
        }
    }
}
