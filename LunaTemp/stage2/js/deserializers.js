var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2450 = root || request.c( 'UnityEngine.JointSpring' )
  var i2451 = data
  i2450.spring = i2451[0]
  i2450.damper = i2451[1]
  i2450.targetPosition = i2451[2]
  return i2450
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2452 = root || request.c( 'UnityEngine.JointMotor' )
  var i2453 = data
  i2452.m_TargetVelocity = i2453[0]
  i2452.m_Force = i2453[1]
  i2452.m_FreeSpin = i2453[2]
  return i2452
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2454 = root || request.c( 'UnityEngine.JointLimits' )
  var i2455 = data
  i2454.m_Min = i2455[0]
  i2454.m_Max = i2455[1]
  i2454.m_Bounciness = i2455[2]
  i2454.m_BounceMinVelocity = i2455[3]
  i2454.m_ContactDistance = i2455[4]
  i2454.minBounce = i2455[5]
  i2454.maxBounce = i2455[6]
  return i2454
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2456 = root || request.c( 'UnityEngine.JointDrive' )
  var i2457 = data
  i2456.m_PositionSpring = i2457[0]
  i2456.m_PositionDamper = i2457[1]
  i2456.m_MaximumForce = i2457[2]
  i2456.m_UseAcceleration = i2457[3]
  return i2456
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2458 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2459 = data
  i2458.m_Spring = i2459[0]
  i2458.m_Damper = i2459[1]
  return i2458
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2460 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2461 = data
  i2460.m_Limit = i2461[0]
  i2460.m_Bounciness = i2461[1]
  i2460.m_ContactDistance = i2461[2]
  return i2460
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2462 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2463 = data
  i2462.m_ExtremumSlip = i2463[0]
  i2462.m_ExtremumValue = i2463[1]
  i2462.m_AsymptoteSlip = i2463[2]
  i2462.m_AsymptoteValue = i2463[3]
  i2462.m_Stiffness = i2463[4]
  return i2462
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2464 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2465 = data
  i2464.m_LowerAngle = i2465[0]
  i2464.m_UpperAngle = i2465[1]
  return i2464
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2466 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2467 = data
  i2466.m_MotorSpeed = i2467[0]
  i2466.m_MaximumMotorTorque = i2467[1]
  return i2466
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2468 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2469 = data
  i2468.m_DampingRatio = i2469[0]
  i2468.m_Frequency = i2469[1]
  i2468.m_Angle = i2469[2]
  return i2468
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2470 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2471 = data
  i2470.m_LowerTranslation = i2471[0]
  i2470.m_UpperTranslation = i2471[1]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2473 = data
  i2472.position = new pc.Vec3( i2473[0], i2473[1], i2473[2] )
  i2472.scale = new pc.Vec3( i2473[3], i2473[4], i2473[5] )
  i2472.rotation = new pc.Quat(i2473[6], i2473[7], i2473[8], i2473[9])
  return i2472
}

Deserializers["LTPHUONG.GameState"] = function (request, data, root) {
  var i2474 = root || request.c( 'LTPHUONG.GameState' )
  var i2475 = data
  return i2474
}

Deserializers["LTPHUONG.ClickController"] = function (request, data, root) {
  var i2476 = root || request.c( 'LTPHUONG.ClickController' )
  var i2477 = data
  request.r(i2477[0], i2477[1], 0, i2476, 'mainCamera')
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2479 = data
  i2478.name = i2479[0]
  i2478.tagId = i2479[1]
  i2478.enabled = !!i2479[2]
  i2478.isStatic = !!i2479[3]
  i2478.layer = i2479[4]
  return i2478
}

Deserializers["LTPHUONG.AudioManager"] = function (request, data, root) {
  var i2480 = root || request.c( 'LTPHUONG.AudioManager' )
  var i2481 = data
  request.r(i2481[0], i2481[1], 0, i2480, 'sfxAudioSource')
  request.r(i2481[2], i2481[3], 0, i2480, 'bgmAudioSource')
  request.r(i2481[4], i2481[5], 0, i2480, 'bgmClip')
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2483 = data
  request.r(i2483[0], i2483[1], 0, i2482, 'clip')
  request.r(i2483[2], i2483[3], 0, i2482, 'outputAudioMixerGroup')
  i2482.playOnAwake = !!i2483[4]
  i2482.loop = !!i2483[5]
  i2482.time = i2483[6]
  i2482.volume = i2483[7]
  i2482.pitch = i2483[8]
  i2482.enabled = !!i2483[9]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2485 = data
  i2484.pivot = new pc.Vec2( i2485[0], i2485[1] )
  i2484.anchorMin = new pc.Vec2( i2485[2], i2485[3] )
  i2484.anchorMax = new pc.Vec2( i2485[4], i2485[5] )
  i2484.sizeDelta = new pc.Vec2( i2485[6], i2485[7] )
  i2484.anchoredPosition3D = new pc.Vec3( i2485[8], i2485[9], i2485[10] )
  i2484.rotation = new pc.Quat(i2485[11], i2485[12], i2485[13], i2485[14])
  i2484.scale = new pc.Vec3( i2485[15], i2485[16], i2485[17] )
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2487 = data
  i2486.planeDistance = i2487[0]
  i2486.referencePixelsPerUnit = i2487[1]
  i2486.isFallbackOverlay = !!i2487[2]
  i2486.renderMode = i2487[3]
  i2486.renderOrder = i2487[4]
  i2486.sortingLayerName = i2487[5]
  i2486.sortingOrder = i2487[6]
  i2486.scaleFactor = i2487[7]
  request.r(i2487[8], i2487[9], 0, i2486, 'worldCamera')
  i2486.overrideSorting = !!i2487[10]
  i2486.pixelPerfect = !!i2487[11]
  i2486.targetDisplay = i2487[12]
  i2486.overridePixelPerfect = !!i2487[13]
  i2486.enabled = !!i2487[14]
  return i2486
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2488 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2489 = data
  i2488.m_UiScaleMode = i2489[0]
  i2488.m_ReferencePixelsPerUnit = i2489[1]
  i2488.m_ScaleFactor = i2489[2]
  i2488.m_ReferenceResolution = new pc.Vec2( i2489[3], i2489[4] )
  i2488.m_ScreenMatchMode = i2489[5]
  i2488.m_MatchWidthOrHeight = i2489[6]
  i2488.m_PhysicalUnit = i2489[7]
  i2488.m_FallbackScreenDPI = i2489[8]
  i2488.m_DefaultSpriteDPI = i2489[9]
  i2488.m_DynamicPixelsPerUnit = i2489[10]
  i2488.m_PresetInfoIsWorld = !!i2489[11]
  return i2488
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2490 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2491 = data
  i2490.m_IgnoreReversedGraphics = !!i2491[0]
  i2490.m_BlockingObjects = i2491[1]
  i2490.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2491[2] )
  return i2490
}

