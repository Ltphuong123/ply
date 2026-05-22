var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1482 = root || request.c( 'UnityEngine.JointSpring' )
  var i1483 = data
  i1482.spring = i1483[0]
  i1482.damper = i1483[1]
  i1482.targetPosition = i1483[2]
  return i1482
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1484 = root || request.c( 'UnityEngine.JointMotor' )
  var i1485 = data
  i1484.m_TargetVelocity = i1485[0]
  i1484.m_Force = i1485[1]
  i1484.m_FreeSpin = i1485[2]
  return i1484
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.JointLimits' )
  var i1487 = data
  i1486.m_Min = i1487[0]
  i1486.m_Max = i1487[1]
  i1486.m_Bounciness = i1487[2]
  i1486.m_BounceMinVelocity = i1487[3]
  i1486.m_ContactDistance = i1487[4]
  i1486.minBounce = i1487[5]
  i1486.maxBounce = i1487[6]
  return i1486
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.JointDrive' )
  var i1489 = data
  i1488.m_PositionSpring = i1489[0]
  i1488.m_PositionDamper = i1489[1]
  i1488.m_MaximumForce = i1489[2]
  i1488.m_UseAcceleration = i1489[3]
  return i1488
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1491 = data
  i1490.m_Spring = i1491[0]
  i1490.m_Damper = i1491[1]
  return i1490
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1493 = data
  i1492.m_Limit = i1493[0]
  i1492.m_Bounciness = i1493[1]
  i1492.m_ContactDistance = i1493[2]
  return i1492
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1495 = data
  i1494.m_ExtremumSlip = i1495[0]
  i1494.m_ExtremumValue = i1495[1]
  i1494.m_AsymptoteSlip = i1495[2]
  i1494.m_AsymptoteValue = i1495[3]
  i1494.m_Stiffness = i1495[4]
  return i1494
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1497 = data
  i1496.m_LowerAngle = i1497[0]
  i1496.m_UpperAngle = i1497[1]
  return i1496
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1499 = data
  i1498.m_MotorSpeed = i1499[0]
  i1498.m_MaximumMotorTorque = i1499[1]
  return i1498
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1501 = data
  i1500.m_DampingRatio = i1501[0]
  i1500.m_Frequency = i1501[1]
  i1500.m_Angle = i1501[2]
  return i1500
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1502 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1503 = data
  i1502.m_LowerTranslation = i1503[0]
  i1502.m_UpperTranslation = i1503[1]
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1505 = data
  i1504.position = new pc.Vec3( i1505[0], i1505[1], i1505[2] )
  i1504.scale = new pc.Vec3( i1505[3], i1505[4], i1505[5] )
  i1504.rotation = new pc.Quat(i1505[6], i1505[7], i1505[8], i1505[9])
  return i1504
}

Deserializers["LTPHUONG.GameState"] = function (request, data, root) {
  var i1506 = root || request.c( 'LTPHUONG.GameState' )
  var i1507 = data
  return i1506
}

Deserializers["LTPHUONG.ClickController"] = function (request, data, root) {
  var i1508 = root || request.c( 'LTPHUONG.ClickController' )
  var i1509 = data
  request.r(i1509[0], i1509[1], 0, i1508, 'mainCamera')
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1511 = data
  i1510.name = i1511[0]
  i1510.tagId = i1511[1]
  i1510.enabled = !!i1511[2]
  i1510.isStatic = !!i1511[3]
  i1510.layer = i1511[4]
  return i1510
}

Deserializers["LTPHUONG.AudioManager"] = function (request, data, root) {
  var i1512 = root || request.c( 'LTPHUONG.AudioManager' )
  var i1513 = data
  request.r(i1513[0], i1513[1], 0, i1512, 'sfxAudioSource')
  request.r(i1513[2], i1513[3], 0, i1512, 'bgmAudioSource')
  request.r(i1513[4], i1513[5], 0, i1512, 'bgmClip')
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1515 = data
  request.r(i1515[0], i1515[1], 0, i1514, 'clip')
  request.r(i1515[2], i1515[3], 0, i1514, 'outputAudioMixerGroup')
  i1514.playOnAwake = !!i1515[4]
  i1514.loop = !!i1515[5]
  i1514.time = i1515[6]
  i1514.volume = i1515[7]
  i1514.pitch = i1515[8]
  i1514.enabled = !!i1515[9]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1517 = data
  i1516.pivot = new pc.Vec2( i1517[0], i1517[1] )
  i1516.anchorMin = new pc.Vec2( i1517[2], i1517[3] )
  i1516.anchorMax = new pc.Vec2( i1517[4], i1517[5] )
  i1516.sizeDelta = new pc.Vec2( i1517[6], i1517[7] )
  i1516.anchoredPosition3D = new pc.Vec3( i1517[8], i1517[9], i1517[10] )
  i1516.rotation = new pc.Quat(i1517[11], i1517[12], i1517[13], i1517[14])
  i1516.scale = new pc.Vec3( i1517[15], i1517[16], i1517[17] )
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1519 = data
  i1518.planeDistance = i1519[0]
  i1518.referencePixelsPerUnit = i1519[1]
  i1518.isFallbackOverlay = !!i1519[2]
  i1518.renderMode = i1519[3]
  i1518.renderOrder = i1519[4]
  i1518.sortingLayerName = i1519[5]
  i1518.sortingOrder = i1519[6]
  i1518.scaleFactor = i1519[7]
  request.r(i1519[8], i1519[9], 0, i1518, 'worldCamera')
  i1518.overrideSorting = !!i1519[10]
  i1518.pixelPerfect = !!i1519[11]
  i1518.targetDisplay = i1519[12]
  i1518.overridePixelPerfect = !!i1519[13]
  i1518.enabled = !!i1519[14]
  return i1518
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1520 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1521 = data
  i1520.m_UiScaleMode = i1521[0]
  i1520.m_ReferencePixelsPerUnit = i1521[1]
  i1520.m_ScaleFactor = i1521[2]
  i1520.m_ReferenceResolution = new pc.Vec2( i1521[3], i1521[4] )
  i1520.m_ScreenMatchMode = i1521[5]
  i1520.m_MatchWidthOrHeight = i1521[6]
  i1520.m_PhysicalUnit = i1521[7]
  i1520.m_FallbackScreenDPI = i1521[8]
  i1520.m_DefaultSpriteDPI = i1521[9]
  i1520.m_DynamicPixelsPerUnit = i1521[10]
  i1520.m_PresetInfoIsWorld = !!i1521[11]
  return i1520
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1522 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1523 = data
  i1522.m_IgnoreReversedGraphics = !!i1523[0]
  i1522.m_BlockingObjects = i1523[1]
  i1522.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1523[2] )
  return i1522
}

