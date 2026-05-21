var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointSpring' )
  var i515 = data
  i514.spring = i515[0]
  i514.damper = i515[1]
  i514.targetPosition = i515[2]
  return i514
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointMotor' )
  var i517 = data
  i516.m_TargetVelocity = i517[0]
  i516.m_Force = i517[1]
  i516.m_FreeSpin = i517[2]
  return i516
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointLimits' )
  var i519 = data
  i518.m_Min = i519[0]
  i518.m_Max = i519[1]
  i518.m_Bounciness = i519[2]
  i518.m_BounceMinVelocity = i519[3]
  i518.m_ContactDistance = i519[4]
  i518.minBounce = i519[5]
  i518.maxBounce = i519[6]
  return i518
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointDrive' )
  var i521 = data
  i520.m_PositionSpring = i521[0]
  i520.m_PositionDamper = i521[1]
  i520.m_MaximumForce = i521[2]
  i520.m_UseAcceleration = i521[3]
  return i520
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i523 = data
  i522.m_Spring = i523[0]
  i522.m_Damper = i523[1]
  return i522
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i525 = data
  i524.m_Limit = i525[0]
  i524.m_Bounciness = i525[1]
  i524.m_ContactDistance = i525[2]
  return i524
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i527 = data
  i526.m_ExtremumSlip = i527[0]
  i526.m_ExtremumValue = i527[1]
  i526.m_AsymptoteSlip = i527[2]
  i526.m_AsymptoteValue = i527[3]
  i526.m_Stiffness = i527[4]
  return i526
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i529 = data
  i528.m_LowerAngle = i529[0]
  i528.m_UpperAngle = i529[1]
  return i528
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i531 = data
  i530.m_MotorSpeed = i531[0]
  i530.m_MaximumMotorTorque = i531[1]
  return i530
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i533 = data
  i532.m_DampingRatio = i533[0]
  i532.m_Frequency = i533[1]
  i532.m_Angle = i533[2]
  return i532
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i535 = data
  i534.m_LowerTranslation = i535[0]
  i534.m_UpperTranslation = i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i537 = data
  i536.position = new pc.Vec3( i537[0], i537[1], i537[2] )
  i536.scale = new pc.Vec3( i537[3], i537[4], i537[5] )
  i536.rotation = new pc.Quat(i537[6], i537[7], i537[8], i537[9])
  return i536
}

Deserializers["LTPHUONG.GameState"] = function (request, data, root) {
  var i538 = root || request.c( 'LTPHUONG.GameState' )
  var i539 = data
  return i538
}

Deserializers["LTPHUONG.ClickController"] = function (request, data, root) {
  var i540 = root || request.c( 'LTPHUONG.ClickController' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'mainCamera')
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i543 = data
  i542.name = i543[0]
  i542.tagId = i543[1]
  i542.enabled = !!i543[2]
  i542.isStatic = !!i543[3]
  i542.layer = i543[4]
  return i542
}

Deserializers["LTPHUONG.AudioManager"] = function (request, data, root) {
  var i544 = root || request.c( 'LTPHUONG.AudioManager' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'sfxAudioSource')
  request.r(i545[2], i545[3], 0, i544, 'bgmAudioSource')
  request.r(i545[4], i545[5], 0, i544, 'bgmClip')
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'clip')
  request.r(i547[2], i547[3], 0, i546, 'outputAudioMixerGroup')
  i546.playOnAwake = !!i547[4]
  i546.loop = !!i547[5]
  i546.time = i547[6]
  i546.volume = i547[7]
  i546.pitch = i547[8]
  i546.enabled = !!i547[9]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i549 = data
  i548.pivot = new pc.Vec2( i549[0], i549[1] )
  i548.anchorMin = new pc.Vec2( i549[2], i549[3] )
  i548.anchorMax = new pc.Vec2( i549[4], i549[5] )
  i548.sizeDelta = new pc.Vec2( i549[6], i549[7] )
  i548.anchoredPosition3D = new pc.Vec3( i549[8], i549[9], i549[10] )
  i548.rotation = new pc.Quat(i549[11], i549[12], i549[13], i549[14])
  i548.scale = new pc.Vec3( i549[15], i549[16], i549[17] )
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i551 = data
  i550.planeDistance = i551[0]
  i550.referencePixelsPerUnit = i551[1]
  i550.isFallbackOverlay = !!i551[2]
  i550.renderMode = i551[3]
  i550.renderOrder = i551[4]
  i550.sortingLayerName = i551[5]
  i550.sortingOrder = i551[6]
  i550.scaleFactor = i551[7]
  request.r(i551[8], i551[9], 0, i550, 'worldCamera')
  i550.overrideSorting = !!i551[10]
  i550.pixelPerfect = !!i551[11]
  i550.targetDisplay = i551[12]
  i550.overridePixelPerfect = !!i551[13]
  i550.enabled = !!i551[14]
  return i550
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i553 = data
  i552.m_UiScaleMode = i553[0]
  i552.m_ReferencePixelsPerUnit = i553[1]
  i552.m_ScaleFactor = i553[2]
  i552.m_ReferenceResolution = new pc.Vec2( i553[3], i553[4] )
  i552.m_ScreenMatchMode = i553[5]
  i552.m_MatchWidthOrHeight = i553[6]
  i552.m_PhysicalUnit = i553[7]
  i552.m_FallbackScreenDPI = i553[8]
  i552.m_DefaultSpriteDPI = i553[9]
  i552.m_DynamicPixelsPerUnit = i553[10]
  i552.m_PresetInfoIsWorld = !!i553[11]
  return i552
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i555 = data
  i554.m_IgnoreReversedGraphics = !!i555[0]
  i554.m_BlockingObjects = i555[1]
  i554.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i555[2] )
  return i554
}

