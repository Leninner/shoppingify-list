import { TOGGLE_ADD_ITEM, ADD_ITEM_TO_CATEGORY, SEE_INFO_ITEM, BACK_TO_SHOPPING_LIST } from '../types';

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
          itemName: 'Carne de res',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 2,
          itemName: 'Pescado',
          note: 'El pescado es un alimento muy rico en proteinas',
          imageURL:
            'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
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
      const categoriesUpdated2 = [...state.categories];
      const { idItem: idSeeItem, idCategory: idSeeCategory } = action.payload;

      // Buscar una mejor manera de volver el valor de isItemInfo a false
      categoriesUpdated2.map((value) => {
        value.items.map((item) => {
          item.isItemInfo = false;
          return item;
        });
        return value;
      });

      categoriesUpdated2[idSeeCategory - 1].items[idSeeItem - 1].isItemInfo = true;

      return {
        ...state,
        categories: [...categoriesUpdated2],
      };

    case BACK_TO_SHOPPING_LIST:
      const categoriesUpdated3 = [...state.categories];
      const { idItem, idCategory } = action.payload;
      categoriesUpdated3[idCategory - 1].items[idItem - 1].isItemInfo = false;

      return {
        ...state,
        categories: [...categoriesUpdated3],
      };

    default:
      return state;
  }
};
