var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.JointSpring' )
  var i1217 = data
  i1216.spring = i1217[0]
  i1216.damper = i1217[1]
  i1216.targetPosition = i1217[2]
  return i1216
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.JointMotor' )
  var i1219 = data
  i1218.m_TargetVelocity = i1219[0]
  i1218.m_Force = i1219[1]
  i1218.m_FreeSpin = i1219[2]
  return i1218
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1220 = root || request.c( 'UnityEngine.JointLimits' )
  var i1221 = data
  i1220.m_Min = i1221[0]
  i1220.m_Max = i1221[1]
  i1220.m_Bounciness = i1221[2]
  i1220.m_BounceMinVelocity = i1221[3]
  i1220.m_ContactDistance = i1221[4]
  i1220.minBounce = i1221[5]
  i1220.maxBounce = i1221[6]
  return i1220
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.JointDrive' )
  var i1223 = data
  i1222.m_PositionSpring = i1223[0]
  i1222.m_PositionDamper = i1223[1]
  i1222.m_MaximumForce = i1223[2]
  i1222.m_UseAcceleration = i1223[3]
  return i1222
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1225 = data
  i1224.m_Spring = i1225[0]
  i1224.m_Damper = i1225[1]
  return i1224
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1227 = data
  i1226.m_Limit = i1227[0]
  i1226.m_Bounciness = i1227[1]
  i1226.m_ContactDistance = i1227[2]
  return i1226
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1228 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1229 = data
  i1228.m_ExtremumSlip = i1229[0]
  i1228.m_ExtremumValue = i1229[1]
  i1228.m_AsymptoteSlip = i1229[2]
  i1228.m_AsymptoteValue = i1229[3]
  i1228.m_Stiffness = i1229[4]
  return i1228
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1230 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1231 = data
  i1230.m_LowerAngle = i1231[0]
  i1230.m_UpperAngle = i1231[1]
  return i1230
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1232 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1233 = data
  i1232.m_MotorSpeed = i1233[0]
  i1232.m_MaximumMotorTorque = i1233[1]
  return i1232
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1234 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1235 = data
  i1234.m_DampingRatio = i1235[0]
  i1234.m_Frequency = i1235[1]
  i1234.m_Angle = i1235[2]
  return i1234
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1237 = data
  i1236.m_LowerTranslation = i1237[0]
  i1236.m_UpperTranslation = i1237[1]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1239 = data
  i1238.position = new pc.Vec3( i1239[0], i1239[1], i1239[2] )
  i1238.scale = new pc.Vec3( i1239[3], i1239[4], i1239[5] )
  i1238.rotation = new pc.Quat(i1239[6], i1239[7], i1239[8], i1239[9])
  return i1238
}

Deserializers["LTPHUONG.GameState"] = function (request, data, root) {
  var i1240 = root || request.c( 'LTPHUONG.GameState' )
  var i1241 = data
  return i1240
}

Deserializers["LTPHUONG.ClickController"] = function (request, data, root) {
  var i1242 = root || request.c( 'LTPHUONG.ClickController' )
  var i1243 = data
  request.r(i1243[0], i1243[1], 0, i1242, 'mainCamera')
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1245 = data
  i1244.name = i1245[0]
  i1244.tagId = i1245[1]
  i1244.enabled = !!i1245[2]
  i1244.isStatic = !!i1245[3]
  i1244.layer = i1245[4]
  return i1244
}

Deserializers["LTPHUONG.AudioManager"] = function (request, data, root) {
  var i1246 = root || request.c( 'LTPHUONG.AudioManager' )
  var i1247 = data
  request.r(i1247[0], i1247[1], 0, i1246, 'sfxAudioSource')
  request.r(i1247[2], i1247[3], 0, i1246, 'bgmAudioSource')
  request.r(i1247[4], i1247[5], 0, i1246, 'bgmClip')
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1249 = data
  request.r(i1249[0], i1249[1], 0, i1248, 'clip')
  request.r(i1249[2], i1249[3], 0, i1248, 'outputAudioMixerGroup')
  i1248.playOnAwake = !!i1249[4]
  i1248.loop = !!i1249[5]
  i1248.time = i1249[6]
  i1248.volume = i1249[7]
  i1248.pitch = i1249[8]
  i1248.enabled = !!i1249[9]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1251 = data
  i1250.pivot = new pc.Vec2( i1251[0], i1251[1] )
  i1250.anchorMin = new pc.Vec2( i1251[2], i1251[3] )
  i1250.anchorMax = new pc.Vec2( i1251[4], i1251[5] )
  i1250.sizeDelta = new pc.Vec2( i1251[6], i1251[7] )
  i1250.anchoredPosition3D = new pc.Vec3( i1251[8], i1251[9], i1251[10] )
  i1250.rotation = new pc.Quat(i1251[11], i1251[12], i1251[13], i1251[14])
  i1250.scale = new pc.Vec3( i1251[15], i1251[16], i1251[17] )
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1253 = data
  i1252.planeDistance = i1253[0]
  i1252.referencePixelsPerUnit = i1253[1]
  i1252.isFallbackOverlay = !!i1253[2]
  i1252.renderMode = i1253[3]
  i1252.renderOrder = i1253[4]
  i1252.sortingLayerName = i1253[5]
  i1252.sortingOrder = i1253[6]
  i1252.scaleFactor = i1253[7]
  request.r(i1253[8], i1253[9], 0, i1252, 'worldCamera')
  i1252.overrideSorting = !!i1253[10]
  i1252.pixelPerfect = !!i1253[11]
  i1252.targetDisplay = i1253[12]
  i1252.overridePixelPerfect = !!i1253[13]
  i1252.enabled = !!i1253[14]
  return i1252
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1255 = data
  i1254.m_UiScaleMode = i1255[0]
  i1254.m_ReferencePixelsPerUnit = i1255[1]
  i1254.m_ScaleFactor = i1255[2]
  i1254.m_ReferenceResolution = new pc.Vec2( i1255[3], i1255[4] )
  i1254.m_ScreenMatchMode = i1255[5]
  i1254.m_MatchWidthOrHeight = i1255[6]
  i1254.m_PhysicalUnit = i1255[7]
  i1254.m_FallbackScreenDPI = i1255[8]
  i1254.m_DefaultSpriteDPI = i1255[9]
  i1254.m_DynamicPixelsPerUnit = i1255[10]
  i1254.m_PresetInfoIsWorld = !!i1255[11]
  return i1254
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1257 = data
  i1256.m_IgnoreReversedGraphics = !!i1257[0]
  i1256.m_BlockingObjects = i1257[1]
  i1256.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1257[2] )
  return i1256
}