Deserializers["LTPHUONG.UIButtonPulse"] = function (request, data, root) {
  var i2492 = root || request.c( 'LTPHUONG.UIButtonPulse' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'button')
  request.r(i2493[2], i2493[3], 0, i2492, 'imageRect')
  i2492.scaleMin = i2493[4]
  i2492.scaleMax = i2493[5]
  i2492.pulseDuration = i2493[6]
  i2492.landscapeImagePos = new pc.Vec2( i2493[7], i2493[8] )
  i2492.landscapeButtonPos = new pc.Vec2( i2493[9], i2493[10] )
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2495 = data
  i2494.cullTransparentMesh = !!i2495[0]
  return i2494
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2496 = root || request.c( 'UnityEngine.UI.Image' )
  var i2497 = data
  request.r(i2497[0], i2497[1], 0, i2496, 'm_Sprite')
  i2496.m_Type = i2497[2]
  i2496.m_PreserveAspect = !!i2497[3]
  i2496.m_FillCenter = !!i2497[4]
  i2496.m_FillMethod = i2497[5]
  i2496.m_FillAmount = i2497[6]
  i2496.m_FillClockwise = !!i2497[7]
  i2496.m_FillOrigin = i2497[8]
  i2496.m_UseSpriteMesh = !!i2497[9]
  i2496.m_PixelsPerUnitMultiplier = i2497[10]
  request.r(i2497[11], i2497[12], 0, i2496, 'm_Material')
  i2496.m_Maskable = !!i2497[13]
  i2496.m_Color = new pc.Color(i2497[14], i2497[15], i2497[16], i2497[17])
  i2496.m_RaycastTarget = !!i2497[18]
  i2496.m_RaycastPadding = new pc.Vec4( i2497[19], i2497[20], i2497[21], i2497[22] )
  return i2496
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2498 = root || request.c( 'UnityEngine.UI.Button' )
  var i2499 = data
  i2498.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2499[0], i2498.m_OnClick)
  i2498.m_Navigation = request.d('UnityEngine.UI.Navigation', i2499[1], i2498.m_Navigation)
  i2498.m_Transition = i2499[2]
  i2498.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2499[3], i2498.m_Colors)
  i2498.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2499[4], i2498.m_SpriteState)
  i2498.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2499[5], i2498.m_AnimationTriggers)
  i2498.m_Interactable = !!i2499[6]
  request.r(i2499[7], i2499[8], 0, i2498, 'm_TargetGraphic')
  return i2498
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2500 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2501 = data
  i2500.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2501[0], i2500.m_PersistentCalls)
  return i2500
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2502 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2503 = data
  var i2505 = i2503[0]
  var i2504 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.add(request.d('UnityEngine.Events.PersistentCall', i2505[i + 0]));
  }
  i2502.m_Calls = i2504
  return i2502
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2508 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2509 = data
  request.r(i2509[0], i2509[1], 0, i2508, 'm_Target')
  i2508.m_TargetAssemblyTypeName = i2509[2]
  i2508.m_MethodName = i2509[3]
  i2508.m_Mode = i2509[4]
  i2508.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2509[5], i2508.m_Arguments)
  i2508.m_CallState = i2509[6]
  return i2508
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2510 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2511 = data
  request.r(i2511[0], i2511[1], 0, i2510, 'm_ObjectArgument')
  i2510.m_ObjectArgumentAssemblyTypeName = i2511[2]
  i2510.m_IntArgument = i2511[3]
  i2510.m_FloatArgument = i2511[4]
  i2510.m_StringArgument = i2511[5]
  i2510.m_BoolArgument = !!i2511[6]
  return i2510
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2512 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2513 = data
  i2512.m_Mode = i2513[0]
  i2512.m_WrapAround = !!i2513[1]
  request.r(i2513[2], i2513[3], 0, i2512, 'm_SelectOnUp')
  request.r(i2513[4], i2513[5], 0, i2512, 'm_SelectOnDown')
  request.r(i2513[6], i2513[7], 0, i2512, 'm_SelectOnLeft')
  request.r(i2513[8], i2513[9], 0, i2512, 'm_SelectOnRight')
  return i2512
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2514 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2515 = data
  i2514.m_NormalColor = new pc.Color(i2515[0], i2515[1], i2515[2], i2515[3])
  i2514.m_HighlightedColor = new pc.Color(i2515[4], i2515[5], i2515[6], i2515[7])
  i2514.m_PressedColor = new pc.Color(i2515[8], i2515[9], i2515[10], i2515[11])
  i2514.m_SelectedColor = new pc.Color(i2515[12], i2515[13], i2515[14], i2515[15])
  i2514.m_DisabledColor = new pc.Color(i2515[16], i2515[17], i2515[18], i2515[19])
  i2514.m_ColorMultiplier = i2515[20]
  i2514.m_FadeDuration = i2515[21]
  return i2514
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2516 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2517 = data
  request.r(i2517[0], i2517[1], 0, i2516, 'm_HighlightedSprite')
  request.r(i2517[2], i2517[3], 0, i2516, 'm_PressedSprite')
  request.r(i2517[4], i2517[5], 0, i2516, 'm_SelectedSprite')
  request.r(i2517[6], i2517[7], 0, i2516, 'm_DisabledSprite')
  return i2516
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2518 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2519 = data
  i2518.m_NormalTrigger = i2519[0]
  i2518.m_HighlightedTrigger = i2519[1]
  i2518.m_PressedTrigger = i2519[2]
  i2518.m_SelectedTrigger = i2519[3]
  i2518.m_DisabledTrigger = i2519[4]
  return i2518
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2520 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2521 = data
  request.r(i2521[0], i2521[1], 0, i2520, 'm_FirstSelected')
  i2520.m_sendNavigationEvents = !!i2521[2]
  i2520.m_DragThreshold = i2521[3]
  return i2520
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2522 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2523 = data
  i2522.m_HorizontalAxis = i2523[0]
  i2522.m_VerticalAxis = i2523[1]
  i2522.m_SubmitButton = i2523[2]
  i2522.m_CancelButton = i2523[3]
  i2522.m_InputActionsPerSecond = i2523[4]
  i2522.m_RepeatDelay = i2523[5]
  i2522.m_ForceModuleActive = !!i2523[6]
  i2522.m_SendPointerHoverToParent = !!i2523[7]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2525 = data
  i2524.color = new pc.Color(i2525[0], i2525[1], i2525[2], i2525[3])
  request.r(i2525[4], i2525[5], 0, i2524, 'sprite')
  i2524.flipX = !!i2525[6]
  i2524.flipY = !!i2525[7]
  i2524.drawMode = i2525[8]
  i2524.size = new pc.Vec2( i2525[9], i2525[10] )
  i2524.tileMode = i2525[11]
  i2524.adaptiveModeThreshold = i2525[12]
  i2524.maskInteraction = i2525[13]
  i2524.spriteSortPoint = i2525[14]
  i2524.enabled = !!i2525[15]
  request.r(i2525[16], i2525[17], 0, i2524, 'sharedMaterial')
  var i2527 = i2525[18]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 2) {
  request.r(i2527[i + 0], i2527[i + 1], 2, i2526, '')
  }
  i2524.sharedMaterials = i2526
  i2524.receiveShadows = !!i2525[19]
  i2524.shadowCastingMode = i2525[20]
  i2524.sortingLayerID = i2525[21]
  i2524.sortingOrder = i2525[22]
  i2524.lightmapIndex = i2525[23]
  i2524.lightmapSceneIndex = i2525[24]
  i2524.lightmapScaleOffset = new pc.Vec4( i2525[25], i2525[26], i2525[27], i2525[28] )
  i2524.lightProbeUsage = i2525[29]
  i2524.reflectionProbeUsage = i2525[30]
  return i2524
}

Deserializers["LTPHUONG.TutorialHand"] = function (request, data, root) {
  var i2530 = root || request.c( 'LTPHUONG.TutorialHand' )
  var i2531 = data
  request.r(i2531[0], i2531[1], 0, i2530, 'point')
  i2530.clickRotation = i2531[2]
  i2530.clickDuration = i2531[3]
  i2530.dragDuration = i2531[4]
  i2530.loopDelay = i2531[5]
  request.r(i2531[6], i2531[7], 0, i2530, 'handSprite')
  i2530.fadeDuration = i2531[8]
  return i2530
}

Deserializers["LTPHUONG.GameplayTutorialManager"] = function (request, data, root) {
  var i2532 = root || request.c( 'LTPHUONG.GameplayTutorialManager' )
  var i2533 = data
  i2532.OnFirstInteraction = request.d('UnityEngine.Events.UnityEvent', i2533[0], i2532.OnFirstInteraction)
  i2532.OnEveryInteraction = request.d('UnityEngine.Events.UnityEvent', i2533[1], i2532.OnEveryInteraction)
  request.r(i2533[2], i2533[3], 0, i2532, 'tutorialHand')
  i2532.idleTimeout = i2533[4]
  var i2535 = i2533[5]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 2) {
  request.r(i2535[i + 0], i2535[i + 1], 2, i2534, '')
  }
  i2532.garbageItems = i2534
  request.r(i2533[6], i2533[7], 0, i2532, 'trashBinTarget')
  request.r(i2533[8], i2533[9], 0, i2532, 'revealPen')
  request.r(i2533[10], i2533[11], 0, i2532, 'revealImage1')
  var i2537 = i2533[12]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 2) {
  request.r(i2537[i + 0], i2537[i + 1], 2, i2536, '')
  }
  i2532.trays = i2536
  request.r(i2533[13], i2533[14], 0, i2532, 'revealPen2')
  request.r(i2533[15], i2533[16], 0, i2532, 'revealImage2')
  request.r(i2533[17], i2533[18], 0, i2532, 'revealPen3')
  request.r(i2533[19], i2533[20], 0, i2532, 'revealImage3')
  request.r(i2533[21], i2533[22], 0, i2532, 'ctaFrom')
  request.r(i2533[23], i2533[24], 0, i2532, 'ctaTo')
  return i2532
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2538 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2539 = data
  i2538.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2539[0], i2538.m_PersistentCalls)
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2545 = data
  i2544.aspect = i2545[0]
  i2544.orthographic = !!i2545[1]
  i2544.orthographicSize = i2545[2]
  i2544.backgroundColor = new pc.Color(i2545[3], i2545[4], i2545[5], i2545[6])
  i2544.nearClipPlane = i2545[7]
  i2544.farClipPlane = i2545[8]
  i2544.fieldOfView = i2545[9]
  i2544.depth = i2545[10]
  i2544.clearFlags = i2545[11]
  i2544.cullingMask = i2545[12]
  i2544.rect = i2545[13]
  request.r(i2545[14], i2545[15], 0, i2544, 'targetTexture')
  i2544.usePhysicalProperties = !!i2545[16]
  i2544.focalLength = i2545[17]
  i2544.sensorSize = new pc.Vec2( i2545[18], i2545[19] )
  i2544.lensShift = new pc.Vec2( i2545[20], i2545[21] )
  i2544.gateFit = i2545[22]
  i2544.commandBufferCount = i2545[23]
  i2544.cameraType = i2545[24]
  i2544.enabled = !!i2545[25]
  return i2544
}

