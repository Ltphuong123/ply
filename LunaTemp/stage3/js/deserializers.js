var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1440 = root || request.c( 'UnityEngine.JointSpring' )
  var i1441 = data
  i1440.spring = i1441[0]
  i1440.damper = i1441[1]
  i1440.targetPosition = i1441[2]
  return i1440
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1442 = root || request.c( 'UnityEngine.JointMotor' )
  var i1443 = data
  i1442.m_TargetVelocity = i1443[0]
  i1442.m_Force = i1443[1]
  i1442.m_FreeSpin = i1443[2]
  return i1442
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1444 = root || request.c( 'UnityEngine.JointLimits' )
  var i1445 = data
  i1444.m_Min = i1445[0]
  i1444.m_Max = i1445[1]
  i1444.m_Bounciness = i1445[2]
  i1444.m_BounceMinVelocity = i1445[3]
  i1444.m_ContactDistance = i1445[4]
  i1444.minBounce = i1445[5]
  i1444.maxBounce = i1445[6]
  return i1444
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.JointDrive' )
  var i1447 = data
  i1446.m_PositionSpring = i1447[0]
  i1446.m_PositionDamper = i1447[1]
  i1446.m_MaximumForce = i1447[2]
  i1446.m_UseAcceleration = i1447[3]
  return i1446
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1448 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1449 = data
  i1448.m_Spring = i1449[0]
  i1448.m_Damper = i1449[1]
  return i1448
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1450 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1451 = data
  i1450.m_Limit = i1451[0]
  i1450.m_Bounciness = i1451[1]
  i1450.m_ContactDistance = i1451[2]
  return i1450
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1452 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1453 = data
  i1452.m_ExtremumSlip = i1453[0]
  i1452.m_ExtremumValue = i1453[1]
  i1452.m_AsymptoteSlip = i1453[2]
  i1452.m_AsymptoteValue = i1453[3]
  i1452.m_Stiffness = i1453[4]
  return i1452
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1455 = data
  i1454.m_LowerAngle = i1455[0]
  i1454.m_UpperAngle = i1455[1]
  return i1454
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1456 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1457 = data
  i1456.m_MotorSpeed = i1457[0]
  i1456.m_MaximumMotorTorque = i1457[1]
  return i1456
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1458 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1459 = data
  i1458.m_DampingRatio = i1459[0]
  i1458.m_Frequency = i1459[1]
  i1458.m_Angle = i1459[2]
  return i1458
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1460 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1461 = data
  i1460.m_LowerTranslation = i1461[0]
  i1460.m_UpperTranslation = i1461[1]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1462 = root || new pc.UnityMaterial()
  var i1463 = data
  i1462.name = i1463[0]
  request.r(i1463[1], i1463[2], 0, i1462, 'shader')
  i1462.renderQueue = i1463[3]
  i1462.enableInstancing = !!i1463[4]
  var i1465 = i1463[5]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1465[i + 0]) );
  }
  i1462.floatParameters = i1464
  var i1467 = i1463[6]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1467[i + 0]) );
  }
  i1462.colorParameters = i1466
  var i1469 = i1463[7]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1469[i + 0]) );
  }
  i1462.vectorParameters = i1468
  var i1471 = i1463[8]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1471[i + 0]) );
  }
  i1462.textureParameters = i1470
  var i1473 = i1463[9]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1473[i + 0]) );
  }
  i1462.materialFlags = i1472
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1477 = data
  i1476.name = i1477[0]
  i1476.value = i1477[1]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1481 = data
  i1480.name = i1481[0]
  i1480.value = new pc.Color(i1481[1], i1481[2], i1481[3], i1481[4])
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1485 = data
  i1484.name = i1485[0]
  i1484.value = new pc.Vec4( i1485[1], i1485[2], i1485[3], i1485[4] )
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1489 = data
  i1488.name = i1489[0]
  request.r(i1489[1], i1489[2], 0, i1488, 'value')
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1493 = data
  i1492.name = i1493[0]
  i1492.enabled = !!i1493[1]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1495 = data
  i1494.name = i1495[0]
  i1494.width = i1495[1]
  i1494.height = i1495[2]
  i1494.mipmapCount = i1495[3]
  i1494.anisoLevel = i1495[4]
  i1494.filterMode = i1495[5]
  i1494.hdr = !!i1495[6]
  i1494.format = i1495[7]
  i1494.wrapMode = i1495[8]
  i1494.alphaIsTransparency = !!i1495[9]
  i1494.alphaSource = i1495[10]
  i1494.graphicsFormat = i1495[11]
  i1494.sRGBTexture = !!i1495[12]
  i1494.desiredColorSpace = i1495[13]
  i1494.wrapU = i1495[14]
  i1494.wrapV = i1495[15]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1497 = data
  i1496.name = i1497[0]
  i1496.index = i1497[1]
  i1496.startup = !!i1497[2]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1499 = data
  i1498.aspect = i1499[0]
  i1498.orthographic = !!i1499[1]
  i1498.orthographicSize = i1499[2]
  i1498.backgroundColor = new pc.Color(i1499[3], i1499[4], i1499[5], i1499[6])
  i1498.nearClipPlane = i1499[7]
  i1498.farClipPlane = i1499[8]
  i1498.fieldOfView = i1499[9]
  i1498.depth = i1499[10]
  i1498.clearFlags = i1499[11]
  i1498.cullingMask = i1499[12]
  i1498.rect = i1499[13]
  request.r(i1499[14], i1499[15], 0, i1498, 'targetTexture')
  i1498.usePhysicalProperties = !!i1499[16]
  i1498.focalLength = i1499[17]
  i1498.sensorSize = new pc.Vec2( i1499[18], i1499[19] )
  i1498.lensShift = new pc.Vec2( i1499[20], i1499[21] )
  i1498.gateFit = i1499[22]
  i1498.commandBufferCount = i1499[23]
  i1498.cameraType = i1499[24]
  i1498.enabled = !!i1499[25]
  return i1498
}

Deserializers["UnityEngine.EventSystems.Physics2DRaycaster"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.EventSystems.Physics2DRaycaster' )
  var i1501 = data
  i1500.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i1501[0] )
  i1500.m_MaxRayIntersections = i1501[1]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1503 = data
  i1502.name = i1503[0]
  i1502.tagId = i1503[1]
  i1502.enabled = !!i1503[2]
  i1502.isStatic = !!i1503[3]
  i1502.layer = i1503[4]
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1505 = data
  i1504.color = new pc.Color(i1505[0], i1505[1], i1505[2], i1505[3])
  request.r(i1505[4], i1505[5], 0, i1504, 'sprite')
  i1504.flipX = !!i1505[6]
  i1504.flipY = !!i1505[7]
  i1504.drawMode = i1505[8]
  i1504.size = new pc.Vec2( i1505[9], i1505[10] )
  i1504.tileMode = i1505[11]
  i1504.adaptiveModeThreshold = i1505[12]
  i1504.maskInteraction = i1505[13]
  i1504.spriteSortPoint = i1505[14]
  i1504.enabled = !!i1505[15]
  request.r(i1505[16], i1505[17], 0, i1504, 'sharedMaterial')
  var i1507 = i1505[18]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 2) {
  request.r(i1507[i + 0], i1507[i + 1], 2, i1506, '')
  }
  i1504.sharedMaterials = i1506
  i1504.receiveShadows = !!i1505[19]
  i1504.shadowCastingMode = i1505[20]
  i1504.sortingLayerID = i1505[21]
  i1504.sortingOrder = i1505[22]
  i1504.lightmapIndex = i1505[23]
  i1504.lightmapSceneIndex = i1505[24]
  i1504.lightmapScaleOffset = new pc.Vec4( i1505[25], i1505[26], i1505[27], i1505[28] )
  i1504.lightProbeUsage = i1505[29]
  i1504.reflectionProbeUsage = i1505[30]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1511 = data
  request.r(i1511[0], i1511[1], 0, i1510, 'animatorController')
  request.r(i1511[2], i1511[3], 0, i1510, 'avatar')
  i1510.updateMode = i1511[4]
  i1510.hasTransformHierarchy = !!i1511[5]
  i1510.applyRootMotion = !!i1511[6]
  var i1513 = i1511[7]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 2) {
  request.r(i1513[i + 0], i1513[i + 1], 2, i1512, '')
  }
  i1510.humanBones = i1512
  i1510.enabled = !!i1511[8]
  return i1510
}