Deserializers["LTPHUONG.UIButtonPulse"] = function (request, data, root) {
  var i1524 = root || request.c( 'LTPHUONG.UIButtonPulse' )
  var i1525 = data
  request.r(i1525[0], i1525[1], 0, i1524, 'button')
  request.r(i1525[2], i1525[3], 0, i1524, 'imageRect')
  i1524.scaleMin = i1525[4]
  i1524.scaleMax = i1525[5]
  i1524.pulseDuration = i1525[6]
  i1524.landscapeImagePos = new pc.Vec2( i1525[7], i1525[8] )
  i1524.landscapeButtonPos = new pc.Vec2( i1525[9], i1525[10] )
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1527 = data
  i1526.cullTransparentMesh = !!i1527[0]
  return i1526
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1528 = root || request.c( 'UnityEngine.UI.Image' )
  var i1529 = data
  request.r(i1529[0], i1529[1], 0, i1528, 'm_Sprite')
  i1528.m_Type = i1529[2]
  i1528.m_PreserveAspect = !!i1529[3]
  i1528.m_FillCenter = !!i1529[4]
  i1528.m_FillMethod = i1529[5]
  i1528.m_FillAmount = i1529[6]
  i1528.m_FillClockwise = !!i1529[7]
  i1528.m_FillOrigin = i1529[8]
  i1528.m_UseSpriteMesh = !!i1529[9]
  i1528.m_PixelsPerUnitMultiplier = i1529[10]
  request.r(i1529[11], i1529[12], 0, i1528, 'm_Material')
  i1528.m_Maskable = !!i1529[13]
  i1528.m_Color = new pc.Color(i1529[14], i1529[15], i1529[16], i1529[17])
  i1528.m_RaycastTarget = !!i1529[18]
  i1528.m_RaycastPadding = new pc.Vec4( i1529[19], i1529[20], i1529[21], i1529[22] )
  return i1528
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1530 = root || request.c( 'UnityEngine.UI.Button' )
  var i1531 = data
  i1530.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1531[0], i1530.m_OnClick)
  i1530.m_Navigation = request.d('UnityEngine.UI.Navigation', i1531[1], i1530.m_Navigation)
  i1530.m_Transition = i1531[2]
  i1530.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1531[3], i1530.m_Colors)
  i1530.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1531[4], i1530.m_SpriteState)
  i1530.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1531[5], i1530.m_AnimationTriggers)
  i1530.m_Interactable = !!i1531[6]
  request.r(i1531[7], i1531[8], 0, i1530, 'm_TargetGraphic')
  return i1530
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1532 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1533 = data
  i1532.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1533[0], i1532.m_PersistentCalls)
  return i1532
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1535 = data
  var i1537 = i1535[0]
  var i1536 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.add(request.d('UnityEngine.Events.PersistentCall', i1537[i + 0]));
  }
  i1534.m_Calls = i1536
  return i1534
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1540 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1541 = data
  request.r(i1541[0], i1541[1], 0, i1540, 'm_Target')
  i1540.m_TargetAssemblyTypeName = i1541[2]
  i1540.m_MethodName = i1541[3]
  i1540.m_Mode = i1541[4]
  i1540.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1541[5], i1540.m_Arguments)
  i1540.m_CallState = i1541[6]
  return i1540
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1543 = data
  request.r(i1543[0], i1543[1], 0, i1542, 'm_ObjectArgument')
  i1542.m_ObjectArgumentAssemblyTypeName = i1543[2]
  i1542.m_IntArgument = i1543[3]
  i1542.m_FloatArgument = i1543[4]
  i1542.m_StringArgument = i1543[5]
  i1542.m_BoolArgument = !!i1543[6]
  return i1542
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1545 = data
  i1544.m_Mode = i1545[0]
  i1544.m_WrapAround = !!i1545[1]
  request.r(i1545[2], i1545[3], 0, i1544, 'm_SelectOnUp')
  request.r(i1545[4], i1545[5], 0, i1544, 'm_SelectOnDown')
  request.r(i1545[6], i1545[7], 0, i1544, 'm_SelectOnLeft')
  request.r(i1545[8], i1545[9], 0, i1544, 'm_SelectOnRight')
  return i1544
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1546 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1547 = data
  i1546.m_NormalColor = new pc.Color(i1547[0], i1547[1], i1547[2], i1547[3])
  i1546.m_HighlightedColor = new pc.Color(i1547[4], i1547[5], i1547[6], i1547[7])
  i1546.m_PressedColor = new pc.Color(i1547[8], i1547[9], i1547[10], i1547[11])
  i1546.m_SelectedColor = new pc.Color(i1547[12], i1547[13], i1547[14], i1547[15])
  i1546.m_DisabledColor = new pc.Color(i1547[16], i1547[17], i1547[18], i1547[19])
  i1546.m_ColorMultiplier = i1547[20]
  i1546.m_FadeDuration = i1547[21]
  return i1546
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1549 = data
  request.r(i1549[0], i1549[1], 0, i1548, 'm_HighlightedSprite')
  request.r(i1549[2], i1549[3], 0, i1548, 'm_PressedSprite')
  request.r(i1549[4], i1549[5], 0, i1548, 'm_SelectedSprite')
  request.r(i1549[6], i1549[7], 0, i1548, 'm_DisabledSprite')
  return i1548
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1551 = data
  i1550.m_NormalTrigger = i1551[0]
  i1550.m_HighlightedTrigger = i1551[1]
  i1550.m_PressedTrigger = i1551[2]
  i1550.m_SelectedTrigger = i1551[3]
  i1550.m_DisabledTrigger = i1551[4]
  return i1550
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1553 = data
  request.r(i1553[0], i1553[1], 0, i1552, 'm_FirstSelected')
  i1552.m_sendNavigationEvents = !!i1553[2]
  i1552.m_DragThreshold = i1553[3]
  return i1552
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1555 = data
  i1554.m_HorizontalAxis = i1555[0]
  i1554.m_VerticalAxis = i1555[1]
  i1554.m_SubmitButton = i1555[2]
  i1554.m_CancelButton = i1555[3]
  i1554.m_InputActionsPerSecond = i1555[4]
  i1554.m_RepeatDelay = i1555[5]
  i1554.m_ForceModuleActive = !!i1555[6]
  i1554.m_SendPointerHoverToParent = !!i1555[7]
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1557 = data
  i1556.color = new pc.Color(i1557[0], i1557[1], i1557[2], i1557[3])
  request.r(i1557[4], i1557[5], 0, i1556, 'sprite')
  i1556.flipX = !!i1557[6]
  i1556.flipY = !!i1557[7]
  i1556.drawMode = i1557[8]
  i1556.size = new pc.Vec2( i1557[9], i1557[10] )
  i1556.tileMode = i1557[11]
  i1556.adaptiveModeThreshold = i1557[12]
  i1556.maskInteraction = i1557[13]
  i1556.spriteSortPoint = i1557[14]
  i1556.enabled = !!i1557[15]
  request.r(i1557[16], i1557[17], 0, i1556, 'sharedMaterial')
  var i1559 = i1557[18]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 2) {
  request.r(i1559[i + 0], i1559[i + 1], 2, i1558, '')
  }
  i1556.sharedMaterials = i1558
  i1556.receiveShadows = !!i1557[19]
  i1556.shadowCastingMode = i1557[20]
  i1556.sortingLayerID = i1557[21]
  i1556.sortingOrder = i1557[22]
  i1556.lightmapIndex = i1557[23]
  i1556.lightmapSceneIndex = i1557[24]
  i1556.lightmapScaleOffset = new pc.Vec4( i1557[25], i1557[26], i1557[27], i1557[28] )
  i1556.lightProbeUsage = i1557[29]
  i1556.reflectionProbeUsage = i1557[30]
  return i1556
}

Deserializers["LTPHUONG.TutorialHand"] = function (request, data, root) {
  var i1562 = root || request.c( 'LTPHUONG.TutorialHand' )
  var i1563 = data
  request.r(i1563[0], i1563[1], 0, i1562, 'point')
  i1562.clickRotation = i1563[2]
  i1562.clickDuration = i1563[3]
  i1562.dragDuration = i1563[4]
  i1562.loopDelay = i1563[5]
  request.r(i1563[6], i1563[7], 0, i1562, 'handSprite')
  i1562.fadeDuration = i1563[8]
  return i1562
}

