using System;
using System.Collections.Generic;
using DG.Tweening;
using HaoNT.WatermelonMakeup;
using HoangHH;
using PaintIn3D;
using Sirenix.OdinInspector;
using UnityEngine;

namespace HaoNT.LvCleanBrush
{
    public class LvCleanBrushController : StepByStepLevel
    {
        #region Base

        [FoldoutGroup("Level Clean Brush")] [SerializeField]
        private Sprite[] hintList;

        private float originalCamOrthoSize;

        protected override void Start()
        {
            base.Start();
            originalCamOrthoSize = Camera.orthographicSize;
            OnStartStep0();
            _hint = hintList[0];
        }

        protected override void DoneStep(bool showEmoji = true)
        {
            base.DoneStep(showEmoji);
            Debug.LogError("Done Step: " + CurStep);
        }

        protected override void InitStepActions()
        {
            AddStepAction(1, OnStartStep1);
            AddStepAction(2, OnStartStep2);
            AddStepAction(3, OnStartStep3);
            AddStepAction(4, OnStartStep4);
            AddStepAction(5, OnStartStep5);
            AddStepAction(6, OnStartStep6);
            AddStepAction(7, OnStartStep7);
            AddStepAction(8, OnStartStep8);
            AddStepAction(9, OnStartStep9);
            AddStepAction(10, OnStartStep10);
            AddStepAction(11, OnStartStep11);
        }

        private void OnSnapObjectEv(List<NSnapObject> snaps, NSnapObject snap, Action endSnapAc)
        {
            if (snaps.Remove(snap) && snaps.Count == 0) endSnapAc();
        }

        #endregion

        #region Step 0: Remove old hair

        private const string STEP_0 = "Step 0: Remove old hair";

        [FoldoutGroup(STEP_0)] [SerializeField]
        private DraggableMakeupItem removerOldHairDrag;

        [FoldoutGroup(STEP_0)] [SerializeField]
        private BoxCollider2D triggerRemover;

        [FoldoutGroup(STEP_0)] [SerializeField]
        private Animation[] flyingAnimations;

        [FoldoutGroup(STEP_0)] [SerializeField]
        private List<TriggerWithColAndTouch> hairTriggers;

        [FoldoutGroup(STEP_0)] [SerializeField]
        private List<ShakeObject> hairShakes;

        [FoldoutGroup(STEP_0)] [SerializeField]
        private List<Rigidbody2D> hairRigs;

        [FoldoutGroup(STEP_0)] [SerializeField]
        private List<AutoDestroy> hairDes;

        [FoldoutGroup(STEP_0)] [SerializeField]
        private int maxInteractPerHair;

        private readonly List<int> triggerCount = new List<int>();

        private void OnStartStep0()
        {
            removerOldHairDrag.StartDragEvent.AddListener(() => triggerRemover.enabled = true);
            removerOldHairDrag.EndDragEvent.AddListener(() => triggerRemover.enabled = false);

            for (int i = 0; i < hairTriggers.Count; i++)
            {
                int index = i;
                TriggerWithColAndTouch trigger = hairTriggers[index];
                ShakeObject hairShake = hairShakes[index];
                Rigidbody2D hairRig = hairRigs[index];
                AutoDestroy hair = hairDes[index];
                trigger.OnTriggerEvent.AddListener(() => OnTriggerEachHair(index, trigger, hairShake, hairRig, hair));
                triggerCount.Add(0);
            }
        }

        private void OnTriggerEachHair(int index, TriggerWithColAndTouch trigger, ShakeObject hairShake,
            Rigidbody2D hairRig, AutoDestroy hairDes)
        {
            triggerCount[index]++;
            hairShake.Shake();
            if (triggerCount[index] >= maxInteractPerHair)
            {
                if (hairTriggers.Count % 2 == 0)
                {
                    flyingAnimations[hairTriggers.Count / 2 - 1].Play();
                }

                if (hairTriggers.Remove(trigger) && hairTriggers.Count == 0)
                    OnEndStep0();
                trigger.EnableCol(false);
                hairRig.bodyType = RigidbodyType2D.Dynamic;
                hairRig.simulated = true;
                hairDes.enabled = true;
            }
        }

