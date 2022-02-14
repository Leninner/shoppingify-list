import { ADD_TO_CURRENT_LIST } from '../types';

const initialState = {
  shoppingCart: [
    {
      id: 1,
      name: 'Fruits And Vegetables',
      items: [
        {
          id: 1,
          itemName: 'Carne de res',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          quantity: 1,
        },
        {
          id: 2,
          itemName: 'Pescado',
          note: 'El pescado es un alimento muy rico en proteinas',
          imageURL:
            'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          quantity: 1,
        },
      ],
    },
  ],
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CURRENT_LIST:
      const { data, globalState } = action;
      const { categories } = globalState;

      const newCategoriesReducer = categories.map((category) => {
        category.added = false;
        return category;
      });

      console.log(data, categories);
      return {
        ...state,
        globalState: {
          ...globalState,
          categories: newCategoriesReducer,
        },
      };

    default:
      return state;
  }
};
