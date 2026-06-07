using DG.Tweening;
using UnityEngine;

namespace LTPHUONG
{
    public class ButterflyMovement : MonoBehaviour
    {
        [Header("Movement")]
        [SerializeField] private Transform[] landingPoints;
        [SerializeField] private float flightSpeed = 2.5f;
        [SerializeField] private float arcRadius = 0.8f;
        [SerializeField] private float rotationSmoothTime = 0.15f;
        [SerializeField] private Vector2 landDurationRange = new(0.5f, 1f);
        [SerializeField] private int midWaypoints = 8;

        [Header("Wing Flap")]
        [SerializeField] private SpriteRenderer[] wingsOpen;
        [SerializeField] private SpriteRenderer[] wingsClosed;
        [SerializeField] private float flapDuration = 0.1f;

        private Transform tf;
        private Sequence moveSeq;
        private Sequence flapSeq;
        private int lastIndex = -1;
        private float currentAngle;
        private float angleVelocity;

        private void Awake() => tf = transform;

        private void Start()
        {
            StartWingFlap();
            if (landingPoints == null || landingPoints.Length == 0) return;
            FlyToNext();
        }

        // ── Wing Flap ────────────────────────────────────────────────

        private void StartWingFlap()
        {
            SetAlpha(wingsOpen, 1f);
            SetAlpha(wingsClosed, 0f);

            flapSeq?.Kill();
            flapSeq = DOTween.Sequence().SetLoops(-1);
            AppendFadePhase(fadeOut: wingsOpen, fadeIn: wingsClosed);
            AppendFadePhase(fadeOut: wingsClosed, fadeIn: wingsOpen);
        }

        private void AppendFadePhase(SpriteRenderer[] fadeOut, SpriteRenderer[] fadeIn)
        {
            bool isFirst = true;
            foreach (var sr in fadeOut)
            {
                var t = sr.DOFade(0f, flapDuration);
                if (isFirst) { flapSeq.Append(t); isFirst = false; }
                else flapSeq.Join(t);
            }
            foreach (var sr in fadeIn)
                flapSeq.Join(sr.DOFade(1f, flapDuration));
        }

        private void SetAlpha(SpriteRenderer[] sprites, float alpha)
        {
            foreach (var sr in sprites)
            {
                Color c = sr.color;
                c.a = alpha;
                sr.color = c;
            }
        }

        // ── Movement ─────────────────────────────────────────────────

        private void FlyToNext()
        {
            int idx = PickIndex();
            lastIndex = idx;

            Vector3 dest = landingPoints[idx].position;
            dest.z = tf.position.z;

            // Tính Bezier control points
            Vector3 origin = tf.position;
            Vector3 dir = (dest - origin).normalized;
            Vector3 perp = new(-dir.y, dir.x, 0f);
            float dist = Vector3.Distance(origin, dest);
            float radius = Mathf.Max(arcRadius, dist * 0.45f);
            float side = Random.value > 0.5f ? 1f : -1f;

            Vector3 cp1 = origin + dir * (dist * 0.3f) + perp * (side * radius);
            Vector3 cp2 = dest   - dir * (dist * 0.3f) + perp * (side * radius);

            Vector3[] path = SampleBezier(origin, cp1, cp2, dest);
            float flightTime = Mathf.Max(0.5f, ApproxPathLength(origin, path) / flightSpeed);
            float landTime = Random.Range(landDurationRange.x, landDurationRange.y);

            // Reset velocity khi bắt đầu đoạn mới, tránh quán tính sai hướng
            angleVelocity = 0f;
            Tween pathTween = null;

            moveSeq?.Kill();
            moveSeq = DOTween.Sequence();

            pathTween = tf.DOPath(path, flightTime, PathType.CatmullRom)
                .SetEase(Ease.InOutSine)
                .OnUpdate(() =>
                {
                    // Dùng tangent Bezier thay vì delta frame → mượt kể cả góc lớn
                    float t = Mathf.Clamp01(pathTween.ElapsedPercentage());
                    Vector3 tangent = BezierTangent(origin, cp1, cp2, dest, t);
                    if (tangent.sqrMagnitude > 0.001f)
                    {
                        float targetAngle = Mathf.Atan2(tangent.y, tangent.x) * Mathf.Rad2Deg;
                        currentAngle = Mathf.SmoothDampAngle(currentAngle, targetAngle, ref angleVelocity, rotationSmoothTime);
                        tf.rotation = Quaternion.Euler(0f, 0f, currentAngle);
                    }
                });

            moveSeq.Append(pathTween);
            moveSeq.AppendInterval(landTime);
            moveSeq.OnComplete(FlyToNext);
        }

        // Sample đều midWaypoints điểm từ Cubic Bezier
        private Vector3[] SampleBezier(Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3)
        {
            var points = new Vector3[midWaypoints + 1];
            for (int i = 0; i < midWaypoints; i++)
            {
                float t = (i + 1f) / (midWaypoints + 1f);
                points[i] = CubicBezier(p0, p1, p2, p3, t);
            }
            points[midWaypoints] = p3;
            return points;
        }

        private static Vector3 CubicBezier(Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3, float t)
        {
            float u = 1f - t;
            return u*u*u*p0 + 3f*u*u*t*p1 + 3f*u*t*t*p2 + t*t*t*p3;
        }

        // Đạo hàm Bezier = hướng tiếp tuyến tại t
        private static Vector3 BezierTangent(Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3, float t)
        {
            float u = 1f - t;
            return 3f*u*u*(p1-p0) + 6f*u*t*(p2-p1) + 3f*t*t*(p3-p2);
        }

        private float ApproxPathLength(Vector3 start, Vector3[] path)
        {
            float len = Vector3.Distance(start, path[0]);
            for (int i = 1; i < path.Length; i++)
                len += Vector3.Distance(path[i - 1], path[i]);
            return len;
        }

        private int PickIndex()
        {
            if (landingPoints.Length == 1) return 0;
            int idx;
            do { idx = Random.Range(0, landingPoints.Length); }
            while (idx == lastIndex);
            return idx;
        }

        private void OnDestroy()
        {
            moveSeq?.Kill();
            flapSeq?.Kill();
        }
    }
}