Deserializers["LTPHUONG.KitchenTutorialManager"] = function (request, data, root) {
  var i1564 = root || request.c( 'LTPHUONG.KitchenTutorialManager' )
  var i1565 = data
  i1564.OnFirstInteraction = request.d('UnityEngine.Events.UnityEvent', i1565[0], i1564.OnFirstInteraction)
  i1564.OnEveryInteraction = request.d('UnityEngine.Events.UnityEvent', i1565[1], i1564.OnEveryInteraction)
  request.r(i1565[2], i1565[3], 0, i1564, 'tutorialHand')
  i1564.idleTimeout = i1565[4]
  request.r(i1565[5], i1565[6], 0, i1564, 'drainCap')
  request.r(i1565[7], i1565[8], 0, i1564, 'drainPoint')
  request.r(i1565[9], i1565[10], 0, i1564, 'valve')
  var i1567 = i1565[11]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 2) {
  request.r(i1567[i + 0], i1567[i + 1], 2, i1566, '')
  }
  i1564.vegetables = i1566
  request.r(i1565[12], i1565[13], 0, i1564, 'dropZone')
  request.r(i1565[14], i1565[15], 0, i1564, 'basketPoint')
  var i1569 = i1565[16]
  var i1568 = []
  for(var i = 0; i < i1569.length; i += 2) {
  request.r(i1569[i + 0], i1569[i + 1], 2, i1568, '')
  }
  i1564.cuttingFoods = i1568
  request.r(i1565[17], i1565[18], 0, i1564, 'boardZone')
  request.r(i1565[19], i1565[20], 0, i1564, 'plateZone')
  request.r(i1565[21], i1565[22], 0, i1564, 'knife')
  request.r(i1565[23], i1565[24], 0, i1564, 'ctaFrom')
  request.r(i1565[25], i1565[26], 0, i1564, 'ctaTo')
  return i1564
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1571 = data
  i1570.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1571[0], i1570.m_PersistentCalls)
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1577 = data
  i1576.name = i1577[0]
  i1576.width = i1577[1]
  i1576.height = i1577[2]
  i1576.mipmapCount = i1577[3]
  i1576.anisoLevel = i1577[4]
  i1576.filterMode = i1577[5]
  i1576.hdr = !!i1577[6]
  i1576.format = i1577[7]
  i1576.wrapMode = i1577[8]
  i1576.alphaIsTransparency = !!i1577[9]
  i1576.alphaSource = i1577[10]
  i1576.graphicsFormat = i1577[11]
  i1576.sRGBTexture = !!i1577[12]
  i1576.desiredColorSpace = i1577[13]
  i1576.wrapU = i1577[14]
  i1576.wrapV = i1577[15]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1578 = root || new pc.UnityMaterial()
  var i1579 = data
  i1578.name = i1579[0]
  request.r(i1579[1], i1579[2], 0, i1578, 'shader')
  i1578.renderQueue = i1579[3]
  i1578.enableInstancing = !!i1579[4]
  var i1581 = i1579[5]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1581[i + 0]) );
  }
  i1578.floatParameters = i1580
  var i1583 = i1579[6]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1583[i + 0]) );
  }
  i1578.colorParameters = i1582
  var i1585 = i1579[7]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1585[i + 0]) );
  }
  i1578.vectorParameters = i1584
  var i1587 = i1579[8]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1587[i + 0]) );
  }
  i1578.textureParameters = i1586
  var i1589 = i1579[9]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1589[i + 0]) );
  }
  i1578.materialFlags = i1588
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1593 = data
  i1592.name = i1593[0]
  i1592.value = i1593[1]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1597 = data
  i1596.name = i1597[0]
  i1596.value = new pc.Color(i1597[1], i1597[2], i1597[3], i1597[4])
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1601 = data
  i1600.name = i1601[0]
  i1600.value = new pc.Vec4( i1601[1], i1601[2], i1601[3], i1601[4] )
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1605 = data
  i1604.name = i1605[0]
  request.r(i1605[1], i1605[2], 0, i1604, 'value')
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1609 = data
  i1608.name = i1609[0]
  i1608.enabled = !!i1609[1]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1611 = data
  i1610.name = i1611[0]
  i1610.index = i1611[1]
  i1610.startup = !!i1611[2]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1613 = data
  i1612.aspect = i1613[0]
  i1612.orthographic = !!i1613[1]
  i1612.orthographicSize = i1613[2]
  i1612.backgroundColor = new pc.Color(i1613[3], i1613[4], i1613[5], i1613[6])
  i1612.nearClipPlane = i1613[7]
  i1612.farClipPlane = i1613[8]
  i1612.fieldOfView = i1613[9]
  i1612.depth = i1613[10]
  i1612.clearFlags = i1613[11]
  i1612.cullingMask = i1613[12]
  i1612.rect = i1613[13]
  request.r(i1613[14], i1613[15], 0, i1612, 'targetTexture')
  i1612.usePhysicalProperties = !!i1613[16]
  i1612.focalLength = i1613[17]
  i1612.sensorSize = new pc.Vec2( i1613[18], i1613[19] )
  i1612.lensShift = new pc.Vec2( i1613[20], i1613[21] )
  i1612.gateFit = i1613[22]
  i1612.commandBufferCount = i1613[23]
  i1612.cameraType = i1613[24]
  i1612.enabled = !!i1613[25]
  return i1612
}