Deserializers["LTPHUONG.UIButtonPulse"] = function (request, data, root) {
  var i556 = root || request.c( 'LTPHUONG.UIButtonPulse' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'button')
  request.r(i557[2], i557[3], 0, i556, 'imageRect')
  i556.scaleMin = i557[4]
  i556.scaleMax = i557[5]
  i556.pulseDuration = i557[6]
  i556.landscapeImagePos = new pc.Vec2( i557[7], i557[8] )
  i556.landscapeButtonPos = new pc.Vec2( i557[9], i557[10] )
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i559 = data
  i558.cullTransparentMesh = !!i559[0]
  return i558
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.UI.Image' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'm_Sprite')
  i560.m_Type = i561[2]
  i560.m_PreserveAspect = !!i561[3]
  i560.m_FillCenter = !!i561[4]
  i560.m_FillMethod = i561[5]
  i560.m_FillAmount = i561[6]
  i560.m_FillClockwise = !!i561[7]
  i560.m_FillOrigin = i561[8]
  i560.m_UseSpriteMesh = !!i561[9]
  i560.m_PixelsPerUnitMultiplier = i561[10]
  request.r(i561[11], i561[12], 0, i560, 'm_Material')
  i560.m_Maskable = !!i561[13]
  i560.m_Color = new pc.Color(i561[14], i561[15], i561[16], i561[17])
  i560.m_RaycastTarget = !!i561[18]
  i560.m_RaycastPadding = new pc.Vec4( i561[19], i561[20], i561[21], i561[22] )
  return i560
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.Button' )
  var i563 = data
  i562.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i563[0], i562.m_OnClick)
  i562.m_Navigation = request.d('UnityEngine.UI.Navigation', i563[1], i562.m_Navigation)
  i562.m_Transition = i563[2]
  i562.m_Colors = request.d('UnityEngine.UI.ColorBlock', i563[3], i562.m_Colors)
  i562.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i563[4], i562.m_SpriteState)
  i562.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i563[5], i562.m_AnimationTriggers)
  i562.m_Interactable = !!i563[6]
  request.r(i563[7], i563[8], 0, i562, 'm_TargetGraphic')
  return i562
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i565 = data
  i564.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i565[0], i564.m_PersistentCalls)
  return i564
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i567 = data
  var i569 = i567[0]
  var i568 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i569.length; i += 1) {
    i568.add(request.d('UnityEngine.Events.PersistentCall', i569[i + 0]));
  }
  i566.m_Calls = i568
  return i566
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'm_Target')
  i572.m_TargetAssemblyTypeName = i573[2]
  i572.m_MethodName = i573[3]
  i572.m_Mode = i573[4]
  i572.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i573[5], i572.m_Arguments)
  i572.m_CallState = i573[6]
  return i572
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'm_ObjectArgument')
  i574.m_ObjectArgumentAssemblyTypeName = i575[2]
  i574.m_IntArgument = i575[3]
  i574.m_FloatArgument = i575[4]
  i574.m_StringArgument = i575[5]
  i574.m_BoolArgument = !!i575[6]
  return i574
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i577 = data
  i576.m_Mode = i577[0]
  i576.m_WrapAround = !!i577[1]
  request.r(i577[2], i577[3], 0, i576, 'm_SelectOnUp')
  request.r(i577[4], i577[5], 0, i576, 'm_SelectOnDown')
  request.r(i577[6], i577[7], 0, i576, 'm_SelectOnLeft')
  request.r(i577[8], i577[9], 0, i576, 'm_SelectOnRight')
  return i576
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i579 = data
  i578.m_NormalColor = new pc.Color(i579[0], i579[1], i579[2], i579[3])
  i578.m_HighlightedColor = new pc.Color(i579[4], i579[5], i579[6], i579[7])
  i578.m_PressedColor = new pc.Color(i579[8], i579[9], i579[10], i579[11])
  i578.m_SelectedColor = new pc.Color(i579[12], i579[13], i579[14], i579[15])
  i578.m_DisabledColor = new pc.Color(i579[16], i579[17], i579[18], i579[19])
  i578.m_ColorMultiplier = i579[20]
  i578.m_FadeDuration = i579[21]
  return i578
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'm_HighlightedSprite')
  request.r(i581[2], i581[3], 0, i580, 'm_PressedSprite')
  request.r(i581[4], i581[5], 0, i580, 'm_SelectedSprite')
  request.r(i581[6], i581[7], 0, i580, 'm_DisabledSprite')
  return i580
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i583 = data
  i582.m_NormalTrigger = i583[0]
  i582.m_HighlightedTrigger = i583[1]
  i582.m_PressedTrigger = i583[2]
  i582.m_SelectedTrigger = i583[3]
  i582.m_DisabledTrigger = i583[4]
  return i582
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'm_FirstSelected')
  i584.m_sendNavigationEvents = !!i585[2]
  i584.m_DragThreshold = i585[3]
  return i584
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i587 = data
  i586.m_HorizontalAxis = i587[0]
  i586.m_VerticalAxis = i587[1]
  i586.m_SubmitButton = i587[2]
  i586.m_CancelButton = i587[3]
  i586.m_InputActionsPerSecond = i587[4]
  i586.m_RepeatDelay = i587[5]
  i586.m_ForceModuleActive = !!i587[6]
  i586.m_SendPointerHoverToParent = !!i587[7]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i589 = data
  i588.color = new pc.Color(i589[0], i589[1], i589[2], i589[3])
  request.r(i589[4], i589[5], 0, i588, 'sprite')
  i588.flipX = !!i589[6]
  i588.flipY = !!i589[7]
  i588.drawMode = i589[8]
  i588.size = new pc.Vec2( i589[9], i589[10] )
  i588.tileMode = i589[11]
  i588.adaptiveModeThreshold = i589[12]
  i588.maskInteraction = i589[13]
  i588.spriteSortPoint = i589[14]
  i588.enabled = !!i589[15]
  request.r(i589[16], i589[17], 0, i588, 'sharedMaterial')
  var i591 = i589[18]
  var i590 = []
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 2, i590, '')
  }
  i588.sharedMaterials = i590
  i588.receiveShadows = !!i589[19]
  i588.shadowCastingMode = i589[20]
  i588.sortingLayerID = i589[21]
  i588.sortingOrder = i589[22]
  i588.lightmapIndex = i589[23]
  i588.lightmapSceneIndex = i589[24]
  i588.lightmapScaleOffset = new pc.Vec4( i589[25], i589[26], i589[27], i589[28] )
  i588.lightProbeUsage = i589[29]
  i588.reflectionProbeUsage = i589[30]
  return i588
}

Deserializers["LTPHUONG.TutorialHand"] = function (request, data, root) {
  var i594 = root || request.c( 'LTPHUONG.TutorialHand' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'point')
  i594.clickRotation = i595[2]
  i594.clickDuration = i595[3]
  i594.dragDuration = i595[4]
  i594.loopDelay = i595[5]
  request.r(i595[6], i595[7], 0, i594, 'handSprite')
  i594.fadeDuration = i595[8]
  return i594
}

Deserializers["LTPHUONG.TutorialManager3"] = function (request, data, root) {
  var i596 = root || request.c( 'LTPHUONG.TutorialManager3' )
  var i597 = data
  i596.OnFirstInteraction = request.d('UnityEngine.Events.UnityEvent', i597[0], i596.OnFirstInteraction)
  i596.OnEveryInteraction = request.d('UnityEngine.Events.UnityEvent', i597[1], i596.OnEveryInteraction)
  request.r(i597[2], i597[3], 0, i596, 'tutorialHand')
  var i599 = i597[4]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('LTPHUONG.TutorialManager3+TutorialStep', i599[i + 0]) );
  }
  i596.steps = i598
  i596.idleTimeout = i597[5]
  i596.dragSinkStep = request.d('LTPHUONG.TutorialManager3+DragInToDisappearStep', i597[6], i596.dragSinkStep)
  return i596
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i601 = data
  i600.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i601[0], i600.m_PersistentCalls)
  return i600
}

Deserializers["LTPHUONG.TutorialManager3+TutorialStep"] = function (request, data, root) {
  var i604 = root || request.c( 'LTPHUONG.TutorialManager3+TutorialStep' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'from')
  request.r(i605[2], i605[3], 0, i604, 'to')
  return i604
}

Deserializers["LTPHUONG.TutorialManager3+DragInToDisappearStep"] = function (request, data, root) {
  var i606 = root || request.c( 'LTPHUONG.TutorialManager3+DragInToDisappearStep' )
  var i607 = data
  var i609 = i607[0]
  var i608 = []
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 2, i608, '')
  }
  i606.targets = i608
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i613 = data
  i612.aspect = i613[0]
  i612.orthographic = !!i613[1]
  i612.orthographicSize = i613[2]
  i612.backgroundColor = new pc.Color(i613[3], i613[4], i613[5], i613[6])
  i612.nearClipPlane = i613[7]
  i612.farClipPlane = i613[8]
  i612.fieldOfView = i613[9]
  i612.depth = i613[10]
  i612.clearFlags = i613[11]
  i612.cullingMask = i613[12]
  i612.rect = i613[13]
  request.r(i613[14], i613[15], 0, i612, 'targetTexture')
  i612.usePhysicalProperties = !!i613[16]
  i612.focalLength = i613[17]
  i612.sensorSize = new pc.Vec2( i613[18], i613[19] )
  i612.lensShift = new pc.Vec2( i613[20], i613[21] )
  i612.gateFit = i613[22]
  i612.commandBufferCount = i613[23]
  i612.cameraType = i613[24]
  i612.enabled = !!i613[25]
  return i612
}