Deserializers["LTPHUONG.FadeSprite"] = function (request, data, root) {
  var i1516 = root || request.c( 'LTPHUONG.FadeSprite' )
  var i1517 = data
  request.r(i1517[0], i1517[1], 0, i1516, 'spriteRenderer')
  i1516.fadeDuration = i1517[2]
  i1516.targetAlpha = i1517[3]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1519 = data
  i1518.usedByComposite = !!i1519[0]
  i1518.autoTiling = !!i1519[1]
  i1518.size = new pc.Vec2( i1519[2], i1519[3] )
  i1518.edgeRadius = i1519[4]
  i1518.enabled = !!i1519[5]
  i1518.isTrigger = !!i1519[6]
  i1518.usedByEffector = !!i1519[7]
  i1518.density = i1519[8]
  i1518.offset = new pc.Vec2( i1519[9], i1519[10] )
  request.r(i1519[11], i1519[12], 0, i1518, 'material')
  return i1518
}

Deserializers["LTPHUONG.ClickMoveToPoint"] = function (request, data, root) {
  var i1520 = root || request.c( 'LTPHUONG.ClickMoveToPoint' )
  var i1521 = data
  request.r(i1521[0], i1521[1], 0, i1520, 'targetPoint')
  request.r(i1521[2], i1521[3], 0, i1520, 'moveSfx')
  i1520.useSquashStretch = !!i1521[4]
  i1520.squashDelay = i1521[5]
  i1520.squashDuration = i1521[6]
  i1520.squashIntensity = i1521[7]
  i1520.moveBackDelay = i1521[8]
  i1520.onStartMoving = request.d('UnityEngine.Events.UnityEvent', i1521[9], i1520.onStartMoving)
  i1520.onCompleted = request.d('UnityEngine.Events.UnityEvent', i1521[10], i1520.onCompleted)
  i1520.onMoveBackCompleted = request.d('UnityEngine.Events.UnityEvent', i1521[11], i1520.onMoveBackCompleted)
  var i1523 = i1521[12]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 2) {
  request.r(i1523[i + 0], i1523[i + 1], 2, i1522, '')
  }
  i1520.spriteRenderers = i1522
  i1520.clickOrder = i1521[13]
  i1520.isBlocked = !!i1521[14]
  return i1520
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1525 = data
  i1524.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1525[0], i1524.m_PersistentCalls)
  return i1524
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1526 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1527 = data
  var i1529 = i1527[0]
  var i1528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.add(request.d('UnityEngine.Events.PersistentCall', i1529[i + 0]));
  }
  i1526.m_Calls = i1528
  return i1526
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1532 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1533 = data
  request.r(i1533[0], i1533[1], 0, i1532, 'm_Target')
  i1532.m_TargetAssemblyTypeName = i1533[2]
  i1532.m_MethodName = i1533[3]
  i1532.m_Mode = i1533[4]
  i1532.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1533[5], i1532.m_Arguments)
  i1532.m_CallState = i1533[6]
  return i1532
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1535 = data
  request.r(i1535[0], i1535[1], 0, i1534, 'm_ObjectArgument')
  i1534.m_ObjectArgumentAssemblyTypeName = i1535[2]
  i1534.m_IntArgument = i1535[3]
  i1534.m_FloatArgument = i1535[4]
  i1534.m_StringArgument = i1535[5]
  i1534.m_BoolArgument = !!i1535[6]
  return i1534
}

Deserializers["LTPHUONG.SquashStretchEffect"] = function (request, data, root) {
  var i1538 = root || request.c( 'LTPHUONG.SquashStretchEffect' )
  var i1539 = data
  i1538.delay = i1539[0]
  i1538.duration = i1539[1]
  i1538.intensity = i1539[2]
  request.r(i1539[3], i1539[4], 0, i1538, 'sfx')
  request.r(i1539[5], i1539[6], 0, i1538, 'vfx')
  return i1538
}

Deserializers["LTPHUONG.RevealImage"] = function (request, data, root) {
  var i1540 = root || request.c( 'LTPHUONG.RevealImage' )
  var i1541 = data
  i1540.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1541[0], i1540.OnComplete)
  request.r(i1541[1], i1541[2], 0, i1540, 'spriteRenderer')
  request.r(i1541[3], i1541[4], 0, i1540, 'revealMaterial')
  i1540.textureSize = i1541[5]
  i1540.brushRadius = i1541[6]
  i1540.threshold = i1541[7]
  i1540.eraseMode = !!i1541[8]
  i1540.paintEnabled = !!i1541[9]
  request.r(i1541[10], i1541[11], 0, i1540, 'completeSfx')
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1543 = data
  request.r(i1543[0], i1543[1], 0, i1542, 'clip')
  request.r(i1543[2], i1543[3], 0, i1542, 'outputAudioMixerGroup')
  i1542.playOnAwake = !!i1543[4]
  i1542.loop = !!i1543[5]
  i1542.time = i1543[6]
  i1542.volume = i1543[7]
  i1542.pitch = i1543[8]
  i1542.enabled = !!i1543[9]
  return i1542
}

Deserializers["Satisgame.EmojiControl"] = function (request, data, root) {
  var i1544 = root || request.c( 'Satisgame.EmojiControl' )
  var i1545 = data
  request.r(i1545[0], i1545[1], 0, i1544, 'spriteAnimator')
  request.r(i1545[2], i1545[3], 0, i1544, 'scaleTransform')
  i1544.durationShow = i1545[4]
  i1544.durationHold = i1545[5]
  i1544.durationHide = i1545[6]
  request.r(i1545[7], i1545[8], 0, i1544, 'audioSource')
  request.r(i1545[9], i1545[10], 0, i1544, 'sfxPositive')
  request.r(i1545[11], i1545[12], 0, i1544, 'sfxNegative')
  return i1544
}