Deserializers["UnityEngine.EventSystems.Physics2DRaycaster"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.EventSystems.Physics2DRaycaster' )
  var i1615 = data
  i1614.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i1615[0] )
  i1614.m_MaxRayIntersections = i1615[1]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1617 = data
  i1616.usedByComposite = !!i1617[0]
  i1616.autoTiling = !!i1617[1]
  i1616.size = new pc.Vec2( i1617[2], i1617[3] )
  i1616.edgeRadius = i1617[4]
  i1616.enabled = !!i1617[5]
  i1616.isTrigger = !!i1617[6]
  i1616.usedByEffector = !!i1617[7]
  i1616.density = i1617[8]
  i1616.offset = new pc.Vec2( i1617[9], i1617[10] )
  request.r(i1617[11], i1617[12], 0, i1616, 'material')
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1619 = data
  i1618.usedByComposite = !!i1619[0]
  i1618.autoTiling = !!i1619[1]
  var i1621 = i1619[2]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
  var i1623 = i1621[i + 0]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 2) {
    i1622.push( new pc.Vec2( i1623[i + 0], i1623[i + 1] ) );
  }
    i1620.push( i1622 );
  }
  i1618.points = i1620
  i1618.enabled = !!i1619[3]
  i1618.isTrigger = !!i1619[4]
  i1618.usedByEffector = !!i1619[5]
  i1618.density = i1619[6]
  i1618.offset = new pc.Vec2( i1619[7], i1619[8] )
  request.r(i1619[9], i1619[10], 0, i1618, 'material')
  return i1618
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i1630 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i1631 = data
  var i1633 = i1631[0]
  var i1632 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i1633[i + 0]));
  }
  i1630.m_Delegates = i1632
  return i1630
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i1637 = data
  i1636.eventID = i1637[0]
  i1636.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i1637[1], i1636.callback)
  return i1636
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i1639 = data
  i1638.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1639[0], i1638.m_PersistentCalls)
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1641 = data
  i1640.radius = i1641[0]
  i1640.enabled = !!i1641[1]
  i1640.isTrigger = !!i1641[2]
  i1640.usedByEffector = !!i1641[3]
  i1640.density = i1641[4]
  i1640.offset = new pc.Vec2( i1641[5], i1641[6] )
  request.r(i1641[7], i1641[8], 0, i1640, 'material')
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1643 = data
  request.r(i1643[0], i1643[1], 0, i1642, 'mesh')
  i1642.meshCount = i1643[2]
  i1642.activeVertexStreamsCount = i1643[3]
  i1642.alignment = i1643[4]
  i1642.renderMode = i1643[5]
  i1642.sortMode = i1643[6]
  i1642.lengthScale = i1643[7]
  i1642.velocityScale = i1643[8]
  i1642.cameraVelocityScale = i1643[9]
  i1642.normalDirection = i1643[10]
  i1642.sortingFudge = i1643[11]
  i1642.minParticleSize = i1643[12]
  i1642.maxParticleSize = i1643[13]
  i1642.pivot = new pc.Vec3( i1643[14], i1643[15], i1643[16] )
  request.r(i1643[17], i1643[18], 0, i1642, 'trailMaterial')
  i1642.applyActiveColorSpace = !!i1643[19]
  i1642.enabled = !!i1643[20]
  request.r(i1643[21], i1643[22], 0, i1642, 'sharedMaterial')
  var i1645 = i1643[23]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 2) {
  request.r(i1645[i + 0], i1645[i + 1], 2, i1644, '')
  }
  i1642.sharedMaterials = i1644
  i1642.receiveShadows = !!i1643[24]
  i1642.shadowCastingMode = i1643[25]
  i1642.sortingLayerID = i1643[26]
  i1642.sortingOrder = i1643[27]
  i1642.lightmapIndex = i1643[28]
  i1642.lightmapSceneIndex = i1643[29]
  i1642.lightmapScaleOffset = new pc.Vec4( i1643[30], i1643[31], i1643[32], i1643[33] )
  i1642.lightProbeUsage = i1643[34]
  i1642.reflectionProbeUsage = i1643[35]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1647 = data
  i1646.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1647[0], i1646.main)
  i1646.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1647[1], i1646.colorBySpeed)
  i1646.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1647[2], i1646.colorOverLifetime)
  i1646.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1647[3], i1646.emission)
  i1646.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1647[4], i1646.rotationBySpeed)
  i1646.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1647[5], i1646.rotationOverLifetime)
  i1646.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1647[6], i1646.shape)
  i1646.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1647[7], i1646.sizeBySpeed)
  i1646.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1647[8], i1646.sizeOverLifetime)
  i1646.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1647[9], i1646.textureSheetAnimation)
  i1646.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1647[10], i1646.velocityOverLifetime)
  i1646.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1647[11], i1646.noise)
  i1646.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1647[12], i1646.inheritVelocity)
  i1646.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1647[13], i1646.forceOverLifetime)
  i1646.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1647[14], i1646.limitVelocityOverLifetime)
  i1646.useAutoRandomSeed = !!i1647[15]
  i1646.randomSeed = i1647[16]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1648 = root || new pc.ParticleSystemMain()
  var i1649 = data
  i1648.duration = i1649[0]
  i1648.loop = !!i1649[1]
  i1648.prewarm = !!i1649[2]
  i1648.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[3], i1648.startDelay)
  i1648.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[4], i1648.startLifetime)
  i1648.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[5], i1648.startSpeed)
  i1648.startSize3D = !!i1649[6]
  i1648.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[7], i1648.startSizeX)
  i1648.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[8], i1648.startSizeY)
  i1648.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[9], i1648.startSizeZ)
  i1648.startRotation3D = !!i1649[10]
  i1648.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[11], i1648.startRotationX)
  i1648.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[12], i1648.startRotationY)
  i1648.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[13], i1648.startRotationZ)
  i1648.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1649[14], i1648.startColor)
  i1648.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[15], i1648.gravityModifier)
  i1648.simulationSpace = i1649[16]
  request.r(i1649[17], i1649[18], 0, i1648, 'customSimulationSpace')
  i1648.simulationSpeed = i1649[19]
  i1648.useUnscaledTime = !!i1649[20]
  i1648.scalingMode = i1649[21]
  i1648.playOnAwake = !!i1649[22]
  i1648.maxParticles = i1649[23]
  i1648.emitterVelocityMode = i1649[24]
  i1648.stopAction = i1649[25]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1650 = root || new pc.MinMaxCurve()
  var i1651 = data
  i1650.mode = i1651[0]
  i1650.curveMin = new pc.AnimationCurve( { keys_flow: i1651[1] } )
  i1650.curveMax = new pc.AnimationCurve( { keys_flow: i1651[2] } )
  i1650.curveMultiplier = i1651[3]
  i1650.constantMin = i1651[4]
  i1650.constantMax = i1651[5]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1652 = root || new pc.MinMaxGradient()
  var i1653 = data
  i1652.mode = i1653[0]
  i1652.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1653[1], i1652.gradientMin)
  i1652.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1653[2], i1652.gradientMax)
  i1652.colorMin = new pc.Color(i1653[3], i1653[4], i1653[5], i1653[6])
  i1652.colorMax = new pc.Color(i1653[7], i1653[8], i1653[9], i1653[10])
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1655 = data
  i1654.mode = i1655[0]
  var i1657 = i1655[1]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1657[i + 0]) );
  }
  i1654.colorKeys = i1656
  var i1659 = i1655[2]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1659[i + 0]) );
  }
  i1654.alphaKeys = i1658
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1660 = root || new pc.ParticleSystemColorBySpeed()
  var i1661 = data
  i1660.enabled = !!i1661[0]
  i1660.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1661[1], i1660.color)
  i1660.range = new pc.Vec2( i1661[2], i1661[3] )
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1665 = data
  i1664.color = new pc.Color(i1665[0], i1665[1], i1665[2], i1665[3])
  i1664.time = i1665[4]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1669 = data
  i1668.alpha = i1669[0]
  i1668.time = i1669[1]
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1670 = root || new pc.ParticleSystemColorOverLifetime()
  var i1671 = data
  i1670.enabled = !!i1671[0]
  i1670.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1671[1], i1670.color)
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1672 = root || new pc.ParticleSystemEmitter()
  var i1673 = data
  i1672.enabled = !!i1673[0]
  i1672.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1673[1], i1672.rateOverTime)
  i1672.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1673[2], i1672.rateOverDistance)
  var i1675 = i1673[3]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1675[i + 0]) );
  }
  i1672.bursts = i1674
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1678 = root || new pc.ParticleSystemBurst()
  var i1679 = data
  i1678.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1679[0], i1678.count)
  i1678.cycleCount = i1679[1]
  i1678.minCount = i1679[2]
  i1678.maxCount = i1679[3]
  i1678.repeatInterval = i1679[4]
  i1678.time = i1679[5]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1680 = root || new pc.ParticleSystemRotationBySpeed()
  var i1681 = data
  i1680.enabled = !!i1681[0]
  i1680.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1681[1], i1680.x)
  i1680.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1681[2], i1680.y)
  i1680.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1681[3], i1680.z)
  i1680.separateAxes = !!i1681[4]
  i1680.range = new pc.Vec2( i1681[5], i1681[6] )
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1682 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1683 = data
  i1682.enabled = !!i1683[0]
  i1682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[1], i1682.x)
  i1682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[2], i1682.y)
  i1682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[3], i1682.z)
  i1682.separateAxes = !!i1683[4]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1684 = root || new pc.ParticleSystemShape()
  var i1685 = data
  i1684.enabled = !!i1685[0]
  i1684.shapeType = i1685[1]
  i1684.randomDirectionAmount = i1685[2]
  i1684.sphericalDirectionAmount = i1685[3]
  i1684.randomPositionAmount = i1685[4]
  i1684.alignToDirection = !!i1685[5]
  i1684.radius = i1685[6]
  i1684.radiusMode = i1685[7]
  i1684.radiusSpread = i1685[8]
  i1684.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1685[9], i1684.radiusSpeed)
  i1684.radiusThickness = i1685[10]
  i1684.angle = i1685[11]
  i1684.length = i1685[12]
  i1684.boxThickness = new pc.Vec3( i1685[13], i1685[14], i1685[15] )
  i1684.meshShapeType = i1685[16]
  request.r(i1685[17], i1685[18], 0, i1684, 'mesh')
  request.r(i1685[19], i1685[20], 0, i1684, 'meshRenderer')
  request.r(i1685[21], i1685[22], 0, i1684, 'skinnedMeshRenderer')
  i1684.useMeshMaterialIndex = !!i1685[23]
  i1684.meshMaterialIndex = i1685[24]
  i1684.useMeshColors = !!i1685[25]
  i1684.normalOffset = i1685[26]
  i1684.arc = i1685[27]
  i1684.arcMode = i1685[28]
  i1684.arcSpread = i1685[29]
  i1684.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1685[30], i1684.arcSpeed)
  i1684.donutRadius = i1685[31]
  i1684.position = new pc.Vec3( i1685[32], i1685[33], i1685[34] )
  i1684.rotation = new pc.Vec3( i1685[35], i1685[36], i1685[37] )
  i1684.scale = new pc.Vec3( i1685[38], i1685[39], i1685[40] )
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1686 = root || new pc.ParticleSystemSizeBySpeed()
  var i1687 = data
  i1686.enabled = !!i1687[0]
  i1686.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1687[1], i1686.x)
  i1686.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1687[2], i1686.y)
  i1686.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1687[3], i1686.z)
  i1686.separateAxes = !!i1687[4]
  i1686.range = new pc.Vec2( i1687[5], i1687[6] )
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1688 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1689 = data
  i1688.enabled = !!i1689[0]
  i1688.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1689[1], i1688.x)
  i1688.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1689[2], i1688.y)
  i1688.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1689[3], i1688.z)
  i1688.separateAxes = !!i1689[4]
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1690 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1691 = data
  i1690.enabled = !!i1691[0]
  i1690.mode = i1691[1]
  i1690.animation = i1691[2]
  i1690.numTilesX = i1691[3]
  i1690.numTilesY = i1691[4]
  i1690.useRandomRow = !!i1691[5]
  i1690.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1691[6], i1690.frameOverTime)
  i1690.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1691[7], i1690.startFrame)
  i1690.cycleCount = i1691[8]
  i1690.rowIndex = i1691[9]
  i1690.flipU = i1691[10]
  i1690.flipV = i1691[11]
  i1690.spriteCount = i1691[12]
  var i1693 = i1691[13]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 2) {
  request.r(i1693[i + 0], i1693[i + 1], 2, i1692, '')
  }
  i1690.sprites = i1692
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1696 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1697 = data
  i1696.enabled = !!i1697[0]
  i1696.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1697[1], i1696.x)
  i1696.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1697[2], i1696.y)
  i1696.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1697[3], i1696.z)
  i1696.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1697[4], i1696.radial)
  i1696.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1697[5], i1696.speedModifier)
  i1696.space = i1697[6]
  i1696.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1697[7], i1696.orbitalX)
  i1696.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1697[8], i1696.orbitalY)
  i1696.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1697[9], i1696.orbitalZ)
  i1696.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1697[10], i1696.orbitalOffsetX)
  i1696.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1697[11], i1696.orbitalOffsetY)
  i1696.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1697[12], i1696.orbitalOffsetZ)
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1698 = root || new pc.ParticleSystemNoise()
  var i1699 = data
  i1698.enabled = !!i1699[0]
  i1698.separateAxes = !!i1699[1]
  i1698.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[2], i1698.strengthX)
  i1698.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[3], i1698.strengthY)
  i1698.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[4], i1698.strengthZ)
  i1698.frequency = i1699[5]
  i1698.damping = !!i1699[6]
  i1698.octaveCount = i1699[7]
  i1698.octaveMultiplier = i1699[8]
  i1698.octaveScale = i1699[9]
  i1698.quality = i1699[10]
  i1698.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[11], i1698.scrollSpeed)
  i1698.scrollSpeedMultiplier = i1699[12]
  i1698.remapEnabled = !!i1699[13]
  i1698.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[14], i1698.remapX)
  i1698.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[15], i1698.remapY)
  i1698.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[16], i1698.remapZ)
  i1698.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[17], i1698.positionAmount)
  i1698.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[18], i1698.rotationAmount)
  i1698.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1699[19], i1698.sizeAmount)
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1700 = root || new pc.ParticleSystemInheritVelocity()
  var i1701 = data
  i1700.enabled = !!i1701[0]
  i1700.mode = i1701[1]
  i1700.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1701[2], i1700.curve)
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1702 = root || new pc.ParticleSystemForceOverLifetime()
  var i1703 = data
  i1702.enabled = !!i1703[0]
  i1702.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1703[1], i1702.x)
  i1702.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1703[2], i1702.y)
  i1702.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1703[3], i1702.z)
  i1702.space = i1703[4]
  i1702.randomized = !!i1703[5]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1704 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1705 = data
  i1704.enabled = !!i1705[0]
  i1704.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[1], i1704.limit)
  i1704.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[2], i1704.limitX)
  i1704.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[3], i1704.limitY)
  i1704.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[4], i1704.limitZ)
  i1704.dampen = i1705[5]
  i1704.separateAxes = !!i1705[6]
  i1704.space = i1705[7]
  i1704.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1705[8], i1704.drag)
  i1704.multiplyDragByParticleSize = !!i1705[9]
  i1704.multiplyDragByParticleVelocity = !!i1705[10]
  return i1704
}

