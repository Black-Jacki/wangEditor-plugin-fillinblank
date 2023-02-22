/**
 * fill-blank plugin
 * @author zyh
 * @version 1.0
 * @since 2022-3-28
 */

import {DomEditor, IDomEditor} from "@wangeditor/editor";

function withFillBlank<T extends IDomEditor>(editor: T) {
  const {isInline, isVoid} = editor;
  const newEditor = editor

  // 重写 isInline
  newEditor.isInline = (elem: any) => {
    const type = DomEditor.getNodeType(elem)
    if (type === "fill-blank") {
      return true
    }
    return isInline(elem)
  }

  // 重写 isVoid
  newEditor.isVoid = (elem: any) => {
    const type = DomEditor.getNodeType(elem)
    if (type === "fill-blank") {
      return true
    }
    return isVoid(elem)
  }

  return newEditor
}

export default withFillBlank;