Deserializers["LTPHUONG.CounterEvent"] = function (request, data, root) {
  var i1546 = root || request.c( 'LTPHUONG.CounterEvent' )
  var i1547 = data
  i1546.OnTargetReached = request.d('UnityEngine.Events.UnityEvent', i1547[0], i1546.OnTargetReached)
  i1546.targetCount = i1547[1]
  i1546.delay = i1547[2]
  request.r(i1547[3], i1547[4], 0, i1546, 'sfx')
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1549 = data
  i1548.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1549[0], i1548.main)
  i1548.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1549[1], i1548.colorBySpeed)
  i1548.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1549[2], i1548.colorOverLifetime)
  i1548.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1549[3], i1548.emission)
  i1548.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1549[4], i1548.rotationBySpeed)
  i1548.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1549[5], i1548.rotationOverLifetime)
  i1548.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1549[6], i1548.shape)
  i1548.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1549[7], i1548.sizeBySpeed)
  i1548.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1549[8], i1548.sizeOverLifetime)
  i1548.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1549[9], i1548.textureSheetAnimation)
  i1548.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1549[10], i1548.velocityOverLifetime)
  i1548.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1549[11], i1548.noise)
  i1548.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1549[12], i1548.inheritVelocity)
  i1548.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1549[13], i1548.forceOverLifetime)
  i1548.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1549[14], i1548.limitVelocityOverLifetime)
  i1548.useAutoRandomSeed = !!i1549[15]
  i1548.randomSeed = i1549[16]
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1550 = root || new pc.ParticleSystemMain()
  var i1551 = data
  i1550.duration = i1551[0]
  i1550.loop = !!i1551[1]
  i1550.prewarm = !!i1551[2]
  i1550.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[3], i1550.startDelay)
  i1550.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[4], i1550.startLifetime)
  i1550.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[5], i1550.startSpeed)
  i1550.startSize3D = !!i1551[6]
  i1550.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[7], i1550.startSizeX)
  i1550.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[8], i1550.startSizeY)
  i1550.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[9], i1550.startSizeZ)
  i1550.startRotation3D = !!i1551[10]
  i1550.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[11], i1550.startRotationX)
  i1550.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[12], i1550.startRotationY)
  i1550.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[13], i1550.startRotationZ)
  i1550.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1551[14], i1550.startColor)
  i1550.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1551[15], i1550.gravityModifier)
  i1550.simulationSpace = i1551[16]
  request.r(i1551[17], i1551[18], 0, i1550, 'customSimulationSpace')
  i1550.simulationSpeed = i1551[19]
  i1550.useUnscaledTime = !!i1551[20]
  i1550.scalingMode = i1551[21]
  i1550.playOnAwake = !!i1551[22]
  i1550.maxParticles = i1551[23]
  i1550.emitterVelocityMode = i1551[24]
  i1550.stopAction = i1551[25]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1552 = root || new pc.MinMaxCurve()
  var i1553 = data
  i1552.mode = i1553[0]
  i1552.curveMin = new pc.AnimationCurve( { keys_flow: i1553[1] } )
  i1552.curveMax = new pc.AnimationCurve( { keys_flow: i1553[2] } )
  i1552.curveMultiplier = i1553[3]
  i1552.constantMin = i1553[4]
  i1552.constantMax = i1553[5]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1554 = root || new pc.MinMaxGradient()
  var i1555 = data
  i1554.mode = i1555[0]
  i1554.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1555[1], i1554.gradientMin)
  i1554.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1555[2], i1554.gradientMax)
  i1554.colorMin = new pc.Color(i1555[3], i1555[4], i1555[5], i1555[6])
  i1554.colorMax = new pc.Color(i1555[7], i1555[8], i1555[9], i1555[10])
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1557 = data
  i1556.mode = i1557[0]
  var i1559 = i1557[1]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1559[i + 0]) );
  }
  i1556.colorKeys = i1558
  var i1561 = i1557[2]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1561[i + 0]) );
  }
  i1556.alphaKeys = i1560
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1562 = root || new pc.ParticleSystemColorBySpeed()
  var i1563 = data
  i1562.enabled = !!i1563[0]
  i1562.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1563[1], i1562.color)
  i1562.range = new pc.Vec2( i1563[2], i1563[3] )
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1567 = data
  i1566.color = new pc.Color(i1567[0], i1567[1], i1567[2], i1567[3])
  i1566.time = i1567[4]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1571 = data
  i1570.alpha = i1571[0]
  i1570.time = i1571[1]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1572 = root || new pc.ParticleSystemColorOverLifetime()
  var i1573 = data
  i1572.enabled = !!i1573[0]
  i1572.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1573[1], i1572.color)
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1574 = root || new pc.ParticleSystemEmitter()
  var i1575 = data
  i1574.enabled = !!i1575[0]
  i1574.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[1], i1574.rateOverTime)
  i1574.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[2], i1574.rateOverDistance)
  var i1577 = i1575[3]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1577[i + 0]) );
  }
  i1574.bursts = i1576
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1580 = root || new pc.ParticleSystemBurst()
  var i1581 = data
  i1580.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[0], i1580.count)
  i1580.cycleCount = i1581[1]
  i1580.minCount = i1581[2]
  i1580.maxCount = i1581[3]
  i1580.repeatInterval = i1581[4]
  i1580.time = i1581[5]
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1582 = root || new pc.ParticleSystemRotationBySpeed()
  var i1583 = data
  i1582.enabled = !!i1583[0]
  i1582.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[1], i1582.x)
  i1582.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[2], i1582.y)
  i1582.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[3], i1582.z)
  i1582.separateAxes = !!i1583[4]
  i1582.range = new pc.Vec2( i1583[5], i1583[6] )
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1584 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1585 = data
  i1584.enabled = !!i1585[0]
  i1584.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[1], i1584.x)
  i1584.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[2], i1584.y)
  i1584.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[3], i1584.z)
  i1584.separateAxes = !!i1585[4]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1586 = root || new pc.ParticleSystemShape()
  var i1587 = data
  i1586.enabled = !!i1587[0]
  i1586.shapeType = i1587[1]
  i1586.randomDirectionAmount = i1587[2]
  i1586.sphericalDirectionAmount = i1587[3]
  i1586.randomPositionAmount = i1587[4]
  i1586.alignToDirection = !!i1587[5]
  i1586.radius = i1587[6]
  i1586.radiusMode = i1587[7]
  i1586.radiusSpread = i1587[8]
  i1586.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[9], i1586.radiusSpeed)
  i1586.radiusThickness = i1587[10]
  i1586.angle = i1587[11]
  i1586.length = i1587[12]
  i1586.boxThickness = new pc.Vec3( i1587[13], i1587[14], i1587[15] )
  i1586.meshShapeType = i1587[16]
  request.r(i1587[17], i1587[18], 0, i1586, 'mesh')
  request.r(i1587[19], i1587[20], 0, i1586, 'meshRenderer')
  request.r(i1587[21], i1587[22], 0, i1586, 'skinnedMeshRenderer')
  i1586.useMeshMaterialIndex = !!i1587[23]
  i1586.meshMaterialIndex = i1587[24]
  i1586.useMeshColors = !!i1587[25]
  i1586.normalOffset = i1587[26]
  i1586.arc = i1587[27]
  i1586.arcMode = i1587[28]
  i1586.arcSpread = i1587[29]
  i1586.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[30], i1586.arcSpeed)
  i1586.donutRadius = i1587[31]
  i1586.position = new pc.Vec3( i1587[32], i1587[33], i1587[34] )
  i1586.rotation = new pc.Vec3( i1587[35], i1587[36], i1587[37] )
  i1586.scale = new pc.Vec3( i1587[38], i1587[39], i1587[40] )
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1588 = root || new pc.ParticleSystemSizeBySpeed()
  var i1589 = data
  i1588.enabled = !!i1589[0]
  i1588.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[1], i1588.x)
  i1588.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[2], i1588.y)
  i1588.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[3], i1588.z)
  i1588.separateAxes = !!i1589[4]
  i1588.range = new pc.Vec2( i1589[5], i1589[6] )
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1590 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1591 = data
  i1590.enabled = !!i1591[0]
  i1590.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[1], i1590.x)
  i1590.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[2], i1590.y)
  i1590.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[3], i1590.z)
  i1590.separateAxes = !!i1591[4]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1592 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1593 = data
  i1592.enabled = !!i1593[0]
  i1592.mode = i1593[1]
  i1592.animation = i1593[2]
  i1592.numTilesX = i1593[3]
  i1592.numTilesY = i1593[4]
  i1592.useRandomRow = !!i1593[5]
  i1592.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[6], i1592.frameOverTime)
  i1592.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[7], i1592.startFrame)
  i1592.cycleCount = i1593[8]
  i1592.rowIndex = i1593[9]
  i1592.flipU = i1593[10]
  i1592.flipV = i1593[11]
  i1592.spriteCount = i1593[12]
  var i1595 = i1593[13]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 2) {
  request.r(i1595[i + 0], i1595[i + 1], 2, i1594, '')
  }
  i1592.sprites = i1594
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1598 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1599 = data
  i1598.enabled = !!i1599[0]
  i1598.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[1], i1598.x)
  i1598.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[2], i1598.y)
  i1598.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[3], i1598.z)
  i1598.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[4], i1598.radial)
  i1598.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[5], i1598.speedModifier)
  i1598.space = i1599[6]
  i1598.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[7], i1598.orbitalX)
  i1598.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[8], i1598.orbitalY)
  i1598.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[9], i1598.orbitalZ)
  i1598.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[10], i1598.orbitalOffsetX)
  i1598.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[11], i1598.orbitalOffsetY)
  i1598.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[12], i1598.orbitalOffsetZ)
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1600 = root || new pc.ParticleSystemNoise()
  var i1601 = data
  i1600.enabled = !!i1601[0]
  i1600.separateAxes = !!i1601[1]
  i1600.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[2], i1600.strengthX)
  i1600.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[3], i1600.strengthY)
  i1600.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[4], i1600.strengthZ)
  i1600.frequency = i1601[5]
  i1600.damping = !!i1601[6]
  i1600.octaveCount = i1601[7]
  i1600.octaveMultiplier = i1601[8]
  i1600.octaveScale = i1601[9]
  i1600.quality = i1601[10]
  i1600.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[11], i1600.scrollSpeed)
  i1600.scrollSpeedMultiplier = i1601[12]
  i1600.remapEnabled = !!i1601[13]
  i1600.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[14], i1600.remapX)
  i1600.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[15], i1600.remapY)
  i1600.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[16], i1600.remapZ)
  i1600.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[17], i1600.positionAmount)
  i1600.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[18], i1600.rotationAmount)
  i1600.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[19], i1600.sizeAmount)
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1602 = root || new pc.ParticleSystemInheritVelocity()
  var i1603 = data
  i1602.enabled = !!i1603[0]
  i1602.mode = i1603[1]
  i1602.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1603[2], i1602.curve)
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1604 = root || new pc.ParticleSystemForceOverLifetime()
  var i1605 = data
  i1604.enabled = !!i1605[0]
  i1604.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1605[1], i1604.x)
  i1604.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1605[2], i1604.y)
  i1604.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1605[3], i1604.z)
  i1604.space = i1605[4]
  i1604.randomized = !!i1605[5]
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1606 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1607 = data
  i1606.enabled = !!i1607[0]
  i1606.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1607[1], i1606.limit)
  i1606.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1607[2], i1606.limitX)
  i1606.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1607[3], i1606.limitY)
  i1606.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1607[4], i1606.limitZ)
  i1606.dampen = i1607[5]
  i1606.separateAxes = !!i1607[6]
  i1606.space = i1607[7]
  i1606.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1607[8], i1606.drag)
  i1606.multiplyDragByParticleSize = !!i1607[9]
  i1606.multiplyDragByParticleVelocity = !!i1607[10]
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1609 = data
  request.r(i1609[0], i1609[1], 0, i1608, 'mesh')
  i1608.meshCount = i1609[2]
  i1608.activeVertexStreamsCount = i1609[3]
  i1608.alignment = i1609[4]
  i1608.renderMode = i1609[5]
  i1608.sortMode = i1609[6]
  i1608.lengthScale = i1609[7]
  i1608.velocityScale = i1609[8]
  i1608.cameraVelocityScale = i1609[9]
  i1608.normalDirection = i1609[10]
  i1608.sortingFudge = i1609[11]
  i1608.minParticleSize = i1609[12]
  i1608.maxParticleSize = i1609[13]
  i1608.pivot = new pc.Vec3( i1609[14], i1609[15], i1609[16] )
  request.r(i1609[17], i1609[18], 0, i1608, 'trailMaterial')
  i1608.applyActiveColorSpace = !!i1609[19]
  i1608.enabled = !!i1609[20]
  request.r(i1609[21], i1609[22], 0, i1608, 'sharedMaterial')
  var i1611 = i1609[23]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 2) {
  request.r(i1611[i + 0], i1611[i + 1], 2, i1610, '')
  }
  i1608.sharedMaterials = i1610
  i1608.receiveShadows = !!i1609[24]
  i1608.shadowCastingMode = i1609[25]
  i1608.sortingLayerID = i1609[26]
  i1608.sortingOrder = i1609[27]
  i1608.lightmapIndex = i1609[28]
  i1608.lightmapSceneIndex = i1609[29]
  i1608.lightmapScaleOffset = new pc.Vec4( i1609[30], i1609[31], i1609[32], i1609[33] )
  i1608.lightProbeUsage = i1609[34]
  i1608.reflectionProbeUsage = i1609[35]
  return i1608
}