Deserializers["LTPHUONG.SinkDrainCap"] = function (request, data, root) {
  var i1706 = root || request.c( 'LTPHUONG.SinkDrainCap' )
  var i1707 = data
  i1706.OnPlugged = request.d('System.Action', i1707[0], i1706.OnPlugged)
  i1706.OnUnplugged = request.d('System.Action', i1707[1], i1706.OnUnplugged)
  request.r(i1707[2], i1707[3], 0, i1706, 'drainPoint')
  i1706.snapRadius = i1707[4]
  request.r(i1707[5], i1707[6], 0, i1706, 'plugSfx')
  request.r(i1707[7], i1707[8], 0, i1706, 'unplugSfx')
  var i1709 = i1707[9]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 2) {
  request.r(i1709[i + 0], i1709[i + 1], 2, i1708, '')
  }
  i1706.vegetables = i1708
  var i1711 = i1707[10]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 2) {
  request.r(i1711[i + 0], i1711[i + 1], 2, i1710, '')
  }
  i1706.spriteRenderers = i1710
  i1706.clickOrder = i1707[11]
  i1706.isBlocked = !!i1707[12]
  i1706.minY = i1707[13]
  i1706.maxY = i1707[14]
  return i1706
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1712 = root || request.c( 'System.Action' )
  var i1713 = data
  return i1712
}

Deserializers["LTPHUONG.SinkValve"] = function (request, data, root) {
  var i1716 = root || request.c( 'LTPHUONG.SinkValve' )
  var i1717 = data
  i1716.OnValveOn = request.d('System.Action', i1717[0], i1716.OnValveOn)
  i1716.OnValveOff = request.d('System.Action', i1717[1], i1716.OnValveOff)
  request.r(i1717[2], i1717[3], 0, i1716, 'valveOnSfx')
  request.r(i1717[4], i1717[5], 0, i1716, 'valveOffSfx')
  i1716.autoOffDelay = i1717[6]
  var i1719 = i1717[7]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 2) {
  request.r(i1719[i + 0], i1719[i + 1], 2, i1718, '')
  }
  i1716.spriteRenderers = i1718
  i1716.clickOrder = i1717[8]
  i1716.isBlocked = !!i1717[9]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, 'animatorController')
  request.r(i1721[2], i1721[3], 0, i1720, 'avatar')
  i1720.updateMode = i1721[4]
  i1720.hasTransformHierarchy = !!i1721[5]
  i1720.applyRootMotion = !!i1721[6]
  var i1723 = i1721[7]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 2) {
  request.r(i1723[i + 0], i1723[i + 1], 2, i1722, '')
  }
  i1720.humanBones = i1722
  i1720.enabled = !!i1721[8]
  return i1720
}

Deserializers["LTPHUONG.SinkSystem"] = function (request, data, root) {
  var i1726 = root || request.c( 'LTPHUONG.SinkSystem' )
  var i1727 = data
  request.r(i1727[0], i1727[1], 0, i1726, 'drainCap')
  request.r(i1727[2], i1727[3], 0, i1726, 'valve')
  request.r(i1727[4], i1727[5], 0, i1726, 'waterSurface')
  request.r(i1727[6], i1727[7], 0, i1726, 'waterFlow')
  request.r(i1727[8], i1727[9], 0, i1726, 'waterLoopSource')
  return i1726
}

Deserializers["LTPHUONG.SinkVegetable"] = function (request, data, root) {
  var i1728 = root || request.c( 'LTPHUONG.SinkVegetable' )
  var i1729 = data
  request.r(i1729[0], i1729[1], 0, i1728, 'dirtyObj')
  request.r(i1729[2], i1729[3], 0, i1728, 'cleanObj')
  request.r(i1729[4], i1729[5], 0, i1728, 'sinkSystem')
  request.r(i1729[6], i1729[7], 0, i1728, 'dropZone')
  i1728.dropRadius = i1729[8]
  request.r(i1729[9], i1729[10], 0, i1728, 'splashSfx')
  request.r(i1729[11], i1729[12], 0, i1728, 'basketPoint')
  i1728.basketRadius = i1729[13]
  request.r(i1729[14], i1729[15], 0, i1728, 'basketSfx')
  request.r(i1729[16], i1729[17], 0, i1728, 'cleanSfx')
  request.r(i1729[18], i1729[19], 0, i1728, 'cleanParticle')
  i1728.waterScale = i1729[20]
  i1728.floatAmplitude = i1729[21]
  i1728.floatDuration = i1729[22]
  var i1731 = i1729[23]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 2) {
  request.r(i1731[i + 0], i1731[i + 1], 2, i1730, '')
  }
  i1728.spriteRenderers = i1730
  i1728.clickOrder = i1729[24]
  i1728.isBlocked = !!i1729[25]
  i1728.minY = i1729[26]
  i1728.maxY = i1729[27]
  return i1728
}

Deserializers["LTPHUONG.KnifeTool"] = function (request, data, root) {
  var i1732 = root || request.c( 'LTPHUONG.KnifeTool' )
  var i1733 = data
  i1732.onDragStarted = request.d('UnityEngine.Events.UnityEvent', i1733[0], i1732.onDragStarted)
  i1732.onReturnedToOrigin = request.d('UnityEngine.Events.UnityEvent', i1733[1], i1732.onReturnedToOrigin)
  i1732.detectRadius = i1733[2]
  i1732.cutCount = i1733[3]
  i1732.cutSpacing = i1733[4]
  i1732.cutStartY = i1733[5]
  i1732.cutDepth = i1733[6]
  i1732.moveToPosDuration = i1733[7]
  i1732.cutDownDuration = i1733[8]
  request.r(i1733[9], i1733[10], 0, i1732, 'cutParticle')
  request.r(i1733[11], i1733[12], 0, i1732, 'cutSfx')
  var i1735 = i1733[13]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 2) {
  request.r(i1735[i + 0], i1735[i + 1], 2, i1734, '')
  }
  i1732.spriteRenderers = i1734
  i1732.clickOrder = i1733[14]
  i1732.isBlocked = !!i1733[15]
  i1732.minY = i1733[16]
  i1732.maxY = i1733[17]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1737 = data
  i1736.bodyType = i1737[0]
  request.r(i1737[1], i1737[2], 0, i1736, 'material')
  i1736.simulated = !!i1737[3]
  i1736.useAutoMass = !!i1737[4]
  i1736.mass = i1737[5]
  i1736.drag = i1737[6]
  i1736.angularDrag = i1737[7]
  i1736.gravityScale = i1737[8]
  i1736.collisionDetectionMode = i1737[9]
  i1736.sleepMode = i1737[10]
  i1736.constraints = i1737[11]
  return i1736
}

