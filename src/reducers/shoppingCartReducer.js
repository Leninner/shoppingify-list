import {
  ADD_TO_CURRENT_LIST,
  EDIT_ITEM_QUANTITY,
  DELETE_ITEM_FROM_CURRENT_LIST,
  UPDATE_SHOPPING_LIST_NAME,
} from '../types';

const initialState = {
  shoppingListName: '',
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
  ],
};

export const shoppingCartReducer = (state = initialState, action) => {
  if (action.type === UPDATE_SHOPPING_LIST_NAME) {
    return {
      ...state,
      shoppingListName: action.payload,
    };
  }

  if (action.type === ADD_TO_CURRENT_LIST) {
    const { payload, categories } = action;
    const { idItem, idCategory } = payload;

    const newShoppingCart = [...state.shoppingCart];
    const itemToAdd = categories[idCategory - 1].items[idItem - 1];

    itemToAdd.quantity = 1;
    itemToAdd.isObtained = false;

    newShoppingCart[idCategory - 1].items.push(itemToAdd);

    const categoriesUpdated = [...categories];
    categoriesUpdated[idCategory - 1].items[idItem - 1].isItemInfo = false;

    return {
      ...state,
      shoppingCart: [...newShoppingCart],
      categories: [...categoriesUpdated],
    };
  }

  if (action.type === EDIT_ITEM_QUANTITY) {
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

  if (action.type === DELETE_ITEM_FROM_CURRENT_LIST) {
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