Deserializers["LTPHUONG.RevealPen"] = function (request, data, root) {
  var i1612 = root || request.c( 'LTPHUONG.RevealPen' )
  var i1613 = data
  request.r(i1613[0], i1613[1], 0, i1612, 'penTip')
  var i1615 = i1613[2]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 2) {
  request.r(i1615[i + 0], i1615[i + 1], 2, i1614, '')
  }
  i1612.revealImages = i1614
  i1612.paintInterval = i1613[3]
  i1612.onDragStarted = request.d('UnityEngine.Events.UnityEvent', i1613[4], i1612.onDragStarted)
  i1612.onDragReleased = request.d('UnityEngine.Events.UnityEvent', i1613[5], i1612.onDragReleased)
  var i1617 = i1613[6]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 2) {
  request.r(i1617[i + 0], i1617[i + 1], 2, i1616, '')
  }
  i1612.spriteRenderers = i1616
  i1612.clickOrder = i1613[7]
  i1612.isBlocked = !!i1613[8]
  request.r(i1613[9], i1613[10], 0, i1612, 'inPoint')
  request.r(i1613[11], i1613[12], 0, i1612, 'outPoint')
  i1612.autoReturnToPoint = !!i1613[13]
  i1612.dragOffsetY = i1613[14]
  i1612.dragRotationAngle = i1613[15]
  i1612.minY = i1613[16]
  i1612.maxY = i1613[17]
  return i1612
}

Deserializers["LTPHUONG.DragSpeedSound"] = function (request, data, root) {
  var i1620 = root || request.c( 'LTPHUONG.DragSpeedSound' )
  var i1621 = data
  var i1623 = i1621[0]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 2) {
  request.r(i1623[i + 0], i1623[i + 1], 2, i1622, '')
  }
  i1620.targetZones = i1622
  request.r(i1621[1], i1621[2], 0, i1620, 'audioSource')
  request.r(i1621[3], i1621[4], 0, i1620, 'particleObject')
  i1620.volume = i1621[5]
  return i1620
}

Deserializers["LTPHUONG.ToolBaseGroup"] = function (request, data, root) {
  var i1626 = root || request.c( 'LTPHUONG.ToolBaseGroup' )
  var i1627 = data
  var i1629 = i1627[0]
  var i1628 = new (System.Collections.Generic.List$1(Bridge.ns('LTPHUONG.ToolBase')))
  for(var i = 0; i < i1629.length; i += 2) {
  request.r(i1629[i + 0], i1629[i + 1], 1, i1628, '')
  }
  i1626.tools = i1628
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1633 = data
  i1632.usedByComposite = !!i1633[0]
  i1632.autoTiling = !!i1633[1]
  var i1635 = i1633[2]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 1) {
  var i1637 = i1635[i + 0]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 2) {
    i1636.push( new pc.Vec2( i1637[i + 0], i1637[i + 1] ) );
  }
    i1634.push( i1636 );
  }
  i1632.points = i1634
  i1632.enabled = !!i1633[3]
  i1632.isTrigger = !!i1633[4]
  i1632.usedByEffector = !!i1633[5]
  i1632.density = i1633[6]
  i1632.offset = new pc.Vec2( i1633[7], i1633[8] )
  request.r(i1633[9], i1633[10], 0, i1632, 'material')
  return i1632
}

Deserializers["LTPHUONG.GameState"] = function (request, data, root) {
  var i1644 = root || request.c( 'LTPHUONG.GameState' )
  var i1645 = data
  return i1644
}

Deserializers["LTPHUONG.ClickController"] = function (request, data, root) {
  var i1646 = root || request.c( 'LTPHUONG.ClickController' )
  var i1647 = data
  request.r(i1647[0], i1647[1], 0, i1646, 'mainCamera')
  return i1646
}