Deserializers["LTPHUONG.UIButtonPulse"] = function (request, data, root) {
  var i1258 = root || request.c( 'LTPHUONG.UIButtonPulse' )
  var i1259 = data
  request.r(i1259[0], i1259[1], 0, i1258, 'button')
  request.r(i1259[2], i1259[3], 0, i1258, 'imageRect')
  i1258.scaleMin = i1259[4]
  i1258.scaleMax = i1259[5]
  i1258.pulseDuration = i1259[6]
  i1258.landscapeImagePos = new pc.Vec2( i1259[7], i1259[8] )
  i1258.landscapeButtonPos = new pc.Vec2( i1259[9], i1259[10] )
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1261 = data
  i1260.cullTransparentMesh = !!i1261[0]
  return i1260
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1262 = root || request.c( 'UnityEngine.UI.Image' )
  var i1263 = data
  request.r(i1263[0], i1263[1], 0, i1262, 'm_Sprite')
  i1262.m_Type = i1263[2]
  i1262.m_PreserveAspect = !!i1263[3]
  i1262.m_FillCenter = !!i1263[4]
  i1262.m_FillMethod = i1263[5]
  i1262.m_FillAmount = i1263[6]
  i1262.m_FillClockwise = !!i1263[7]
  i1262.m_FillOrigin = i1263[8]
  i1262.m_UseSpriteMesh = !!i1263[9]
  i1262.m_PixelsPerUnitMultiplier = i1263[10]
  request.r(i1263[11], i1263[12], 0, i1262, 'm_Material')
  i1262.m_Maskable = !!i1263[13]
  i1262.m_Color = new pc.Color(i1263[14], i1263[15], i1263[16], i1263[17])
  i1262.m_RaycastTarget = !!i1263[18]
  i1262.m_RaycastPadding = new pc.Vec4( i1263[19], i1263[20], i1263[21], i1263[22] )
  return i1262
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1264 = root || request.c( 'UnityEngine.UI.Button' )
  var i1265 = data
  i1264.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1265[0], i1264.m_OnClick)
  i1264.m_Navigation = request.d('UnityEngine.UI.Navigation', i1265[1], i1264.m_Navigation)
  i1264.m_Transition = i1265[2]
  i1264.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1265[3], i1264.m_Colors)
  i1264.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1265[4], i1264.m_SpriteState)
  i1264.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1265[5], i1264.m_AnimationTriggers)
  i1264.m_Interactable = !!i1265[6]
  request.r(i1265[7], i1265[8], 0, i1264, 'm_TargetGraphic')
  return i1264
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1266 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1267 = data
  i1266.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1267[0], i1266.m_PersistentCalls)
  return i1266
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1268 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1269 = data
  var i1271 = i1269[0]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.add(request.d('UnityEngine.Events.PersistentCall', i1271[i + 0]));
  }
  i1268.m_Calls = i1270
  return i1268
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1274 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1275 = data
  request.r(i1275[0], i1275[1], 0, i1274, 'm_Target')
  i1274.m_TargetAssemblyTypeName = i1275[2]
  i1274.m_MethodName = i1275[3]
  i1274.m_Mode = i1275[4]
  i1274.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1275[5], i1274.m_Arguments)
  i1274.m_CallState = i1275[6]
  return i1274
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1277 = data
  request.r(i1277[0], i1277[1], 0, i1276, 'm_ObjectArgument')
  i1276.m_ObjectArgumentAssemblyTypeName = i1277[2]
  i1276.m_IntArgument = i1277[3]
  i1276.m_FloatArgument = i1277[4]
  i1276.m_StringArgument = i1277[5]
  i1276.m_BoolArgument = !!i1277[6]
  return i1276
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1279 = data
  i1278.m_Mode = i1279[0]
  i1278.m_WrapAround = !!i1279[1]
  request.r(i1279[2], i1279[3], 0, i1278, 'm_SelectOnUp')
  request.r(i1279[4], i1279[5], 0, i1278, 'm_SelectOnDown')
  request.r(i1279[6], i1279[7], 0, i1278, 'm_SelectOnLeft')
  request.r(i1279[8], i1279[9], 0, i1278, 'm_SelectOnRight')
  return i1278
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1281 = data
  i1280.m_NormalColor = new pc.Color(i1281[0], i1281[1], i1281[2], i1281[3])
  i1280.m_HighlightedColor = new pc.Color(i1281[4], i1281[5], i1281[6], i1281[7])
  i1280.m_PressedColor = new pc.Color(i1281[8], i1281[9], i1281[10], i1281[11])
  i1280.m_SelectedColor = new pc.Color(i1281[12], i1281[13], i1281[14], i1281[15])
  i1280.m_DisabledColor = new pc.Color(i1281[16], i1281[17], i1281[18], i1281[19])
  i1280.m_ColorMultiplier = i1281[20]
  i1280.m_FadeDuration = i1281[21]
  return i1280
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1283 = data
  request.r(i1283[0], i1283[1], 0, i1282, 'm_HighlightedSprite')
  request.r(i1283[2], i1283[3], 0, i1282, 'm_PressedSprite')
  request.r(i1283[4], i1283[5], 0, i1282, 'm_SelectedSprite')
  request.r(i1283[6], i1283[7], 0, i1282, 'm_DisabledSprite')
  return i1282
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1285 = data
  i1284.m_NormalTrigger = i1285[0]
  i1284.m_HighlightedTrigger = i1285[1]
  i1284.m_PressedTrigger = i1285[2]
  i1284.m_SelectedTrigger = i1285[3]
  i1284.m_DisabledTrigger = i1285[4]
  return i1284
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1287 = data
  request.r(i1287[0], i1287[1], 0, i1286, 'm_FirstSelected')
  i1286.m_sendNavigationEvents = !!i1287[2]
  i1286.m_DragThreshold = i1287[3]
  return i1286
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1289 = data
  i1288.m_HorizontalAxis = i1289[0]
  i1288.m_VerticalAxis = i1289[1]
  i1288.m_SubmitButton = i1289[2]
  i1288.m_CancelButton = i1289[3]
  i1288.m_InputActionsPerSecond = i1289[4]
  i1288.m_RepeatDelay = i1289[5]
  i1288.m_ForceModuleActive = !!i1289[6]
  i1288.m_SendPointerHoverToParent = !!i1289[7]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1291 = data
  i1290.color = new pc.Color(i1291[0], i1291[1], i1291[2], i1291[3])
  request.r(i1291[4], i1291[5], 0, i1290, 'sprite')
  i1290.flipX = !!i1291[6]
  i1290.flipY = !!i1291[7]
  i1290.drawMode = i1291[8]
  i1290.size = new pc.Vec2( i1291[9], i1291[10] )
  i1290.tileMode = i1291[11]
  i1290.adaptiveModeThreshold = i1291[12]
  i1290.maskInteraction = i1291[13]
  i1290.spriteSortPoint = i1291[14]
  i1290.enabled = !!i1291[15]
  request.r(i1291[16], i1291[17], 0, i1290, 'sharedMaterial')
  var i1293 = i1291[18]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 2) {
  request.r(i1293[i + 0], i1293[i + 1], 2, i1292, '')
  }
  i1290.sharedMaterials = i1292
  i1290.receiveShadows = !!i1291[19]
  i1290.shadowCastingMode = i1291[20]
  i1290.sortingLayerID = i1291[21]
  i1290.sortingOrder = i1291[22]
  i1290.lightmapIndex = i1291[23]
  i1290.lightmapSceneIndex = i1291[24]
  i1290.lightmapScaleOffset = new pc.Vec4( i1291[25], i1291[26], i1291[27], i1291[28] )
  i1290.lightProbeUsage = i1291[29]
  i1290.reflectionProbeUsage = i1291[30]
  return i1290
}

Deserializers["LTPHUONG.TutorialHand"] = function (request, data, root) {
  var i1296 = root || request.c( 'LTPHUONG.TutorialHand' )
  var i1297 = data
  request.r(i1297[0], i1297[1], 0, i1296, 'point')
  i1296.clickRotation = i1297[2]
  i1296.clickDuration = i1297[3]
  i1296.dragDuration = i1297[4]
  i1296.loopDelay = i1297[5]
  request.r(i1297[6], i1297[7], 0, i1296, 'handSprite')
  i1296.fadeDuration = i1297[8]
  return i1296
}

Deserializers["LTPHUONG.SimpleTutorialManager"] = function (request, data, root) {
  var i1298 = root || request.c( 'LTPHUONG.SimpleTutorialManager' )
  var i1299 = data
  i1298.OnFirstInteraction = request.d('UnityEngine.Events.UnityEvent', i1299[0], i1298.OnFirstInteraction)
  i1298.OnEveryInteraction = request.d('UnityEngine.Events.UnityEvent', i1299[1], i1298.OnEveryInteraction)
  request.r(i1299[2], i1299[3], 0, i1298, 'tutorialHand')
  request.r(i1299[4], i1299[5], 0, i1298, 'clickTarget')
  var i1301 = i1299[6]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 2) {
  request.r(i1301[i + 0], i1301[i + 1], 2, i1300, '')
  }
  i1298.garbageItems = i1300
  request.r(i1299[7], i1299[8], 0, i1298, 'trashBin')
  request.r(i1299[9], i1299[10], 0, i1298, 'customDragFrom')
  request.r(i1299[11], i1299[12], 0, i1298, 'customDragTo')
  i1298.idleTimeBeforeTutorial = i1299[13]
  return i1298
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1303 = data
  i1302.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1303[0], i1302.m_PersistentCalls)
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1307 = data
  i1306.aspect = i1307[0]
  i1306.orthographic = !!i1307[1]
  i1306.orthographicSize = i1307[2]
  i1306.backgroundColor = new pc.Color(i1307[3], i1307[4], i1307[5], i1307[6])
  i1306.nearClipPlane = i1307[7]
  i1306.farClipPlane = i1307[8]
  i1306.fieldOfView = i1307[9]
  i1306.depth = i1307[10]
  i1306.clearFlags = i1307[11]
  i1306.cullingMask = i1307[12]
  i1306.rect = i1307[13]
  request.r(i1307[14], i1307[15], 0, i1306, 'targetTexture')
  i1306.usePhysicalProperties = !!i1307[16]
  i1306.focalLength = i1307[17]
  i1306.sensorSize = new pc.Vec2( i1307[18], i1307[19] )
  i1306.lensShift = new pc.Vec2( i1307[20], i1307[21] )
  i1306.gateFit = i1307[22]
  i1306.commandBufferCount = i1307[23]
  i1306.cameraType = i1307[24]
  i1306.enabled = !!i1307[25]
  return i1306
}

