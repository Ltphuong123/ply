Shader "LTPHUONG/SpriteOutline"
{
    Properties
    {
        _MainTex      ("Texture",           2D)    = "white" {}
        _OutlineColor ("Outline Color",     Color) = (1,1,1,1)
        _OutlineSize  ("Outline Size (px)", Float) = 2
        _InvExpand    ("Inv Expand",        Float) = 0.926  // 1 / outlineExpand, set from C#
    }
    SubShader
    {
        Tags { "Queue"="Transparent" "RenderType"="Transparent" "IgnoreProjector"="True" }
        Blend SrcAlpha OneMinusSrcAlpha
        ZWrite Off Cull Off Lighting Off

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct appdata { float4 vertex : POSITION; float2 uv : TEXCOORD0; float4 color : COLOR; };
            struct v2f    { float4 pos : SV_POSITION; float2 uv : TEXCOORD0; float4 color : COLOR; };

            sampler2D _MainTex;
            fixed4    _OutlineColor;
            float     _OutlineSize;
            float     _InvExpand;

            v2f vert(appdata v)
            {
                v2f o;
                // Chuyen sang clip space
                float4 clipPos    = UnityObjectToClipPos(v.vertex);
                float4 clipCenter = UnityObjectToClipPos(float4(0, 0, 0, 1));

                // Huong tu tam ra ngoai trong NDC
                float2 ndcVertex = clipPos.xy   / clipPos.w;
                float2 ndcCenter = clipCenter.xy / clipCenter.w;
                float2 dir       = normalize(ndcVertex - ndcCenter);

                // Day vertex ra ngoai dung N pixel man hinh (deu moi huong)
                clipPos.xy += dir * _OutlineSize * (2.0 / _ScreenParams.xy) * clipPos.w;

                o.pos   = clipPos;
                o.uv    = v.uv;
                o.color = v.color;
                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                // Tinh UV trong khong gian sprite goc (truoc khi expand)
                float2 origUV = float2(0.5, 0.5) + (i.uv - float2(0.5, 0.5)) * _InvExpand;

                // Ben trong sprite: trong suot, sprite goc hien ra phia duoi
                float ownA = tex2D(_MainTex, origUV).a;
                if (ownA > 0.01)
                    return fixed4(0, 0, 0, 0);

                // Vung bien: kiem tra pixel lan can bang screen-space derivative
                float2 dx = ddx(origUV) * _OutlineSize;
                float2 dy = ddy(origUV) * _OutlineSize;

                float maxA = 0;
                maxA = max(maxA, tex2D(_MainTex, origUV + dx              ).a);
                maxA = max(maxA, tex2D(_MainTex, origUV - dx              ).a);
                maxA = max(maxA, tex2D(_MainTex, origUV         + dy      ).a);
                maxA = max(maxA, tex2D(_MainTex, origUV         - dy      ).a);
                maxA = max(maxA, tex2D(_MainTex, origUV + dx    + dy      ).a);
                maxA = max(maxA, tex2D(_MainTex, origUV - dx    + dy      ).a);
                maxA = max(maxA, tex2D(_MainTex, origUV + dx    - dy      ).a);
                maxA = max(maxA, tex2D(_MainTex, origUV - dx    - dy      ).a);
                maxA = max(maxA, tex2D(_MainTex, origUV + dx*0.924 + dy*0.383).a);
                maxA = max(maxA, tex2D(_MainTex, origUV - dx*0.924 + dy*0.383).a);
                maxA = max(maxA, tex2D(_MainTex, origUV + dx*0.924 - dy*0.383).a);
                maxA = max(maxA, tex2D(_MainTex, origUV - dx*0.924 - dy*0.383).a);
                maxA = max(maxA, tex2D(_MainTex, origUV + dx*0.383 + dy*0.924).a);
                maxA = max(maxA, tex2D(_MainTex, origUV - dx*0.383 + dy*0.924).a);
                maxA = max(maxA, tex2D(_MainTex, origUV + dx*0.383 - dy*0.924).a);
                maxA = max(maxA, tex2D(_MainTex, origUV - dx*0.383 - dy*0.924).a);

                if (maxA > 0.01)
                    return fixed4(_OutlineColor.rgb, _OutlineColor.a * i.color.a);

                return fixed4(0, 0, 0, 0);
            }
            ENDCG
        }
    }
}