Deserializers["LTPHUONG.AudioManager"] = function (request, data, root) {
  var i1648 = root || request.c( 'LTPHUONG.AudioManager' )
  var i1649 = data
  request.r(i1649[0], i1649[1], 0, i1648, 'sfxAudioSource')
  request.r(i1649[2], i1649[3], 0, i1648, 'bgmAudioSource')
  request.r(i1649[4], i1649[5], 0, i1648, 'bgmClip')
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1651 = data
  i1650.pivot = new pc.Vec2( i1651[0], i1651[1] )
  i1650.anchorMin = new pc.Vec2( i1651[2], i1651[3] )
  i1650.anchorMax = new pc.Vec2( i1651[4], i1651[5] )
  i1650.sizeDelta = new pc.Vec2( i1651[6], i1651[7] )
  i1650.anchoredPosition3D = new pc.Vec3( i1651[8], i1651[9], i1651[10] )
  i1650.rotation = new pc.Quat(i1651[11], i1651[12], i1651[13], i1651[14])
  i1650.scale = new pc.Vec3( i1651[15], i1651[16], i1651[17] )
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1653 = data
  i1652.planeDistance = i1653[0]
  i1652.referencePixelsPerUnit = i1653[1]
  i1652.isFallbackOverlay = !!i1653[2]
  i1652.renderMode = i1653[3]
  i1652.renderOrder = i1653[4]
  i1652.sortingLayerName = i1653[5]
  i1652.sortingOrder = i1653[6]
  i1652.scaleFactor = i1653[7]
  request.r(i1653[8], i1653[9], 0, i1652, 'worldCamera')
  i1652.overrideSorting = !!i1653[10]
  i1652.pixelPerfect = !!i1653[11]
  i1652.targetDisplay = i1653[12]
  i1652.overridePixelPerfect = !!i1653[13]
  i1652.enabled = !!i1653[14]
  return i1652
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1655 = data
  i1654.m_UiScaleMode = i1655[0]
  i1654.m_ReferencePixelsPerUnit = i1655[1]
  i1654.m_ScaleFactor = i1655[2]
  i1654.m_ReferenceResolution = new pc.Vec2( i1655[3], i1655[4] )
  i1654.m_ScreenMatchMode = i1655[5]
  i1654.m_MatchWidthOrHeight = i1655[6]
  i1654.m_PhysicalUnit = i1655[7]
  i1654.m_FallbackScreenDPI = i1655[8]
  i1654.m_DefaultSpriteDPI = i1655[9]
  i1654.m_DynamicPixelsPerUnit = i1655[10]
  i1654.m_PresetInfoIsWorld = !!i1655[11]
  return i1654
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1657 = data
  i1656.m_IgnoreReversedGraphics = !!i1657[0]
  i1656.m_BlockingObjects = i1657[1]
  i1656.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1657[2] )
  return i1656
}

Deserializers["LTPHUONG.UIButtonPulse"] = function (request, data, root) {
  var i1658 = root || request.c( 'LTPHUONG.UIButtonPulse' )
  var i1659 = data
  request.r(i1659[0], i1659[1], 0, i1658, 'button')
  request.r(i1659[2], i1659[3], 0, i1658, 'imageRect')
  i1658.scaleMin = i1659[4]
  i1658.scaleMax = i1659[5]
  i1658.pulseDuration = i1659[6]
  i1658.landscapeImagePos = new pc.Vec2( i1659[7], i1659[8] )
  i1658.landscapeButtonPos = new pc.Vec2( i1659[9], i1659[10] )
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1661 = data
  i1660.cullTransparentMesh = !!i1661[0]
  return i1660
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.UI.Image' )
  var i1663 = data
  request.r(i1663[0], i1663[1], 0, i1662, 'm_Sprite')
  i1662.m_Type = i1663[2]
  i1662.m_PreserveAspect = !!i1663[3]
  i1662.m_FillCenter = !!i1663[4]
  i1662.m_FillMethod = i1663[5]
  i1662.m_FillAmount = i1663[6]
  i1662.m_FillClockwise = !!i1663[7]
  i1662.m_FillOrigin = i1663[8]
  i1662.m_UseSpriteMesh = !!i1663[9]
  i1662.m_PixelsPerUnitMultiplier = i1663[10]
  request.r(i1663[11], i1663[12], 0, i1662, 'm_Material')
  i1662.m_Maskable = !!i1663[13]
  i1662.m_Color = new pc.Color(i1663[14], i1663[15], i1663[16], i1663[17])
  i1662.m_RaycastTarget = !!i1663[18]
  i1662.m_RaycastPadding = new pc.Vec4( i1663[19], i1663[20], i1663[21], i1663[22] )
  return i1662
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.UI.Button' )
  var i1665 = data
  i1664.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1665[0], i1664.m_OnClick)
  i1664.m_Navigation = request.d('UnityEngine.UI.Navigation', i1665[1], i1664.m_Navigation)
  i1664.m_Transition = i1665[2]
  i1664.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1665[3], i1664.m_Colors)
  i1664.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1665[4], i1664.m_SpriteState)
  i1664.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1665[5], i1664.m_AnimationTriggers)
  i1664.m_Interactable = !!i1665[6]
  request.r(i1665[7], i1665[8], 0, i1664, 'm_TargetGraphic')
  return i1664
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1667 = data
  i1666.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1667[0], i1666.m_PersistentCalls)
  return i1666
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1669 = data
  i1668.m_Mode = i1669[0]
  i1668.m_WrapAround = !!i1669[1]
  request.r(i1669[2], i1669[3], 0, i1668, 'm_SelectOnUp')
  request.r(i1669[4], i1669[5], 0, i1668, 'm_SelectOnDown')
  request.r(i1669[6], i1669[7], 0, i1668, 'm_SelectOnLeft')
  request.r(i1669[8], i1669[9], 0, i1668, 'm_SelectOnRight')
  return i1668
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1671 = data
  i1670.m_NormalColor = new pc.Color(i1671[0], i1671[1], i1671[2], i1671[3])
  i1670.m_HighlightedColor = new pc.Color(i1671[4], i1671[5], i1671[6], i1671[7])
  i1670.m_PressedColor = new pc.Color(i1671[8], i1671[9], i1671[10], i1671[11])
  i1670.m_SelectedColor = new pc.Color(i1671[12], i1671[13], i1671[14], i1671[15])
  i1670.m_DisabledColor = new pc.Color(i1671[16], i1671[17], i1671[18], i1671[19])
  i1670.m_ColorMultiplier = i1671[20]
  i1670.m_FadeDuration = i1671[21]
  return i1670
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1672 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1673 = data
  request.r(i1673[0], i1673[1], 0, i1672, 'm_HighlightedSprite')
  request.r(i1673[2], i1673[3], 0, i1672, 'm_PressedSprite')
  request.r(i1673[4], i1673[5], 0, i1672, 'm_SelectedSprite')
  request.r(i1673[6], i1673[7], 0, i1672, 'm_DisabledSprite')
  return i1672
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1674 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1675 = data
  i1674.m_NormalTrigger = i1675[0]
  i1674.m_HighlightedTrigger = i1675[1]
  i1674.m_PressedTrigger = i1675[2]
  i1674.m_SelectedTrigger = i1675[3]
  i1674.m_DisabledTrigger = i1675[4]
  return i1674
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, 'm_FirstSelected')
  i1676.m_sendNavigationEvents = !!i1677[2]
  i1676.m_DragThreshold = i1677[3]
  return i1676
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1679 = data
  i1678.m_HorizontalAxis = i1679[0]
  i1678.m_VerticalAxis = i1679[1]
  i1678.m_SubmitButton = i1679[2]
  i1678.m_CancelButton = i1679[3]
  i1678.m_InputActionsPerSecond = i1679[4]
  i1678.m_RepeatDelay = i1679[5]
  i1678.m_ForceModuleActive = !!i1679[6]
  i1678.m_SendPointerHoverToParent = !!i1679[7]
  return i1678
}

Deserializers["LTPHUONG.TutorialHand"] = function (request, data, root) {
  var i1680 = root || request.c( 'LTPHUONG.TutorialHand' )
  var i1681 = data
  request.r(i1681[0], i1681[1], 0, i1680, 'point')
  i1680.clickRotation = i1681[2]
  i1680.clickDuration = i1681[3]
  i1680.dragDuration = i1681[4]
  i1680.loopDelay = i1681[5]
  request.r(i1681[6], i1681[7], 0, i1680, 'handSprite')
  i1680.fadeDuration = i1681[8]
  return i1680
}

Deserializers["LTPHUONG.RevealTutorialManager"] = function (request, data, root) {
  var i1682 = root || request.c( 'LTPHUONG.RevealTutorialManager' )
  var i1683 = data
  i1682.OnAllStepsComplete = request.d('UnityEngine.Events.UnityEvent', i1683[0], i1682.OnAllStepsComplete)
  i1682.OnFirstInteract = request.d('UnityEngine.Events.UnityEvent', i1683[1], i1682.OnFirstInteract)
  i1682.OnInteract = request.d('UnityEngine.Events.UnityEvent', i1683[2], i1682.OnInteract)
  request.r(i1683[3], i1683[4], 0, i1682, 'hand')
  i1682.idleTime = i1683[5]
  request.r(i1683[6], i1683[7], 0, i1682, 'clickTarget')
  var i1685 = i1683[8]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( request.d('LTPHUONG.RevealTutorialManager+DragStep', i1685[i + 0]) );
  }
  i1682.dragSteps = i1684
  return i1682
}