        private void OnEndStep0()
        {
            triggerRemover.enabled = false;
            removerOldHairDrag.StartDragEvent.RemoveListener(() => triggerRemover.enabled = true);
            removerOldHairDrag.EndDragEvent.RemoveListener(() => triggerRemover.enabled = false);
            DoneStep();
        }

        #endregion

        #region Step 1: Insert cream

        private const string STEP_1 = "Step 1: Insert cream";

        [FoldoutGroup(STEP_1)] [SerializeField]
        private DrawTargetPub creamDrawTarget;

        [FoldoutGroup(STEP_1)] [SerializeField]
        private Vector2 creamDrawRange;

        private void OnStartStep1()
        {
            creamDrawTarget.gameObject.SetActive(true);
            creamDrawTarget.Active(false);
            creamDrawTarget.ChangeCounterEvent(creamDrawRange, OnEndStep1, true);
        }


        private void OnEndStep1()
        {
            creamDrawTarget.FillAll();
            DoneStep();
        }

        #endregion

        #region Step 2: Brush Scalp

        private const string STEP_2 = "Step 2: Brush Scalp";

        [FoldoutGroup(STEP_2)] [SerializeField]
        private GameObject dustyOutSide;

        [FoldoutGroup(STEP_2)] [SerializeField]
        private DrawTargetPub creamScalpDrawTarget;

        [FoldoutGroup(STEP_2)] [SerializeField]
        private Vector2 creamScalpDrawRange;

        private void OnStartStep2()
        {
            creamScalpDrawTarget.gameObject.SetActive(true);
            creamScalpDrawTarget.Active(false);
            creamScalpDrawTarget.ChangeCounterEvent(creamScalpDrawRange, OnEndStep2, true);
        }

        private void OnEndStep2()
        {
            dustyOutSide.SetActive(false);
            creamDrawTarget.EraseAll(() => creamDrawTarget.gameObject.SetActive(false));
            creamScalpDrawTarget.FillAll();
            DoneStep();
        }

        #endregion

        #region Step 3: Remove Cream

        private const string STEP_3 = "Step 3: Remove Cream";

        [FoldoutGroup(STEP_3)] [SerializeField]
        private Vector2 creamEraseRange;

        private void OnStartStep3()
        {
            creamScalpDrawTarget.Active(false);
            creamScalpDrawTarget.ChangeCounterEvent(creamEraseRange, OnEndStep3, true);
        }

        private void OnEndStep3()
        {
            creamScalpDrawTarget.EraseAll(() => creamScalpDrawTarget.gameObject.SetActive(false));
            DoneStep();
        }

        #endregion

        #region Step 4: Unlock inside

        private const string STEP_4 = "Step 4: Unlock inside";

        [FoldoutGroup(STEP_4)] [SerializeField]
        private TriggerWithColAndTouch insideTrigger;

        [FoldoutGroup(STEP_4)] [SerializeField]
        private DraggableMakeupItem toolPickDrag;

        [FoldoutGroup(STEP_4)] [SerializeField]
        private Animation pickAnimation;

        [FoldoutGroup(STEP_4)] [SerializeField]
        private ThrowObject throwInside;

        private void OnStartStep4()
        {
            insideTrigger.enabled = true;
            insideTrigger.EnableCol(true);
            insideTrigger.OnTriggerEvent.AddListener(OnTriggerWithPick);
        }

        private void OnTriggerWithPick()
        {
            _hint = hintList[1];
            toolPickDrag.gameObject.SetActive(false);
            pickAnimation.Play();
            throwInside.Col.enabled = true;
            throwInside.enabled = true;
            throwInside.OnRemoveItemEv += OnEndStep4;
        }

        private void OnEndStep4()
        {
            DoneStep();
            TryNextStep();
        }

        #endregion

        #region Step 5: Remove trash

        private const string STEP_5 = "Step 5: Remove trash";

        [FoldoutGroup(STEP_5)] [SerializeField]
        private List<ThrowObject> trashThrows;

        private void OnStartStep5()
        {
            for (int i = 0; i < trashThrows.Count; i++)
            {
                int index = i;
                ThrowObject trash = trashThrows[index];
                trash.Col.enabled = true;
                trash.enabled = true;
                trash.OnRemoveItemEv += () => OnThrowTrashInside(trash);
            }
        }

        private void OnThrowTrashInside(ThrowObject throwInside)
        {
            if (trashThrows.Remove(throwInside) && trashThrows.Count == 0) OnEndStep5();
        }

