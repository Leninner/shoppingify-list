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
    {
      id: 2,
      name: 'Meet and Fish',
      items: [],
    },
    {
      id: 3,
      name: 'Beverages',
      items: [],
    },
  ],
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart.map((category) => {
            if (category.id === action.payload.categoryId) {
              return {
                ...category,
                items: [
                  ...category.items,
                  {
                    id: action.payload.itemId,
                    name: action.payload.itemName,
                    note: action.payload.itemNote,
                    image: action.payload.itemImage,
                  },
                ],
              };
            }
            return category;
          }),
        ],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart.map((category) => {
            if (category.id === action.payload.categoryId) {
              return {
                ...category,
                items: category.items.filter((item) => item.id !== action.payload.itemId),
              };
            }
            return category;
          }),
        ],
      };
    case 'ADD_CATEGORY':
      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart,
          {
            id: action.payload.categoryId,
            name: action.payload.categoryName,
            items: [],
          },
        ],
      };
    case 'REMOVE_CATEGORY':
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter((category) => category.id !== action.payload.categoryId),
      };
    default:
      return state;
  }
};