Deserializers["UnityEngine.EventSystems.Physics2DRaycaster"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.EventSystems.Physics2DRaycaster' )
  var i615 = data
  i614.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i615[0] )
  i614.m_MaxRayIntersections = i615[1]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i617 = data
  i616.name = i617[0]
  i616.width = i617[1]
  i616.height = i617[2]
  i616.mipmapCount = i617[3]
  i616.anisoLevel = i617[4]
  i616.filterMode = i617[5]
  i616.hdr = !!i617[6]
  i616.format = i617[7]
  i616.wrapMode = i617[8]
  i616.alphaIsTransparency = !!i617[9]
  i616.alphaSource = i617[10]
  i616.graphicsFormat = i617[11]
  i616.sRGBTexture = !!i617[12]
  i616.desiredColorSpace = i617[13]
  i616.wrapU = i617[14]
  i616.wrapV = i617[15]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i618 = root || new pc.UnityMaterial()
  var i619 = data
  i618.name = i619[0]
  request.r(i619[1], i619[2], 0, i618, 'shader')
  i618.renderQueue = i619[3]
  i618.enableInstancing = !!i619[4]
  var i621 = i619[5]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i621[i + 0]) );
  }
  i618.floatParameters = i620
  var i623 = i619[6]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i623[i + 0]) );
  }
  i618.colorParameters = i622
  var i625 = i619[7]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i625[i + 0]) );
  }
  i618.vectorParameters = i624
  var i627 = i619[8]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i627[i + 0]) );
  }
  i618.textureParameters = i626
  var i629 = i619[9]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i629[i + 0]) );
  }
  i618.materialFlags = i628
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i633 = data
  i632.name = i633[0]
  i632.value = i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i637 = data
  i636.name = i637[0]
  i636.value = new pc.Color(i637[1], i637[2], i637[3], i637[4])
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i641 = data
  i640.name = i641[0]
  i640.value = new pc.Vec4( i641[1], i641[2], i641[3], i641[4] )
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i645 = data
  i644.name = i645[0]
  request.r(i645[1], i645[2], 0, i644, 'value')
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i649 = data
  i648.name = i649[0]
  i648.enabled = !!i649[1]
  return i648
}

