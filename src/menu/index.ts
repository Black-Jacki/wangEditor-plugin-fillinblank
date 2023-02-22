/**
 * fill-in-blank plugin menu
 * 
 * @author zyh
 * @version 1.0
 * @since 2022-4-30
 */

import InsertFillBlankMenu from "./InsertFillBlank";
import InsertFillBlankParenMenu from "./InsertFillBlankParen";
import InsertFillBlankRectMenu from "./InsertFillBlankRect";

const baseSizeWidth = 18;

// ------------------------------ 横线空格 ------------------------------------

export const insertMenuConfig1 = {
  key: "insertFillBlank1",
  factory() {
    return new InsertFillBlankMenu({width: baseSizeWidth, title: "一字符横线"});
  },
};

export const insertMenuConfig2 = {
  key: "insertFillBlank2",
  factory() {
    return new InsertFillBlankMenu({width: baseSizeWidth * 2, title: "两字符横线"});
  },
};

export const insertMenuConfig3 = {
  key: "insertFillBlank3",
  factory() {
    return new InsertFillBlankMenu({width: baseSizeWidth * 3, title: "三字符横线"});
  },
};

export const insertMenuConfig4 = {
  key: "insertFillBlank4",
  factory() {
    return new InsertFillBlankMenu({width: baseSizeWidth * 4, title: "四字符横线"});
  },
};

export const insertMenuConfig5 = {
  key: "insertFillBlank5",
  factory() {
    return new InsertFillBlankMenu({width: baseSizeWidth * 5, title: "五字符横线"});
  },
};

export const insertMenuConfig6 = {
  key: "insertFillBlank6",
  factory() {
    return new InsertFillBlankMenu({width: baseSizeWidth * 6, title: "六字符横线"});
  },
};

export const insertMenuConfig7 = {
  key: "insertFillBlank7",
  factory() {
    return new InsertFillBlankMenu({width: baseSizeWidth * 7, title: "七字符横线"});
  },
};

export const insertMenuConfig8 = {
  key: "insertFillBlank8",
  factory() {
    return new InsertFillBlankMenu({width: baseSizeWidth * 8, title: "八字符横线"});
  },
};

export const insertMenuConfig9 = {
  key: "insertFillBlank9",
  factory() {
    return new InsertFillBlankMenu({width: baseSizeWidth * 9, title: "九字符横线"});
  },
};

export const insertMenuConfig10 = {
  key: "insertFillBlank10",
  factory() {
    return new InsertFillBlankMenu({width: baseSizeWidth * 10, title: "十字符横线"});
  },
};


// ------------------------------ 括号空格 ------------------------------------

export const insertParenMenuConfig1 = {
  key: "insertFillBlankParen1",
  factory() {
    return new InsertFillBlankParenMenu({width: baseSizeWidth, title: "一字符括号"});
  },
};

export const insertParenMenuConfig2 = {
  key: "insertFillBlankParen2",
  factory() {
    return new InsertFillBlankParenMenu({width: baseSizeWidth * 2, title: "两字符括号"});
  },
};

export const insertParenMenuConfig3 = {
  key: "insertFillBlankParen3",
  factory() {
    return new InsertFillBlankParenMenu({width: baseSizeWidth * 3, title: "三字符括号"});
  },
};

export const insertParenMenuConfig4 = {
  key: "insertFillBlankParen4",
  factory() {
    return new InsertFillBlankParenMenu({width: baseSizeWidth * 4, title: "四字符括号"});
  },
};

export const insertParenMenuConfig5 = {
  key: "insertFillBlankParen5",
  factory() {
    return new InsertFillBlankParenMenu({width: baseSizeWidth * 5, title: "五字符括号"});
  },
};

export const insertParenMenuConfig6 = {
  key: "insertFillBlankParen6",
  factory() {
    return new InsertFillBlankParenMenu({width: baseSizeWidth * 6, title: "六字符括号"});
  },
};

export const insertParenMenuConfig7 = {
  key: "insertFillBlankParen7",
  factory() {
    return new InsertFillBlankParenMenu({width: baseSizeWidth * 7, title: "七字符括号"});
  },
};

export const insertParenMenuConfig8 = {
  key: "insertFillBlankParen8",
  factory() {
    return new InsertFillBlankParenMenu({width: baseSizeWidth * 8, title: "八字符括号"});
  },
};

export const insertParenMenuConfig9 = {
  key: "insertFillBlankParen9",
  factory() {
    return new InsertFillBlankParenMenu({width: baseSizeWidth * 9, title: "九字符括号"});
  },
};

export const insertParenMenuConfig10 = {
  key: "insertFillBlankParen10",
  factory() {
    return new InsertFillBlankParenMenu({width: baseSizeWidth * 10, title: "十字符括号"});
  },
};


// ------------------------------ 方框空格 ------------------------------------

export const insertRectMenuConfig1 = {
  key: "insertFillBlankRect1",
  factory() {
    return new InsertFillBlankRectMenu({width: 28, title: "方框空格"});
  },
};