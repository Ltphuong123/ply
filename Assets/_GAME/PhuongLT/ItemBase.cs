using UnityEngine;

namespace LTPHUONG
{
    public abstract class ItemBase : DragBase
    {
        public bool IsCorrect { get; protected set; }

        public override bool IsBlocked() => base.IsBlocked();

        protected void SetCorrect(bool correct)
        {
            IsCorrect = correct;
        }

        public virtual void StartIdleEffect() { }
    }
}
