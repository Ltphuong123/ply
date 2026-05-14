using System.Collections.Generic;
using UnityEngine;

namespace LTPHUONG
{
    public class ToolBaseGroup : MonoBehaviour
    {
        [SerializeField] private List<ToolBase> tools = new();

        public void MoveInAll()
        {
            for (int i = 0; i < tools.Count; i++)
                if (tools[i] != null) tools[i].MoveIn();
        }

        public void MoveOutAll()
        {
            for (int i = 0; i < tools.Count; i++)
                if (tools[i] != null) tools[i].MoveOut();
        }
    }
}