        private void OnEndStep5()
        {
            DoneStep();
            TryNextStep();
        }

        #endregion

        #region Step 6: Insert cream again

        private const string STEP_6 = "Step 6: Insert cream again";


        [FoldoutGroup(STEP_6)] [SerializeField]
        private DrawObjectExtension creamDragExtension;

        [FoldoutGroup(STEP_6)] [SerializeField]
        private P3dBlendMode creamBlendMode;

        [FoldoutGroup(STEP_6)] [SerializeField]
        private DrawTargetPub creamAgainDrawTarget;

        [FoldoutGroup(STEP_6)] [SerializeField]
        private Vector2 creamAgainDrawRange;

        private void OnStartStep6()
        {
            _hint = hintList[2];
            creamAgainDrawTarget.gameObject.SetActive(true);
            creamAgainDrawTarget.Active(false);
            creamAgainDrawTarget.ChangeCounterEvent(creamAgainDrawRange, OnEndStep6, true);

            creamDragExtension.SetDrawPaint(creamAgainDrawTarget.PaintableTexture, creamBlendMode);
        }


        private void OnEndStep6()
        {
            creamAgainDrawTarget.FillAll();
            DoneStep();
        }

        #endregion

        #region Step 7: Brush Scalp Again

        private const string STEP_7 = "Step 2: Brush Scalp Again";

        [FoldoutGroup(STEP_7)] [SerializeField]
        private DrawObjectExtension brushDragExtension;

        [FoldoutGroup(STEP_7)] [SerializeField]
        private P3dBlendMode brushBlendMode;

        [FoldoutGroup(STEP_7)] [SerializeField]
        private GameObject dustyInSide;

        [FoldoutGroup(STEP_7)] [SerializeField]
        private DrawTargetPub scalpAgainDrawTarget;

        [FoldoutGroup(STEP_7)] [SerializeField]
        private Vector2 scalpAgainDrawRange;

        private void OnStartStep7()
        {
            scalpAgainDrawTarget.gameObject.SetActive(true);
            scalpAgainDrawTarget.Active(false);
            scalpAgainDrawTarget.ChangeCounterEvent(scalpAgainDrawRange, OnEndStep7, true);

            brushDragExtension.SetDrawPaint(scalpAgainDrawTarget.PaintableTexture, brushBlendMode);
        }

        private void OnEndStep7()
        {
            dustyInSide.SetActive(false);
            creamAgainDrawTarget.EraseAll(() => creamAgainDrawTarget.gameObject.SetActive(false));
            scalpAgainDrawTarget.FillAll();
            DoneStep();
        }

        #endregion

        #region Step 8: Remove Cream Again

        private const string STEP_8 = "Step 8: Remove Cream Again";

        [FoldoutGroup(STEP_8)] [SerializeField]
        private DrawObjectExtension towelDragExtension;

        [FoldoutGroup(STEP_8)] [SerializeField]
        private P3dBlendMode towelBlendMode;

        [FoldoutGroup(STEP_8)] [SerializeField]
        private Vector2 removeCreamRange;

        private void OnStartStep8()
        {
            scalpAgainDrawTarget.Active(false);
            scalpAgainDrawTarget.ChangeCounterEvent(removeCreamRange, OnEndStep8, true);

            towelDragExtension.SetDrawPaint(scalpAgainDrawTarget.PaintableTexture, towelBlendMode);
        }

        private void OnEndStep8()
        {
            scalpAgainDrawTarget.EraseAll(() => scalpAgainDrawTarget.gameObject.SetActive(false));
            DoneStep();
        }

        #endregion

        #region Step 9: Paint Blue

        private const string STEP_9 = "Step 8: Paint Blue";

        [FoldoutGroup(STEP_9)] [SerializeField]
        private DrawTargetPub paintBlueDrawTarget;

        [FoldoutGroup(STEP_9)] [SerializeField]
        private Vector2 paintBlueDrawRange;

        private void OnStartStep9()
        {
            paintBlueDrawTarget.gameObject.SetActive(true);
            paintBlueDrawTarget.Active(false);
            paintBlueDrawTarget.ChangeCounterEvent(paintBlueDrawRange, OnEndStep9, true);
        }

        private void OnEndStep9()
        {
            paintBlueDrawTarget.FillAll();
            DoneStep();
        }

