/**
 * 渲染自定义元素
 * @author zyh
 * @version 1.0
 * @since 2022-3-28
 */

import {h, VNode, VNodeData} from "snabbdom";
import {IDomEditor, SlateElement} from "@wangeditor/editor";

function renderFillBlank(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {
  // @ts-ignore
  const {shape = "line", style} = elem;
  const {width} = style;

  const shapeStyle: VNodeData = {
    line: {style: {width, border: "none", borderBottom: "1px solid #f00", outline: "none"}, readOnly: true},
    paren: {style: {width, border: "none", outline: "none"}, readOnly: true},
    rect: {style: {width, border: "1px solid #f00", outline: "none"}, readOnly: true},
  };

  const fillBlankVnode = h(
    "input",
    shapeStyle[shape],
    null
  )

  return fillBlankVnode;
}

const config = {
  type: "fill-blank", // 节点 type ，重要！！！
  renderElem: renderFillBlank,
}

export default config;
