/**
 * 例子，使用模块化开发，script引入的方式请参考demo1
 * 
 * @author zyh
 * @version 1.0
 * @since 2022-5-1
 */

import {createEditor, createToolbar, Boot} from "@wangeditor/editor";
import fillInBlank from "wangeditor-plugin-fillinblank";

// 注册插件
Boot.registerModule(fillInBlank);

// 默认值
const defaultHtml = `<p style="text-align: left; line-height: 200%;"><span style="font-size: 12pt; font-family: 宋体;"><strong>2.用文中的词语填空。</strong></span></p><p style="text-align: left; line-height: 200%;">&nbsp;<input data-w-e-type="fill-blank" width="80px" index="0">&nbsp;<span style="font-size: 12pt; font-family: 宋体;">的石拱桥&nbsp;&nbsp;</span>&nbsp;<input data-w-e-type="fill-blank" width="80px" index="1">&nbsp;<span style="font-size: 12pt; font-family: 宋体;">的图案</span></p><p>&nbsp;<input data-w-e-type="fill-blank" width="80px" index="2"/>&nbsp;<span style="font-size: 12pt; font-family: 宋体;">的水花&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;<input data-w-e-type="fill-blank" width="80px" index="3"/>&nbsp;<span style="font-size: 12pt; font-family: 宋体;">的历史文化遗产</span></p><p style="line-height: 150%;"><span style="font-size: 12pt; font-family: 宋体;"><strong>3.默读课文，找出体现赵州桥“美观”的内容，并摘抄在以下横线上。</strong></span></p><p style="line-height: 150%;">&nbsp;<input data-w-e-type="fill-blank" width="600px" index="4">&nbsp;</p>`;

// 创建编辑器
const editor = createEditor({
  selector: "#editor-container",
  config: {
    onChange(editor) {
      console.log("html: ", editor.getHtml());
      console.log("json: ", editor.children);
    },
  },
  html: defaultHtml,
})

// 创建工具栏
const toolbar = createToolbar({
  editor,
  selector: "#toolbar-container",
  config: {
    insertKeys: {
      index: 10,
      keys: [
        {
          key: "group-fill-blank",
          title: "填空空格",
          iconSvg: fillInBlank.icon,
          menuKeys: ["insertFillBlank", "insertLongFillBlank"],
        },
      ], // “插入”菜单
    },
  },
});