        #endregion

        #region Step 10: Paint Inside

        private const string STEP_10 = "Step 10: Paint Inside";

        [FoldoutGroup(STEP_10)] [SerializeField]
        private NSnapObject insideSnap;

        [FoldoutGroup(STEP_10)] [SerializeField]
        private NSnapPoint insideSnapPoint;

        [FoldoutGroup(STEP_10)] [SerializeField]
        private DrawTargetPub paintInsideDrawTarget;

        [FoldoutGroup(STEP_10)] [SerializeField]
        private Vector2 paintInsideDrawRange;

        private void OnStartStep10()
        {
            _hint = hintList[3];
            insideSnap.transform.DOMoveX(0, 1).SetEase(Ease.InBack)
                .OnComplete(() =>
                {
                    insideSnapPoint.ChangeCanSnap(true);
                    insideSnap.enabled = true;
                    insideSnap.Col.enabled = true;
                    insideSnap.AddSnapEvent(OnSnapInside);
                });
        }

        private void OnSnapInside()
        {
            paintInsideDrawTarget.gameObject.SetActive(true);
            paintInsideDrawTarget.Active(false);
            paintInsideDrawTarget.ChangeCounterEvent(paintInsideDrawRange, OnEndStep10, true);
        }

        private void OnEndStep10()
        {
            paintInsideDrawTarget.FillAll();
            DoneStep();
        }

        #endregion

        #region Step 11: Insert brush tooth

        private const string STEP_11 = "Step 11: Insert brush tooth";

        [FoldoutGroup(STEP_11)] [SerializeField]
        private List<TriggerWithColAndTouch> teethInBoxTriggers;

        [FoldoutGroup(STEP_11)] [SerializeField]
        private List<TriggerWithColAndTouch> teethBrushTriggers;

        [FoldoutGroup(STEP_11)] [SerializeField]
        private List<SpriteRenderer> teethBrushSrs;

        [FoldoutGroup(STEP_11)] [SerializeField]
        private GameObject teethInBrush;

        [FoldoutGroup(STEP_11)] [SerializeField]
        private SpriteRenderer lidSr;

        [FoldoutGroup(STEP_11)] [SerializeField]
        private BoxCollider2D takeCollider, giveCollider;

        [FoldoutGroup(STEP_11)] [SerializeField]
        private ShowObjectEffect showUp, showDown;

        [FoldoutGroup(STEP_11)] [SerializeField]
        private AudioClip pick, put;

        private void OnStartStep11()
        {
            teethInBrush.SetActive(true);
            takeCollider.enabled = true;
            giveCollider.enabled = false;
            for (int i = 0; i < teethInBoxTriggers.Count; i++)
            {
                int index = i;
                TriggerWithColAndTouch triggerBox = teethInBoxTriggers[index];
                TriggerWithColAndTouch triggerBrush = teethBrushTriggers[index];
                SpriteRenderer sr = teethBrushSrs[index];
                triggerBox.OnTriggerEvent.AddListener(() => OnTriggerTeethInBox(triggerBox));
                triggerBrush.OnTriggerEvent.AddListener(() => OnTriggerTeethBrush(triggerBrush, sr));
            }
        }

        private void OnTriggerTeethInBox(TriggerWithColAndTouch trigger)
        {
            trigger.gameObject.SetActive(false);
            giveCollider.enabled = true;
            AudioManager.PlaySFX(pick);
            teethInBoxTriggers.Remove(trigger);
        }

        private void OnTriggerTeethBrush(TriggerWithColAndTouch trigger, SpriteRenderer brushTeeth)
        {
            AudioManager.PlaySFX(put);
            takeCollider.enabled = true;
            brushTeeth.enabled = true;
            lidSr.enabled = false;
            if (teethBrushTriggers.Remove(trigger) && teethBrushTriggers.Count == 0
                                                   && teethInBoxTriggers.Count == 0)
                OnEndStep11();
        }

        private void OnEndStep11()
        {
            showUp.Hide();
            showDown.Hide();
            DOVirtual.Float(originalCamOrthoSize, originalCamOrthoSize + 3, 1f,
                (value) => { Camera.orthographicSize = value; }).SetEase(Ease.OutBack).OnComplete(EndGame);
        }

        #endregion
    }
}