import {
  ADD_TO_CURRENT_LIST,
  EDIT_ITEM_QUANTITY,
  DELETE_ITEM_FROM_CURRENT_LIST,
  UPDATE_SHOPPING_LIST_NAME,
  OBTAIN_ITEM,
  TOGGLE_EDIT,
} from '../types';

const initialState = {
  shoppingListName: 'List Name',
  isCompleting: false,
  isToCancel: false,
  shoppingCart: [
    {
      id: 1,
      name: 'Fruits And Vegetables',
      items: [],
    },
    {
      id: 2,
      name: 'Meet and Fish',
      items: [],
    },
    {
      id: 3,
      name: 'Cookies',
      items: [],
    },
  ],
};

export const shoppingCartReducer = (state = initialState, action) => {
  const { type } = action;

  if (type === UPDATE_SHOPPING_LIST_NAME) {
    return {
      ...state,
      shoppingListName: action.payload,
    };
  }

  if (type === ADD_TO_CURRENT_LIST) {
    let { payload, categoriesReducer } = action;
    const { categories } = categoriesReducer;

    const { idItem, idCategory } = payload;
    const categoriesUpdated = JSON.parse(JSON.stringify(categories));

    const newShoppingCart = [...state.shoppingCart];
    const itemToAdd = categoriesUpdated[idCategory - 1].items[idItem - 1];
    itemToAdd.quantity = 1;
    itemToAdd.isObtained = false;
    newShoppingCart[idCategory - 1].items.push(itemToAdd);
    categoriesUpdated[idCategory - 1].items[idItem - 1].isItemInfo = false;

    categoriesReducer = {
      ...categoriesReducer,
      categories: [...categoriesUpdated],
      hopla: 'hopla',
    };

    return {
      ...state,
      shoppingCart: [...newShoppingCart],
    };
  }

  if (type === EDIT_ITEM_QUANTITY) {
    const { idCategory, idItem, itemName, newQuantity } = action.payload;
    const newShoppingCart = [...state.shoppingCart];

    newShoppingCart[idCategory - 1].items.map((item) => {
      if (item.id === idItem && item.itemName === itemName) {
        item.quantity = newQuantity;
      }
      return item;
    });

    return {
      ...state,
      shoppingCart: [...newShoppingCart],
    };
  }

  if (type === DELETE_ITEM_FROM_CURRENT_LIST) {
    const { idCategory, idItem, itemName } = action.payload;
    const newShoppingCart = [...state.shoppingCart];

    newShoppingCart[idCategory - 1].items.map((item) => {
      if (item.id === idItem && item.itemName === itemName) {
        newShoppingCart[idCategory - 1].items.splice(newShoppingCart[idCategory - 1].items.indexOf(item), 1);
      }

      return item;
    });

    return {
      ...state,
      shoppingCart: [...newShoppingCart],
    };
  }

  if (type === OBTAIN_ITEM) {
    const { idCategory, idItem, itemName, isObtained } = action.payload;
    const newShoppingCart = [...state.shoppingCart];

    newShoppingCart[idCategory - 1].items.map((item) => {
      if (item.id === idItem && item.itemName === itemName) {
        item.isObtained = isObtained;
      }
      return item;
    });

    return {
      ...state,
      shoppingCart: [...newShoppingCart],
    };
  }

  if (type === TOGGLE_EDIT) {
    return {
      ...state,
      isCompleting: !state.isCompleting,
    };
  }

  // OJO AQUÍ
  if (type === 'CANCEL_DELETE_LIST') {
    return {
      ...state,
      isToCancel: !state.isToCancel,
      isCompleting: !state.isCompleting,
    };
  }

  if (type === 'DELETE_LIST') {
    const newShoppingCart = [...state.shoppingCart];

    newShoppingCart.map((category) => {
      category.items = [];
      return category;
    });

    return {
      ...state,
      shoppingCart: [...newShoppingCart],
      isToCancel: false,
      isCompleting: false,
    };
  }

  return state;
};

//  {
//   id: 1,
//   name: 'Fruits And Vegetables',
//   items: [
//     {
//       id: 1,
//       itemName: 'Carne de res',
//       note: 'La carne es algo riquísimo',
//       imageURL:
//         'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
//       quantity: 1,
//       isObtained: false,
//     },
//   ],
// },
