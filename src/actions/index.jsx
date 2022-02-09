import {
  TOGGLE_ADD_ITEM,
  ADD_ITEM_TO_CATEGORY,
  BACK_TO_SHOPPING_LIST,
  SEE_INFO_ITEM,
  DELETE_ITEM_FROM_CATEGORIES,
} from '../types';

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

export const BackToShoppingList = (payload) => {
  return {
    type: BACK_TO_SHOPPING_LIST,
    payload,
  };
};

export const SeeInfo = (payload) => {
  return {
    type: SEE_INFO_ITEM,
    payload,
  };
};

export const DeleteItemFromCategories = (payload) => {
  return {
    type: DELETE_ITEM_FROM_CATEGORIES,
    payload,
  };
};