Deserializers["Satisgame.EmojiControl"] = function (request, data, root) {
  var i650 = root || request.c( 'Satisgame.EmojiControl' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'spriteAnimator')
  request.r(i651[2], i651[3], 0, i650, 'scaleTransform')
  i650.durationShow = i651[4]
  i650.durationHold = i651[5]
  i650.durationHide = i651[6]
  request.r(i651[7], i651[8], 0, i650, 'audioSource')
  request.r(i651[9], i651[10], 0, i650, 'sfxPositive')
  request.r(i651[11], i651[12], 0, i650, 'sfxNegative')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'animatorController')
  request.r(i653[2], i653[3], 0, i652, 'avatar')
  i652.updateMode = i653[4]
  i652.hasTransformHierarchy = !!i653[5]
  i652.applyRootMotion = !!i653[6]
  var i655 = i653[7]
  var i654 = []
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 2, i654, '')
  }
  i652.humanBones = i654
  i652.enabled = !!i653[8]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i659 = data
  i658.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i659[0], i658.main)
  i658.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i659[1], i658.colorBySpeed)
  i658.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i659[2], i658.colorOverLifetime)
  i658.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i659[3], i658.emission)
  i658.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i659[4], i658.rotationBySpeed)
  i658.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i659[5], i658.rotationOverLifetime)
  i658.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i659[6], i658.shape)
  i658.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i659[7], i658.sizeBySpeed)
  i658.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i659[8], i658.sizeOverLifetime)
  i658.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i659[9], i658.textureSheetAnimation)
  i658.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i659[10], i658.velocityOverLifetime)
  i658.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i659[11], i658.noise)
  i658.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i659[12], i658.inheritVelocity)
  i658.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i659[13], i658.forceOverLifetime)
  i658.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i659[14], i658.limitVelocityOverLifetime)
  i658.useAutoRandomSeed = !!i659[15]
  i658.randomSeed = i659[16]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemMain()
  var i661 = data
  i660.duration = i661[0]
  i660.loop = !!i661[1]
  i660.prewarm = !!i661[2]
  i660.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[3], i660.startDelay)
  i660.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[4], i660.startLifetime)
  i660.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[5], i660.startSpeed)
  i660.startSize3D = !!i661[6]
  i660.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[7], i660.startSizeX)
  i660.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[8], i660.startSizeY)
  i660.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[9], i660.startSizeZ)
  i660.startRotation3D = !!i661[10]
  i660.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[11], i660.startRotationX)
  i660.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[12], i660.startRotationY)
  i660.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[13], i660.startRotationZ)
  i660.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i661[14], i660.startColor)
  i660.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[15], i660.gravityModifier)
  i660.simulationSpace = i661[16]
  request.r(i661[17], i661[18], 0, i660, 'customSimulationSpace')
  i660.simulationSpeed = i661[19]
  i660.useUnscaledTime = !!i661[20]
  i660.scalingMode = i661[21]
  i660.playOnAwake = !!i661[22]
  i660.maxParticles = i661[23]
  i660.emitterVelocityMode = i661[24]
  i660.stopAction = i661[25]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i662 = root || new pc.MinMaxCurve()
  var i663 = data
  i662.mode = i663[0]
  i662.curveMin = new pc.AnimationCurve( { keys_flow: i663[1] } )
  i662.curveMax = new pc.AnimationCurve( { keys_flow: i663[2] } )
  i662.curveMultiplier = i663[3]
  i662.constantMin = i663[4]
  i662.constantMax = i663[5]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i664 = root || new pc.MinMaxGradient()
  var i665 = data
  i664.mode = i665[0]
  i664.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i665[1], i664.gradientMin)
  i664.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i665[2], i664.gradientMax)
  i664.colorMin = new pc.Color(i665[3], i665[4], i665[5], i665[6])
  i664.colorMax = new pc.Color(i665[7], i665[8], i665[9], i665[10])
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i667 = data
  i666.mode = i667[0]
  var i669 = i667[1]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i669[i + 0]) );
  }
  i666.colorKeys = i668
  var i671 = i667[2]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i671[i + 0]) );
  }
  i666.alphaKeys = i670
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemColorBySpeed()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i673[1], i672.color)
  i672.range = new pc.Vec2( i673[2], i673[3] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i677 = data
  i676.color = new pc.Color(i677[0], i677[1], i677[2], i677[3])
  i676.time = i677[4]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i681 = data
  i680.alpha = i681[0]
  i680.time = i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemColorOverLifetime()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i683[1], i682.color)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemEmitter()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[1], i684.rateOverTime)
  i684.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.rateOverDistance)
  var i687 = i685[3]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i687[i + 0]) );
  }
  i684.bursts = i686
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemBurst()
  var i691 = data
  i690.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[0], i690.count)
  i690.cycleCount = i691[1]
  i690.minCount = i691[2]
  i690.maxCount = i691[3]
  i690.repeatInterval = i691[4]
  i690.time = i691[5]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemRotationBySpeed()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.x)
  i692.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.y)
  i692.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.z)
  i692.separateAxes = !!i693[4]
  i692.range = new pc.Vec2( i693[5], i693[6] )
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemRotationOverLifetime()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[1], i694.x)
  i694.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[2], i694.y)
  i694.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[3], i694.z)
  i694.separateAxes = !!i695[4]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemShape()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.shapeType = i697[1]
  i696.randomDirectionAmount = i697[2]
  i696.sphericalDirectionAmount = i697[3]
  i696.randomPositionAmount = i697[4]
  i696.alignToDirection = !!i697[5]
  i696.radius = i697[6]
  i696.radiusMode = i697[7]
  i696.radiusSpread = i697[8]
  i696.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[9], i696.radiusSpeed)
  i696.radiusThickness = i697[10]
  i696.angle = i697[11]
  i696.length = i697[12]
  i696.boxThickness = new pc.Vec3( i697[13], i697[14], i697[15] )
  i696.meshShapeType = i697[16]
  request.r(i697[17], i697[18], 0, i696, 'mesh')
  request.r(i697[19], i697[20], 0, i696, 'meshRenderer')
  request.r(i697[21], i697[22], 0, i696, 'skinnedMeshRenderer')
  i696.useMeshMaterialIndex = !!i697[23]
  i696.meshMaterialIndex = i697[24]
  i696.useMeshColors = !!i697[25]
  i696.normalOffset = i697[26]
  i696.arc = i697[27]
  i696.arcMode = i697[28]
  i696.arcSpread = i697[29]
  i696.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[30], i696.arcSpeed)
  i696.donutRadius = i697[31]
  i696.position = new pc.Vec3( i697[32], i697[33], i697[34] )
  i696.rotation = new pc.Vec3( i697[35], i697[36], i697[37] )
  i696.scale = new pc.Vec3( i697[38], i697[39], i697[40] )
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemSizeBySpeed()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[1], i698.x)
  i698.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[2], i698.y)
  i698.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[3], i698.z)
  i698.separateAxes = !!i699[4]
  i698.range = new pc.Vec2( i699[5], i699[6] )
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemSizeOverLifetime()
  var i701 = data
  i700.enabled = !!i701[0]
  i700.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[1], i700.x)
  i700.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[2], i700.y)
  i700.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[3], i700.z)
  i700.separateAxes = !!i701[4]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i702 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i703 = data
  i702.enabled = !!i703[0]
  i702.mode = i703[1]
  i702.animation = i703[2]
  i702.numTilesX = i703[3]
  i702.numTilesY = i703[4]
  i702.useRandomRow = !!i703[5]
  i702.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[6], i702.frameOverTime)
  i702.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[7], i702.startFrame)
  i702.cycleCount = i703[8]
  i702.rowIndex = i703[9]
  i702.flipU = i703[10]
  i702.flipV = i703[11]
  i702.spriteCount = i703[12]
  var i705 = i703[13]
  var i704 = []
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 2, i704, '')
  }
  i702.sprites = i704
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[1], i708.x)
  i708.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[2], i708.y)
  i708.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[3], i708.z)
  i708.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[4], i708.radial)
  i708.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[5], i708.speedModifier)
  i708.space = i709[6]
  i708.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[7], i708.orbitalX)
  i708.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[8], i708.orbitalY)
  i708.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[9], i708.orbitalZ)
  i708.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[10], i708.orbitalOffsetX)
  i708.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[11], i708.orbitalOffsetY)
  i708.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[12], i708.orbitalOffsetZ)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemNoise()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.separateAxes = !!i711[1]
  i710.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.strengthX)
  i710.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[3], i710.strengthY)
  i710.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[4], i710.strengthZ)
  i710.frequency = i711[5]
  i710.damping = !!i711[6]
  i710.octaveCount = i711[7]
  i710.octaveMultiplier = i711[8]
  i710.octaveScale = i711[9]
  i710.quality = i711[10]
  i710.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[11], i710.scrollSpeed)
  i710.scrollSpeedMultiplier = i711[12]
  i710.remapEnabled = !!i711[13]
  i710.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[14], i710.remapX)
  i710.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[15], i710.remapY)
  i710.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[16], i710.remapZ)
  i710.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[17], i710.positionAmount)
  i710.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[18], i710.rotationAmount)
  i710.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[19], i710.sizeAmount)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemInheritVelocity()
  var i713 = data
  i712.enabled = !!i713[0]
  i712.mode = i713[1]
  i712.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[2], i712.curve)
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i714 = root || new pc.ParticleSystemForceOverLifetime()
  var i715 = data
  i714.enabled = !!i715[0]
  i714.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[1], i714.x)
  i714.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[2], i714.y)
  i714.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[3], i714.z)
  i714.space = i715[4]
  i714.randomized = !!i715[5]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i716 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i717 = data
  i716.enabled = !!i717[0]
  i716.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[1], i716.limit)
  i716.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[2], i716.limitX)
  i716.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[3], i716.limitY)
  i716.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[4], i716.limitZ)
  i716.dampen = i717[5]
  i716.separateAxes = !!i717[6]
  i716.space = i717[7]
  i716.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[8], i716.drag)
  i716.multiplyDragByParticleSize = !!i717[9]
  i716.multiplyDragByParticleVelocity = !!i717[10]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'mesh')
  i718.meshCount = i719[2]
  i718.activeVertexStreamsCount = i719[3]
  i718.alignment = i719[4]
  i718.renderMode = i719[5]
  i718.sortMode = i719[6]
  i718.lengthScale = i719[7]
  i718.velocityScale = i719[8]
  i718.cameraVelocityScale = i719[9]
  i718.normalDirection = i719[10]
  i718.sortingFudge = i719[11]
  i718.minParticleSize = i719[12]
  i718.maxParticleSize = i719[13]
  i718.pivot = new pc.Vec3( i719[14], i719[15], i719[16] )
  request.r(i719[17], i719[18], 0, i718, 'trailMaterial')
  i718.applyActiveColorSpace = !!i719[19]
  i718.enabled = !!i719[20]
  request.r(i719[21], i719[22], 0, i718, 'sharedMaterial')
  var i721 = i719[23]
  var i720 = []
  for(var i = 0; i < i721.length; i += 2) {
  request.r(i721[i + 0], i721[i + 1], 2, i720, '')
  }
  i718.sharedMaterials = i720
  i718.receiveShadows = !!i719[24]
  i718.shadowCastingMode = i719[25]
  i718.sortingLayerID = i719[26]
  i718.sortingOrder = i719[27]
  i718.lightmapIndex = i719[28]
  i718.lightmapSceneIndex = i719[29]
  i718.lightmapScaleOffset = new pc.Vec4( i719[30], i719[31], i719[32], i719[33] )
  i718.lightProbeUsage = i719[34]
  i718.reflectionProbeUsage = i719[35]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i723 = data
  i722.name = i723[0]
  i722.index = i723[1]
  i722.startup = !!i723[2]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i725 = data
  i724.usedByComposite = !!i725[0]
  i724.autoTiling = !!i725[1]
  i724.size = new pc.Vec2( i725[2], i725[3] )
  i724.edgeRadius = i725[4]
  i724.enabled = !!i725[5]
  i724.isTrigger = !!i725[6]
  i724.usedByEffector = !!i725[7]
  i724.density = i725[8]
  i724.offset = new pc.Vec2( i725[9], i725[10] )
  request.r(i725[11], i725[12], 0, i724, 'material')
  return i724
}

Deserializers["LTPHUONG.DragToTriggerAnim"] = function (request, data, root) {
  var i726 = root || request.c( 'LTPHUONG.DragToTriggerAnim' )
  var i727 = data
  i726.OnAnimationStart = request.d('UnityEngine.Events.UnityEvent', i727[0], i726.OnAnimationStart)
  i726.OnMidPoint = request.d('UnityEngine.Events.UnityEvent', i727[1], i726.OnMidPoint)
  i726.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i727[2], i726.OnAnimationComplete)
  request.r(i727[3], i727[4], 0, i726, 'triggerPoint')
  i726.triggerRadius = i727[5]
  i726.midPosition = new pc.Vec3( i727[6], i727[7], i727[8] )
  i726.midRotationZ = i727[9]
  i726.endPosition = new pc.Vec3( i727[10], i727[11], i727[12] )
  i726.endRotationZ = i727[13]
  i726.finalPosition = new pc.Vec3( i727[14], i727[15], i727[16] )
  i726.finalRotationZ = i727[17]
  i726.totalDuration = i727[18]
  i726.fadeDuration = i727[19]
  i726.curveWidth = i727[20]
  var i729 = i727[21]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i726.spriteRenderers = i728
  i726.clickOrder = i727[22]
  i726.isBlocked = !!i727[23]
  i726.minY = i727[24]
  i726.maxY = i727[25]
  return i726
}

