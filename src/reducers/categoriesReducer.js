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
        },
        {
          id: 2,
          name: 'Bananas',
          note: '',
          image: '',
        },
        {
          id: 3,
          name: 'Pineapples',
          note: '',
          image: '',
        },
        {
          id: 4,
          name: 'Tomatoes',
          note: '',
          image: '',
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
        },
        {
          id: 2,
          name: 'Bananas',
          note: '',
          image: '',
        },
        {
          id: 3,
          name: 'Pineapples',
          note: '',
          image: '',
        },
        {
          id: 4,
          name: 'Tomatoes',
          note: '',
          image: '',
        },
      ],
    },
    {
      id: 3,
      name: 'Beverages',
      items: [
        {
          id: 1,
          name: 'Apples',
          note: '',
          image: '',
        },
        {
          id: 2,
          name: 'Bananas',
          note: '',
          image: '',
        },
        {
          id: 3,
          name: 'Pineapples',
          note: '',
          image: '',
        },
        {
          id: 4,
          name: 'Tomatoes',
          note: '',
          image: '',
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
