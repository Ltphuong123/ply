using UnityEngine;
using UnityEditor;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace LTPHUONG
{
    public class ImageGridPlacer : EditorWindow
    {
        private string folderPath = "Assets/";
        private int rows = 15;
        private int cols = 15;
        private float rowSpacing = 133f;
        private float colSpacing = 111f;
        private Vector2 startPosition = Vector2.zero;
        private int sortingOrder = 0;
        private Transform parentTransform;

        [MenuItem("Tools/Image Grid Placer")]
        public static void ShowWindow()
        {
            GetWindow<ImageGridPlacer>("Image Grid Placer");
        }

        private void OnGUI()
        {
            GUILayout.Label("Image Grid Placer", EditorStyles.boldLabel);
            GUILayout.Space(10);

            EditorGUILayout.HelpBox(
                "Chọn folder chứa ảnh, tool sẽ tạo SpriteRenderer và sắp xếp theo grid.",
                MessageType.Info);
            GUILayout.Space(5);

            // Folder selection
            EditorGUILayout.BeginHorizontal();
            folderPath = EditorGUILayout.TextField("Folder Path", folderPath);
            if (GUILayout.Button("Browse", GUILayout.Width(60)))
            {
                string selected = EditorUtility.OpenFolderPanel("Chọn folder ảnh", "Assets", "");
                if (!string.IsNullOrEmpty(selected))
                {
                    if (selected.StartsWith(Application.dataPath))
                        folderPath = "Assets" + selected.Substring(Application.dataPath.Length);
                }
            }
            EditorGUILayout.EndHorizontal();

            GUILayout.Space(5);
            rows = EditorGUILayout.IntField("Số hàng (Rows)", rows);
            cols = EditorGUILayout.IntField("Số cột (Cols)", cols);
            rowSpacing = EditorGUILayout.FloatField("Khoảng cách hàng", rowSpacing);
            colSpacing = EditorGUILayout.FloatField("Khoảng cách cột", colSpacing);
            startPosition = EditorGUILayout.Vector2Field("Vị trí bắt đầu", startPosition);
            sortingOrder = EditorGUILayout.IntField("Sorting Order bắt đầu", sortingOrder);
            parentTransform = (Transform)EditorGUILayout.ObjectField(
                "Parent (tuỳ chọn)", parentTransform, typeof(Transform), true);

            GUILayout.Space(15);

            if (GUILayout.Button("Tạo Grid", GUILayout.Height(35)))
            {
                PlaceImages();
            }

            GUILayout.Space(5);

            if (GUILayout.Button("Xoá tất cả con của Parent", GUILayout.Height(25)))
            {
                if (parentTransform != null)
                {
                    Undo.RegisterFullObjectHierarchyUndo(parentTransform.gameObject, "Clear Grid Children");
                    while (parentTransform.childCount > 0)
                        Undo.DestroyObjectImmediate(parentTransform.GetChild(0).gameObject);
                }
            }
        }

        private void PlaceImages()
        {
            if (!AssetDatabase.IsValidFolder(folderPath))
            {
                EditorUtility.DisplayDialog("Lỗi", "Folder không hợp lệ: " + folderPath, "OK");
                return;
            }

            // Tìm tất cả sprite trong folder
            string[] guids = AssetDatabase.FindAssets("t:Sprite", new[] { folderPath });
            if (guids.Length == 0)
            {
                // Thử tìm Texture2D nếu không có Sprite
                guids = AssetDatabase.FindAssets("t:Texture2D", new[] { folderPath });
            }

            if (guids.Length == 0)
            {
                EditorUtility.DisplayDialog("Lỗi", "Không tìm thấy ảnh nào trong folder.", "OK");
                return;
            }

            // Sắp xếp theo số thứ tự trong tên (vd: "grassland (1)", "grassland (2)"...)
            var assetPaths = guids
                .Select(g => AssetDatabase.GUIDToAssetPath(g))
                .OrderBy(p => ExtractNumber(Path.GetFileNameWithoutExtension(p)))
                .ToArray();

            // Tạo parent nếu chưa có
            Transform parent = parentTransform;
            if (parent == null)
            {
                GameObject parentGO = new GameObject("ImageGrid");
                Undo.RegisterCreatedObjectUndo(parentGO, "Create Image Grid");
                parent = parentGO.transform;
                parentTransform = parent;
            }

            Undo.RegisterFullObjectHierarchyUndo(parent.gameObject, "Place Image Grid");

            int totalSlots = rows * cols;
            int imageIndex = 0;

            for (int row = 0; row < rows; row++)
            {
                for (int col = 0; col < cols; col++)
                {
                    if (imageIndex >= assetPaths.Length)
                        return;

                    // Load sprite
                    Sprite sprite = AssetDatabase.LoadAssetAtPath<Sprite>(assetPaths[imageIndex]);
                    if (sprite == null)
                    {
                        // Nếu không load được Sprite, thử set import rồi load lại
                        TextureImporter importer = AssetImporter.GetAtPath(assetPaths[imageIndex]) as TextureImporter;
                        if (importer != null && importer.textureType != TextureImporterType.Sprite)
                        {
                            importer.textureType = TextureImporterType.Sprite;
                            importer.SaveAndReimport();
                            sprite = AssetDatabase.LoadAssetAtPath<Sprite>(assetPaths[imageIndex]);
                        }
                    }

                    if (sprite == null)
                    {
                        imageIndex++;
                        continue;
                    }

                    // Tính vị trí: cột theo X, hàng theo Y (đi xuống)
                    float x = startPosition.x + col * colSpacing;
                    float y = startPosition.y - row * rowSpacing;

                    GameObject go = new GameObject(sprite.name);
                    Undo.RegisterCreatedObjectUndo(go, "Create Grid Item");
                    go.transform.SetParent(parent);
                    go.transform.localPosition = new Vector3(x, y, 0);

                    SpriteRenderer sr = go.AddComponent<SpriteRenderer>();
                    sr.sprite = sprite;
                    sr.sortingOrder = sortingOrder + imageIndex;

                    imageIndex++;
                }
            }

            Debug.Log($"Đã đặt {imageIndex} ảnh lên scene theo grid {rows}x{cols}");
        }

        private int ExtractNumber(string fileName)
        {
            // Tìm số trong ngoặc: "grassland (1)" -> 1, hoặc số cuối tên: "grassland_1" -> 1
            Match match = Regex.Match(fileName, @"\((\d+)\)");
            if (match.Success)
                return int.Parse(match.Groups[1].Value);

            // Thử tìm số cuối cùng trong tên
            match = Regex.Match(fileName, @"(\d+)\s*$");
            if (match.Success)
                return int.Parse(match.Groups[1].Value);

            // Không có số -> trả 0
            return 0;
        }
    }
}
