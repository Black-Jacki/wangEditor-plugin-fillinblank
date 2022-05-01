/**
 * 生成 html 的函数
 * @author zyh
 * @version 1.0
 * @since 2022-3-28
 */
import {IDomEditor} from "@wangeditor/editor";

function fillBlankToHtml(elem: any, childrenHtml: string, editor: IDomEditor | undefined): string {
  
  if (!editor) return "";
  
  const {width} = elem.style;

  const children = editor.getElemsByType("fill-blank");
  // @ts-ignore
  const index: number = children.findIndex(child => child["key"] === elem["key"]);

  const html: string = `<input data-w-e-type="fill-blank" width="${width}" index="${index}"/>`;
  return html;
}

// 配置
const config = {
  type: "fill-blank", // 节点 type ，重要！！！
  elemToHtml: fillBlankToHtml,
}

export default config;
