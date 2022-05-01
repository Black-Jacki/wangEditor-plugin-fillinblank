/**
 * fill-in-blank plugin menu
 * 
 * @author zyh
 * @version 1.0
 * @since 2022-4-30
 */

import InsertFillBlankMenu from "./InsertFillBlank";
import InsertLongFillBlankMenu from "./InsertLongFillBlank";

export const insertMenuConfig = {
  key: "insertFillBlank",
  factory() {
    return new InsertFillBlankMenu();
  },
};

export const insertLongFillBlank = {
  key: "insertLongFillBlank",
  factory() {
    return new InsertLongFillBlankMenu();
  },
};
