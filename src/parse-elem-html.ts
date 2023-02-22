/**
 * 格式化 html 成 虚拟dom
 * @author zyh
 * @version 1.0
 * @since 2022-3-28
 */
import {SlateDescendant, IDomEditor} from "@wangeditor/editor";
import uuid from "./uuid";

function parseHtml(elem: any, children: Array<SlateDescendant>, editor: IDomEditor) {
  const width = elem.getAttribute("width") || "";
  const shape = elem.getAttribute("shape") || "line";
  return {
    type: "fill-blank",
    shape,
    style: {width},
    key: uuid(),
    children: [{text: ""}], // void node 必须有一个空白 text
  };
}

const parseHtmlConf = {
  selector: `input[data-w-e-type="fill-blank"]`,
  parseElemHtml: parseHtml,
}

export default parseHtmlConf