Deserializers["LTPHUONG.BroomTool"] = function (request, data, root) {
  var i732 = root || request.c( 'LTPHUONG.BroomTool' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'sweepPoint')
  request.r(i733[2], i733[3], 0, i732, 'sweepParticle')
  i732.onDragStarted = request.d('UnityEngine.Events.UnityEvent', i733[4], i732.onDragStarted)
  i732.onDragReleased = request.d('UnityEngine.Events.UnityEvent', i733[5], i732.onDragReleased)
  var i735 = i733[6]
  var i734 = []
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 2, i734, '')
  }
  i732.spriteRenderers = i734
  i732.clickOrder = i733[7]
  i732.isBlocked = !!i733[8]
  request.r(i733[9], i733[10], 0, i732, 'inPoint')
  request.r(i733[11], i733[12], 0, i732, 'outPoint')
  i732.autoReturnToPoint = !!i733[13]
  i732.dragOffsetY = i733[14]
  i732.dragRotationAngle = i733[15]
  i732.minY = i733[16]
  i732.maxY = i733[17]
  return i732
}

Deserializers["LTPHUONG.RevealPen"] = function (request, data, root) {
  var i736 = root || request.c( 'LTPHUONG.RevealPen' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'penTip')
  var i739 = i737[2]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
  i736.revealImages = i738
  i736.paintInterval = i737[3]
  i736.onDragStarted = request.d('UnityEngine.Events.UnityEvent', i737[4], i736.onDragStarted)
  i736.onDragReleased = request.d('UnityEngine.Events.UnityEvent', i737[5], i736.onDragReleased)
  var i741 = i737[6]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i736.spriteRenderers = i740
  i736.clickOrder = i737[7]
  i736.isBlocked = !!i737[8]
  request.r(i737[9], i737[10], 0, i736, 'inPoint')
  request.r(i737[11], i737[12], 0, i736, 'outPoint')
  i736.autoReturnToPoint = !!i737[13]
  i736.dragOffsetY = i737[14]
  i736.dragRotationAngle = i737[15]
  i736.minY = i737[16]
  i736.maxY = i737[17]
  return i736
}

Deserializers["LTPHUONG.DragSpeedSound"] = function (request, data, root) {
  var i744 = root || request.c( 'LTPHUONG.DragSpeedSound' )
  var i745 = data
  var i747 = i745[0]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 2, i746, '')
  }
  i744.targetZones = i746
  request.r(i745[1], i745[2], 0, i744, 'audioSource')
  request.r(i745[3], i745[4], 0, i744, 'particleObject')
  i744.volume = i745[5]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i751 = data
  i750.usedByComposite = !!i751[0]
  i750.autoTiling = !!i751[1]
  var i753 = i751[2]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
  var i755 = i753[i + 0]
  var i754 = []
  for(var i = 0; i < i755.length; i += 2) {
    i754.push( new pc.Vec2( i755[i + 0], i755[i + 1] ) );
  }
    i752.push( i754 );
  }
  i750.points = i752
  i750.enabled = !!i751[3]
  i750.isTrigger = !!i751[4]
  i750.usedByEffector = !!i751[5]
  i750.density = i751[6]
  i750.offset = new pc.Vec2( i751[7], i751[8] )
  request.r(i751[9], i751[10], 0, i750, 'material')
  return i750
}

Deserializers["LTPHUONG.WebItemGroup"] = function (request, data, root) {
  var i762 = root || request.c( 'LTPHUONG.WebItemGroup' )
  var i763 = data
  i762.OnAllWebsRemoved = request.d('UnityEngine.Events.UnityEvent', i763[0], i762.OnAllWebsRemoved)
  var i765 = i763[1]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('LTPHUONG.WebItem')))
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 1, i764, '')
  }
  i762.webItems = i764
  return i762
}

Deserializers["LTPHUONG.WebItem"] = function (request, data, root) {
  var i768 = root || request.c( 'LTPHUONG.WebItem' )
  var i769 = data
  i768.OnRemovedEvent = request.d('UnityEngine.Events.UnityEvent', i769[0], i768.OnRemovedEvent)
  i768.OnRemoved = request.d('System.Action', i769[1], i768.OnRemoved)
  request.r(i769[2], i769[3], 0, i768, 'spriteRenderer')
  request.r(i769[4], i769[5], 0, i768, 'sweepSfx')
  return i768
}

Deserializers["System.Action"] = function (request, data, root) {
  var i770 = root || request.c( 'System.Action' )
  var i771 = data
  return i770
}

Deserializers["LTPHUONG.RevealImage"] = function (request, data, root) {
  var i772 = root || request.c( 'LTPHUONG.RevealImage' )
  var i773 = data
  i772.OnComplete = request.d('UnityEngine.Events.UnityEvent', i773[0], i772.OnComplete)
  request.r(i773[1], i773[2], 0, i772, 'spriteRenderer')
  request.r(i773[3], i773[4], 0, i772, 'revealMaterial')
  i772.textureSize = i773[5]
  i772.brushRadius = i773[6]
  i772.threshold = i773[7]
  i772.eraseMode = !!i773[8]
  i772.paintEnabled = !!i773[9]
  request.r(i773[10], i773[11], 0, i772, 'completeSfx')
  return i772
}

Deserializers["LTPHUONG.DragInToDisappearManager"] = function (request, data, root) {
  var i774 = root || request.c( 'LTPHUONG.DragInToDisappearManager' )
  var i775 = data
  i774.OnAllDisappeared = request.d('UnityEngine.Events.UnityEvent', i775[0], i774.OnAllDisappeared)
  var i777 = i775[1]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('LTPHUONG.DragInToDisappear')))
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 1, i776, '')
  }
  i774.items = i776
  return i774
}

Deserializers["LTPHUONG.MoveTo"] = function (request, data, root) {
  var i780 = root || request.c( 'LTPHUONG.MoveTo' )
  var i781 = data
  i780.OnMoveComplete = request.d('UnityEngine.Events.UnityEvent', i781[0], i780.OnMoveComplete)
  i780.targetPosition = new pc.Vec2( i781[1], i781[2] )
  i780.duration = i781[3]
  i780.ease = i781[4]
  request.r(i781[5], i781[6], 0, i780, 'moveSound')
  return i780
}

Deserializers["LTPHUONG.DragInToDisappear"] = function (request, data, root) {
  var i782 = root || request.c( 'LTPHUONG.DragInToDisappear' )
  var i783 = data
  i782.OnDisappeared = request.d('UnityEngine.Events.UnityEvent', i783[0], i782.OnDisappeared)
  i782.sinkDistance = i783[1]
  i782.sinkDuration = i783[2]
  i782.fadeDuration = i783[3]
  request.r(i783[4], i783[5], 0, i782, 'dragSound')
  var i785 = i783[6]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.spriteRenderers = i784
  i782.clickOrder = i783[7]
  i782.isBlocked = !!i783[8]
  i782.minY = i783[9]
  i782.maxY = i783[10]
  return i782
}

Deserializers["LTPHUONG.Placeholder"] = function (request, data, root) {
  var i786 = root || request.c( 'LTPHUONG.Placeholder' )
  var i787 = data
  return i786
}

