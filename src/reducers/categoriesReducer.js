import { TOGGLE_ADD_ITEM, ADD_ITEM_TO_CATEGORY } from '../types';

const initalState = {
  categories: [
    {
      id: 1,
      name: 'Fruits And Vegetables',
      items: [
        {
          id: 1,
          itemName: 'Apples',
          note: '',
          image: '',
          isItemInfo: false,
        },
        {
          id: 2,
          itemName: 'Bananas',
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
          itemName: 'Apples',
          note: '',
          image: '',
          isItemInfo: false,
        },
        {
          id: 2,
          itemName: 'Bananas',
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
    case TOGGLE_ADD_ITEM:
      return {
        ...state,
        isAdding: !state.isAdding,
      };
    case ADD_ITEM_TO_CATEGORY:
      const categoriesUpdated = [...state.categories];
      const category = categoriesUpdated.find((value) => value.name === action.payload.category).items;

      const itemToAdd = {
        id: category.length + 1,
        ...action.payload,
        isItemInfo: false,
      };

      category.push(itemToAdd);

      console.log(state.categories);

      return {
        ...state,
        categories: [...categoriesUpdated],
      };
    default:
      return state;
  }
};
