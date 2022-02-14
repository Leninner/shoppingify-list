import { ADD_TO_CURRENT_LIST } from '../types';

const initialState = {
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
  switch (action.type) {
    case ADD_TO_CURRENT_LIST:
      const { payload, categories } = action;
      const { idItem, idCategory } = payload;

      console.log(state);
      const newShoppingCart = [...state.shoppingCart];
      const itemToAdd = categories[idCategory - 1].items[idItem - 1];
      itemToAdd.quantity = 1;
      newShoppingCart[idCategory - 1].items.push(itemToAdd);

      const categoriesUpdated = [...categories];
      categoriesUpdated[idCategory - 1].items[idItem - 1].isItemInfo = false;

      return {
        ...state,
        shoppingCart: newShoppingCart,
        categories: [...categoriesUpdated],
      };

    default:
      return state;
  }
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
//     },
//   ],
// },
