import { TOGGLE_ADD_ITEM, ADD_ITEM_TO_CATEGORY } from '../types';

export const HandleAddItem = () => {
  return {
    type: TOGGLE_ADD_ITEM,
  };
};

export const HandleAddItemToCategories = (payload) => {
  return {
    type: ADD_ITEM_TO_CATEGORY,
    payload,
  };
};
