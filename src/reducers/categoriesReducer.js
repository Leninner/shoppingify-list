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

      const { category } = action.payload;

      console.log({ categoriesUpdated, action: action.payload.category });

      if (categoriesUpdated.some(({ name }) => name === category)) {
        const categoryFind = categoriesUpdated.find((value) => value.name === category).items;

        const itemToAdd = {
          id: categoryFind.length + 1,
          ...action.payload,
          isItemInfo: false,
        };

        categoryFind.push({
          ...itemToAdd,
        });
      } else {
        categoriesUpdated.push({
          id: categoriesUpdated.length + 1,
          name: category,
          items: [
            {
              id: 1,
              ...action.payload,
              isItemInfo: false,
            },
          ],
        });
      }

      return {
        ...state,
        categories: [...categoriesUpdated],
      };
    default:
      return state;
  }
};
