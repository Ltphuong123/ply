Shader "LTPHUONG/SpriteSilhouette"
{
    Properties
    {
        _MainTex ("Texture", 2D)   = "white" {}
        _Color   ("Color",   Color) = (1,1,1,1)
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

            struct appdata { float4 vertex:POSITION; float2 uv:TEXCOORD0; };
            struct v2f    { float4 pos:SV_POSITION;  float2 uv:TEXCOORD0; };

            sampler2D _MainTex;
            fixed4    _Color;

            v2f vert(appdata v) { v2f o; o.pos = UnityObjectToClipPos(v.vertex); o.uv = v.uv; return o; }

            fixed4 frag(v2f i) : SV_Target
            {
                float a = tex2D(_MainTex, i.uv).a;
                return fixed4(_Color.rgb, _Color.a * a);
            }
            ENDCG
        }
    }
}
