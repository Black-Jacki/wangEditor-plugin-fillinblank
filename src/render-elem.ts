/**
 * 渲染自定义元素
 * @author zyh
 * @version 1.0
 * @since 2022-3-28
 */

import {h, VNode} from "snabbdom";
import {IDomEditor, SlateElement} from "@wangeditor/editor";

function renderFillBlank(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {
  // @ts-ignore
  const {width} = elem.style;
  const fillBlankVnode = h(
    "input",
    {style: {width, border: "none", borderBottom: "1px solid #f00", outline: "none"}, readOnly: true},
    null
  )

  return fillBlankVnode;
}

const config = {
  type: "fill-blank", // 节点 type ，重要！！！
  renderElem: renderFillBlank,
}

export default config;
