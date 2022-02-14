import {
  TOGGLE_ADD_ITEM,
  ADD_ITEM_TO_CATEGORY,
  BACK_TO_SHOPPING_LIST,
  SEE_INFO_ITEM,
  DELETE_ITEM_FROM_CATEGORIES,
  ADD_TO_CURRENT_LIST,
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

// NOTE: Uso de middleware para obtener el estado actual de toda la aplicación
export const AddToCurrentList = (actionData) => async (dispatch, getState) => {
  const { categoriesReducer } = getState();

  dispatch({
    type: ADD_TO_CURRENT_LIST,
    data: actionData,
    globalState: categoriesReducer,
  });
};
