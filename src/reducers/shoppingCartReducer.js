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