Deserializers["LTPHUONG.Item"] = function (request, data, root) {
  var i788 = root || request.c( 'LTPHUONG.Item' )
  var i789 = data
  i788.OnDragStarted = request.d('UnityEngine.Events.UnityEvent', i789[0], i788.OnDragStarted)
  i788.OnDragEnded = request.d('UnityEngine.Events.UnityEvent', i789[1], i788.OnDragEnded)
  i788.OnPlacedCorrectly = request.d('UnityEngine.Events.UnityEvent', i789[2], i788.OnPlacedCorrectly)
  var i791 = i789[3]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i788.validPlaceholders = i790
  var i793 = i789[4]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i788.requiredPlaceholders = i792
  i788.minLayer = i789[5]
  request.r(i789[6], i789[7], 0, i788, 'pickSfx')
  request.r(i789[8], i789[9], 0, i788, 'correctPlaceSfx')
  request.r(i789[10], i789[11], 0, i788, 'placeParticle')
  i788.dragOffsetY = i789[12]
  i788.dropDistance = i789[13]
  i788.bounceIntensity = i789[14]
  i788.enableFloatEffect = !!i789[15]
  i788.SizeIncrease = new pc.Vec3( i789[16], i789[17], i789[18] )
  var i795 = i789[19]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i788.spriteRenderers = i794
  i788.clickOrder = i789[20]
  i788.isBlocked = !!i789[21]
  i788.minY = i789[22]
  i788.maxY = i789[23]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i799 = data
  i798.ambientIntensity = i799[0]
  i798.reflectionIntensity = i799[1]
  i798.ambientMode = i799[2]
  i798.ambientLight = new pc.Color(i799[3], i799[4], i799[5], i799[6])
  i798.ambientSkyColor = new pc.Color(i799[7], i799[8], i799[9], i799[10])
  i798.ambientGroundColor = new pc.Color(i799[11], i799[12], i799[13], i799[14])
  i798.ambientEquatorColor = new pc.Color(i799[15], i799[16], i799[17], i799[18])
  i798.fogColor = new pc.Color(i799[19], i799[20], i799[21], i799[22])
  i798.fogEndDistance = i799[23]
  i798.fogStartDistance = i799[24]
  i798.fogDensity = i799[25]
  i798.fog = !!i799[26]
  request.r(i799[27], i799[28], 0, i798, 'skybox')
  i798.fogMode = i799[29]
  var i801 = i799[30]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i801[i + 0]) );
  }
  i798.lightmaps = i800
  i798.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i799[31], i798.lightProbes)
  i798.lightmapsMode = i799[32]
  i798.mixedBakeMode = i799[33]
  i798.environmentLightingMode = i799[34]
  i798.ambientProbe = new pc.SphericalHarmonicsL2(i799[35])
  i798.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i799[36])
  i798.useReferenceAmbientProbe = !!i799[37]
  request.r(i799[38], i799[39], 0, i798, 'customReflection')
  request.r(i799[40], i799[41], 0, i798, 'defaultReflection')
  i798.defaultReflectionMode = i799[42]
  i798.defaultReflectionResolution = i799[43]
  i798.sunLightObjectId = i799[44]
  i798.pixelLightCount = i799[45]
  i798.defaultReflectionHDR = !!i799[46]
  i798.hasLightDataAsset = !!i799[47]
  i798.hasManualGenerate = !!i799[48]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'lightmapColor')
  request.r(i805[2], i805[3], 0, i804, 'lightmapDirection')
  request.r(i805[4], i805[5], 0, i804, 'shadowMask')
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i806 = root || new UnityEngine.LightProbes()
  var i807 = data
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i815 = data
  var i817 = i815[0]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i817.length; i += 1) {
    i816.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i817[i + 0]));
  }
  i814.ShaderCompilationErrors = i816
  i814.name = i815[1]
  i814.guid = i815[2]
  var i819 = i815[3]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i814.shaderDefinedKeywords = i818
  var i821 = i815[4]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i821[i + 0]) );
  }
  i814.passes = i820
  var i823 = i815[5]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i823[i + 0]) );
  }
  i814.usePasses = i822
  var i825 = i815[6]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i825[i + 0]) );
  }
  i814.defaultParameterValues = i824
  request.r(i815[7], i815[8], 0, i814, 'unityFallbackShader')
  i814.readDepth = !!i815[9]
  i814.hasDepthOnlyPass = !!i815[10]
  i814.isCreatedByShaderGraph = !!i815[11]
  i814.disableBatching = !!i815[12]
  i814.compiled = !!i815[13]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i829 = data
  i828.shaderName = i829[0]
  i828.errorMessage = i829[1]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i834 = root || new pc.UnityShaderPass()
  var i835 = data
  i834.id = i835[0]
  i834.subShaderIndex = i835[1]
  i834.name = i835[2]
  i834.passType = i835[3]
  i834.grabPassTextureName = i835[4]
  i834.usePass = !!i835[5]
  i834.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[6], i834.zTest)
  i834.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[7], i834.zWrite)
  i834.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[8], i834.culling)
  i834.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i835[9], i834.blending)
  i834.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i835[10], i834.alphaBlending)
  i834.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[11], i834.colorWriteMask)
  i834.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[12], i834.offsetUnits)
  i834.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[13], i834.offsetFactor)
  i834.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[14], i834.stencilRef)
  i834.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[15], i834.stencilReadMask)
  i834.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[16], i834.stencilWriteMask)
  i834.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i835[17], i834.stencilOp)
  i834.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i835[18], i834.stencilOpFront)
  i834.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i835[19], i834.stencilOpBack)
  var i837 = i835[20]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i837[i + 0]) );
  }
  i834.tags = i836
  var i839 = i835[21]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( i839[i + 0] );
  }
  i834.passDefinedKeywords = i838
  var i841 = i835[22]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i841[i + 0]) );
  }
  i834.passDefinedKeywordGroups = i840
  var i843 = i835[23]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i843[i + 0]) );
  }
  i834.variants = i842
  var i845 = i835[24]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i845[i + 0]) );
  }
  i834.excludedVariants = i844
  i834.hasDepthReader = !!i835[25]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i847 = data
  i846.val = i847[0]
  i846.name = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i849 = data
  i848.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[0], i848.src)
  i848.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[1], i848.dst)
  i848.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[2], i848.op)
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i851 = data
  i850.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[0], i850.pass)
  i850.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[1], i850.fail)
  i850.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[2], i850.zFail)
  i850.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[3], i850.comp)
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i855 = data
  i854.name = i855[0]
  i854.value = i855[1]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i859 = data
  var i861 = i859[0]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i858.keywords = i860
  i858.hasDiscard = !!i859[1]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i865 = data
  i864.passId = i865[0]
  i864.subShaderIndex = i865[1]
  var i867 = i865[2]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( i867[i + 0] );
  }
  i864.keywords = i866
  i864.vertexProgram = i865[3]
  i864.fragmentProgram = i865[4]
  i864.exportedForWebGl2 = !!i865[5]
  i864.readDepth = !!i865[6]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'shader')
  i870.pass = i871[2]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i875 = data
  i874.name = i875[0]
  i874.type = i875[1]
  i874.value = new pc.Vec4( i875[2], i875[3], i875[4], i875[5] )
  i874.textureValue = i875[6]
  i874.shaderPropertyFlag = i875[7]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i877 = data
  i876.name = i877[0]
  request.r(i877[1], i877[2], 0, i876, 'texture')
  i876.aabb = i877[3]
  i876.vertices = i877[4]
  i876.triangles = i877[5]
  i876.textureRect = UnityEngine.Rect.MinMaxRect(i877[6], i877[7], i877[8], i877[9])
  i876.packedRect = UnityEngine.Rect.MinMaxRect(i877[10], i877[11], i877[12], i877[13])
  i876.border = new pc.Vec4( i877[14], i877[15], i877[16], i877[17] )
  i876.transparency = i877[18]
  i876.bounds = i877[19]
  i876.pixelsPerUnit = i877[20]
  i876.textureWidth = i877[21]
  i876.textureHeight = i877[22]
  i876.nativeSize = new pc.Vec2( i877[23], i877[24] )
  i876.pivot = new pc.Vec2( i877[25], i877[26] )
  i876.textureRectOffset = new pc.Vec2( i877[27], i877[28] )
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i879 = data
  i878.name = i879[0]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i881 = data
  i880.name = i881[0]
  i880.wrapMode = i881[1]
  i880.isLooping = !!i881[2]
  i880.length = i881[3]
  var i883 = i881[4]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i883[i + 0]) );
  }
  i880.curves = i882
  var i885 = i881[5]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i885[i + 0]) );
  }
  i880.events = i884
  i880.halfPrecision = !!i881[6]
  i880._frameRate = i881[7]
  i880.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i881[8], i880.localBounds)
  i880.hasMuscleCurves = !!i881[9]
  var i887 = i881[10]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( i887[i + 0] );
  }
  i880.clipMuscleConstant = i886
  i880.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i881[11], i880.clipBindingConstant)
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i891 = data
  i890.path = i891[0]
  i890.hash = i891[1]
  i890.componentType = i891[2]
  i890.property = i891[3]
  i890.keys = i891[4]
  var i893 = i891[5]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i893[i + 0]) );
  }
  i890.objectReferenceKeys = i892
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i897 = data
  i896.time = i897[0]
  request.r(i897[1], i897[2], 0, i896, 'value')
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i901 = data
  i900.functionName = i901[0]
  i900.floatParameter = i901[1]
  i900.intParameter = i901[2]
  i900.stringParameter = i901[3]
  request.r(i901[4], i901[5], 0, i900, 'objectReferenceParameter')
  i900.time = i901[6]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i903 = data
  i902.center = new pc.Vec3( i903[0], i903[1], i903[2] )
  i902.extends = new pc.Vec3( i903[3], i903[4], i903[5] )
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i907 = data
  var i909 = i907[0]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( i909[i + 0] );
  }
  i906.genericBindings = i908
  var i911 = i907[1]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( i911[i + 0] );
  }
  i906.pptrCurveMapping = i910
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i913 = data
  i912.name = i913[0]
  var i915 = i913[1]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i915[i + 0]) );
  }
  i912.layers = i914
  var i917 = i913[2]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i917[i + 0]) );
  }
  i912.parameters = i916
  i912.animationClips = i913[3]
  i912.avatarUnsupported = i913[4]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i921 = data
  i920.name = i921[0]
  i920.defaultWeight = i921[1]
  i920.blendingMode = i921[2]
  i920.avatarMask = i921[3]
  i920.syncedLayerIndex = i921[4]
  i920.syncedLayerAffectsTiming = !!i921[5]
  i920.syncedLayers = i921[6]
  i920.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i921[7], i920.stateMachine)
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i923 = data
  i922.id = i923[0]
  i922.name = i923[1]
  i922.path = i923[2]
  var i925 = i923[3]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i925[i + 0]) );
  }
  i922.states = i924
  var i927 = i923[4]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i927[i + 0]) );
  }
  i922.machines = i926
  var i929 = i923[5]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i929[i + 0]) );
  }
  i922.entryStateTransitions = i928
  var i931 = i923[6]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i931[i + 0]) );
  }
  i922.exitStateTransitions = i930
  var i933 = i923[7]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i933[i + 0]) );
  }
  i922.anyStateTransitions = i932
  i922.defaultStateId = i923[8]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i937 = data
  i936.id = i937[0]
  i936.name = i937[1]
  i936.cycleOffset = i937[2]
  i936.cycleOffsetParameter = i937[3]
  i936.cycleOffsetParameterActive = !!i937[4]
  i936.mirror = !!i937[5]
  i936.mirrorParameter = i937[6]
  i936.mirrorParameterActive = !!i937[7]
  i936.motionId = i937[8]
  i936.nameHash = i937[9]
  i936.fullPathHash = i937[10]
  i936.speed = i937[11]
  i936.speedParameter = i937[12]
  i936.speedParameterActive = !!i937[13]
  i936.tag = i937[14]
  i936.tagHash = i937[15]
  i936.writeDefaultValues = !!i937[16]
  var i939 = i937[17]
  var i938 = []
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 2, i938, '')
  }
  i936.behaviours = i938
  var i941 = i937[18]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i941[i + 0]) );
  }
  i936.transitions = i940
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i947 = data
  i946.fullPath = i947[0]
  i946.canTransitionToSelf = !!i947[1]
  i946.duration = i947[2]
  i946.exitTime = i947[3]
  i946.hasExitTime = !!i947[4]
  i946.hasFixedDuration = !!i947[5]
  i946.interruptionSource = i947[6]
  i946.offset = i947[7]
  i946.orderedInterruption = !!i947[8]
  i946.destinationStateId = i947[9]
  i946.isExit = !!i947[10]
  i946.mute = !!i947[11]
  i946.solo = !!i947[12]
  var i949 = i947[13]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i949[i + 0]) );
  }
  i946.conditions = i948
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i955 = data
  i954.destinationStateId = i955[0]
  i954.isExit = !!i955[1]
  i954.mute = !!i955[2]
  i954.solo = !!i955[3]
  var i957 = i955[4]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i957[i + 0]) );
  }
  i954.conditions = i956
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i961 = data
  i960.defaultBool = !!i961[0]
  i960.defaultFloat = i961[1]
  i960.defaultInt = i961[2]
  i960.name = i961[3]
  i960.nameHash = i961[4]
  i960.type = i961[5]
  return i960
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i962 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i963 = data
  i962.useSafeMode = !!i963[0]
  i962.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i963[1], i962.safeModeOptions)
  i962.timeScale = i963[2]
  i962.unscaledTimeScale = i963[3]
  i962.useSmoothDeltaTime = !!i963[4]
  i962.maxSmoothUnscaledTime = i963[5]
  i962.rewindCallbackMode = i963[6]
  i962.showUnityEditorReport = !!i963[7]
  i962.logBehaviour = i963[8]
  i962.drawGizmos = !!i963[9]
  i962.defaultRecyclable = !!i963[10]
  i962.defaultAutoPlay = i963[11]
  i962.defaultUpdateType = i963[12]
  i962.defaultTimeScaleIndependent = !!i963[13]
  i962.defaultEaseType = i963[14]
  i962.defaultEaseOvershootOrAmplitude = i963[15]
  i962.defaultEasePeriod = i963[16]
  i962.defaultAutoKill = !!i963[17]
  i962.defaultLoopType = i963[18]
  i962.debugMode = !!i963[19]
  i962.debugStoreTargetId = !!i963[20]
  i962.showPreviewPanel = !!i963[21]
  i962.storeSettingsLocation = i963[22]
  i962.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i963[23], i962.modules)
  i962.createASMDEF = !!i963[24]
  i962.showPlayingTweens = !!i963[25]
  i962.showPausedTweens = !!i963[26]
  return i962
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i964 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i965 = data
  i964.logBehaviour = i965[0]
  i964.nestedTweenFailureBehaviour = i965[1]
  return i964
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i966 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i967 = data
  i966.showPanel = !!i967[0]
  i966.audioEnabled = !!i967[1]
  i966.physicsEnabled = !!i967[2]
  i966.physics2DEnabled = !!i967[3]
  i966.spriteEnabled = !!i967[4]
  i966.uiEnabled = !!i967[5]
  i966.textMeshProEnabled = !!i967[6]
  i966.tk2DEnabled = !!i967[7]
  i966.deAudioEnabled = !!i967[8]
  i966.deUnityExtendedEnabled = !!i967[9]
  i966.epoOutlineEnabled = !!i967[10]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i969 = data
  var i971 = i969[0]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i971[i + 0]) );
  }
  i968.files = i970
  i968.componentToPrefabIds = i969[1]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i975 = data
  i974.path = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'unityObject')
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i977 = data
  var i979 = i977[0]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i979[i + 0]) );
  }
  i976.scriptsExecutionOrder = i978
  var i981 = i977[1]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i981[i + 0]) );
  }
  i976.sortingLayers = i980
  var i983 = i977[2]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i983[i + 0]) );
  }
  i976.cullingLayers = i982
  i976.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i977[3], i976.timeSettings)
  i976.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i977[4], i976.physicsSettings)
  i976.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i977[5], i976.physics2DSettings)
  i976.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i977[6], i976.qualitySettings)
  i976.enableRealtimeShadows = !!i977[7]
  i976.enableAutoInstancing = !!i977[8]
  i976.enableStaticBatching = !!i977[9]
  i976.enableDynamicBatching = !!i977[10]
  i976.lightmapEncodingQuality = i977[11]
  i976.desiredColorSpace = i977[12]
  var i985 = i977[13]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( i985[i + 0] );
  }
  i976.allTags = i984
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i989 = data
  i988.name = i989[0]
  i988.value = i989[1]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i993 = data
  i992.id = i993[0]
  i992.name = i993[1]
  i992.value = i993[2]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i997 = data
  i996.id = i997[0]
  i996.name = i997[1]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i999 = data
  i998.fixedDeltaTime = i999[0]
  i998.maximumDeltaTime = i999[1]
  i998.timeScale = i999[2]
  i998.maximumParticleTimestep = i999[3]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1001 = data
  i1000.gravity = new pc.Vec3( i1001[0], i1001[1], i1001[2] )
  i1000.defaultSolverIterations = i1001[3]
  i1000.bounceThreshold = i1001[4]
  i1000.autoSyncTransforms = !!i1001[5]
  i1000.autoSimulation = !!i1001[6]
  var i1003 = i1001[7]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1003[i + 0]) );
  }
  i1000.collisionMatrix = i1002
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1007 = data
  i1006.enabled = !!i1007[0]
  i1006.layerId = i1007[1]
  i1006.otherLayerId = i1007[2]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'material')
  i1008.gravity = new pc.Vec2( i1009[2], i1009[3] )
  i1008.positionIterations = i1009[4]
  i1008.velocityIterations = i1009[5]
  i1008.velocityThreshold = i1009[6]
  i1008.maxLinearCorrection = i1009[7]
  i1008.maxAngularCorrection = i1009[8]
  i1008.maxTranslationSpeed = i1009[9]
  i1008.maxRotationSpeed = i1009[10]
  i1008.baumgarteScale = i1009[11]
  i1008.baumgarteTOIScale = i1009[12]
  i1008.timeToSleep = i1009[13]
  i1008.linearSleepTolerance = i1009[14]
  i1008.angularSleepTolerance = i1009[15]
  i1008.defaultContactOffset = i1009[16]
  i1008.autoSimulation = !!i1009[17]
  i1008.queriesHitTriggers = !!i1009[18]
  i1008.queriesStartInColliders = !!i1009[19]
  i1008.callbacksOnDisable = !!i1009[20]
  i1008.reuseCollisionCallbacks = !!i1009[21]
  i1008.autoSyncTransforms = !!i1009[22]
  var i1011 = i1009[23]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1011[i + 0]) );
  }
  i1008.collisionMatrix = i1010
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1015 = data
  i1014.enabled = !!i1015[0]
  i1014.layerId = i1015[1]
  i1014.otherLayerId = i1015[2]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1017 = data
  var i1019 = i1017[0]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1019[i + 0]) );
  }
  i1016.qualityLevels = i1018
  var i1021 = i1017[1]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( i1021[i + 0] );
  }
  i1016.names = i1020
  i1016.shadows = i1017[2]
  i1016.anisotropicFiltering = i1017[3]
  i1016.antiAliasing = i1017[4]
  i1016.lodBias = i1017[5]
  i1016.shadowCascades = i1017[6]
  i1016.shadowDistance = i1017[7]
  i1016.shadowmaskMode = i1017[8]
  i1016.shadowProjection = i1017[9]
  i1016.shadowResolution = i1017[10]
  i1016.softParticles = !!i1017[11]
  i1016.softVegetation = !!i1017[12]
  i1016.activeColorSpace = i1017[13]
  i1016.desiredColorSpace = i1017[14]
  i1016.masterTextureLimit = i1017[15]
  i1016.maxQueuedFrames = i1017[16]
  i1016.particleRaycastBudget = i1017[17]
  i1016.pixelLightCount = i1017[18]
  i1016.realtimeReflectionProbes = !!i1017[19]
  i1016.shadowCascade2Split = i1017[20]
  i1016.shadowCascade4Split = new pc.Vec3( i1017[21], i1017[22], i1017[23] )
  i1016.streamingMipmapsActive = !!i1017[24]
  i1016.vSyncCount = i1017[25]
  i1016.asyncUploadBufferSize = i1017[26]
  i1016.asyncUploadTimeSlice = i1017[27]
  i1016.billboardsFaceCameraPosition = !!i1017[28]
  i1016.shadowNearPlaneOffset = i1017[29]
  i1016.streamingMipmapsMemoryBudget = i1017[30]
  i1016.maximumLODLevel = i1017[31]
  i1016.streamingMipmapsAddAllCameras = !!i1017[32]
  i1016.streamingMipmapsMaxLevelReduction = i1017[33]
  i1016.streamingMipmapsRenderersPerFrame = i1017[34]
  i1016.resolutionScalingFixedDPIFactor = i1017[35]
  i1016.streamingMipmapsMaxFileIORequests = i1017[36]
  i1016.currentQualityLevel = i1017[37]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1027 = data
  i1026.mode = i1027[0]
  i1026.parameter = i1027[1]
  i1026.threshold = i1027[2]
  return i1026
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[57],"58":[4],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[68],"75":[68],"76":[68],"77":[68],"78":[68],"79":[68],"80":[68],"81":[4],"82":[83],"84":[85],"86":[85],"9":[8],"87":[8],"88":[89],"90":[91],"92":[4],"93":[8],"94":[83,8],"95":[8,15],"96":[8],"97":[15,8],"98":[83],"99":[15,8],"100":[8],"101":[4],"102":[4],"103":[104],"105":[89],"106":[20],"107":[8],"108":[8],"12":[9],"16":[15,8],"109":[8],"11":[9],"110":[8],"111":[8],"112":[8],"113":[8],"114":[8],"115":[8],"116":[8],"117":[8],"118":[8],"119":[15,8],"120":[8],"121":[8],"122":[8],"123":[8],"124":[15,8],"125":[8],"126":[18],"127":[18],"19":[18],"128":[18],"26":[4],"129":[4],"130":[89]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","LTPHUONG.GameState","LTPHUONG.ClickController","UnityEngine.Camera","LTPHUONG.AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","LTPHUONG.UIButtonPulse","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.Material","LTPHUONG.TutorialHand","LTPHUONG.TutorialManager3","LTPHUONG.DragInToDisappear","UnityEngine.AudioListener","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.Shader","Satisgame.EmojiControl","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.BoxCollider2D","LTPHUONG.DragToTriggerAnim","LTPHUONG.MoveTo","LTPHUONG.BroomTool","LTPHUONG.RevealPen","LTPHUONG.RevealImage","UnityEngine.GameObject","LTPHUONG.DragSpeedSound","UnityEngine.PolygonCollider2D","LTPHUONG.WebItemGroup","LTPHUONG.WebItem","LTPHUONG.DragInToDisappearManager","LTPHUONG.Placeholder","LTPHUONG.Item","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "ply";

Deserializers.lunaInitializationTime = "03/26/2026 02:25:17";

Deserializers.lunaDaysRunning = "53.3";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "121";

Deserializers.lunaAppID = "26861";

Deserializers.projectId = "74d7ed4ff49645f418147d6fe7d18463";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.ply";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "091f040c-7a28-4fa8-95f5-2f5b4d87651d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