Deserializers["UnityEngine.EventSystems.Physics2DRaycaster"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.EventSystems.Physics2DRaycaster' )
  var i1309 = data
  i1308.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i1309[0] )
  i1308.m_MaxRayIntersections = i1309[1]
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1311 = data
  i1310.name = i1311[0]
  i1310.width = i1311[1]
  i1310.height = i1311[2]
  i1310.mipmapCount = i1311[3]
  i1310.anisoLevel = i1311[4]
  i1310.filterMode = i1311[5]
  i1310.hdr = !!i1311[6]
  i1310.format = i1311[7]
  i1310.wrapMode = i1311[8]
  i1310.alphaIsTransparency = !!i1311[9]
  i1310.alphaSource = i1311[10]
  i1310.graphicsFormat = i1311[11]
  i1310.sRGBTexture = !!i1311[12]
  i1310.desiredColorSpace = i1311[13]
  i1310.wrapU = i1311[14]
  i1310.wrapV = i1311[15]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1312 = root || new pc.UnityMaterial()
  var i1313 = data
  i1312.name = i1313[0]
  request.r(i1313[1], i1313[2], 0, i1312, 'shader')
  i1312.renderQueue = i1313[3]
  i1312.enableInstancing = !!i1313[4]
  var i1315 = i1313[5]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1315[i + 0]) );
  }
  i1312.floatParameters = i1314
  var i1317 = i1313[6]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1317[i + 0]) );
  }
  i1312.colorParameters = i1316
  var i1319 = i1313[7]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1319[i + 0]) );
  }
  i1312.vectorParameters = i1318
  var i1321 = i1313[8]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1321[i + 0]) );
  }
  i1312.textureParameters = i1320
  var i1323 = i1313[9]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1323[i + 0]) );
  }
  i1312.materialFlags = i1322
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1327 = data
  i1326.name = i1327[0]
  i1326.value = i1327[1]
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1331 = data
  i1330.name = i1331[0]
  i1330.value = new pc.Color(i1331[1], i1331[2], i1331[3], i1331[4])
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1335 = data
  i1334.name = i1335[0]
  i1334.value = new pc.Vec4( i1335[1], i1335[2], i1335[3], i1335[4] )
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1339 = data
  i1338.name = i1339[0]
  request.r(i1339[1], i1339[2], 0, i1338, 'value')
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1343 = data
  i1342.name = i1343[0]
  i1342.enabled = !!i1343[1]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1345 = data
  i1344.name = i1345[0]
  i1344.index = i1345[1]
  i1344.startup = !!i1345[2]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1347 = data
  i1346.usedByComposite = !!i1347[0]
  i1346.autoTiling = !!i1347[1]
  var i1349 = i1347[2]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
  var i1351 = i1349[i + 0]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 2) {
    i1350.push( new pc.Vec2( i1351[i + 0], i1351[i + 1] ) );
  }
    i1348.push( i1350 );
  }
  i1346.points = i1348
  i1346.enabled = !!i1347[3]
  i1346.isTrigger = !!i1347[4]
  i1346.usedByEffector = !!i1347[5]
  i1346.density = i1347[6]
  i1346.offset = new pc.Vec2( i1347[7], i1347[8] )
  request.r(i1347[9], i1347[10], 0, i1346, 'material')
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1359 = data
  request.r(i1359[0], i1359[1], 0, i1358, 'animatorController')
  request.r(i1359[2], i1359[3], 0, i1358, 'avatar')
  i1358.updateMode = i1359[4]
  i1358.hasTransformHierarchy = !!i1359[5]
  i1358.applyRootMotion = !!i1359[6]
  var i1361 = i1359[7]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 2) {
  request.r(i1361[i + 0], i1361[i + 1], 2, i1360, '')
  }
  i1358.humanBones = i1360
  i1358.enabled = !!i1359[8]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1365 = data
  i1364.radius = i1365[0]
  i1364.enabled = !!i1365[1]
  i1364.isTrigger = !!i1365[2]
  i1364.usedByEffector = !!i1365[3]
  i1364.density = i1365[4]
  i1364.offset = new pc.Vec2( i1365[5], i1365[6] )
  request.r(i1365[7], i1365[8], 0, i1364, 'material')
  return i1364
}

Deserializers["LTPHUONG.FadeSprite"] = function (request, data, root) {
  var i1366 = root || request.c( 'LTPHUONG.FadeSprite' )
  var i1367 = data
  var i1369 = i1367[0]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 2) {
  request.r(i1369[i + 0], i1369[i + 1], 2, i1368, '')
  }
  i1366.spriteRenderers = i1368
  i1366.fadeDuration = i1367[1]
  i1366.targetAlpha = i1367[2]
  return i1366
}

Deserializers["Satisgame.EmojiControl"] = function (request, data, root) {
  var i1372 = root || request.c( 'Satisgame.EmojiControl' )
  var i1373 = data
  request.r(i1373[0], i1373[1], 0, i1372, 'spriteAnimator')
  request.r(i1373[2], i1373[3], 0, i1372, 'scaleTransform')
  i1372.durationShow = i1373[4]
  i1372.durationHold = i1373[5]
  i1372.durationHide = i1373[6]
  request.r(i1373[7], i1373[8], 0, i1372, 'audioSource')
  request.r(i1373[9], i1373[10], 0, i1372, 'sfxPositive')
  request.r(i1373[11], i1373[12], 0, i1372, 'sfxNegative')
  return i1372
}

Deserializers["LTPHUONG.TrashBin"] = function (request, data, root) {
  var i1374 = root || request.c( 'LTPHUONG.TrashBin' )
  var i1375 = data
  i1374.OnItemTrashed = request.d('UnityEngine.Events.UnityEvent', i1375[0], i1374.OnItemTrashed)
  request.r(i1375[1], i1375[2], 0, i1374, 'dropPoint')
  request.r(i1375[3], i1375[4], 0, i1374, 'topPoint')
  i1374.attractRadius = i1375[5]
  return i1374
}

Deserializers["LTPHUONG.ToolBase"] = function (request, data, root) {
  var i1376 = root || request.c( 'LTPHUONG.ToolBase' )
  var i1377 = data
  request.r(i1377[0], i1377[1], 0, i1376, 'inPoint')
  request.r(i1377[2], i1377[3], 0, i1376, 'outPoint')
  i1376.autoReturnToPoint = !!i1377[4]
  i1376.dragOffsetY = i1377[5]
  i1376.dragRotationAngle = i1377[6]
  i1376.onDragStarted = request.d('UnityEngine.Events.UnityEvent', i1377[7], i1376.onDragStarted)
  i1376.onDragReleased = request.d('UnityEngine.Events.UnityEvent', i1377[8], i1376.onDragReleased)
  var i1379 = i1377[9]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 2) {
  request.r(i1379[i + 0], i1379[i + 1], 2, i1378, '')
  }
  i1376.spriteRenderers = i1378
  i1376.clickOrder = i1377[10]
  i1376.isBlocked = !!i1377[11]
  i1376.minY = i1377[12]
  i1376.maxY = i1377[13]
  return i1376
}

Deserializers["LTPHUONG.CounterEvent"] = function (request, data, root) {
  var i1380 = root || request.c( 'LTPHUONG.CounterEvent' )
  var i1381 = data
  i1380.OnTargetReached = request.d('UnityEngine.Events.UnityEvent', i1381[0], i1380.OnTargetReached)
  i1380.targetCount = i1381[1]
  i1380.delay = i1381[2]
  request.r(i1381[3], i1381[4], 0, i1380, 'sfx')
  return i1380
}

Deserializers["LTPHUONG.ClickableObject"] = function (request, data, root) {
  var i1382 = root || request.c( 'LTPHUONG.ClickableObject' )
  var i1383 = data
  i1382.onClick = request.d('UnityEngine.Events.UnityEvent', i1383[0], i1382.onClick)
  request.r(i1383[1], i1383[2], 0, i1382, 'clickSound')
  var i1385 = i1383[3]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 2) {
  request.r(i1385[i + 0], i1385[i + 1], 2, i1384, '')
  }
  i1382.spriteRenderers = i1384
  i1382.clickOrder = i1383[4]
  i1382.isBlocked = !!i1383[5]
  return i1382
}

