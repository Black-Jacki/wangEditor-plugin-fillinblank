/**
 * fill-in-blank plugin module
 *
 * @author zyh
 * @version 1.0
 * @since 2022-4-30
 */

import {IModuleConf} from "@wangeditor/core";
import withFillBlank from "./plugin";
import renderElemConf from "./render-elem";
import elemToHtmlConf from "./elem-to-html";
import parseHtmlConf from "./parse-elem-html";
import {ICON_SVG, ICON_PAREN_SVG, ICON_RECT_SVG} from "./menu/icon_svg";
import {
  insertMenuConfig1,
  insertMenuConfig2,
  insertMenuConfig3,
  insertMenuConfig4,
  insertMenuConfig5,
  insertMenuConfig6,
  insertMenuConfig7,
  insertMenuConfig8,
  insertMenuConfig9,
  insertMenuConfig10,
  insertParenMenuConfig1,
  insertParenMenuConfig2,
  insertParenMenuConfig3,
  insertParenMenuConfig4,
  insertParenMenuConfig5,
  insertParenMenuConfig6,
  insertParenMenuConfig7,
  insertParenMenuConfig8,
  insertParenMenuConfig9,
  insertParenMenuConfig10,
  insertRectMenuConfig1,
} from "./menu";

interface Module extends IModuleConf {
  icon: any;
}

const module: Partial<Module> = {
  editorPlugin: withFillBlank,
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
  icon: {
    ICON_SVG,
    ICON_PAREN_SVG,
    ICON_RECT_SVG,
  },
  menus: [
    insertMenuConfig1,
    insertMenuConfig2,
    insertMenuConfig3,
    insertMenuConfig4,
    insertMenuConfig5,
    insertMenuConfig6,
    insertMenuConfig7,
    insertMenuConfig8,
    insertMenuConfig9,
    insertMenuConfig10,
    insertParenMenuConfig1,
    insertParenMenuConfig2,
    insertParenMenuConfig3,
    insertParenMenuConfig4,
    insertParenMenuConfig5,
    insertParenMenuConfig6,
    insertParenMenuConfig7,
    insertParenMenuConfig8,
    insertParenMenuConfig9,
    insertParenMenuConfig10,
    insertRectMenuConfig1,
  ],
}

export default module;
