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
import {insertMenuConfig, insertLongFillBlank} from "./menu/index";
import {ICON_SVG} from "./menu/icon_svg";

interface Module extends IModuleConf {
  icon: string;
}

const module: Partial<Module> = {
  editorPlugin: withFillBlank,
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
  menus: [insertMenuConfig, insertLongFillBlank],
  icon: ICON_SVG
}

export default module;