Deserializers["LTPHUONG.RevealTutorialManager+DragStep"] = function (request, data, root) {
  var i1688 = root || request.c( 'LTPHUONG.RevealTutorialManager+DragStep' )
  var i1689 = data
  request.r(i1689[0], i1689[1], 0, i1688, 'pen')
  request.r(i1689[2], i1689[3], 0, i1688, 'image')
  request.r(i1689[4], i1689[5], 0, i1688, 'imageTarget')
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1691 = data
  i1690.ambientIntensity = i1691[0]
  i1690.reflectionIntensity = i1691[1]
  i1690.ambientMode = i1691[2]
  i1690.ambientLight = new pc.Color(i1691[3], i1691[4], i1691[5], i1691[6])
  i1690.ambientSkyColor = new pc.Color(i1691[7], i1691[8], i1691[9], i1691[10])
  i1690.ambientGroundColor = new pc.Color(i1691[11], i1691[12], i1691[13], i1691[14])
  i1690.ambientEquatorColor = new pc.Color(i1691[15], i1691[16], i1691[17], i1691[18])
  i1690.fogColor = new pc.Color(i1691[19], i1691[20], i1691[21], i1691[22])
  i1690.fogEndDistance = i1691[23]
  i1690.fogStartDistance = i1691[24]
  i1690.fogDensity = i1691[25]
  i1690.fog = !!i1691[26]
  request.r(i1691[27], i1691[28], 0, i1690, 'skybox')
  i1690.fogMode = i1691[29]
  var i1693 = i1691[30]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1693[i + 0]) );
  }
  i1690.lightmaps = i1692
  i1690.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1691[31], i1690.lightProbes)
  i1690.lightmapsMode = i1691[32]
  i1690.mixedBakeMode = i1691[33]
  i1690.environmentLightingMode = i1691[34]
  i1690.ambientProbe = new pc.SphericalHarmonicsL2(i1691[35])
  i1690.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1691[36])
  i1690.useReferenceAmbientProbe = !!i1691[37]
  request.r(i1691[38], i1691[39], 0, i1690, 'customReflection')
  request.r(i1691[40], i1691[41], 0, i1690, 'defaultReflection')
  i1690.defaultReflectionMode = i1691[42]
  i1690.defaultReflectionResolution = i1691[43]
  i1690.sunLightObjectId = i1691[44]
  i1690.pixelLightCount = i1691[45]
  i1690.defaultReflectionHDR = !!i1691[46]
  i1690.hasLightDataAsset = !!i1691[47]
  i1690.hasManualGenerate = !!i1691[48]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1697 = data
  request.r(i1697[0], i1697[1], 0, i1696, 'lightmapColor')
  request.r(i1697[2], i1697[3], 0, i1696, 'lightmapDirection')
  request.r(i1697[4], i1697[5], 0, i1696, 'shadowMask')
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1698 = root || new UnityEngine.LightProbes()
  var i1699 = data
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1707 = data
  var i1709 = i1707[0]
  var i1708 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1709[i + 0]));
  }
  i1706.ShaderCompilationErrors = i1708
  i1706.name = i1707[1]
  i1706.guid = i1707[2]
  var i1711 = i1707[3]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( i1711[i + 0] );
  }
  i1706.shaderDefinedKeywords = i1710
  var i1713 = i1707[4]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1713[i + 0]) );
  }
  i1706.passes = i1712
  var i1715 = i1707[5]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1715[i + 0]) );
  }
  i1706.usePasses = i1714
  var i1717 = i1707[6]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1717[i + 0]) );
  }
  i1706.defaultParameterValues = i1716
  request.r(i1707[7], i1707[8], 0, i1706, 'unityFallbackShader')
  i1706.readDepth = !!i1707[9]
  i1706.hasDepthOnlyPass = !!i1707[10]
  i1706.isCreatedByShaderGraph = !!i1707[11]
  i1706.disableBatching = !!i1707[12]
  i1706.compiled = !!i1707[13]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1721 = data
  i1720.shaderName = i1721[0]
  i1720.errorMessage = i1721[1]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1726 = root || new pc.UnityShaderPass()
  var i1727 = data
  i1726.id = i1727[0]
  i1726.subShaderIndex = i1727[1]
  i1726.name = i1727[2]
  i1726.passType = i1727[3]
  i1726.grabPassTextureName = i1727[4]
  i1726.usePass = !!i1727[5]
  i1726.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[6], i1726.zTest)
  i1726.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[7], i1726.zWrite)
  i1726.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[8], i1726.culling)
  i1726.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1727[9], i1726.blending)
  i1726.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1727[10], i1726.alphaBlending)
  i1726.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[11], i1726.colorWriteMask)
  i1726.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[12], i1726.offsetUnits)
  i1726.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[13], i1726.offsetFactor)
  i1726.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[14], i1726.stencilRef)
  i1726.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[15], i1726.stencilReadMask)
  i1726.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1727[16], i1726.stencilWriteMask)
  i1726.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1727[17], i1726.stencilOp)
  i1726.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1727[18], i1726.stencilOpFront)
  i1726.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1727[19], i1726.stencilOpBack)
  var i1729 = i1727[20]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1729[i + 0]) );
  }
  i1726.tags = i1728
  var i1731 = i1727[21]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( i1731[i + 0] );
  }
  i1726.passDefinedKeywords = i1730
  var i1733 = i1727[22]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1733[i + 0]) );
  }
  i1726.passDefinedKeywordGroups = i1732
  var i1735 = i1727[23]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1735[i + 0]) );
  }
  i1726.variants = i1734
  var i1737 = i1727[24]
  var i1736 = []
  for(var i = 0; i < i1737.length; i += 1) {
    i1736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1737[i + 0]) );
  }
  i1726.excludedVariants = i1736
  i1726.hasDepthReader = !!i1727[25]
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1739 = data
  i1738.val = i1739[0]
  i1738.name = i1739[1]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1741 = data
  i1740.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[0], i1740.src)
  i1740.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[1], i1740.dst)
  i1740.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[2], i1740.op)
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1743 = data
  i1742.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[0], i1742.pass)
  i1742.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[1], i1742.fail)
  i1742.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[2], i1742.zFail)
  i1742.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1743[3], i1742.comp)
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1747 = data
  i1746.name = i1747[0]
  i1746.value = i1747[1]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1751 = data
  var i1753 = i1751[0]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.push( i1753[i + 0] );
  }
  i1750.keywords = i1752
  i1750.hasDiscard = !!i1751[1]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1757 = data
  i1756.passId = i1757[0]
  i1756.subShaderIndex = i1757[1]
  var i1759 = i1757[2]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( i1759[i + 0] );
  }
  i1756.keywords = i1758
  i1756.vertexProgram = i1757[3]
  i1756.fragmentProgram = i1757[4]
  i1756.exportedForWebGl2 = !!i1757[5]
  i1756.readDepth = !!i1757[6]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1763 = data
  request.r(i1763[0], i1763[1], 0, i1762, 'shader')
  i1762.pass = i1763[2]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1767 = data
  i1766.name = i1767[0]
  i1766.type = i1767[1]
  i1766.value = new pc.Vec4( i1767[2], i1767[3], i1767[4], i1767[5] )
  i1766.textureValue = i1767[6]
  i1766.shaderPropertyFlag = i1767[7]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1769 = data
  i1768.name = i1769[0]
  request.r(i1769[1], i1769[2], 0, i1768, 'texture')
  i1768.aabb = i1769[3]
  i1768.vertices = i1769[4]
  i1768.triangles = i1769[5]
  i1768.textureRect = UnityEngine.Rect.MinMaxRect(i1769[6], i1769[7], i1769[8], i1769[9])
  i1768.packedRect = UnityEngine.Rect.MinMaxRect(i1769[10], i1769[11], i1769[12], i1769[13])
  i1768.border = new pc.Vec4( i1769[14], i1769[15], i1769[16], i1769[17] )
  i1768.transparency = i1769[18]
  i1768.bounds = i1769[19]
  i1768.pixelsPerUnit = i1769[20]
  i1768.textureWidth = i1769[21]
  i1768.textureHeight = i1769[22]
  i1768.nativeSize = new pc.Vec2( i1769[23], i1769[24] )
  i1768.pivot = new pc.Vec2( i1769[25], i1769[26] )
  i1768.textureRectOffset = new pc.Vec2( i1769[27], i1769[28] )
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1771 = data
  i1770.name = i1771[0]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1773 = data
  i1772.name = i1773[0]
  i1772.wrapMode = i1773[1]
  i1772.isLooping = !!i1773[2]
  i1772.length = i1773[3]
  var i1775 = i1773[4]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1775[i + 0]) );
  }
  i1772.curves = i1774
  var i1777 = i1773[5]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1777[i + 0]) );
  }
  i1772.events = i1776
  i1772.halfPrecision = !!i1773[6]
  i1772._frameRate = i1773[7]
  i1772.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1773[8], i1772.localBounds)
  i1772.hasMuscleCurves = !!i1773[9]
  var i1779 = i1773[10]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( i1779[i + 0] );
  }
  i1772.clipMuscleConstant = i1778
  i1772.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1773[11], i1772.clipBindingConstant)
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1783 = data
  i1782.path = i1783[0]
  i1782.hash = i1783[1]
  i1782.componentType = i1783[2]
  i1782.property = i1783[3]
  i1782.keys = i1783[4]
  var i1785 = i1783[5]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1785[i + 0]) );
  }
  i1782.objectReferenceKeys = i1784
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1789 = data
  i1788.time = i1789[0]
  request.r(i1789[1], i1789[2], 0, i1788, 'value')
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1793 = data
  i1792.functionName = i1793[0]
  i1792.floatParameter = i1793[1]
  i1792.intParameter = i1793[2]
  i1792.stringParameter = i1793[3]
  request.r(i1793[4], i1793[5], 0, i1792, 'objectReferenceParameter')
  i1792.time = i1793[6]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1795 = data
  i1794.center = new pc.Vec3( i1795[0], i1795[1], i1795[2] )
  i1794.extends = new pc.Vec3( i1795[3], i1795[4], i1795[5] )
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1799 = data
  var i1801 = i1799[0]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.push( i1801[i + 0] );
  }
  i1798.genericBindings = i1800
  var i1803 = i1799[1]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.push( i1803[i + 0] );
  }
  i1798.pptrCurveMapping = i1802
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1805 = data
  i1804.name = i1805[0]
  var i1807 = i1805[1]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1807[i + 0]) );
  }
  i1804.layers = i1806
  var i1809 = i1805[2]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1809[i + 0]) );
  }
  i1804.parameters = i1808
  i1804.animationClips = i1805[3]
  i1804.avatarUnsupported = i1805[4]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1813 = data
  i1812.name = i1813[0]
  i1812.defaultWeight = i1813[1]
  i1812.blendingMode = i1813[2]
  i1812.avatarMask = i1813[3]
  i1812.syncedLayerIndex = i1813[4]
  i1812.syncedLayerAffectsTiming = !!i1813[5]
  i1812.syncedLayers = i1813[6]
  i1812.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1813[7], i1812.stateMachine)
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1815 = data
  i1814.id = i1815[0]
  i1814.name = i1815[1]
  i1814.path = i1815[2]
  var i1817 = i1815[3]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1817[i + 0]) );
  }
  i1814.states = i1816
  var i1819 = i1815[4]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1819[i + 0]) );
  }
  i1814.machines = i1818
  var i1821 = i1815[5]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1821[i + 0]) );
  }
  i1814.entryStateTransitions = i1820
  var i1823 = i1815[6]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1823[i + 0]) );
  }
  i1814.exitStateTransitions = i1822
  var i1825 = i1815[7]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1825[i + 0]) );
  }
  i1814.anyStateTransitions = i1824
  i1814.defaultStateId = i1815[8]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1829 = data
  i1828.id = i1829[0]
  i1828.name = i1829[1]
  i1828.cycleOffset = i1829[2]
  i1828.cycleOffsetParameter = i1829[3]
  i1828.cycleOffsetParameterActive = !!i1829[4]
  i1828.mirror = !!i1829[5]
  i1828.mirrorParameter = i1829[6]
  i1828.mirrorParameterActive = !!i1829[7]
  i1828.motionId = i1829[8]
  i1828.nameHash = i1829[9]
  i1828.fullPathHash = i1829[10]
  i1828.speed = i1829[11]
  i1828.speedParameter = i1829[12]
  i1828.speedParameterActive = !!i1829[13]
  i1828.tag = i1829[14]
  i1828.tagHash = i1829[15]
  i1828.writeDefaultValues = !!i1829[16]
  var i1831 = i1829[17]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 2) {
  request.r(i1831[i + 0], i1831[i + 1], 2, i1830, '')
  }
  i1828.behaviours = i1830
  var i1833 = i1829[18]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1833[i + 0]) );
  }
  i1828.transitions = i1832
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1839 = data
  i1838.fullPath = i1839[0]
  i1838.canTransitionToSelf = !!i1839[1]
  i1838.duration = i1839[2]
  i1838.exitTime = i1839[3]
  i1838.hasExitTime = !!i1839[4]
  i1838.hasFixedDuration = !!i1839[5]
  i1838.interruptionSource = i1839[6]
  i1838.offset = i1839[7]
  i1838.orderedInterruption = !!i1839[8]
  i1838.destinationStateId = i1839[9]
  i1838.isExit = !!i1839[10]
  i1838.mute = !!i1839[11]
  i1838.solo = !!i1839[12]
  var i1841 = i1839[13]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1841[i + 0]) );
  }
  i1838.conditions = i1840
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1847 = data
  i1846.destinationStateId = i1847[0]
  i1846.isExit = !!i1847[1]
  i1846.mute = !!i1847[2]
  i1846.solo = !!i1847[3]
  var i1849 = i1847[4]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1849[i + 0]) );
  }
  i1846.conditions = i1848
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1853 = data
  i1852.defaultBool = !!i1853[0]
  i1852.defaultFloat = i1853[1]
  i1852.defaultInt = i1853[2]
  i1852.name = i1853[3]
  i1852.nameHash = i1853[4]
  i1852.type = i1853[5]
  return i1852
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1854 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1855 = data
  i1854.useSafeMode = !!i1855[0]
  i1854.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1855[1], i1854.safeModeOptions)
  i1854.timeScale = i1855[2]
  i1854.unscaledTimeScale = i1855[3]
  i1854.useSmoothDeltaTime = !!i1855[4]
  i1854.maxSmoothUnscaledTime = i1855[5]
  i1854.rewindCallbackMode = i1855[6]
  i1854.showUnityEditorReport = !!i1855[7]
  i1854.logBehaviour = i1855[8]
  i1854.drawGizmos = !!i1855[9]
  i1854.defaultRecyclable = !!i1855[10]
  i1854.defaultAutoPlay = i1855[11]
  i1854.defaultUpdateType = i1855[12]
  i1854.defaultTimeScaleIndependent = !!i1855[13]
  i1854.defaultEaseType = i1855[14]
  i1854.defaultEaseOvershootOrAmplitude = i1855[15]
  i1854.defaultEasePeriod = i1855[16]
  i1854.defaultAutoKill = !!i1855[17]
  i1854.defaultLoopType = i1855[18]
  i1854.debugMode = !!i1855[19]
  i1854.debugStoreTargetId = !!i1855[20]
  i1854.showPreviewPanel = !!i1855[21]
  i1854.storeSettingsLocation = i1855[22]
  i1854.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1855[23], i1854.modules)
  i1854.createASMDEF = !!i1855[24]
  i1854.showPlayingTweens = !!i1855[25]
  i1854.showPausedTweens = !!i1855[26]
  return i1854
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1856 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1857 = data
  i1856.logBehaviour = i1857[0]
  i1856.nestedTweenFailureBehaviour = i1857[1]
  return i1856
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1858 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1859 = data
  i1858.showPanel = !!i1859[0]
  i1858.audioEnabled = !!i1859[1]
  i1858.physicsEnabled = !!i1859[2]
  i1858.physics2DEnabled = !!i1859[3]
  i1858.spriteEnabled = !!i1859[4]
  i1858.uiEnabled = !!i1859[5]
  i1858.textMeshProEnabled = !!i1859[6]
  i1858.tk2DEnabled = !!i1859[7]
  i1858.deAudioEnabled = !!i1859[8]
  i1858.deUnityExtendedEnabled = !!i1859[9]
  i1858.epoOutlineEnabled = !!i1859[10]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1861 = data
  var i1863 = i1861[0]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1863[i + 0]) );
  }
  i1860.files = i1862
  i1860.componentToPrefabIds = i1861[1]
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1867 = data
  i1866.path = i1867[0]
  request.r(i1867[1], i1867[2], 0, i1866, 'unityObject')
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1869 = data
  var i1871 = i1869[0]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1871[i + 0]) );
  }
  i1868.scriptsExecutionOrder = i1870
  var i1873 = i1869[1]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1873[i + 0]) );
  }
  i1868.sortingLayers = i1872
  var i1875 = i1869[2]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1875[i + 0]) );
  }
  i1868.cullingLayers = i1874
  i1868.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1869[3], i1868.timeSettings)
  i1868.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1869[4], i1868.physicsSettings)
  i1868.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1869[5], i1868.physics2DSettings)
  i1868.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1869[6], i1868.qualitySettings)
  i1868.enableRealtimeShadows = !!i1869[7]
  i1868.enableAutoInstancing = !!i1869[8]
  i1868.enableStaticBatching = !!i1869[9]
  i1868.enableDynamicBatching = !!i1869[10]
  i1868.lightmapEncodingQuality = i1869[11]
  i1868.desiredColorSpace = i1869[12]
  var i1877 = i1869[13]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( i1877[i + 0] );
  }
  i1868.allTags = i1876
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1881 = data
  i1880.name = i1881[0]
  i1880.value = i1881[1]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1885 = data
  i1884.id = i1885[0]
  i1884.name = i1885[1]
  i1884.value = i1885[2]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1889 = data
  i1888.id = i1889[0]
  i1888.name = i1889[1]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1891 = data
  i1890.fixedDeltaTime = i1891[0]
  i1890.maximumDeltaTime = i1891[1]
  i1890.timeScale = i1891[2]
  i1890.maximumParticleTimestep = i1891[3]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1893 = data
  i1892.gravity = new pc.Vec3( i1893[0], i1893[1], i1893[2] )
  i1892.defaultSolverIterations = i1893[3]
  i1892.bounceThreshold = i1893[4]
  i1892.autoSyncTransforms = !!i1893[5]
  i1892.autoSimulation = !!i1893[6]
  var i1895 = i1893[7]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1895[i + 0]) );
  }
  i1892.collisionMatrix = i1894
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1899 = data
  i1898.enabled = !!i1899[0]
  i1898.layerId = i1899[1]
  i1898.otherLayerId = i1899[2]
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1901 = data
  request.r(i1901[0], i1901[1], 0, i1900, 'material')
  i1900.gravity = new pc.Vec2( i1901[2], i1901[3] )
  i1900.positionIterations = i1901[4]
  i1900.velocityIterations = i1901[5]
  i1900.velocityThreshold = i1901[6]
  i1900.maxLinearCorrection = i1901[7]
  i1900.maxAngularCorrection = i1901[8]
  i1900.maxTranslationSpeed = i1901[9]
  i1900.maxRotationSpeed = i1901[10]
  i1900.baumgarteScale = i1901[11]
  i1900.baumgarteTOIScale = i1901[12]
  i1900.timeToSleep = i1901[13]
  i1900.linearSleepTolerance = i1901[14]
  i1900.angularSleepTolerance = i1901[15]
  i1900.defaultContactOffset = i1901[16]
  i1900.autoSimulation = !!i1901[17]
  i1900.queriesHitTriggers = !!i1901[18]
  i1900.queriesStartInColliders = !!i1901[19]
  i1900.callbacksOnDisable = !!i1901[20]
  i1900.reuseCollisionCallbacks = !!i1901[21]
  i1900.autoSyncTransforms = !!i1901[22]
  var i1903 = i1901[23]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1903[i + 0]) );
  }
  i1900.collisionMatrix = i1902
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1907 = data
  i1906.enabled = !!i1907[0]
  i1906.layerId = i1907[1]
  i1906.otherLayerId = i1907[2]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1909 = data
  var i1911 = i1909[0]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1911[i + 0]) );
  }
  i1908.qualityLevels = i1910
  var i1913 = i1909[1]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( i1913[i + 0] );
  }
  i1908.names = i1912
  i1908.shadows = i1909[2]
  i1908.anisotropicFiltering = i1909[3]
  i1908.antiAliasing = i1909[4]
  i1908.lodBias = i1909[5]
  i1908.shadowCascades = i1909[6]
  i1908.shadowDistance = i1909[7]
  i1908.shadowmaskMode = i1909[8]
  i1908.shadowProjection = i1909[9]
  i1908.shadowResolution = i1909[10]
  i1908.softParticles = !!i1909[11]
  i1908.softVegetation = !!i1909[12]
  i1908.activeColorSpace = i1909[13]
  i1908.desiredColorSpace = i1909[14]
  i1908.masterTextureLimit = i1909[15]
  i1908.maxQueuedFrames = i1909[16]
  i1908.particleRaycastBudget = i1909[17]
  i1908.pixelLightCount = i1909[18]
  i1908.realtimeReflectionProbes = !!i1909[19]
  i1908.shadowCascade2Split = i1909[20]
  i1908.shadowCascade4Split = new pc.Vec3( i1909[21], i1909[22], i1909[23] )
  i1908.streamingMipmapsActive = !!i1909[24]
  i1908.vSyncCount = i1909[25]
  i1908.asyncUploadBufferSize = i1909[26]
  i1908.asyncUploadTimeSlice = i1909[27]
  i1908.billboardsFaceCameraPosition = !!i1909[28]
  i1908.shadowNearPlaneOffset = i1909[29]
  i1908.streamingMipmapsMemoryBudget = i1909[30]
  i1908.maximumLODLevel = i1909[31]
  i1908.streamingMipmapsAddAllCameras = !!i1909[32]
  i1908.streamingMipmapsMaxLevelReduction = i1909[33]
  i1908.streamingMipmapsRenderersPerFrame = i1909[34]
  i1908.resolutionScalingFixedDPIFactor = i1909[35]
  i1908.streamingMipmapsMaxFileIORequests = i1909[36]
  i1908.currentQualityLevel = i1909[37]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1919 = data
  i1918.mode = i1919[0]
  i1918.parameter = i1919[1]
  i1918.threshold = i1919[2]
  return i1918
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[2],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[2],"78":[79],"80":[81],"82":[81],"34":[33],"83":[33],"84":[85],"86":[87],"88":[2],"89":[33],"90":[79,33],"91":[33,39],"92":[33],"93":[39,33],"94":[79],"95":[39,33],"96":[33],"97":[2],"98":[2],"99":[100],"101":[85],"102":[6],"103":[33],"104":[33],"36":[34],"40":[39,33],"105":[33],"35":[34],"106":[33],"107":[33],"108":[33],"109":[33],"110":[33],"111":[33],"112":[33],"113":[33],"114":[33],"115":[39,33],"116":[33],"117":[33],"118":[33],"119":[33],"120":[39,33],"121":[33],"122":[41],"123":[41],"42":[41],"124":[41],"5":[2],"125":[2],"126":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","LTPHUONG.FadeSprite","UnityEngine.BoxCollider2D","LTPHUONG.ClickMoveToPoint","UnityEngine.Transform","UnityEngine.AudioClip","UnityEngine.GameObject","LTPHUONG.RevealPen","LTPHUONG.RevealImage","LTPHUONG.RevealTutorialManager","LTPHUONG.SquashStretchEffect","LTPHUONG.ToolBaseGroup","UnityEngine.AudioSource","Satisgame.EmojiControl","LTPHUONG.CounterEvent","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","LTPHUONG.DragSpeedSound","UnityEngine.PolygonCollider2D","LTPHUONG.GameState","LTPHUONG.ClickController","LTPHUONG.AudioManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","LTPHUONG.UIButtonPulse","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","LTPHUONG.TutorialHand","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "ply";

Deserializers.lunaInitializationTime = "03/26/2026 02:25:17";

Deserializers.lunaDaysRunning = "21.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "Easter2";

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

Deserializers.buildID = "bdf1f7d2-d715-44e8-8194-449811cfe791";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