Deserializers["UnityEngine.EventSystems.Physics2DRaycaster"] = function (request, data, root) {
  var i2546 = root || request.c( 'UnityEngine.EventSystems.Physics2DRaycaster' )
  var i2547 = data
  i2546.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i2547[0] )
  i2546.m_MaxRayIntersections = i2547[1]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2549 = data
  i2548.name = i2549[0]
  i2548.width = i2549[1]
  i2548.height = i2549[2]
  i2548.mipmapCount = i2549[3]
  i2548.anisoLevel = i2549[4]
  i2548.filterMode = i2549[5]
  i2548.hdr = !!i2549[6]
  i2548.format = i2549[7]
  i2548.wrapMode = i2549[8]
  i2548.alphaIsTransparency = !!i2549[9]
  i2548.alphaSource = i2549[10]
  i2548.graphicsFormat = i2549[11]
  i2548.sRGBTexture = !!i2549[12]
  i2548.desiredColorSpace = i2549[13]
  i2548.wrapU = i2549[14]
  i2548.wrapV = i2549[15]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2550 = root || new pc.UnityMaterial()
  var i2551 = data
  i2550.name = i2551[0]
  request.r(i2551[1], i2551[2], 0, i2550, 'shader')
  i2550.renderQueue = i2551[3]
  i2550.enableInstancing = !!i2551[4]
  var i2553 = i2551[5]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2553[i + 0]) );
  }
  i2550.floatParameters = i2552
  var i2555 = i2551[6]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2555[i + 0]) );
  }
  i2550.colorParameters = i2554
  var i2557 = i2551[7]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2557[i + 0]) );
  }
  i2550.vectorParameters = i2556
  var i2559 = i2551[8]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2559[i + 0]) );
  }
  i2550.textureParameters = i2558
  var i2561 = i2551[9]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2561[i + 0]) );
  }
  i2550.materialFlags = i2560
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2565 = data
  i2564.name = i2565[0]
  i2564.value = i2565[1]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2569 = data
  i2568.name = i2569[0]
  i2568.value = new pc.Color(i2569[1], i2569[2], i2569[3], i2569[4])
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2573 = data
  i2572.name = i2573[0]
  i2572.value = new pc.Vec4( i2573[1], i2573[2], i2573[3], i2573[4] )
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2577 = data
  i2576.name = i2577[0]
  request.r(i2577[1], i2577[2], 0, i2576, 'value')
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2581 = data
  i2580.name = i2581[0]
  i2580.enabled = !!i2581[1]
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2583 = data
  i2582.name = i2583[0]
  i2582.index = i2583[1]
  i2582.startup = !!i2583[2]
  return i2582
}

Deserializers["LTPHUONG.TrashBin"] = function (request, data, root) {
  var i2584 = root || request.c( 'LTPHUONG.TrashBin' )
  var i2585 = data
  i2584.OnItemTrashed = request.d('UnityEngine.Events.UnityEvent', i2585[0], i2584.OnItemTrashed)
  request.r(i2585[1], i2585[2], 0, i2584, 'dropPoint')
  request.r(i2585[3], i2585[4], 0, i2584, 'topPoint')
  i2584.attractRadius = i2585[5]
  return i2584
}

Deserializers["LTPHUONG.ToolBase"] = function (request, data, root) {
  var i2586 = root || request.c( 'LTPHUONG.ToolBase' )
  var i2587 = data
  request.r(i2587[0], i2587[1], 0, i2586, 'inPoint')
  request.r(i2587[2], i2587[3], 0, i2586, 'outPoint')
  i2586.autoReturnToPoint = !!i2587[4]
  i2586.dragOffsetY = i2587[5]
  i2586.dragRotationAngle = i2587[6]
  i2586.onDragStarted = request.d('UnityEngine.Events.UnityEvent', i2587[7], i2586.onDragStarted)
  i2586.onDragReleased = request.d('UnityEngine.Events.UnityEvent', i2587[8], i2586.onDragReleased)
  var i2589 = i2587[9]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 2) {
  request.r(i2589[i + 0], i2589[i + 1], 2, i2588, '')
  }
  i2586.spriteRenderers = i2588
  i2586.clickOrder = i2587[10]
  i2586.isBlocked = !!i2587[11]
  i2586.minY = i2587[12]
  i2586.maxY = i2587[13]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2593 = data
  i2592.usedByComposite = !!i2593[0]
  i2592.autoTiling = !!i2593[1]
  i2592.size = new pc.Vec2( i2593[2], i2593[3] )
  i2592.edgeRadius = i2593[4]
  i2592.enabled = !!i2593[5]
  i2592.isTrigger = !!i2593[6]
  i2592.usedByEffector = !!i2593[7]
  i2592.density = i2593[8]
  i2592.offset = new pc.Vec2( i2593[9], i2593[10] )
  request.r(i2593[11], i2593[12], 0, i2592, 'material')
  return i2592
}

Deserializers["LTPHUONG.RevealPen"] = function (request, data, root) {
  var i2594 = root || request.c( 'LTPHUONG.RevealPen' )
  var i2595 = data
  request.r(i2595[0], i2595[1], 0, i2594, 'penTip')
  var i2597 = i2595[2]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 2) {
  request.r(i2597[i + 0], i2597[i + 1], 2, i2596, '')
  }
  i2594.revealImages = i2596
  i2594.paintInterval = i2595[3]
  i2594.onDragStarted = request.d('UnityEngine.Events.UnityEvent', i2595[4], i2594.onDragStarted)
  i2594.onDragReleased = request.d('UnityEngine.Events.UnityEvent', i2595[5], i2594.onDragReleased)
  var i2599 = i2595[6]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 2) {
  request.r(i2599[i + 0], i2599[i + 1], 2, i2598, '')
  }
  i2594.spriteRenderers = i2598
  i2594.clickOrder = i2595[7]
  i2594.isBlocked = !!i2595[8]
  request.r(i2595[9], i2595[10], 0, i2594, 'inPoint')
  request.r(i2595[11], i2595[12], 0, i2594, 'outPoint')
  i2594.autoReturnToPoint = !!i2595[13]
  i2594.dragOffsetY = i2595[14]
  i2594.dragRotationAngle = i2595[15]
  i2594.minY = i2595[16]
  i2594.maxY = i2595[17]
  return i2594
}

Deserializers["LTPHUONG.DragSpeedSound"] = function (request, data, root) {
  var i2602 = root || request.c( 'LTPHUONG.DragSpeedSound' )
  var i2603 = data
  var i2605 = i2603[0]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 2) {
  request.r(i2605[i + 0], i2605[i + 1], 2, i2604, '')
  }
  i2602.targetZones = i2604
  request.r(i2603[1], i2603[2], 0, i2602, 'audioSource')
  request.r(i2603[3], i2603[4], 0, i2602, 'particleObject')
  i2602.volume = i2603[5]
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2609 = data
  request.r(i2609[0], i2609[1], 0, i2608, 'animatorController')
  request.r(i2609[2], i2609[3], 0, i2608, 'avatar')
  i2608.updateMode = i2609[4]
  i2608.hasTransformHierarchy = !!i2609[5]
  i2608.applyRootMotion = !!i2609[6]
  var i2611 = i2609[7]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 2) {
  request.r(i2611[i + 0], i2611[i + 1], 2, i2610, '')
  }
  i2608.humanBones = i2610
  i2608.enabled = !!i2609[8]
  return i2608
}

Deserializers["LTPHUONG.ToolStepGuard"] = function (request, data, root) {
  var i2614 = root || request.c( 'LTPHUONG.ToolStepGuard' )
  var i2615 = data
  i2614.OnWrongUsage = request.d('UnityEngine.Events.UnityEvent', i2615[0], i2614.OnWrongUsage)
  request.r(i2615[1], i2615[2], 0, i2614, 'tool')
  var i2617 = i2615[3]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 2) {
  request.r(i2617[i + 0], i2617[i + 1], 2, i2616, '')
  }
  i2614.warningZones = i2616
  return i2614
}

Deserializers["LTPHUONG.MoveToTransform"] = function (request, data, root) {
  var i2618 = root || request.c( 'LTPHUONG.MoveToTransform' )
  var i2619 = data
  i2618.OnMoveStart = request.d('UnityEngine.Events.UnityEvent', i2619[0], i2618.OnMoveStart)
  i2618.OnMoveComplete = request.d('UnityEngine.Events.UnityEvent', i2619[1], i2618.OnMoveComplete)
  request.r(i2619[2], i2619[3], 0, i2618, 'target')
  i2618.delay = i2619[4]
  i2618.duration = i2619[5]
  i2618.ease = i2619[6]
  return i2618
}

