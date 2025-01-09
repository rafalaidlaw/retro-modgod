import CATEGORIES_ACTION_TYPES from "./categories.types";
import { createAction } from "../../../Utils/reducer/reducer.utils";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