Deserializers["LTPHUONG.GarbageGroup"] = function (request, data, root) {
  var i1386 = root || request.c( 'LTPHUONG.GarbageGroup' )
  var i1387 = data
  i1386.OnAllTrashed = request.d('UnityEngine.Events.UnityEvent', i1387[0], i1386.OnAllTrashed)
  var i1389 = i1387[1]
  var i1388 = new (System.Collections.Generic.List$1(Bridge.ns('LTPHUONG.GarbageItem')))
  for(var i = 0; i < i1389.length; i += 2) {
  request.r(i1389[i + 0], i1389[i + 1], 1, i1388, '')
  }
  i1386.items = i1388
  return i1386
}

Deserializers["LTPHUONG.GarbageItem"] = function (request, data, root) {
  var i1392 = root || request.c( 'LTPHUONG.GarbageItem' )
  var i1393 = data
  i1392.OnPeeled = request.d('UnityEngine.Events.UnityEvent', i1393[0], i1392.OnPeeled)
  i1392.OnTrashed = request.d('UnityEngine.Events.UnityEvent', i1393[1], i1392.OnTrashed)
  i1392.enablePeel = !!i1393[2]
  request.r(i1393[3], i1393[4], 0, i1392, 'pickSfx')
  request.r(i1393[5], i1393[6], 0, i1392, 'peelSnapSfx')
  request.r(i1393[7], i1393[8], 0, i1392, 'flyUpSfx')
  request.r(i1393[9], i1393[10], 0, i1392, 'dropInBinSfx')
  i1392.minLayer = i1393[11]
  i1392.dragOffsetY = i1393[12]
  var i1395 = i1393[13]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 2) {
  request.r(i1395[i + 0], i1395[i + 1], 2, i1394, '')
  }
  i1392.spriteRenderers = i1394
  i1392.clickOrder = i1393[14]
  i1392.isBlocked = !!i1393[15]
  i1392.minY = i1393[16]
  i1392.maxY = i1393[17]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1397 = data
  i1396.usedByComposite = !!i1397[0]
  i1396.autoTiling = !!i1397[1]
  i1396.size = new pc.Vec2( i1397[2], i1397[3] )
  i1396.edgeRadius = i1397[4]
  i1396.enabled = !!i1397[5]
  i1396.isTrigger = !!i1397[6]
  i1396.usedByEffector = !!i1397[7]
  i1396.density = i1397[8]
  i1396.offset = new pc.Vec2( i1397[9], i1397[10] )
  request.r(i1397[11], i1397[12], 0, i1396, 'material')
  return i1396
}

Deserializers["LTPHUONG.RevealImage"] = function (request, data, root) {
  var i1398 = root || request.c( 'LTPHUONG.RevealImage' )
  var i1399 = data
  i1398.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1399[0], i1398.OnComplete)
  request.r(i1399[1], i1399[2], 0, i1398, 'spriteRenderer')
  request.r(i1399[3], i1399[4], 0, i1398, 'revealMaterial')
  i1398.textureSize = i1399[5]
  i1398.brushRadius = i1399[6]
  i1398.threshold = i1399[7]
  i1398.eraseMode = !!i1399[8]
  i1398.paintEnabled = !!i1399[9]
  request.r(i1399[10], i1399[11], 0, i1398, 'completeSfx')
  return i1398
}

Deserializers["LTPHUONG.RevealPen"] = function (request, data, root) {
  var i1400 = root || request.c( 'LTPHUONG.RevealPen' )
  var i1401 = data
  request.r(i1401[0], i1401[1], 0, i1400, 'penTip')
  var i1403 = i1401[2]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 2) {
  request.r(i1403[i + 0], i1403[i + 1], 2, i1402, '')
  }
  i1400.revealImages = i1402
  i1400.paintInterval = i1401[3]
  i1400.onDragStarted = request.d('UnityEngine.Events.UnityEvent', i1401[4], i1400.onDragStarted)
  i1400.onDragReleased = request.d('UnityEngine.Events.UnityEvent', i1401[5], i1400.onDragReleased)
  var i1405 = i1401[6]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 2) {
  request.r(i1405[i + 0], i1405[i + 1], 2, i1404, '')
  }
  i1400.spriteRenderers = i1404
  i1400.clickOrder = i1401[7]
  i1400.isBlocked = !!i1401[8]
  request.r(i1401[9], i1401[10], 0, i1400, 'inPoint')
  request.r(i1401[11], i1401[12], 0, i1400, 'outPoint')
  i1400.autoReturnToPoint = !!i1401[13]
  i1400.dragOffsetY = i1401[14]
  i1400.dragRotationAngle = i1401[15]
  i1400.minY = i1401[16]
  i1400.maxY = i1401[17]
  return i1400
}

