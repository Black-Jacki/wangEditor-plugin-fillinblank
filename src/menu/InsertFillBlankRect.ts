/**
 * insert fill-blank menu
 * 矩形框空格
 * @author zyh
 * @version 1.0
 * @since 2022-3-28
 */

import {IButtonMenu, IDomEditor, DomEditor, t} from "@wangeditor/core";
import {SlateTransforms} from "@wangeditor/editor";
import {Editor} from "slate";
import {ICON_RECT_SVG} from "./icon_svg";
import uuid from "../uuid";

class InsertFillBlankParen implements IButtonMenu {
  readonly title = t("方框空格");
  readonly iconSvg = ICON_RECT_SVG;
  readonly tag = "button";

  readonly _width = 80;

  constructor(props?: any) {
    if (!props) return;
    if (props.width) {
      this._width = props.width;
    }
    if (props.title) {
      this.title = t(props.title);
    }
  }


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
      match: (n: any) => {
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
        shape: "rect",
        style: {width: this._width + "px"},
        key: uuid(),
        children: [{text: ""}], // void node 需要有一个空 text
      },
      {text: " "},
    ];
    SlateTransforms.insertNodes(editor, fillBlankVnode);
  }
}

export default InsertFillBlankParen;
