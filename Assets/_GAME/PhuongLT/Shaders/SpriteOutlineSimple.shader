Shader "LTPHUONG/SpriteOutlineSimple"
{
    Properties
    {
        _MainTex      ("Sprite Texture", 2D)    = "white" {}
        _Color        ("Tint",           Color) = (1,1,1,1)
        _OutlineColor ("Outline Color",  Color) = (1,1,1,1)
        _OutlineSize  ("Outline Size",   Float) = 5
    }

    SubShader
    {
        Tags
        {
            "Queue"           = "Transparent"
            "RenderType"      = "Transparent"
            "IgnoreProjector" = "True"
            "PreviewType"     = "Plane"
        }

        Cull Off
        Lighting Off
        ZWrite Off
        Blend SrcAlpha OneMinusSrcAlpha

        Pass
        {
            CGPROGRAM
            #pragma vertex   vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct appdata
            {
                float4 vertex : POSITION;
                float4 color  : COLOR;
                float2 uv     : TEXCOORD0;
            };

            struct v2f
            {
                float4 vertex : SV_POSITION;
                float4 color  : COLOR;
                float2 uv     : TEXCOORD0;
            };

            sampler2D _MainTex;
            float4    _MainTex_ST;
            float4    _MainTex_TexelSize;
            fixed4    _Color;
            fixed4    _OutlineColor;
            float     _OutlineSize;

            v2f vert(appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv     = TRANSFORM_TEX(v.uv, _MainTex);
                o.color  = v.color * _Color;
                return o;
            }

            float sampleA(float2 uv) { return tex2D(_MainTex, uv).a; }

            fixed4 frag(v2f i) : SV_Target
            {
                fixed4 col = tex2D(_MainTex, i.uv) * i.color;

                float2 d = _MainTex_TexelSize.xy * _OutlineSize;

                // Lay alpha nho nhat trong 8 huong lan can
                float minA = col.a;
                minA = min(minA, sampleA(i.uv + float2( d.x,  0  )));
                minA = min(minA, sampleA(i.uv + float2(-d.x,  0  )));
                minA = min(minA, sampleA(i.uv + float2( 0,    d.y)));
                minA = min(minA, sampleA(i.uv + float2( 0,   -d.y)));
                minA = min(minA, sampleA(i.uv + float2( d.x,  d.y)));
                minA = min(minA, sampleA(i.uv + float2(-d.x,  d.y)));
                minA = min(minA, sampleA(i.uv + float2( d.x, -d.y)));
                minA = min(minA, sampleA(i.uv + float2(-d.x, -d.y)));

                // Pixel duc nam canh pixel trong suot = vien
                if (col.a > 0.01 && minA < 0.01)
                    return fixed4(_OutlineColor.rgb, _OutlineColor.a * col.a);

                return col;
            }
            ENDCG
        }
    }
}
