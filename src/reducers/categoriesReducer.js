import { TOGGLE_ADD_ITEM, ADD_ITEM_TO_CATEGORY, SEE_INFO_ITEM } from '../types';

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
          imageURL: '',
          isItemInfo: false,
        },
        {
          id: 2,
          itemName: 'Bananas',
          note: '',
          imageURL: '',
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
          imageURL: '',
          isItemInfo: false,
        },
        {
          id: 2,
          itemName: 'Bananas',
          note: '',
          imageURL: '',
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

      if (categoriesUpdated.some(({ name }) => name === category)) {
        const categoryFind = categoriesUpdated.find((value) => value.name === category).items;

        const itemToAdd = {
          id: categoryFind.length + 1,
          note: action.payload.note,
          imageURL: action.payload.imageURL,
          itemName: action.payload.itemName,
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
              note: action.payload.note,
              imageURL: action.payload.imageURL,
              itemName: action.payload.itemName,
              isItemInfo: false,
            },
          ],
        });
      }

      return {
        ...state,
        categories: [...categoriesUpdated],
      };

    case SEE_INFO_ITEM:
      console.log(action.payload);
      return {
        ...state,
      };

    default:
      return state;
  }
};
