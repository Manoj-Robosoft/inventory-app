import { UPDATE_ITEM_QUANTITY } from "../actionTypes/actionTypes";

export const updateItemQuantity = ({ itemId, subCategoryId, quantity }) => {
  return {
    type: UPDATE_ITEM_QUANTITY,
    payload: {
      itemId,
      subCategoryId,
      quantity,
    },
  };
};
