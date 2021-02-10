import { data } from "../../data";
import { UPDATE_ITEM_QUANTITY } from "../actionTypes/actionTypes";

export const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("inventoryData", JSON.stringify(state));
  } catch (e) {
    console.log(e);
  }
};

// let storageData = localStorage.getItem("inventoryData");
// let initialState = null;

// try {
//   initialState = JSON.parse(storageData);
// } catch (err) {
//   storageData = null;
// }

const initialState = data;

const findSubCategory = (subCategories = [], id) => {
  return subCategories.find((subCategory) => subCategory.id === id);
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ITEM_QUANTITY:
      const { itemId, subCategoryId, quantity } = action.payload;
      // Find sub category
      const subCategory = findSubCategory(state.subCategories, subCategoryId);

      // Find particular item in a sub cateogry based on item id
      const items = [...subCategory.items];
      const updatedItems = items.map((item) => {
        if (item.sku_id === itemId) {
          return {
            ...item,
            quantity,
          };
        }
        return item;
      });

      const updatedSubCategory = {
        ...subCategory,
        items: updatedItems,
      };

      const subCategories = state.subCategories.map((subCategory) => {
        if (subCategory.id === updatedSubCategory.id) {
          return updatedSubCategory;
        }
        return subCategory;
      });

      return {
        ...state,
        subCategories,
      };

    default:
      return state;
  }
};

export default rootReducer;