Deserializers["LTPHUONG.CuttingFood"] = function (request, data, root) {
  var i1738 = root || request.c( 'LTPHUONG.CuttingFood' )
  var i1739 = data
  i1738.OnPlacedOnBoard = request.d('UnityEngine.Events.UnityEvent', i1739[0], i1738.OnPlacedOnBoard)
  i1738.OnAllCutsDone = request.d('UnityEngine.Events.UnityEvent', i1739[1], i1738.OnAllCutsDone)
  i1738.OnReturnedToPlate = request.d('UnityEngine.Events.UnityEvent', i1739[2], i1738.OnReturnedToPlate)
  var i1741 = i1739[3]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 2) {
  request.r(i1741[i + 0], i1741[i + 1], 2, i1740, '')
  }
  i1738.cutStateObjects = i1740
  request.r(i1739[4], i1739[5], 0, i1738, 'boardZone')
  i1738.boardRadius = i1739[6]
  request.r(i1739[7], i1739[8], 0, i1738, 'plateZone')
  i1738.plateZoneRadius = i1739[9]
  request.r(i1739[10], i1739[11], 0, i1738, 'cutParticle')
  request.r(i1739[12], i1739[13], 0, i1738, 'placeSfx')
  var i1743 = i1739[14]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 2) {
  request.r(i1743[i + 0], i1743[i + 1], 2, i1742, '')
  }
  i1738.spriteRenderers = i1742
  i1738.clickOrder = i1739[15]
  i1738.isBlocked = !!i1739[16]
  i1738.minY = i1739[17]
  i1738.maxY = i1739[18]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1747 = data
  i1746.ambientIntensity = i1747[0]
  i1746.reflectionIntensity = i1747[1]
  i1746.ambientMode = i1747[2]
  i1746.ambientLight = new pc.Color(i1747[3], i1747[4], i1747[5], i1747[6])
  i1746.ambientSkyColor = new pc.Color(i1747[7], i1747[8], i1747[9], i1747[10])
  i1746.ambientGroundColor = new pc.Color(i1747[11], i1747[12], i1747[13], i1747[14])
  i1746.ambientEquatorColor = new pc.Color(i1747[15], i1747[16], i1747[17], i1747[18])
  i1746.fogColor = new pc.Color(i1747[19], i1747[20], i1747[21], i1747[22])
  i1746.fogEndDistance = i1747[23]
  i1746.fogStartDistance = i1747[24]
  i1746.fogDensity = i1747[25]
  i1746.fog = !!i1747[26]
  request.r(i1747[27], i1747[28], 0, i1746, 'skybox')
  i1746.fogMode = i1747[29]
  var i1749 = i1747[30]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1749[i + 0]) );
  }
  i1746.lightmaps = i1748
  i1746.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1747[31], i1746.lightProbes)
  i1746.lightmapsMode = i1747[32]
  i1746.mixedBakeMode = i1747[33]
  i1746.environmentLightingMode = i1747[34]
  i1746.ambientProbe = new pc.SphericalHarmonicsL2(i1747[35])
  i1746.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1747[36])
  i1746.useReferenceAmbientProbe = !!i1747[37]
  request.r(i1747[38], i1747[39], 0, i1746, 'customReflection')
  request.r(i1747[40], i1747[41], 0, i1746, 'defaultReflection')
  i1746.defaultReflectionMode = i1747[42]
  i1746.defaultReflectionResolution = i1747[43]
  i1746.sunLightObjectId = i1747[44]
  i1746.pixelLightCount = i1747[45]
  i1746.defaultReflectionHDR = !!i1747[46]
  i1746.hasLightDataAsset = !!i1747[47]
  i1746.hasManualGenerate = !!i1747[48]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, 'lightmapColor')
  request.r(i1753[2], i1753[3], 0, i1752, 'lightmapDirection')
  request.r(i1753[4], i1753[5], 0, i1752, 'shadowMask')
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1754 = root || new UnityEngine.LightProbes()
  var i1755 = data
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1763 = data
  var i1765 = i1763[0]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1765[i + 0]));
  }
  i1762.ShaderCompilationErrors = i1764
  i1762.name = i1763[1]
  i1762.guid = i1763[2]
  var i1767 = i1763[3]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( i1767[i + 0] );
  }
  i1762.shaderDefinedKeywords = i1766
  var i1769 = i1763[4]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1769[i + 0]) );
  }
  i1762.passes = i1768
  var i1771 = i1763[5]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1771[i + 0]) );
  }
  i1762.usePasses = i1770
  var i1773 = i1763[6]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1773[i + 0]) );
  }
  i1762.defaultParameterValues = i1772
  request.r(i1763[7], i1763[8], 0, i1762, 'unityFallbackShader')
  i1762.readDepth = !!i1763[9]
  i1762.hasDepthOnlyPass = !!i1763[10]
  i1762.isCreatedByShaderGraph = !!i1763[11]
  i1762.disableBatching = !!i1763[12]
  i1762.compiled = !!i1763[13]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1777 = data
  i1776.shaderName = i1777[0]
  i1776.errorMessage = i1777[1]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1782 = root || new pc.UnityShaderPass()
  var i1783 = data
  i1782.id = i1783[0]
  i1782.subShaderIndex = i1783[1]
  i1782.name = i1783[2]
  i1782.passType = i1783[3]
  i1782.grabPassTextureName = i1783[4]
  i1782.usePass = !!i1783[5]
  i1782.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[6], i1782.zTest)
  i1782.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[7], i1782.zWrite)
  i1782.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[8], i1782.culling)
  i1782.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1783[9], i1782.blending)
  i1782.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1783[10], i1782.alphaBlending)
  i1782.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[11], i1782.colorWriteMask)
  i1782.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[12], i1782.offsetUnits)
  i1782.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[13], i1782.offsetFactor)
  i1782.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[14], i1782.stencilRef)
  i1782.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[15], i1782.stencilReadMask)
  i1782.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[16], i1782.stencilWriteMask)
  i1782.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1783[17], i1782.stencilOp)
  i1782.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1783[18], i1782.stencilOpFront)
  i1782.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1783[19], i1782.stencilOpBack)
  var i1785 = i1783[20]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1785[i + 0]) );
  }
  i1782.tags = i1784
  var i1787 = i1783[21]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( i1787[i + 0] );
  }
  i1782.passDefinedKeywords = i1786
  var i1789 = i1783[22]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1789[i + 0]) );
  }
  i1782.passDefinedKeywordGroups = i1788
  var i1791 = i1783[23]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1791[i + 0]) );
  }
  i1782.variants = i1790
  var i1793 = i1783[24]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1793[i + 0]) );
  }
  i1782.excludedVariants = i1792
  i1782.hasDepthReader = !!i1783[25]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1795 = data
  i1794.val = i1795[0]
  i1794.name = i1795[1]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1797 = data
  i1796.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[0], i1796.src)
  i1796.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[1], i1796.dst)
  i1796.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[2], i1796.op)
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1799 = data
  i1798.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1799[0], i1798.pass)
  i1798.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1799[1], i1798.fail)
  i1798.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1799[2], i1798.zFail)
  i1798.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1799[3], i1798.comp)
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1803 = data
  i1802.name = i1803[0]
  i1802.value = i1803[1]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1807 = data
  var i1809 = i1807[0]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( i1809[i + 0] );
  }
  i1806.keywords = i1808
  i1806.hasDiscard = !!i1807[1]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1813 = data
  i1812.passId = i1813[0]
  i1812.subShaderIndex = i1813[1]
  var i1815 = i1813[2]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( i1815[i + 0] );
  }
  i1812.keywords = i1814
  i1812.vertexProgram = i1813[3]
  i1812.fragmentProgram = i1813[4]
  i1812.exportedForWebGl2 = !!i1813[5]
  i1812.readDepth = !!i1813[6]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1819 = data
  request.r(i1819[0], i1819[1], 0, i1818, 'shader')
  i1818.pass = i1819[2]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1823 = data
  i1822.name = i1823[0]
  i1822.type = i1823[1]
  i1822.value = new pc.Vec4( i1823[2], i1823[3], i1823[4], i1823[5] )
  i1822.textureValue = i1823[6]
  i1822.shaderPropertyFlag = i1823[7]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1825 = data
  i1824.name = i1825[0]
  request.r(i1825[1], i1825[2], 0, i1824, 'texture')
  i1824.aabb = i1825[3]
  i1824.vertices = i1825[4]
  i1824.triangles = i1825[5]
  i1824.textureRect = UnityEngine.Rect.MinMaxRect(i1825[6], i1825[7], i1825[8], i1825[9])
  i1824.packedRect = UnityEngine.Rect.MinMaxRect(i1825[10], i1825[11], i1825[12], i1825[13])
  i1824.border = new pc.Vec4( i1825[14], i1825[15], i1825[16], i1825[17] )
  i1824.transparency = i1825[18]
  i1824.bounds = i1825[19]
  i1824.pixelsPerUnit = i1825[20]
  i1824.textureWidth = i1825[21]
  i1824.textureHeight = i1825[22]
  i1824.nativeSize = new pc.Vec2( i1825[23], i1825[24] )
  i1824.pivot = new pc.Vec2( i1825[25], i1825[26] )
  i1824.textureRectOffset = new pc.Vec2( i1825[27], i1825[28] )
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1827 = data
  i1826.name = i1827[0]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1829 = data
  i1828.name = i1829[0]
  i1828.wrapMode = i1829[1]
  i1828.isLooping = !!i1829[2]
  i1828.length = i1829[3]
  var i1831 = i1829[4]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1831[i + 0]) );
  }
  i1828.curves = i1830
  var i1833 = i1829[5]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1833[i + 0]) );
  }
  i1828.events = i1832
  i1828.halfPrecision = !!i1829[6]
  i1828._frameRate = i1829[7]
  i1828.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1829[8], i1828.localBounds)
  i1828.hasMuscleCurves = !!i1829[9]
  var i1835 = i1829[10]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( i1835[i + 0] );
  }
  i1828.clipMuscleConstant = i1834
  i1828.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1829[11], i1828.clipBindingConstant)
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1839 = data
  i1838.path = i1839[0]
  i1838.hash = i1839[1]
  i1838.componentType = i1839[2]
  i1838.property = i1839[3]
  i1838.keys = i1839[4]
  var i1841 = i1839[5]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1841[i + 0]) );
  }
  i1838.objectReferenceKeys = i1840
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1845 = data
  i1844.time = i1845[0]
  request.r(i1845[1], i1845[2], 0, i1844, 'value')
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1849 = data
  i1848.functionName = i1849[0]
  i1848.floatParameter = i1849[1]
  i1848.intParameter = i1849[2]
  i1848.stringParameter = i1849[3]
  request.r(i1849[4], i1849[5], 0, i1848, 'objectReferenceParameter')
  i1848.time = i1849[6]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1851 = data
  i1850.center = new pc.Vec3( i1851[0], i1851[1], i1851[2] )
  i1850.extends = new pc.Vec3( i1851[3], i1851[4], i1851[5] )
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1855 = data
  var i1857 = i1855[0]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( i1857[i + 0] );
  }
  i1854.genericBindings = i1856
  var i1859 = i1855[1]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( i1859[i + 0] );
  }
  i1854.pptrCurveMapping = i1858
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1861 = data
  i1860.name = i1861[0]
  var i1863 = i1861[1]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1863[i + 0]) );
  }
  i1860.layers = i1862
  var i1865 = i1861[2]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1865[i + 0]) );
  }
  i1860.parameters = i1864
  i1860.animationClips = i1861[3]
  i1860.avatarUnsupported = i1861[4]
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1869 = data
  i1868.name = i1869[0]
  i1868.defaultWeight = i1869[1]
  i1868.blendingMode = i1869[2]
  i1868.avatarMask = i1869[3]
  i1868.syncedLayerIndex = i1869[4]
  i1868.syncedLayerAffectsTiming = !!i1869[5]
  i1868.syncedLayers = i1869[6]
  i1868.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1869[7], i1868.stateMachine)
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1871 = data
  i1870.id = i1871[0]
  i1870.name = i1871[1]
  i1870.path = i1871[2]
  var i1873 = i1871[3]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1873[i + 0]) );
  }
  i1870.states = i1872
  var i1875 = i1871[4]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1875[i + 0]) );
  }
  i1870.machines = i1874
  var i1877 = i1871[5]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1877[i + 0]) );
  }
  i1870.entryStateTransitions = i1876
  var i1879 = i1871[6]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1879[i + 0]) );
  }
  i1870.exitStateTransitions = i1878
  var i1881 = i1871[7]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1881[i + 0]) );
  }
  i1870.anyStateTransitions = i1880
  i1870.defaultStateId = i1871[8]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1885 = data
  i1884.id = i1885[0]
  i1884.name = i1885[1]
  i1884.cycleOffset = i1885[2]
  i1884.cycleOffsetParameter = i1885[3]
  i1884.cycleOffsetParameterActive = !!i1885[4]
  i1884.mirror = !!i1885[5]
  i1884.mirrorParameter = i1885[6]
  i1884.mirrorParameterActive = !!i1885[7]
  i1884.motionId = i1885[8]
  i1884.nameHash = i1885[9]
  i1884.fullPathHash = i1885[10]
  i1884.speed = i1885[11]
  i1884.speedParameter = i1885[12]
  i1884.speedParameterActive = !!i1885[13]
  i1884.tag = i1885[14]
  i1884.tagHash = i1885[15]
  i1884.writeDefaultValues = !!i1885[16]
  var i1887 = i1885[17]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 2) {
  request.r(i1887[i + 0], i1887[i + 1], 2, i1886, '')
  }
  i1884.behaviours = i1886
  var i1889 = i1885[18]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1889[i + 0]) );
  }
  i1884.transitions = i1888
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1895 = data
  i1894.fullPath = i1895[0]
  i1894.canTransitionToSelf = !!i1895[1]
  i1894.duration = i1895[2]
  i1894.exitTime = i1895[3]
  i1894.hasExitTime = !!i1895[4]
  i1894.hasFixedDuration = !!i1895[5]
  i1894.interruptionSource = i1895[6]
  i1894.offset = i1895[7]
  i1894.orderedInterruption = !!i1895[8]
  i1894.destinationStateId = i1895[9]
  i1894.isExit = !!i1895[10]
  i1894.mute = !!i1895[11]
  i1894.solo = !!i1895[12]
  var i1897 = i1895[13]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1897[i + 0]) );
  }
  i1894.conditions = i1896
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1903 = data
  i1902.destinationStateId = i1903[0]
  i1902.isExit = !!i1903[1]
  i1902.mute = !!i1903[2]
  i1902.solo = !!i1903[3]
  var i1905 = i1903[4]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1905[i + 0]) );
  }
  i1902.conditions = i1904
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1909 = data
  i1908.defaultBool = !!i1909[0]
  i1908.defaultFloat = i1909[1]
  i1908.defaultInt = i1909[2]
  i1908.name = i1909[3]
  i1908.nameHash = i1909[4]
  i1908.type = i1909[5]
  return i1908
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1910 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1911 = data
  i1910.useSafeMode = !!i1911[0]
  i1910.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1911[1], i1910.safeModeOptions)
  i1910.timeScale = i1911[2]
  i1910.unscaledTimeScale = i1911[3]
  i1910.useSmoothDeltaTime = !!i1911[4]
  i1910.maxSmoothUnscaledTime = i1911[5]
  i1910.rewindCallbackMode = i1911[6]
  i1910.showUnityEditorReport = !!i1911[7]
  i1910.logBehaviour = i1911[8]
  i1910.drawGizmos = !!i1911[9]
  i1910.defaultRecyclable = !!i1911[10]
  i1910.defaultAutoPlay = i1911[11]
  i1910.defaultUpdateType = i1911[12]
  i1910.defaultTimeScaleIndependent = !!i1911[13]
  i1910.defaultEaseType = i1911[14]
  i1910.defaultEaseOvershootOrAmplitude = i1911[15]
  i1910.defaultEasePeriod = i1911[16]
  i1910.defaultAutoKill = !!i1911[17]
  i1910.defaultLoopType = i1911[18]
  i1910.debugMode = !!i1911[19]
  i1910.debugStoreTargetId = !!i1911[20]
  i1910.showPreviewPanel = !!i1911[21]
  i1910.storeSettingsLocation = i1911[22]
  i1910.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1911[23], i1910.modules)
  i1910.createASMDEF = !!i1911[24]
  i1910.showPlayingTweens = !!i1911[25]
  i1910.showPausedTweens = !!i1911[26]
  return i1910
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1912 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1913 = data
  i1912.logBehaviour = i1913[0]
  i1912.nestedTweenFailureBehaviour = i1913[1]
  return i1912
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1914 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1915 = data
  i1914.showPanel = !!i1915[0]
  i1914.audioEnabled = !!i1915[1]
  i1914.physicsEnabled = !!i1915[2]
  i1914.physics2DEnabled = !!i1915[3]
  i1914.spriteEnabled = !!i1915[4]
  i1914.uiEnabled = !!i1915[5]
  i1914.textMeshProEnabled = !!i1915[6]
  i1914.tk2DEnabled = !!i1915[7]
  i1914.deAudioEnabled = !!i1915[8]
  i1914.deUnityExtendedEnabled = !!i1915[9]
  i1914.epoOutlineEnabled = !!i1915[10]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1917 = data
  var i1919 = i1917[0]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1919[i + 0]) );
  }
  i1916.files = i1918
  i1916.componentToPrefabIds = i1917[1]
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1923 = data
  i1922.path = i1923[0]
  request.r(i1923[1], i1923[2], 0, i1922, 'unityObject')
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1925 = data
  var i1927 = i1925[0]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1927[i + 0]) );
  }
  i1924.scriptsExecutionOrder = i1926
  var i1929 = i1925[1]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 1) {
    i1928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1929[i + 0]) );
  }
  i1924.sortingLayers = i1928
  var i1931 = i1925[2]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1931[i + 0]) );
  }
  i1924.cullingLayers = i1930
  i1924.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1925[3], i1924.timeSettings)
  i1924.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1925[4], i1924.physicsSettings)
  i1924.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1925[5], i1924.physics2DSettings)
  i1924.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1925[6], i1924.qualitySettings)
  i1924.enableRealtimeShadows = !!i1925[7]
  i1924.enableAutoInstancing = !!i1925[8]
  i1924.enableStaticBatching = !!i1925[9]
  i1924.enableDynamicBatching = !!i1925[10]
  i1924.lightmapEncodingQuality = i1925[11]
  i1924.desiredColorSpace = i1925[12]
  var i1933 = i1925[13]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( i1933[i + 0] );
  }
  i1924.allTags = i1932
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1937 = data
  i1936.name = i1937[0]
  i1936.value = i1937[1]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1941 = data
  i1940.id = i1941[0]
  i1940.name = i1941[1]
  i1940.value = i1941[2]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1945 = data
  i1944.id = i1945[0]
  i1944.name = i1945[1]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1947 = data
  i1946.fixedDeltaTime = i1947[0]
  i1946.maximumDeltaTime = i1947[1]
  i1946.timeScale = i1947[2]
  i1946.maximumParticleTimestep = i1947[3]
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1949 = data
  i1948.gravity = new pc.Vec3( i1949[0], i1949[1], i1949[2] )
  i1948.defaultSolverIterations = i1949[3]
  i1948.bounceThreshold = i1949[4]
  i1948.autoSyncTransforms = !!i1949[5]
  i1948.autoSimulation = !!i1949[6]
  var i1951 = i1949[7]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1951[i + 0]) );
  }
  i1948.collisionMatrix = i1950
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1955 = data
  i1954.enabled = !!i1955[0]
  i1954.layerId = i1955[1]
  i1954.otherLayerId = i1955[2]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1957 = data
  request.r(i1957[0], i1957[1], 0, i1956, 'material')
  i1956.gravity = new pc.Vec2( i1957[2], i1957[3] )
  i1956.positionIterations = i1957[4]
  i1956.velocityIterations = i1957[5]
  i1956.velocityThreshold = i1957[6]
  i1956.maxLinearCorrection = i1957[7]
  i1956.maxAngularCorrection = i1957[8]
  i1956.maxTranslationSpeed = i1957[9]
  i1956.maxRotationSpeed = i1957[10]
  i1956.baumgarteScale = i1957[11]
  i1956.baumgarteTOIScale = i1957[12]
  i1956.timeToSleep = i1957[13]
  i1956.linearSleepTolerance = i1957[14]
  i1956.angularSleepTolerance = i1957[15]
  i1956.defaultContactOffset = i1957[16]
  i1956.autoSimulation = !!i1957[17]
  i1956.queriesHitTriggers = !!i1957[18]
  i1956.queriesStartInColliders = !!i1957[19]
  i1956.callbacksOnDisable = !!i1957[20]
  i1956.reuseCollisionCallbacks = !!i1957[21]
  i1956.autoSyncTransforms = !!i1957[22]
  var i1959 = i1957[23]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1959[i + 0]) );
  }
  i1956.collisionMatrix = i1958
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1963 = data
  i1962.enabled = !!i1963[0]
  i1962.layerId = i1963[1]
  i1962.otherLayerId = i1963[2]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1965 = data
  var i1967 = i1965[0]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1967[i + 0]) );
  }
  i1964.qualityLevels = i1966
  var i1969 = i1965[1]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( i1969[i + 0] );
  }
  i1964.names = i1968
  i1964.shadows = i1965[2]
  i1964.anisotropicFiltering = i1965[3]
  i1964.antiAliasing = i1965[4]
  i1964.lodBias = i1965[5]
  i1964.shadowCascades = i1965[6]
  i1964.shadowDistance = i1965[7]
  i1964.shadowmaskMode = i1965[8]
  i1964.shadowProjection = i1965[9]
  i1964.shadowResolution = i1965[10]
  i1964.softParticles = !!i1965[11]
  i1964.softVegetation = !!i1965[12]
  i1964.activeColorSpace = i1965[13]
  i1964.desiredColorSpace = i1965[14]
  i1964.masterTextureLimit = i1965[15]
  i1964.maxQueuedFrames = i1965[16]
  i1964.particleRaycastBudget = i1965[17]
  i1964.pixelLightCount = i1965[18]
  i1964.realtimeReflectionProbes = !!i1965[19]
  i1964.shadowCascade2Split = i1965[20]
  i1964.shadowCascade4Split = new pc.Vec3( i1965[21], i1965[22], i1965[23] )
  i1964.streamingMipmapsActive = !!i1965[24]
  i1964.vSyncCount = i1965[25]
  i1964.asyncUploadBufferSize = i1965[26]
  i1964.asyncUploadTimeSlice = i1965[27]
  i1964.billboardsFaceCameraPosition = !!i1965[28]
  i1964.shadowNearPlaneOffset = i1965[29]
  i1964.streamingMipmapsMemoryBudget = i1965[30]
  i1964.maximumLODLevel = i1965[31]
  i1964.streamingMipmapsAddAllCameras = !!i1965[32]
  i1964.streamingMipmapsMaxLevelReduction = i1965[33]
  i1964.streamingMipmapsRenderersPerFrame = i1965[34]
  i1964.resolutionScalingFixedDPIFactor = i1965[35]
  i1964.streamingMipmapsMaxFileIORequests = i1965[36]
  i1964.currentQualityLevel = i1965[37]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1975 = data
  i1974.mode = i1975[0]
  i1974.parameter = i1975[1]
  i1974.threshold = i1975[2]
  return i1974
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[4],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[44],"65":[44],"66":[44],"67":[44],"68":[44],"69":[44],"70":[44],"71":[44],"72":[44],"73":[44],"74":[44],"75":[44],"76":[44],"77":[4],"78":[79],"80":[81],"82":[81],"9":[8],"83":[8],"84":[85],"86":[87],"88":[4],"89":[8],"90":[79,8],"91":[8,15],"92":[8],"93":[15,8],"94":[79],"95":[15,8],"96":[8],"97":[4],"98":[4],"99":[100],"101":[85],"102":[20],"103":[8],"104":[8],"12":[9],"16":[15,8],"105":[8],"11":[9],"106":[8],"107":[8],"108":[8],"109":[8],"110":[8],"111":[8],"112":[8],"113":[8],"114":[8],"115":[15,8],"116":[8],"117":[8],"118":[8],"119":[8],"120":[15,8],"121":[8],"122":[18],"123":[18],"19":[18],"124":[18],"32":[4],"125":[4],"126":[85]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","LTPHUONG.GameState","LTPHUONG.ClickController","UnityEngine.Camera","LTPHUONG.AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","LTPHUONG.UIButtonPulse","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.Material","LTPHUONG.TutorialHand","LTPHUONG.KitchenTutorialManager","LTPHUONG.SinkDrainCap","LTPHUONG.SinkValve","LTPHUONG.SinkVegetable","LTPHUONG.CuttingFood","LTPHUONG.KnifeTool","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.AudioListener","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.BoxCollider2D","UnityEngine.PolygonCollider2D","UnityEngine.EventSystems.EventTrigger","UnityEngine.Object","UnityEngine.CircleCollider2D","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","LTPHUONG.SinkSystem","UnityEngine.GameObject","UnityEngine.Rigidbody2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "ply";

Deserializers.lunaInitializationTime = "03/26/2026 02:25:17";

Deserializers.lunaDaysRunning = "57.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "122";

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

Deserializers.buildID = "f9904b36-c765-4241-9fd0-86e8716f850a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