Deserializers["Satisgame.EmojiControl"] = function (request, data, root) {
  var i2620 = root || request.c( 'Satisgame.EmojiControl' )
  var i2621 = data
  request.r(i2621[0], i2621[1], 0, i2620, 'spriteAnimator')
  request.r(i2621[2], i2621[3], 0, i2620, 'scaleTransform')
  i2620.durationShow = i2621[4]
  i2620.durationHold = i2621[5]
  i2620.durationHide = i2621[6]
  request.r(i2621[7], i2621[8], 0, i2620, 'audioSource')
  request.r(i2621[9], i2621[10], 0, i2620, 'sfxPositive')
  request.r(i2621[11], i2621[12], 0, i2620, 'sfxNegative')
  return i2620
}

Deserializers["LTPHUONG.RevealImage"] = function (request, data, root) {
  var i2622 = root || request.c( 'LTPHUONG.RevealImage' )
  var i2623 = data
  i2622.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2623[0], i2622.OnComplete)
  request.r(i2623[1], i2623[2], 0, i2622, 'spriteRenderer')
  request.r(i2623[3], i2623[4], 0, i2622, 'revealMaterial')
  i2622.textureSize = i2623[5]
  i2622.brushRadius = i2623[6]
  i2622.threshold = i2623[7]
  i2622.eraseMode = !!i2623[8]
  i2622.paintEnabled = !!i2623[9]
  request.r(i2623[10], i2623[11], 0, i2622, 'completeSfx')
  return i2622
}

Deserializers["LTPHUONG.GarbageGroup"] = function (request, data, root) {
  var i2624 = root || request.c( 'LTPHUONG.GarbageGroup' )
  var i2625 = data
  i2624.OnAllTrashed = request.d('UnityEngine.Events.UnityEvent', i2625[0], i2624.OnAllTrashed)
  var i2627 = i2625[1]
  var i2626 = new (System.Collections.Generic.List$1(Bridge.ns('LTPHUONG.GarbageItem')))
  for(var i = 0; i < i2627.length; i += 2) {
  request.r(i2627[i + 0], i2627[i + 1], 1, i2626, '')
  }
  i2624.items = i2626
  request.r(i2625[2], i2625[3], 0, i2624, 'completeSfx')
  return i2624
}

Deserializers["LTPHUONG.GarbageItem"] = function (request, data, root) {
  var i2630 = root || request.c( 'LTPHUONG.GarbageItem' )
  var i2631 = data
  i2630.OnPeeled = request.d('UnityEngine.Events.UnityEvent', i2631[0], i2630.OnPeeled)
  i2630.OnTrashed = request.d('UnityEngine.Events.UnityEvent', i2631[1], i2630.OnTrashed)
  i2630.enablePeel = !!i2631[2]
  request.r(i2631[3], i2631[4], 0, i2630, 'pickSfx')
  request.r(i2631[5], i2631[6], 0, i2630, 'peelSnapSfx')
  request.r(i2631[7], i2631[8], 0, i2630, 'flyUpSfx')
  request.r(i2631[9], i2631[10], 0, i2630, 'dropInBinSfx')
  i2630.minLayer = i2631[11]
  i2630.dragOffsetY = i2631[12]
  var i2633 = i2631[13]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 2) {
  request.r(i2633[i + 0], i2633[i + 1], 2, i2632, '')
  }
  i2630.spriteRenderers = i2632
  i2630.clickOrder = i2631[14]
  i2630.isBlocked = !!i2631[15]
  i2630.minY = i2631[16]
  i2630.maxY = i2631[17]
  return i2630
}

Deserializers["LTPHUONG.TrayGroup"] = function (request, data, root) {
  var i2634 = root || request.c( 'LTPHUONG.TrayGroup' )
  var i2635 = data
  i2634.OnAllDisappeared = request.d('UnityEngine.Events.UnityEvent', i2635[0], i2634.OnAllDisappeared)
  var i2637 = i2635[1]
  var i2636 = new (System.Collections.Generic.List$1(Bridge.ns('LTPHUONG.Tray')))
  for(var i = 0; i < i2637.length; i += 2) {
  request.r(i2637[i + 0], i2637[i + 1], 1, i2636, '')
  }
  i2634.trays = i2636
  request.r(i2635[2], i2635[3], 0, i2634, 'completeSfx')
  return i2634
}

Deserializers["LTPHUONG.Tray"] = function (request, data, root) {
  var i2640 = root || request.c( 'LTPHUONG.Tray' )
  var i2641 = data
  i2640.OnDisappeared = request.d('UnityEngine.Events.UnityEvent', i2641[0], i2640.OnDisappeared)
  i2640.sinkDistance = i2641[1]
  i2640.sinkDuration = i2641[2]
  request.r(i2641[3], i2641[4], 0, i2640, 'clickSfx')
  var i2643 = i2641[5]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 2) {
  request.r(i2643[i + 0], i2643[i + 1], 2, i2642, '')
  }
  i2640.spriteRenderers = i2642
  i2640.clickOrder = i2641[6]
  i2640.isBlocked = !!i2641[7]
  return i2640
}