Deserializers["LTPHUONG.DragSpeedSound"] = function (request, data, root) {
  var i1408 = root || request.c( 'LTPHUONG.DragSpeedSound' )
  var i1409 = data
  var i1411 = i1409[0]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 2) {
  request.r(i1411[i + 0], i1411[i + 1], 2, i1410, '')
  }
  i1408.targetZones = i1410
  request.r(i1409[1], i1409[2], 0, i1408, 'audioSource')
  request.r(i1409[3], i1409[4], 0, i1408, 'particleObject')
  i1408.volume = i1409[5]
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1415 = data
  i1414.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1415[0], i1414.main)
  i1414.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1415[1], i1414.colorBySpeed)
  i1414.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1415[2], i1414.colorOverLifetime)
  i1414.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1415[3], i1414.emission)
  i1414.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1415[4], i1414.rotationBySpeed)
  i1414.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1415[5], i1414.rotationOverLifetime)
  i1414.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1415[6], i1414.shape)
  i1414.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1415[7], i1414.sizeBySpeed)
  i1414.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1415[8], i1414.sizeOverLifetime)
  i1414.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1415[9], i1414.textureSheetAnimation)
  i1414.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1415[10], i1414.velocityOverLifetime)
  i1414.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1415[11], i1414.noise)
  i1414.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1415[12], i1414.inheritVelocity)
  i1414.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1415[13], i1414.forceOverLifetime)
  i1414.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1415[14], i1414.limitVelocityOverLifetime)
  i1414.useAutoRandomSeed = !!i1415[15]
  i1414.randomSeed = i1415[16]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1416 = root || new pc.ParticleSystemMain()
  var i1417 = data
  i1416.duration = i1417[0]
  i1416.loop = !!i1417[1]
  i1416.prewarm = !!i1417[2]
  i1416.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[3], i1416.startDelay)
  i1416.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[4], i1416.startLifetime)
  i1416.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[5], i1416.startSpeed)
  i1416.startSize3D = !!i1417[6]
  i1416.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[7], i1416.startSizeX)
  i1416.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[8], i1416.startSizeY)
  i1416.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[9], i1416.startSizeZ)
  i1416.startRotation3D = !!i1417[10]
  i1416.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[11], i1416.startRotationX)
  i1416.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[12], i1416.startRotationY)
  i1416.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[13], i1416.startRotationZ)
  i1416.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1417[14], i1416.startColor)
  i1416.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[15], i1416.gravityModifier)
  i1416.simulationSpace = i1417[16]
  request.r(i1417[17], i1417[18], 0, i1416, 'customSimulationSpace')
  i1416.simulationSpeed = i1417[19]
  i1416.useUnscaledTime = !!i1417[20]
  i1416.scalingMode = i1417[21]
  i1416.playOnAwake = !!i1417[22]
  i1416.maxParticles = i1417[23]
  i1416.emitterVelocityMode = i1417[24]
  i1416.stopAction = i1417[25]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1418 = root || new pc.MinMaxCurve()
  var i1419 = data
  i1418.mode = i1419[0]
  i1418.curveMin = new pc.AnimationCurve( { keys_flow: i1419[1] } )
  i1418.curveMax = new pc.AnimationCurve( { keys_flow: i1419[2] } )
  i1418.curveMultiplier = i1419[3]
  i1418.constantMin = i1419[4]
  i1418.constantMax = i1419[5]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1420 = root || new pc.MinMaxGradient()
  var i1421 = data
  i1420.mode = i1421[0]
  i1420.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1421[1], i1420.gradientMin)
  i1420.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1421[2], i1420.gradientMax)
  i1420.colorMin = new pc.Color(i1421[3], i1421[4], i1421[5], i1421[6])
  i1420.colorMax = new pc.Color(i1421[7], i1421[8], i1421[9], i1421[10])
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1423 = data
  i1422.mode = i1423[0]
  var i1425 = i1423[1]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1425[i + 0]) );
  }
  i1422.colorKeys = i1424
  var i1427 = i1423[2]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1427[i + 0]) );
  }
  i1422.alphaKeys = i1426
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1428 = root || new pc.ParticleSystemColorBySpeed()
  var i1429 = data
  i1428.enabled = !!i1429[0]
  i1428.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1429[1], i1428.color)
  i1428.range = new pc.Vec2( i1429[2], i1429[3] )
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1433 = data
  i1432.color = new pc.Color(i1433[0], i1433[1], i1433[2], i1433[3])
  i1432.time = i1433[4]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1437 = data
  i1436.alpha = i1437[0]
  i1436.time = i1437[1]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1438 = root || new pc.ParticleSystemColorOverLifetime()
  var i1439 = data
  i1438.enabled = !!i1439[0]
  i1438.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1439[1], i1438.color)
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1440 = root || new pc.ParticleSystemEmitter()
  var i1441 = data
  i1440.enabled = !!i1441[0]
  i1440.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[1], i1440.rateOverTime)
  i1440.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[2], i1440.rateOverDistance)
  var i1443 = i1441[3]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1443[i + 0]) );
  }
  i1440.bursts = i1442
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1446 = root || new pc.ParticleSystemBurst()
  var i1447 = data
  i1446.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[0], i1446.count)
  i1446.cycleCount = i1447[1]
  i1446.minCount = i1447[2]
  i1446.maxCount = i1447[3]
  i1446.repeatInterval = i1447[4]
  i1446.time = i1447[5]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1448 = root || new pc.ParticleSystemRotationBySpeed()
  var i1449 = data
  i1448.enabled = !!i1449[0]
  i1448.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1449[1], i1448.x)
  i1448.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1449[2], i1448.y)
  i1448.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1449[3], i1448.z)
  i1448.separateAxes = !!i1449[4]
  i1448.range = new pc.Vec2( i1449[5], i1449[6] )
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1450 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1451 = data
  i1450.enabled = !!i1451[0]
  i1450.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[1], i1450.x)
  i1450.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[2], i1450.y)
  i1450.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[3], i1450.z)
  i1450.separateAxes = !!i1451[4]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1452 = root || new pc.ParticleSystemShape()
  var i1453 = data
  i1452.enabled = !!i1453[0]
  i1452.shapeType = i1453[1]
  i1452.randomDirectionAmount = i1453[2]
  i1452.sphericalDirectionAmount = i1453[3]
  i1452.randomPositionAmount = i1453[4]
  i1452.alignToDirection = !!i1453[5]
  i1452.radius = i1453[6]
  i1452.radiusMode = i1453[7]
  i1452.radiusSpread = i1453[8]
  i1452.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[9], i1452.radiusSpeed)
  i1452.radiusThickness = i1453[10]
  i1452.angle = i1453[11]
  i1452.length = i1453[12]
  i1452.boxThickness = new pc.Vec3( i1453[13], i1453[14], i1453[15] )
  i1452.meshShapeType = i1453[16]
  request.r(i1453[17], i1453[18], 0, i1452, 'mesh')
  request.r(i1453[19], i1453[20], 0, i1452, 'meshRenderer')
  request.r(i1453[21], i1453[22], 0, i1452, 'skinnedMeshRenderer')
  i1452.useMeshMaterialIndex = !!i1453[23]
  i1452.meshMaterialIndex = i1453[24]
  i1452.useMeshColors = !!i1453[25]
  i1452.normalOffset = i1453[26]
  i1452.arc = i1453[27]
  i1452.arcMode = i1453[28]
  i1452.arcSpread = i1453[29]
  i1452.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[30], i1452.arcSpeed)
  i1452.donutRadius = i1453[31]
  i1452.position = new pc.Vec3( i1453[32], i1453[33], i1453[34] )
  i1452.rotation = new pc.Vec3( i1453[35], i1453[36], i1453[37] )
  i1452.scale = new pc.Vec3( i1453[38], i1453[39], i1453[40] )
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1454 = root || new pc.ParticleSystemSizeBySpeed()
  var i1455 = data
  i1454.enabled = !!i1455[0]
  i1454.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[1], i1454.x)
  i1454.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[2], i1454.y)
  i1454.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[3], i1454.z)
  i1454.separateAxes = !!i1455[4]
  i1454.range = new pc.Vec2( i1455[5], i1455[6] )
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1456 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1457 = data
  i1456.enabled = !!i1457[0]
  i1456.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1457[1], i1456.x)
  i1456.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1457[2], i1456.y)
  i1456.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1457[3], i1456.z)
  i1456.separateAxes = !!i1457[4]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1458 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1459 = data
  i1458.enabled = !!i1459[0]
  i1458.mode = i1459[1]
  i1458.animation = i1459[2]
  i1458.numTilesX = i1459[3]
  i1458.numTilesY = i1459[4]
  i1458.useRandomRow = !!i1459[5]
  i1458.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[6], i1458.frameOverTime)
  i1458.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[7], i1458.startFrame)
  i1458.cycleCount = i1459[8]
  i1458.rowIndex = i1459[9]
  i1458.flipU = i1459[10]
  i1458.flipV = i1459[11]
  i1458.spriteCount = i1459[12]
  var i1461 = i1459[13]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 2) {
  request.r(i1461[i + 0], i1461[i + 1], 2, i1460, '')
  }
  i1458.sprites = i1460
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1464 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1465 = data
  i1464.enabled = !!i1465[0]
  i1464.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[1], i1464.x)
  i1464.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[2], i1464.y)
  i1464.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[3], i1464.z)
  i1464.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[4], i1464.radial)
  i1464.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[5], i1464.speedModifier)
  i1464.space = i1465[6]
  i1464.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[7], i1464.orbitalX)
  i1464.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[8], i1464.orbitalY)
  i1464.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[9], i1464.orbitalZ)
  i1464.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[10], i1464.orbitalOffsetX)
  i1464.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[11], i1464.orbitalOffsetY)
  i1464.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[12], i1464.orbitalOffsetZ)
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1466 = root || new pc.ParticleSystemNoise()
  var i1467 = data
  i1466.enabled = !!i1467[0]
  i1466.separateAxes = !!i1467[1]
  i1466.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[2], i1466.strengthX)
  i1466.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[3], i1466.strengthY)
  i1466.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[4], i1466.strengthZ)
  i1466.frequency = i1467[5]
  i1466.damping = !!i1467[6]
  i1466.octaveCount = i1467[7]
  i1466.octaveMultiplier = i1467[8]
  i1466.octaveScale = i1467[9]
  i1466.quality = i1467[10]
  i1466.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[11], i1466.scrollSpeed)
  i1466.scrollSpeedMultiplier = i1467[12]
  i1466.remapEnabled = !!i1467[13]
  i1466.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[14], i1466.remapX)
  i1466.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[15], i1466.remapY)
  i1466.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[16], i1466.remapZ)
  i1466.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[17], i1466.positionAmount)
  i1466.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[18], i1466.rotationAmount)
  i1466.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[19], i1466.sizeAmount)
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1468 = root || new pc.ParticleSystemInheritVelocity()
  var i1469 = data
  i1468.enabled = !!i1469[0]
  i1468.mode = i1469[1]
  i1468.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1469[2], i1468.curve)
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1470 = root || new pc.ParticleSystemForceOverLifetime()
  var i1471 = data
  i1470.enabled = !!i1471[0]
  i1470.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1471[1], i1470.x)
  i1470.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1471[2], i1470.y)
  i1470.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1471[3], i1470.z)
  i1470.space = i1471[4]
  i1470.randomized = !!i1471[5]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1472 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1473 = data
  i1472.enabled = !!i1473[0]
  i1472.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1473[1], i1472.limit)
  i1472.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1473[2], i1472.limitX)
  i1472.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1473[3], i1472.limitY)
  i1472.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1473[4], i1472.limitZ)
  i1472.dampen = i1473[5]
  i1472.separateAxes = !!i1473[6]
  i1472.space = i1473[7]
  i1472.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1473[8], i1472.drag)
  i1472.multiplyDragByParticleSize = !!i1473[9]
  i1472.multiplyDragByParticleVelocity = !!i1473[10]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1475 = data
  request.r(i1475[0], i1475[1], 0, i1474, 'mesh')
  i1474.meshCount = i1475[2]
  i1474.activeVertexStreamsCount = i1475[3]
  i1474.alignment = i1475[4]
  i1474.renderMode = i1475[5]
  i1474.sortMode = i1475[6]
  i1474.lengthScale = i1475[7]
  i1474.velocityScale = i1475[8]
  i1474.cameraVelocityScale = i1475[9]
  i1474.normalDirection = i1475[10]
  i1474.sortingFudge = i1475[11]
  i1474.minParticleSize = i1475[12]
  i1474.maxParticleSize = i1475[13]
  i1474.pivot = new pc.Vec3( i1475[14], i1475[15], i1475[16] )
  request.r(i1475[17], i1475[18], 0, i1474, 'trailMaterial')
  i1474.applyActiveColorSpace = !!i1475[19]
  i1474.enabled = !!i1475[20]
  request.r(i1475[21], i1475[22], 0, i1474, 'sharedMaterial')
  var i1477 = i1475[23]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 2) {
  request.r(i1477[i + 0], i1477[i + 1], 2, i1476, '')
  }
  i1474.sharedMaterials = i1476
  i1474.receiveShadows = !!i1475[24]
  i1474.shadowCastingMode = i1475[25]
  i1474.sortingLayerID = i1475[26]
  i1474.sortingOrder = i1475[27]
  i1474.lightmapIndex = i1475[28]
  i1474.lightmapSceneIndex = i1475[29]
  i1474.lightmapScaleOffset = new pc.Vec4( i1475[30], i1475[31], i1475[32], i1475[33] )
  i1474.lightProbeUsage = i1475[34]
  i1474.reflectionProbeUsage = i1475[35]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1479 = data
  i1478.ambientIntensity = i1479[0]
  i1478.reflectionIntensity = i1479[1]
  i1478.ambientMode = i1479[2]
  i1478.ambientLight = new pc.Color(i1479[3], i1479[4], i1479[5], i1479[6])
  i1478.ambientSkyColor = new pc.Color(i1479[7], i1479[8], i1479[9], i1479[10])
  i1478.ambientGroundColor = new pc.Color(i1479[11], i1479[12], i1479[13], i1479[14])
  i1478.ambientEquatorColor = new pc.Color(i1479[15], i1479[16], i1479[17], i1479[18])
  i1478.fogColor = new pc.Color(i1479[19], i1479[20], i1479[21], i1479[22])
  i1478.fogEndDistance = i1479[23]
  i1478.fogStartDistance = i1479[24]
  i1478.fogDensity = i1479[25]
  i1478.fog = !!i1479[26]
  request.r(i1479[27], i1479[28], 0, i1478, 'skybox')
  i1478.fogMode = i1479[29]
  var i1481 = i1479[30]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1481[i + 0]) );
  }
  i1478.lightmaps = i1480
  i1478.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1479[31], i1478.lightProbes)
  i1478.lightmapsMode = i1479[32]
  i1478.mixedBakeMode = i1479[33]
  i1478.environmentLightingMode = i1479[34]
  i1478.ambientProbe = new pc.SphericalHarmonicsL2(i1479[35])
  i1478.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1479[36])
  i1478.useReferenceAmbientProbe = !!i1479[37]
  request.r(i1479[38], i1479[39], 0, i1478, 'customReflection')
  request.r(i1479[40], i1479[41], 0, i1478, 'defaultReflection')
  i1478.defaultReflectionMode = i1479[42]
  i1478.defaultReflectionResolution = i1479[43]
  i1478.sunLightObjectId = i1479[44]
  i1478.pixelLightCount = i1479[45]
  i1478.defaultReflectionHDR = !!i1479[46]
  i1478.hasLightDataAsset = !!i1479[47]
  i1478.hasManualGenerate = !!i1479[48]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1485 = data
  request.r(i1485[0], i1485[1], 0, i1484, 'lightmapColor')
  request.r(i1485[2], i1485[3], 0, i1484, 'lightmapDirection')
  request.r(i1485[4], i1485[5], 0, i1484, 'shadowMask')
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1486 = root || new UnityEngine.LightProbes()
  var i1487 = data
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1495 = data
  var i1497 = i1495[0]
  var i1496 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1497[i + 0]));
  }
  i1494.ShaderCompilationErrors = i1496
  i1494.name = i1495[1]
  i1494.guid = i1495[2]
  var i1499 = i1495[3]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( i1499[i + 0] );
  }
  i1494.shaderDefinedKeywords = i1498
  var i1501 = i1495[4]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1501[i + 0]) );
  }
  i1494.passes = i1500
  var i1503 = i1495[5]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1503[i + 0]) );
  }
  i1494.usePasses = i1502
  var i1505 = i1495[6]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1505[i + 0]) );
  }
  i1494.defaultParameterValues = i1504
  request.r(i1495[7], i1495[8], 0, i1494, 'unityFallbackShader')
  i1494.readDepth = !!i1495[9]
  i1494.hasDepthOnlyPass = !!i1495[10]
  i1494.isCreatedByShaderGraph = !!i1495[11]
  i1494.disableBatching = !!i1495[12]
  i1494.compiled = !!i1495[13]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1509 = data
  i1508.shaderName = i1509[0]
  i1508.errorMessage = i1509[1]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1514 = root || new pc.UnityShaderPass()
  var i1515 = data
  i1514.id = i1515[0]
  i1514.subShaderIndex = i1515[1]
  i1514.name = i1515[2]
  i1514.passType = i1515[3]
  i1514.grabPassTextureName = i1515[4]
  i1514.usePass = !!i1515[5]
  i1514.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1515[6], i1514.zTest)
  i1514.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1515[7], i1514.zWrite)
  i1514.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1515[8], i1514.culling)
  i1514.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1515[9], i1514.blending)
  i1514.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1515[10], i1514.alphaBlending)
  i1514.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1515[11], i1514.colorWriteMask)
  i1514.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1515[12], i1514.offsetUnits)
  i1514.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1515[13], i1514.offsetFactor)
  i1514.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1515[14], i1514.stencilRef)
  i1514.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1515[15], i1514.stencilReadMask)
  i1514.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1515[16], i1514.stencilWriteMask)
  i1514.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1515[17], i1514.stencilOp)
  i1514.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1515[18], i1514.stencilOpFront)
  i1514.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1515[19], i1514.stencilOpBack)
  var i1517 = i1515[20]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1517[i + 0]) );
  }
  i1514.tags = i1516
  var i1519 = i1515[21]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.push( i1519[i + 0] );
  }
  i1514.passDefinedKeywords = i1518
  var i1521 = i1515[22]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1521[i + 0]) );
  }
  i1514.passDefinedKeywordGroups = i1520
  var i1523 = i1515[23]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1523[i + 0]) );
  }
  i1514.variants = i1522
  var i1525 = i1515[24]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1525[i + 0]) );
  }
  i1514.excludedVariants = i1524
  i1514.hasDepthReader = !!i1515[25]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1527 = data
  i1526.val = i1527[0]
  i1526.name = i1527[1]
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1529 = data
  i1528.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1529[0], i1528.src)
  i1528.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1529[1], i1528.dst)
  i1528.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1529[2], i1528.op)
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1531 = data
  i1530.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1531[0], i1530.pass)
  i1530.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1531[1], i1530.fail)
  i1530.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1531[2], i1530.zFail)
  i1530.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1531[3], i1530.comp)
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1535 = data
  i1534.name = i1535[0]
  i1534.value = i1535[1]
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1539 = data
  var i1541 = i1539[0]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( i1541[i + 0] );
  }
  i1538.keywords = i1540
  i1538.hasDiscard = !!i1539[1]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1545 = data
  i1544.passId = i1545[0]
  i1544.subShaderIndex = i1545[1]
  var i1547 = i1545[2]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( i1547[i + 0] );
  }
  i1544.keywords = i1546
  i1544.vertexProgram = i1545[3]
  i1544.fragmentProgram = i1545[4]
  i1544.exportedForWebGl2 = !!i1545[5]
  i1544.readDepth = !!i1545[6]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1551 = data
  request.r(i1551[0], i1551[1], 0, i1550, 'shader')
  i1550.pass = i1551[2]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1555 = data
  i1554.name = i1555[0]
  i1554.type = i1555[1]
  i1554.value = new pc.Vec4( i1555[2], i1555[3], i1555[4], i1555[5] )
  i1554.textureValue = i1555[6]
  i1554.shaderPropertyFlag = i1555[7]
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1557 = data
  i1556.name = i1557[0]
  request.r(i1557[1], i1557[2], 0, i1556, 'texture')
  i1556.aabb = i1557[3]
  i1556.vertices = i1557[4]
  i1556.triangles = i1557[5]
  i1556.textureRect = UnityEngine.Rect.MinMaxRect(i1557[6], i1557[7], i1557[8], i1557[9])
  i1556.packedRect = UnityEngine.Rect.MinMaxRect(i1557[10], i1557[11], i1557[12], i1557[13])
  i1556.border = new pc.Vec4( i1557[14], i1557[15], i1557[16], i1557[17] )
  i1556.transparency = i1557[18]
  i1556.bounds = i1557[19]
  i1556.pixelsPerUnit = i1557[20]
  i1556.textureWidth = i1557[21]
  i1556.textureHeight = i1557[22]
  i1556.nativeSize = new pc.Vec2( i1557[23], i1557[24] )
  i1556.pivot = new pc.Vec2( i1557[25], i1557[26] )
  i1556.textureRectOffset = new pc.Vec2( i1557[27], i1557[28] )
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1559 = data
  i1558.name = i1559[0]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1561 = data
  i1560.name = i1561[0]
  i1560.wrapMode = i1561[1]
  i1560.isLooping = !!i1561[2]
  i1560.length = i1561[3]
  var i1563 = i1561[4]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1563[i + 0]) );
  }
  i1560.curves = i1562
  var i1565 = i1561[5]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1565[i + 0]) );
  }
  i1560.events = i1564
  i1560.halfPrecision = !!i1561[6]
  i1560._frameRate = i1561[7]
  i1560.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1561[8], i1560.localBounds)
  i1560.hasMuscleCurves = !!i1561[9]
  var i1567 = i1561[10]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 1) {
    i1566.push( i1567[i + 0] );
  }
  i1560.clipMuscleConstant = i1566
  i1560.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1561[11], i1560.clipBindingConstant)
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1571 = data
  i1570.path = i1571[0]
  i1570.hash = i1571[1]
  i1570.componentType = i1571[2]
  i1570.property = i1571[3]
  i1570.keys = i1571[4]
  var i1573 = i1571[5]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1573[i + 0]) );
  }
  i1570.objectReferenceKeys = i1572
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1577 = data
  i1576.time = i1577[0]
  request.r(i1577[1], i1577[2], 0, i1576, 'value')
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1581 = data
  i1580.functionName = i1581[0]
  i1580.floatParameter = i1581[1]
  i1580.intParameter = i1581[2]
  i1580.stringParameter = i1581[3]
  request.r(i1581[4], i1581[5], 0, i1580, 'objectReferenceParameter')
  i1580.time = i1581[6]
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1583 = data
  i1582.center = new pc.Vec3( i1583[0], i1583[1], i1583[2] )
  i1582.extends = new pc.Vec3( i1583[3], i1583[4], i1583[5] )
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1587 = data
  var i1589 = i1587[0]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( i1589[i + 0] );
  }
  i1586.genericBindings = i1588
  var i1591 = i1587[1]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( i1591[i + 0] );
  }
  i1586.pptrCurveMapping = i1590
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1593 = data
  i1592.name = i1593[0]
  var i1595 = i1593[1]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1595[i + 0]) );
  }
  i1592.layers = i1594
  var i1597 = i1593[2]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1597[i + 0]) );
  }
  i1592.parameters = i1596
  i1592.animationClips = i1593[3]
  i1592.avatarUnsupported = i1593[4]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1601 = data
  i1600.name = i1601[0]
  i1600.defaultWeight = i1601[1]
  i1600.blendingMode = i1601[2]
  i1600.avatarMask = i1601[3]
  i1600.syncedLayerIndex = i1601[4]
  i1600.syncedLayerAffectsTiming = !!i1601[5]
  i1600.syncedLayers = i1601[6]
  i1600.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1601[7], i1600.stateMachine)
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1603 = data
  i1602.id = i1603[0]
  i1602.name = i1603[1]
  i1602.path = i1603[2]
  var i1605 = i1603[3]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1605[i + 0]) );
  }
  i1602.states = i1604
  var i1607 = i1603[4]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1607[i + 0]) );
  }
  i1602.machines = i1606
  var i1609 = i1603[5]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1609[i + 0]) );
  }
  i1602.entryStateTransitions = i1608
  var i1611 = i1603[6]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1611[i + 0]) );
  }
  i1602.exitStateTransitions = i1610
  var i1613 = i1603[7]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1613[i + 0]) );
  }
  i1602.anyStateTransitions = i1612
  i1602.defaultStateId = i1603[8]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1617 = data
  i1616.id = i1617[0]
  i1616.name = i1617[1]
  i1616.cycleOffset = i1617[2]
  i1616.cycleOffsetParameter = i1617[3]
  i1616.cycleOffsetParameterActive = !!i1617[4]
  i1616.mirror = !!i1617[5]
  i1616.mirrorParameter = i1617[6]
  i1616.mirrorParameterActive = !!i1617[7]
  i1616.motionId = i1617[8]
  i1616.nameHash = i1617[9]
  i1616.fullPathHash = i1617[10]
  i1616.speed = i1617[11]
  i1616.speedParameter = i1617[12]
  i1616.speedParameterActive = !!i1617[13]
  i1616.tag = i1617[14]
  i1616.tagHash = i1617[15]
  i1616.writeDefaultValues = !!i1617[16]
  var i1619 = i1617[17]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 2) {
  request.r(i1619[i + 0], i1619[i + 1], 2, i1618, '')
  }
  i1616.behaviours = i1618
  var i1621 = i1617[18]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1621[i + 0]) );
  }
  i1616.transitions = i1620
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1627 = data
  i1626.fullPath = i1627[0]
  i1626.canTransitionToSelf = !!i1627[1]
  i1626.duration = i1627[2]
  i1626.exitTime = i1627[3]
  i1626.hasExitTime = !!i1627[4]
  i1626.hasFixedDuration = !!i1627[5]
  i1626.interruptionSource = i1627[6]
  i1626.offset = i1627[7]
  i1626.orderedInterruption = !!i1627[8]
  i1626.destinationStateId = i1627[9]
  i1626.isExit = !!i1627[10]
  i1626.mute = !!i1627[11]
  i1626.solo = !!i1627[12]
  var i1629 = i1627[13]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1629[i + 0]) );
  }
  i1626.conditions = i1628
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1635 = data
  i1634.destinationStateId = i1635[0]
  i1634.isExit = !!i1635[1]
  i1634.mute = !!i1635[2]
  i1634.solo = !!i1635[3]
  var i1637 = i1635[4]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1637[i + 0]) );
  }
  i1634.conditions = i1636
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1641 = data
  i1640.defaultBool = !!i1641[0]
  i1640.defaultFloat = i1641[1]
  i1640.defaultInt = i1641[2]
  i1640.name = i1641[3]
  i1640.nameHash = i1641[4]
  i1640.type = i1641[5]
  return i1640
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1642 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1643 = data
  i1642.useSafeMode = !!i1643[0]
  i1642.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1643[1], i1642.safeModeOptions)
  i1642.timeScale = i1643[2]
  i1642.unscaledTimeScale = i1643[3]
  i1642.useSmoothDeltaTime = !!i1643[4]
  i1642.maxSmoothUnscaledTime = i1643[5]
  i1642.rewindCallbackMode = i1643[6]
  i1642.showUnityEditorReport = !!i1643[7]
  i1642.logBehaviour = i1643[8]
  i1642.drawGizmos = !!i1643[9]
  i1642.defaultRecyclable = !!i1643[10]
  i1642.defaultAutoPlay = i1643[11]
  i1642.defaultUpdateType = i1643[12]
  i1642.defaultTimeScaleIndependent = !!i1643[13]
  i1642.defaultEaseType = i1643[14]
  i1642.defaultEaseOvershootOrAmplitude = i1643[15]
  i1642.defaultEasePeriod = i1643[16]
  i1642.defaultAutoKill = !!i1643[17]
  i1642.defaultLoopType = i1643[18]
  i1642.debugMode = !!i1643[19]
  i1642.debugStoreTargetId = !!i1643[20]
  i1642.showPreviewPanel = !!i1643[21]
  i1642.storeSettingsLocation = i1643[22]
  i1642.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1643[23], i1642.modules)
  i1642.createASMDEF = !!i1643[24]
  i1642.showPlayingTweens = !!i1643[25]
  i1642.showPausedTweens = !!i1643[26]
  return i1642
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1644 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1645 = data
  i1644.logBehaviour = i1645[0]
  i1644.nestedTweenFailureBehaviour = i1645[1]
  return i1644
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1646 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1647 = data
  i1646.showPanel = !!i1647[0]
  i1646.audioEnabled = !!i1647[1]
  i1646.physicsEnabled = !!i1647[2]
  i1646.physics2DEnabled = !!i1647[3]
  i1646.spriteEnabled = !!i1647[4]
  i1646.uiEnabled = !!i1647[5]
  i1646.textMeshProEnabled = !!i1647[6]
  i1646.tk2DEnabled = !!i1647[7]
  i1646.deAudioEnabled = !!i1647[8]
  i1646.deUnityExtendedEnabled = !!i1647[9]
  i1646.epoOutlineEnabled = !!i1647[10]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1649 = data
  var i1651 = i1649[0]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1651[i + 0]) );
  }
  i1648.files = i1650
  i1648.componentToPrefabIds = i1649[1]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1655 = data
  i1654.path = i1655[0]
  request.r(i1655[1], i1655[2], 0, i1654, 'unityObject')
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1657 = data
  var i1659 = i1657[0]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1659[i + 0]) );
  }
  i1656.scriptsExecutionOrder = i1658
  var i1661 = i1657[1]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1661[i + 0]) );
  }
  i1656.sortingLayers = i1660
  var i1663 = i1657[2]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1663[i + 0]) );
  }
  i1656.cullingLayers = i1662
  i1656.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1657[3], i1656.timeSettings)
  i1656.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1657[4], i1656.physicsSettings)
  i1656.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1657[5], i1656.physics2DSettings)
  i1656.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1657[6], i1656.qualitySettings)
  i1656.enableRealtimeShadows = !!i1657[7]
  i1656.enableAutoInstancing = !!i1657[8]
  i1656.enableStaticBatching = !!i1657[9]
  i1656.enableDynamicBatching = !!i1657[10]
  i1656.lightmapEncodingQuality = i1657[11]
  i1656.desiredColorSpace = i1657[12]
  var i1665 = i1657[13]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.push( i1665[i + 0] );
  }
  i1656.allTags = i1664
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1669 = data
  i1668.name = i1669[0]
  i1668.value = i1669[1]
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1673 = data
  i1672.id = i1673[0]
  i1672.name = i1673[1]
  i1672.value = i1673[2]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1677 = data
  i1676.id = i1677[0]
  i1676.name = i1677[1]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1679 = data
  i1678.fixedDeltaTime = i1679[0]
  i1678.maximumDeltaTime = i1679[1]
  i1678.timeScale = i1679[2]
  i1678.maximumParticleTimestep = i1679[3]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1681 = data
  i1680.gravity = new pc.Vec3( i1681[0], i1681[1], i1681[2] )
  i1680.defaultSolverIterations = i1681[3]
  i1680.bounceThreshold = i1681[4]
  i1680.autoSyncTransforms = !!i1681[5]
  i1680.autoSimulation = !!i1681[6]
  var i1683 = i1681[7]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1683[i + 0]) );
  }
  i1680.collisionMatrix = i1682
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1687 = data
  i1686.enabled = !!i1687[0]
  i1686.layerId = i1687[1]
  i1686.otherLayerId = i1687[2]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1689 = data
  request.r(i1689[0], i1689[1], 0, i1688, 'material')
  i1688.gravity = new pc.Vec2( i1689[2], i1689[3] )
  i1688.positionIterations = i1689[4]
  i1688.velocityIterations = i1689[5]
  i1688.velocityThreshold = i1689[6]
  i1688.maxLinearCorrection = i1689[7]
  i1688.maxAngularCorrection = i1689[8]
  i1688.maxTranslationSpeed = i1689[9]
  i1688.maxRotationSpeed = i1689[10]
  i1688.baumgarteScale = i1689[11]
  i1688.baumgarteTOIScale = i1689[12]
  i1688.timeToSleep = i1689[13]
  i1688.linearSleepTolerance = i1689[14]
  i1688.angularSleepTolerance = i1689[15]
  i1688.defaultContactOffset = i1689[16]
  i1688.autoSimulation = !!i1689[17]
  i1688.queriesHitTriggers = !!i1689[18]
  i1688.queriesStartInColliders = !!i1689[19]
  i1688.callbacksOnDisable = !!i1689[20]
  i1688.reuseCollisionCallbacks = !!i1689[21]
  i1688.autoSyncTransforms = !!i1689[22]
  var i1691 = i1689[23]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1691[i + 0]) );
  }
  i1688.collisionMatrix = i1690
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1695 = data
  i1694.enabled = !!i1695[0]
  i1694.layerId = i1695[1]
  i1694.otherLayerId = i1695[2]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1697 = data
  var i1699 = i1697[0]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1699[i + 0]) );
  }
  i1696.qualityLevels = i1698
  var i1701 = i1697[1]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( i1701[i + 0] );
  }
  i1696.names = i1700
  i1696.shadows = i1697[2]
  i1696.anisotropicFiltering = i1697[3]
  i1696.antiAliasing = i1697[4]
  i1696.lodBias = i1697[5]
  i1696.shadowCascades = i1697[6]
  i1696.shadowDistance = i1697[7]
  i1696.shadowmaskMode = i1697[8]
  i1696.shadowProjection = i1697[9]
  i1696.shadowResolution = i1697[10]
  i1696.softParticles = !!i1697[11]
  i1696.softVegetation = !!i1697[12]
  i1696.activeColorSpace = i1697[13]
  i1696.desiredColorSpace = i1697[14]
  i1696.masterTextureLimit = i1697[15]
  i1696.maxQueuedFrames = i1697[16]
  i1696.particleRaycastBudget = i1697[17]
  i1696.pixelLightCount = i1697[18]
  i1696.realtimeReflectionProbes = !!i1697[19]
  i1696.shadowCascade2Split = i1697[20]
  i1696.shadowCascade4Split = new pc.Vec3( i1697[21], i1697[22], i1697[23] )
  i1696.streamingMipmapsActive = !!i1697[24]
  i1696.vSyncCount = i1697[25]
  i1696.asyncUploadBufferSize = i1697[26]
  i1696.asyncUploadTimeSlice = i1697[27]
  i1696.billboardsFaceCameraPosition = !!i1697[28]
  i1696.shadowNearPlaneOffset = i1697[29]
  i1696.streamingMipmapsMemoryBudget = i1697[30]
  i1696.maximumLODLevel = i1697[31]
  i1696.streamingMipmapsAddAllCameras = !!i1697[32]
  i1696.streamingMipmapsMaxLevelReduction = i1697[33]
  i1696.streamingMipmapsRenderersPerFrame = i1697[34]
  i1696.resolutionScalingFixedDPIFactor = i1697[35]
  i1696.streamingMipmapsMaxFileIORequests = i1697[36]
  i1696.currentQualityLevel = i1697[37]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1707 = data
  i1706.mode = i1707[0]
  i1706.parameter = i1707[1]
  i1706.threshold = i1707[2]
  return i1706
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[4],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[4],"81":[82],"83":[84],"85":[84],"9":[8],"86":[8],"87":[88],"89":[90],"91":[4],"92":[8],"93":[82,8],"94":[8,15],"95":[8],"96":[15,8],"97":[82],"98":[15,8],"99":[8],"100":[4],"101":[4],"102":[103],"104":[88],"105":[20],"106":[8],"107":[8],"12":[9],"16":[15,8],"108":[8],"11":[9],"109":[8],"110":[8],"111":[8],"112":[8],"113":[8],"114":[8],"115":[8],"116":[8],"117":[8],"118":[15,8],"119":[8],"120":[8],"121":[8],"122":[8],"123":[15,8],"124":[8],"125":[18],"126":[18],"19":[18],"127":[18],"27":[4],"128":[4],"129":[88]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","LTPHUONG.GameState","LTPHUONG.ClickController","UnityEngine.Camera","LTPHUONG.AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","LTPHUONG.UIButtonPulse","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.Material","LTPHUONG.TutorialHand","LTPHUONG.SimpleTutorialManager","LTPHUONG.GarbageItem","LTPHUONG.TrashBin","UnityEngine.AudioListener","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.PolygonCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CircleCollider2D","LTPHUONG.FadeSprite","Satisgame.EmojiControl","LTPHUONG.ToolBase","LTPHUONG.CounterEvent","UnityEngine.GameObject","LTPHUONG.RevealPen","LTPHUONG.ClickableObject","LTPHUONG.GarbageGroup","UnityEngine.BoxCollider2D","LTPHUONG.RevealImage","LTPHUONG.DragSpeedSound","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "ply";

Deserializers.lunaInitializationTime = "03/26/2026 02:25:17";

Deserializers.lunaDaysRunning = "29.2";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "ply118";

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

Deserializers.buildID = "c1d7419d-b895-4b98-b056-6a2717d84bef";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

