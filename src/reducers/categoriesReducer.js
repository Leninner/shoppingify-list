import { HANDLE_ADD_ITEM } from '../types';

const initalState = {
  categories: [
    {
      id: 1,
      name: 'Fruits And Vegetables',
      items: [
        {
          id: 1,
          name: 'Apples',
          note: '',
          image: '',
          isItemInfo: false,
        },
        {
          id: 2,
          name: 'Bananas',
          note: '',
          image: '',
          isItemInfo: false,
        },
        {
          id: 3,
          name: 'Pineapples',
          note: '',
          image: '',
          isItemInfo: false,
        },
        {
          id: 4,
          name: 'Tomatoes',
          note: '',
          image: '',
          isItemInfo: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Meet and Fish',
      items: [
        {
          id: 1,
          name: 'Apples',
          note: '',
          image: '',
          isItemInfo: true,
        },
        {
          id: 2,
          name: 'Bananas',
          note: '',
          image: '',
          isItemInfo: false,
        },
        {
          id: 3,
          name: 'Pineapples',
          note: '',
          image: '',
          isItemInfo: false,
        },
        {
          id: 4,
          name: 'Tomatoes',
          note: '',
          image: '',
          isItemInfo: false,
        },
      ],
    },
  ],
  isAdding: false,
};

export const categoriesReducer = (state = initalState, action) => {
  switch (action.type) {
    case HANDLE_ADD_ITEM:
      return {
        ...state,
        isAdding: !state.isAdding,
      };
    default:
      return state;
  }
};