Deserializers["LTPHUONG.SpriteHighlight"] = function (request, data, root) {
  var i2644 = root || request.c( 'LTPHUONG.SpriteHighlight' )
  var i2645 = data
  request.r(i2645[0], i2645[1], 0, i2644, 'spriteRenderer')
  request.r(i2645[2], i2645[3], 0, i2644, 'outlineMaterial')
  i2644.outlineColor = new pc.Color(i2645[4], i2645[5], i2645[6], i2645[7])
  i2644.outlineSize = i2645[8]
  i2644.showDuration = i2645[9]
  i2644.pulseDuration = i2645[10]
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2647 = data
  i2646.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2647[0], i2646.main)
  i2646.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2647[1], i2646.colorBySpeed)
  i2646.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2647[2], i2646.colorOverLifetime)
  i2646.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2647[3], i2646.emission)
  i2646.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2647[4], i2646.rotationBySpeed)
  i2646.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2647[5], i2646.rotationOverLifetime)
  i2646.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2647[6], i2646.shape)
  i2646.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2647[7], i2646.sizeBySpeed)
  i2646.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2647[8], i2646.sizeOverLifetime)
  i2646.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2647[9], i2646.textureSheetAnimation)
  i2646.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2647[10], i2646.velocityOverLifetime)
  i2646.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2647[11], i2646.noise)
  i2646.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2647[12], i2646.inheritVelocity)
  i2646.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2647[13], i2646.forceOverLifetime)
  i2646.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2647[14], i2646.limitVelocityOverLifetime)
  i2646.useAutoRandomSeed = !!i2647[15]
  i2646.randomSeed = i2647[16]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2648 = root || new pc.ParticleSystemMain()
  var i2649 = data
  i2648.duration = i2649[0]
  i2648.loop = !!i2649[1]
  i2648.prewarm = !!i2649[2]
  i2648.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2649[3], i2648.startDelay)
  i2648.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2649[4], i2648.startLifetime)
  i2648.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2649[5], i2648.startSpeed)
  i2648.startSize3D = !!i2649[6]
  i2648.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2649[7], i2648.startSizeX)
  i2648.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2649[8], i2648.startSizeY)
  i2648.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2649[9], i2648.startSizeZ)
  i2648.startRotation3D = !!i2649[10]
  i2648.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2649[11], i2648.startRotationX)
  i2648.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2649[12], i2648.startRotationY)
  i2648.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2649[13], i2648.startRotationZ)
  i2648.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2649[14], i2648.startColor)
  i2648.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2649[15], i2648.gravityModifier)
  i2648.simulationSpace = i2649[16]
  request.r(i2649[17], i2649[18], 0, i2648, 'customSimulationSpace')
  i2648.simulationSpeed = i2649[19]
  i2648.useUnscaledTime = !!i2649[20]
  i2648.scalingMode = i2649[21]
  i2648.playOnAwake = !!i2649[22]
  i2648.maxParticles = i2649[23]
  i2648.emitterVelocityMode = i2649[24]
  i2648.stopAction = i2649[25]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2650 = root || new pc.MinMaxCurve()
  var i2651 = data
  i2650.mode = i2651[0]
  i2650.curveMin = new pc.AnimationCurve( { keys_flow: i2651[1] } )
  i2650.curveMax = new pc.AnimationCurve( { keys_flow: i2651[2] } )
  i2650.curveMultiplier = i2651[3]
  i2650.constantMin = i2651[4]
  i2650.constantMax = i2651[5]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2652 = root || new pc.MinMaxGradient()
  var i2653 = data
  i2652.mode = i2653[0]
  i2652.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2653[1], i2652.gradientMin)
  i2652.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2653[2], i2652.gradientMax)
  i2652.colorMin = new pc.Color(i2653[3], i2653[4], i2653[5], i2653[6])
  i2652.colorMax = new pc.Color(i2653[7], i2653[8], i2653[9], i2653[10])
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2655 = data
  i2654.mode = i2655[0]
  var i2657 = i2655[1]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2657[i + 0]) );
  }
  i2654.colorKeys = i2656
  var i2659 = i2655[2]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2659[i + 0]) );
  }
  i2654.alphaKeys = i2658
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2660 = root || new pc.ParticleSystemColorBySpeed()
  var i2661 = data
  i2660.enabled = !!i2661[0]
  i2660.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2661[1], i2660.color)
  i2660.range = new pc.Vec2( i2661[2], i2661[3] )
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2665 = data
  i2664.color = new pc.Color(i2665[0], i2665[1], i2665[2], i2665[3])
  i2664.time = i2665[4]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2669 = data
  i2668.alpha = i2669[0]
  i2668.time = i2669[1]
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2670 = root || new pc.ParticleSystemColorOverLifetime()
  var i2671 = data
  i2670.enabled = !!i2671[0]
  i2670.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2671[1], i2670.color)
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2672 = root || new pc.ParticleSystemEmitter()
  var i2673 = data
  i2672.enabled = !!i2673[0]
  i2672.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2673[1], i2672.rateOverTime)
  i2672.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2673[2], i2672.rateOverDistance)
  var i2675 = i2673[3]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2675[i + 0]) );
  }
  i2672.bursts = i2674
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2678 = root || new pc.ParticleSystemBurst()
  var i2679 = data
  i2678.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2679[0], i2678.count)
  i2678.cycleCount = i2679[1]
  i2678.minCount = i2679[2]
  i2678.maxCount = i2679[3]
  i2678.repeatInterval = i2679[4]
  i2678.time = i2679[5]
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2680 = root || new pc.ParticleSystemRotationBySpeed()
  var i2681 = data
  i2680.enabled = !!i2681[0]
  i2680.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2681[1], i2680.x)
  i2680.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2681[2], i2680.y)
  i2680.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2681[3], i2680.z)
  i2680.separateAxes = !!i2681[4]
  i2680.range = new pc.Vec2( i2681[5], i2681[6] )
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2682 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2683 = data
  i2682.enabled = !!i2683[0]
  i2682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2683[1], i2682.x)
  i2682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2683[2], i2682.y)
  i2682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2683[3], i2682.z)
  i2682.separateAxes = !!i2683[4]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2684 = root || new pc.ParticleSystemShape()
  var i2685 = data
  i2684.enabled = !!i2685[0]
  i2684.shapeType = i2685[1]
  i2684.randomDirectionAmount = i2685[2]
  i2684.sphericalDirectionAmount = i2685[3]
  i2684.randomPositionAmount = i2685[4]
  i2684.alignToDirection = !!i2685[5]
  i2684.radius = i2685[6]
  i2684.radiusMode = i2685[7]
  i2684.radiusSpread = i2685[8]
  i2684.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2685[9], i2684.radiusSpeed)
  i2684.radiusThickness = i2685[10]
  i2684.angle = i2685[11]
  i2684.length = i2685[12]
  i2684.boxThickness = new pc.Vec3( i2685[13], i2685[14], i2685[15] )
  i2684.meshShapeType = i2685[16]
  request.r(i2685[17], i2685[18], 0, i2684, 'mesh')
  request.r(i2685[19], i2685[20], 0, i2684, 'meshRenderer')
  request.r(i2685[21], i2685[22], 0, i2684, 'skinnedMeshRenderer')
  i2684.useMeshMaterialIndex = !!i2685[23]
  i2684.meshMaterialIndex = i2685[24]
  i2684.useMeshColors = !!i2685[25]
  i2684.normalOffset = i2685[26]
  i2684.arc = i2685[27]
  i2684.arcMode = i2685[28]
  i2684.arcSpread = i2685[29]
  i2684.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2685[30], i2684.arcSpeed)
  i2684.donutRadius = i2685[31]
  i2684.position = new pc.Vec3( i2685[32], i2685[33], i2685[34] )
  i2684.rotation = new pc.Vec3( i2685[35], i2685[36], i2685[37] )
  i2684.scale = new pc.Vec3( i2685[38], i2685[39], i2685[40] )
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2686 = root || new pc.ParticleSystemSizeBySpeed()
  var i2687 = data
  i2686.enabled = !!i2687[0]
  i2686.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2687[1], i2686.x)
  i2686.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2687[2], i2686.y)
  i2686.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2687[3], i2686.z)
  i2686.separateAxes = !!i2687[4]
  i2686.range = new pc.Vec2( i2687[5], i2687[6] )
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2688 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2689 = data
  i2688.enabled = !!i2689[0]
  i2688.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2689[1], i2688.x)
  i2688.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2689[2], i2688.y)
  i2688.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2689[3], i2688.z)
  i2688.separateAxes = !!i2689[4]
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2690 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2691 = data
  i2690.enabled = !!i2691[0]
  i2690.mode = i2691[1]
  i2690.animation = i2691[2]
  i2690.numTilesX = i2691[3]
  i2690.numTilesY = i2691[4]
  i2690.useRandomRow = !!i2691[5]
  i2690.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2691[6], i2690.frameOverTime)
  i2690.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2691[7], i2690.startFrame)
  i2690.cycleCount = i2691[8]
  i2690.rowIndex = i2691[9]
  i2690.flipU = i2691[10]
  i2690.flipV = i2691[11]
  i2690.spriteCount = i2691[12]
  var i2693 = i2691[13]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 2) {
  request.r(i2693[i + 0], i2693[i + 1], 2, i2692, '')
  }
  i2690.sprites = i2692
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2696 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2697 = data
  i2696.enabled = !!i2697[0]
  i2696.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[1], i2696.x)
  i2696.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[2], i2696.y)
  i2696.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[3], i2696.z)
  i2696.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[4], i2696.radial)
  i2696.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[5], i2696.speedModifier)
  i2696.space = i2697[6]
  i2696.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[7], i2696.orbitalX)
  i2696.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[8], i2696.orbitalY)
  i2696.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[9], i2696.orbitalZ)
  i2696.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[10], i2696.orbitalOffsetX)
  i2696.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[11], i2696.orbitalOffsetY)
  i2696.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2697[12], i2696.orbitalOffsetZ)
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2698 = root || new pc.ParticleSystemNoise()
  var i2699 = data
  i2698.enabled = !!i2699[0]
  i2698.separateAxes = !!i2699[1]
  i2698.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[2], i2698.strengthX)
  i2698.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[3], i2698.strengthY)
  i2698.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[4], i2698.strengthZ)
  i2698.frequency = i2699[5]
  i2698.damping = !!i2699[6]
  i2698.octaveCount = i2699[7]
  i2698.octaveMultiplier = i2699[8]
  i2698.octaveScale = i2699[9]
  i2698.quality = i2699[10]
  i2698.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[11], i2698.scrollSpeed)
  i2698.scrollSpeedMultiplier = i2699[12]
  i2698.remapEnabled = !!i2699[13]
  i2698.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[14], i2698.remapX)
  i2698.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[15], i2698.remapY)
  i2698.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[16], i2698.remapZ)
  i2698.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[17], i2698.positionAmount)
  i2698.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[18], i2698.rotationAmount)
  i2698.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2699[19], i2698.sizeAmount)
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2700 = root || new pc.ParticleSystemInheritVelocity()
  var i2701 = data
  i2700.enabled = !!i2701[0]
  i2700.mode = i2701[1]
  i2700.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2701[2], i2700.curve)
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2702 = root || new pc.ParticleSystemForceOverLifetime()
  var i2703 = data
  i2702.enabled = !!i2703[0]
  i2702.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2703[1], i2702.x)
  i2702.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2703[2], i2702.y)
  i2702.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2703[3], i2702.z)
  i2702.space = i2703[4]
  i2702.randomized = !!i2703[5]
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2704 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2705 = data
  i2704.enabled = !!i2705[0]
  i2704.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2705[1], i2704.limit)
  i2704.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2705[2], i2704.limitX)
  i2704.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2705[3], i2704.limitY)
  i2704.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2705[4], i2704.limitZ)
  i2704.dampen = i2705[5]
  i2704.separateAxes = !!i2705[6]
  i2704.space = i2705[7]
  i2704.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2705[8], i2704.drag)
  i2704.multiplyDragByParticleSize = !!i2705[9]
  i2704.multiplyDragByParticleVelocity = !!i2705[10]
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2707 = data
  request.r(i2707[0], i2707[1], 0, i2706, 'mesh')
  i2706.meshCount = i2707[2]
  i2706.activeVertexStreamsCount = i2707[3]
  i2706.alignment = i2707[4]
  i2706.renderMode = i2707[5]
  i2706.sortMode = i2707[6]
  i2706.lengthScale = i2707[7]
  i2706.velocityScale = i2707[8]
  i2706.cameraVelocityScale = i2707[9]
  i2706.normalDirection = i2707[10]
  i2706.sortingFudge = i2707[11]
  i2706.minParticleSize = i2707[12]
  i2706.maxParticleSize = i2707[13]
  i2706.pivot = new pc.Vec3( i2707[14], i2707[15], i2707[16] )
  request.r(i2707[17], i2707[18], 0, i2706, 'trailMaterial')
  i2706.applyActiveColorSpace = !!i2707[19]
  i2706.enabled = !!i2707[20]
  request.r(i2707[21], i2707[22], 0, i2706, 'sharedMaterial')
  var i2709 = i2707[23]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 2) {
  request.r(i2709[i + 0], i2709[i + 1], 2, i2708, '')
  }
  i2706.sharedMaterials = i2708
  i2706.receiveShadows = !!i2707[24]
  i2706.shadowCastingMode = i2707[25]
  i2706.sortingLayerID = i2707[26]
  i2706.sortingOrder = i2707[27]
  i2706.lightmapIndex = i2707[28]
  i2706.lightmapSceneIndex = i2707[29]
  i2706.lightmapScaleOffset = new pc.Vec4( i2707[30], i2707[31], i2707[32], i2707[33] )
  i2706.lightProbeUsage = i2707[34]
  i2706.reflectionProbeUsage = i2707[35]
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2711 = data
  i2710.ambientIntensity = i2711[0]
  i2710.reflectionIntensity = i2711[1]
  i2710.ambientMode = i2711[2]
  i2710.ambientLight = new pc.Color(i2711[3], i2711[4], i2711[5], i2711[6])
  i2710.ambientSkyColor = new pc.Color(i2711[7], i2711[8], i2711[9], i2711[10])
  i2710.ambientGroundColor = new pc.Color(i2711[11], i2711[12], i2711[13], i2711[14])
  i2710.ambientEquatorColor = new pc.Color(i2711[15], i2711[16], i2711[17], i2711[18])
  i2710.fogColor = new pc.Color(i2711[19], i2711[20], i2711[21], i2711[22])
  i2710.fogEndDistance = i2711[23]
  i2710.fogStartDistance = i2711[24]
  i2710.fogDensity = i2711[25]
  i2710.fog = !!i2711[26]
  request.r(i2711[27], i2711[28], 0, i2710, 'skybox')
  i2710.fogMode = i2711[29]
  var i2713 = i2711[30]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2713[i + 0]) );
  }
  i2710.lightmaps = i2712
  i2710.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2711[31], i2710.lightProbes)
  i2710.lightmapsMode = i2711[32]
  i2710.mixedBakeMode = i2711[33]
  i2710.environmentLightingMode = i2711[34]
  i2710.ambientProbe = new pc.SphericalHarmonicsL2(i2711[35])
  i2710.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2711[36])
  i2710.useReferenceAmbientProbe = !!i2711[37]
  request.r(i2711[38], i2711[39], 0, i2710, 'customReflection')
  request.r(i2711[40], i2711[41], 0, i2710, 'defaultReflection')
  i2710.defaultReflectionMode = i2711[42]
  i2710.defaultReflectionResolution = i2711[43]
  i2710.sunLightObjectId = i2711[44]
  i2710.pixelLightCount = i2711[45]
  i2710.defaultReflectionHDR = !!i2711[46]
  i2710.hasLightDataAsset = !!i2711[47]
  i2710.hasManualGenerate = !!i2711[48]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2717 = data
  request.r(i2717[0], i2717[1], 0, i2716, 'lightmapColor')
  request.r(i2717[2], i2717[3], 0, i2716, 'lightmapDirection')
  request.r(i2717[4], i2717[5], 0, i2716, 'shadowMask')
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2718 = root || new UnityEngine.LightProbes()
  var i2719 = data
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2727 = data
  var i2729 = i2727[0]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2729[i + 0]));
  }
  i2726.ShaderCompilationErrors = i2728
  i2726.name = i2727[1]
  i2726.guid = i2727[2]
  var i2731 = i2727[3]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.push( i2731[i + 0] );
  }
  i2726.shaderDefinedKeywords = i2730
  var i2733 = i2727[4]
  var i2732 = []
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2733[i + 0]) );
  }
  i2726.passes = i2732
  var i2735 = i2727[5]
  var i2734 = []
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2735[i + 0]) );
  }
  i2726.usePasses = i2734
  var i2737 = i2727[6]
  var i2736 = []
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2737[i + 0]) );
  }
  i2726.defaultParameterValues = i2736
  request.r(i2727[7], i2727[8], 0, i2726, 'unityFallbackShader')
  i2726.readDepth = !!i2727[9]
  i2726.hasDepthOnlyPass = !!i2727[10]
  i2726.isCreatedByShaderGraph = !!i2727[11]
  i2726.disableBatching = !!i2727[12]
  i2726.compiled = !!i2727[13]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2741 = data
  i2740.shaderName = i2741[0]
  i2740.errorMessage = i2741[1]
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2746 = root || new pc.UnityShaderPass()
  var i2747 = data
  i2746.id = i2747[0]
  i2746.subShaderIndex = i2747[1]
  i2746.name = i2747[2]
  i2746.passType = i2747[3]
  i2746.grabPassTextureName = i2747[4]
  i2746.usePass = !!i2747[5]
  i2746.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2747[6], i2746.zTest)
  i2746.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2747[7], i2746.zWrite)
  i2746.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2747[8], i2746.culling)
  i2746.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2747[9], i2746.blending)
  i2746.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2747[10], i2746.alphaBlending)
  i2746.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2747[11], i2746.colorWriteMask)
  i2746.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2747[12], i2746.offsetUnits)
  i2746.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2747[13], i2746.offsetFactor)
  i2746.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2747[14], i2746.stencilRef)
  i2746.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2747[15], i2746.stencilReadMask)
  i2746.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2747[16], i2746.stencilWriteMask)
  i2746.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2747[17], i2746.stencilOp)
  i2746.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2747[18], i2746.stencilOpFront)
  i2746.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2747[19], i2746.stencilOpBack)
  var i2749 = i2747[20]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2749[i + 0]) );
  }
  i2746.tags = i2748
  var i2751 = i2747[21]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.push( i2751[i + 0] );
  }
  i2746.passDefinedKeywords = i2750
  var i2753 = i2747[22]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2753[i + 0]) );
  }
  i2746.passDefinedKeywordGroups = i2752
  var i2755 = i2747[23]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2755[i + 0]) );
  }
  i2746.variants = i2754
  var i2757 = i2747[24]
  var i2756 = []
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2757[i + 0]) );
  }
  i2746.excludedVariants = i2756
  i2746.hasDepthReader = !!i2747[25]
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2759 = data
  i2758.val = i2759[0]
  i2758.name = i2759[1]
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2761 = data
  i2760.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[0], i2760.src)
  i2760.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[1], i2760.dst)
  i2760.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2761[2], i2760.op)
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2763 = data
  i2762.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2763[0], i2762.pass)
  i2762.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2763[1], i2762.fail)
  i2762.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2763[2], i2762.zFail)
  i2762.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2763[3], i2762.comp)
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2767 = data
  i2766.name = i2767[0]
  i2766.value = i2767[1]
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2771 = data
  var i2773 = i2771[0]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( i2773[i + 0] );
  }
  i2770.keywords = i2772
  i2770.hasDiscard = !!i2771[1]
  return i2770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2777 = data
  i2776.passId = i2777[0]
  i2776.subShaderIndex = i2777[1]
  var i2779 = i2777[2]
  var i2778 = []
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.push( i2779[i + 0] );
  }
  i2776.keywords = i2778
  i2776.vertexProgram = i2777[3]
  i2776.fragmentProgram = i2777[4]
  i2776.exportedForWebGl2 = !!i2777[5]
  i2776.readDepth = !!i2777[6]
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2783 = data
  request.r(i2783[0], i2783[1], 0, i2782, 'shader')
  i2782.pass = i2783[2]
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2787 = data
  i2786.name = i2787[0]
  i2786.type = i2787[1]
  i2786.value = new pc.Vec4( i2787[2], i2787[3], i2787[4], i2787[5] )
  i2786.textureValue = i2787[6]
  i2786.shaderPropertyFlag = i2787[7]
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2789 = data
  i2788.name = i2789[0]
  request.r(i2789[1], i2789[2], 0, i2788, 'texture')
  i2788.aabb = i2789[3]
  i2788.vertices = i2789[4]
  i2788.triangles = i2789[5]
  i2788.textureRect = UnityEngine.Rect.MinMaxRect(i2789[6], i2789[7], i2789[8], i2789[9])
  i2788.packedRect = UnityEngine.Rect.MinMaxRect(i2789[10], i2789[11], i2789[12], i2789[13])
  i2788.border = new pc.Vec4( i2789[14], i2789[15], i2789[16], i2789[17] )
  i2788.transparency = i2789[18]
  i2788.bounds = i2789[19]
  i2788.pixelsPerUnit = i2789[20]
  i2788.textureWidth = i2789[21]
  i2788.textureHeight = i2789[22]
  i2788.nativeSize = new pc.Vec2( i2789[23], i2789[24] )
  i2788.pivot = new pc.Vec2( i2789[25], i2789[26] )
  i2788.textureRectOffset = new pc.Vec2( i2789[27], i2789[28] )
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2791 = data
  i2790.name = i2791[0]
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2793 = data
  i2792.name = i2793[0]
  i2792.wrapMode = i2793[1]
  i2792.isLooping = !!i2793[2]
  i2792.length = i2793[3]
  var i2795 = i2793[4]
  var i2794 = []
  for(var i = 0; i < i2795.length; i += 1) {
    i2794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2795[i + 0]) );
  }
  i2792.curves = i2794
  var i2797 = i2793[5]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2797[i + 0]) );
  }
  i2792.events = i2796
  i2792.halfPrecision = !!i2793[6]
  i2792._frameRate = i2793[7]
  i2792.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2793[8], i2792.localBounds)
  i2792.hasMuscleCurves = !!i2793[9]
  var i2799 = i2793[10]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.push( i2799[i + 0] );
  }
  i2792.clipMuscleConstant = i2798
  i2792.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2793[11], i2792.clipBindingConstant)
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2803 = data
  i2802.path = i2803[0]
  i2802.hash = i2803[1]
  i2802.componentType = i2803[2]
  i2802.property = i2803[3]
  i2802.keys = i2803[4]
  var i2805 = i2803[5]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2805[i + 0]) );
  }
  i2802.objectReferenceKeys = i2804
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2809 = data
  i2808.time = i2809[0]
  request.r(i2809[1], i2809[2], 0, i2808, 'value')
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2813 = data
  i2812.functionName = i2813[0]
  i2812.floatParameter = i2813[1]
  i2812.intParameter = i2813[2]
  i2812.stringParameter = i2813[3]
  request.r(i2813[4], i2813[5], 0, i2812, 'objectReferenceParameter')
  i2812.time = i2813[6]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2815 = data
  i2814.center = new pc.Vec3( i2815[0], i2815[1], i2815[2] )
  i2814.extends = new pc.Vec3( i2815[3], i2815[4], i2815[5] )
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2819 = data
  var i2821 = i2819[0]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( i2821[i + 0] );
  }
  i2818.genericBindings = i2820
  var i2823 = i2819[1]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( i2823[i + 0] );
  }
  i2818.pptrCurveMapping = i2822
  return i2818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2825 = data
  i2824.name = i2825[0]
  var i2827 = i2825[1]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2827[i + 0]) );
  }
  i2824.layers = i2826
  var i2829 = i2825[2]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2829[i + 0]) );
  }
  i2824.parameters = i2828
  i2824.animationClips = i2825[3]
  i2824.avatarUnsupported = i2825[4]
  return i2824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2833 = data
  i2832.name = i2833[0]
  i2832.defaultWeight = i2833[1]
  i2832.blendingMode = i2833[2]
  i2832.avatarMask = i2833[3]
  i2832.syncedLayerIndex = i2833[4]
  i2832.syncedLayerAffectsTiming = !!i2833[5]
  i2832.syncedLayers = i2833[6]
  i2832.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2833[7], i2832.stateMachine)
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2835 = data
  i2834.id = i2835[0]
  i2834.name = i2835[1]
  i2834.path = i2835[2]
  var i2837 = i2835[3]
  var i2836 = []
  for(var i = 0; i < i2837.length; i += 1) {
    i2836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2837[i + 0]) );
  }
  i2834.states = i2836
  var i2839 = i2835[4]
  var i2838 = []
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2839[i + 0]) );
  }
  i2834.machines = i2838
  var i2841 = i2835[5]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2841[i + 0]) );
  }
  i2834.entryStateTransitions = i2840
  var i2843 = i2835[6]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2843[i + 0]) );
  }
  i2834.exitStateTransitions = i2842
  var i2845 = i2835[7]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2845[i + 0]) );
  }
  i2834.anyStateTransitions = i2844
  i2834.defaultStateId = i2835[8]
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2849 = data
  i2848.id = i2849[0]
  i2848.name = i2849[1]
  i2848.cycleOffset = i2849[2]
  i2848.cycleOffsetParameter = i2849[3]
  i2848.cycleOffsetParameterActive = !!i2849[4]
  i2848.mirror = !!i2849[5]
  i2848.mirrorParameter = i2849[6]
  i2848.mirrorParameterActive = !!i2849[7]
  i2848.motionId = i2849[8]
  i2848.nameHash = i2849[9]
  i2848.fullPathHash = i2849[10]
  i2848.speed = i2849[11]
  i2848.speedParameter = i2849[12]
  i2848.speedParameterActive = !!i2849[13]
  i2848.tag = i2849[14]
  i2848.tagHash = i2849[15]
  i2848.writeDefaultValues = !!i2849[16]
  var i2851 = i2849[17]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 2) {
  request.r(i2851[i + 0], i2851[i + 1], 2, i2850, '')
  }
  i2848.behaviours = i2850
  var i2853 = i2849[18]
  var i2852 = []
  for(var i = 0; i < i2853.length; i += 1) {
    i2852.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2853[i + 0]) );
  }
  i2848.transitions = i2852
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2859 = data
  i2858.fullPath = i2859[0]
  i2858.canTransitionToSelf = !!i2859[1]
  i2858.duration = i2859[2]
  i2858.exitTime = i2859[3]
  i2858.hasExitTime = !!i2859[4]
  i2858.hasFixedDuration = !!i2859[5]
  i2858.interruptionSource = i2859[6]
  i2858.offset = i2859[7]
  i2858.orderedInterruption = !!i2859[8]
  i2858.destinationStateId = i2859[9]
  i2858.isExit = !!i2859[10]
  i2858.mute = !!i2859[11]
  i2858.solo = !!i2859[12]
  var i2861 = i2859[13]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2861[i + 0]) );
  }
  i2858.conditions = i2860
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2867 = data
  i2866.destinationStateId = i2867[0]
  i2866.isExit = !!i2867[1]
  i2866.mute = !!i2867[2]
  i2866.solo = !!i2867[3]
  var i2869 = i2867[4]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2869[i + 0]) );
  }
  i2866.conditions = i2868
  return i2866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2873 = data
  i2872.defaultBool = !!i2873[0]
  i2872.defaultFloat = i2873[1]
  i2872.defaultInt = i2873[2]
  i2872.name = i2873[3]
  i2872.nameHash = i2873[4]
  i2872.type = i2873[5]
  return i2872
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2874 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2875 = data
  i2874.useSafeMode = !!i2875[0]
  i2874.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2875[1], i2874.safeModeOptions)
  i2874.timeScale = i2875[2]
  i2874.unscaledTimeScale = i2875[3]
  i2874.useSmoothDeltaTime = !!i2875[4]
  i2874.maxSmoothUnscaledTime = i2875[5]
  i2874.rewindCallbackMode = i2875[6]
  i2874.showUnityEditorReport = !!i2875[7]
  i2874.logBehaviour = i2875[8]
  i2874.drawGizmos = !!i2875[9]
  i2874.defaultRecyclable = !!i2875[10]
  i2874.defaultAutoPlay = i2875[11]
  i2874.defaultUpdateType = i2875[12]
  i2874.defaultTimeScaleIndependent = !!i2875[13]
  i2874.defaultEaseType = i2875[14]
  i2874.defaultEaseOvershootOrAmplitude = i2875[15]
  i2874.defaultEasePeriod = i2875[16]
  i2874.defaultAutoKill = !!i2875[17]
  i2874.defaultLoopType = i2875[18]
  i2874.debugMode = !!i2875[19]
  i2874.debugStoreTargetId = !!i2875[20]
  i2874.showPreviewPanel = !!i2875[21]
  i2874.storeSettingsLocation = i2875[22]
  i2874.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2875[23], i2874.modules)
  i2874.createASMDEF = !!i2875[24]
  i2874.showPlayingTweens = !!i2875[25]
  i2874.showPausedTweens = !!i2875[26]
  return i2874
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2876 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2877 = data
  i2876.logBehaviour = i2877[0]
  i2876.nestedTweenFailureBehaviour = i2877[1]
  return i2876
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2878 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2879 = data
  i2878.showPanel = !!i2879[0]
  i2878.audioEnabled = !!i2879[1]
  i2878.physicsEnabled = !!i2879[2]
  i2878.physics2DEnabled = !!i2879[3]
  i2878.spriteEnabled = !!i2879[4]
  i2878.uiEnabled = !!i2879[5]
  i2878.textMeshProEnabled = !!i2879[6]
  i2878.tk2DEnabled = !!i2879[7]
  i2878.deAudioEnabled = !!i2879[8]
  i2878.deUnityExtendedEnabled = !!i2879[9]
  i2878.epoOutlineEnabled = !!i2879[10]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2881 = data
  var i2883 = i2881[0]
  var i2882 = []
  for(var i = 0; i < i2883.length; i += 1) {
    i2882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2883[i + 0]) );
  }
  i2880.files = i2882
  i2880.componentToPrefabIds = i2881[1]
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2887 = data
  i2886.path = i2887[0]
  request.r(i2887[1], i2887[2], 0, i2886, 'unityObject')
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2889 = data
  var i2891 = i2889[0]
  var i2890 = []
  for(var i = 0; i < i2891.length; i += 1) {
    i2890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2891[i + 0]) );
  }
  i2888.scriptsExecutionOrder = i2890
  var i2893 = i2889[1]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 1) {
    i2892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2893[i + 0]) );
  }
  i2888.sortingLayers = i2892
  var i2895 = i2889[2]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2895[i + 0]) );
  }
  i2888.cullingLayers = i2894
  i2888.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2889[3], i2888.timeSettings)
  i2888.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2889[4], i2888.physicsSettings)
  i2888.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2889[5], i2888.physics2DSettings)
  i2888.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2889[6], i2888.qualitySettings)
  i2888.enableRealtimeShadows = !!i2889[7]
  i2888.enableAutoInstancing = !!i2889[8]
  i2888.enableStaticBatching = !!i2889[9]
  i2888.enableDynamicBatching = !!i2889[10]
  i2888.lightmapEncodingQuality = i2889[11]
  i2888.desiredColorSpace = i2889[12]
  var i2897 = i2889[13]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( i2897[i + 0] );
  }
  i2888.allTags = i2896
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2901 = data
  i2900.name = i2901[0]
  i2900.value = i2901[1]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2905 = data
  i2904.id = i2905[0]
  i2904.name = i2905[1]
  i2904.value = i2905[2]
  return i2904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2909 = data
  i2908.id = i2909[0]
  i2908.name = i2909[1]
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2911 = data
  i2910.fixedDeltaTime = i2911[0]
  i2910.maximumDeltaTime = i2911[1]
  i2910.timeScale = i2911[2]
  i2910.maximumParticleTimestep = i2911[3]
  return i2910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2913 = data
  i2912.gravity = new pc.Vec3( i2913[0], i2913[1], i2913[2] )
  i2912.defaultSolverIterations = i2913[3]
  i2912.bounceThreshold = i2913[4]
  i2912.autoSyncTransforms = !!i2913[5]
  i2912.autoSimulation = !!i2913[6]
  var i2915 = i2913[7]
  var i2914 = []
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2915[i + 0]) );
  }
  i2912.collisionMatrix = i2914
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2919 = data
  i2918.enabled = !!i2919[0]
  i2918.layerId = i2919[1]
  i2918.otherLayerId = i2919[2]
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2921 = data
  request.r(i2921[0], i2921[1], 0, i2920, 'material')
  i2920.gravity = new pc.Vec2( i2921[2], i2921[3] )
  i2920.positionIterations = i2921[4]
  i2920.velocityIterations = i2921[5]
  i2920.velocityThreshold = i2921[6]
  i2920.maxLinearCorrection = i2921[7]
  i2920.maxAngularCorrection = i2921[8]
  i2920.maxTranslationSpeed = i2921[9]
  i2920.maxRotationSpeed = i2921[10]
  i2920.baumgarteScale = i2921[11]
  i2920.baumgarteTOIScale = i2921[12]
  i2920.timeToSleep = i2921[13]
  i2920.linearSleepTolerance = i2921[14]
  i2920.angularSleepTolerance = i2921[15]
  i2920.defaultContactOffset = i2921[16]
  i2920.autoSimulation = !!i2921[17]
  i2920.queriesHitTriggers = !!i2921[18]
  i2920.queriesStartInColliders = !!i2921[19]
  i2920.callbacksOnDisable = !!i2921[20]
  i2920.reuseCollisionCallbacks = !!i2921[21]
  i2920.autoSyncTransforms = !!i2921[22]
  var i2923 = i2921[23]
  var i2922 = []
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2923[i + 0]) );
  }
  i2920.collisionMatrix = i2922
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2927 = data
  i2926.enabled = !!i2927[0]
  i2926.layerId = i2927[1]
  i2926.otherLayerId = i2927[2]
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2929 = data
  var i2931 = i2929[0]
  var i2930 = []
  for(var i = 0; i < i2931.length; i += 1) {
    i2930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2931[i + 0]) );
  }
  i2928.qualityLevels = i2930
  var i2933 = i2929[1]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 1) {
    i2932.push( i2933[i + 0] );
  }
  i2928.names = i2932
  i2928.shadows = i2929[2]
  i2928.anisotropicFiltering = i2929[3]
  i2928.antiAliasing = i2929[4]
  i2928.lodBias = i2929[5]
  i2928.shadowCascades = i2929[6]
  i2928.shadowDistance = i2929[7]
  i2928.shadowmaskMode = i2929[8]
  i2928.shadowProjection = i2929[9]
  i2928.shadowResolution = i2929[10]
  i2928.softParticles = !!i2929[11]
  i2928.softVegetation = !!i2929[12]
  i2928.activeColorSpace = i2929[13]
  i2928.desiredColorSpace = i2929[14]
  i2928.masterTextureLimit = i2929[15]
  i2928.maxQueuedFrames = i2929[16]
  i2928.particleRaycastBudget = i2929[17]
  i2928.pixelLightCount = i2929[18]
  i2928.realtimeReflectionProbes = !!i2929[19]
  i2928.shadowCascade2Split = i2929[20]
  i2928.shadowCascade4Split = new pc.Vec3( i2929[21], i2929[22], i2929[23] )
  i2928.streamingMipmapsActive = !!i2929[24]
  i2928.vSyncCount = i2929[25]
  i2928.asyncUploadBufferSize = i2929[26]
  i2928.asyncUploadTimeSlice = i2929[27]
  i2928.billboardsFaceCameraPosition = !!i2929[28]
  i2928.shadowNearPlaneOffset = i2929[29]
  i2928.streamingMipmapsMemoryBudget = i2929[30]
  i2928.maximumLODLevel = i2929[31]
  i2928.streamingMipmapsAddAllCameras = !!i2929[32]
  i2928.streamingMipmapsMaxLevelReduction = i2929[33]
  i2928.streamingMipmapsRenderersPerFrame = i2929[34]
  i2928.resolutionScalingFixedDPIFactor = i2929[35]
  i2928.streamingMipmapsMaxFileIORequests = i2929[36]
  i2928.currentQualityLevel = i2929[37]
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2939 = data
  i2938.mode = i2939[0]
  i2938.parameter = i2939[1]
  i2938.threshold = i2939[2]
  return i2938
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[4],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[4],"81":[82],"83":[84],"85":[84],"9":[8],"86":[8],"87":[88],"89":[90],"91":[4],"92":[8],"93":[82,8],"94":[8,15],"95":[8],"96":[15,8],"97":[82],"98":[15,8],"99":[8],"100":[4],"101":[4],"102":[103],"104":[88],"105":[20],"106":[8],"107":[8],"12":[9],"16":[15,8],"108":[8],"11":[9],"109":[8],"110":[8],"111":[8],"112":[8],"113":[8],"114":[8],"115":[8],"116":[8],"117":[8],"118":[15,8],"119":[8],"120":[8],"121":[8],"122":[8],"123":[15,8],"124":[8],"125":[18],"126":[18],"19":[18],"127":[18],"29":[4],"128":[4],"129":[88]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","LTPHUONG.GameState","LTPHUONG.ClickController","UnityEngine.Camera","LTPHUONG.AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","LTPHUONG.UIButtonPulse","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.Material","LTPHUONG.TutorialHand","LTPHUONG.GameplayTutorialManager","LTPHUONG.GarbageItem","LTPHUONG.RevealPen","LTPHUONG.RevealImage","LTPHUONG.Tray","UnityEngine.AudioListener","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.Shader","UnityEngine.Texture2D","LTPHUONG.TrashBin","LTPHUONG.ToolBase","UnityEngine.BoxCollider2D","UnityEngine.GameObject","LTPHUONG.DragSpeedSound","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","LTPHUONG.ToolStepGuard","Satisgame.EmojiControl","LTPHUONG.MoveToTransform","LTPHUONG.TrayGroup","LTPHUONG.SpriteHighlight","LTPHUONG.GarbageGroup","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "ply";

Deserializers.lunaInitializationTime = "03/26/2026 02:25:17";

Deserializers.lunaDaysRunning = "62.1";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "ply_tidy_123";

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

Deserializers.buildID = "ca0c9206-afe3-408e-8c3e-aa38eff86b45";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

