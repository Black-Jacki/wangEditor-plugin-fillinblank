/**
 * insert fill-blank menu
 * @author zyh
 * @version 1.0
 * @since 2022-3-28
 */

import {IButtonMenu, IDomEditor, DomEditor, t} from "@wangeditor/core";
import {SlateTransforms} from "@wangeditor/editor";
import {Editor} from "slate";
import {ICON_SVG} from "./icon_svg";
import uuid from "../uuid";

class InsertFillBlank implements IButtonMenu {
  readonly title = t("短空格");
  readonly iconSvg = ICON_SVG;
  readonly tag = "button";

  getValue(editor: IDomEditor): string | boolean {
    // 无需获取 val
    return "";
  }

  isActive(editor: IDomEditor): boolean {
    return false;
  }

  isDisabled(editor: IDomEditor): boolean {
    if (editor.selection == null) return true;

    const [match] = Editor.nodes(editor, {
      match: n => {
        const type = DomEditor.getNodeType(n)

        if (type === "pre") return true // 代码块
        if (Editor.isVoid(editor, n)) return true // void node

        return false;
      },
      universal: true,
    })

    // 命中，则禁用
    return !!match;
  }

  exec(editor: IDomEditor, value: string | boolean) {
    const fillBlankVnode = [
      {text: " "},
      {
        type: "fill-blank",
        style: {width: "80px"},
        key: uuid(),
        children: [{text: ""}], // void node 需要有一个空 text
      },
      {text: " "}
    ];
    SlateTransforms.insertNodes(editor, fillBlankVnode);
  }
}

export default InsertFillBlank;
