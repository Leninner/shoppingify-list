import {
  TOGGLE_ADD_ITEM,
  ADD_ITEM_TO_CATEGORY,
  SEE_INFO_ITEM,
  BACK_TO_SHOPPING_LIST,
  DELETE_ITEM_FROM_CATEGORIES,
} from '../types';

const initalState = {
  categories: [
    {
      id: 1,
      name: 'Fruits And Vegetables',
      items: [
        {
          id: 1,
          itemName: 'Frutillas',
          note: 'Las frutillas son realmente ricas',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 2,
          itemName: 'Uvas',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 3,
          itemName: 'Manzana',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 4,
          itemName: 'Plátano',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 5,
          itemName: 'Mandarina',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 6,
          itemName: 'Melón',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
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
          itemName: 'Pescado',
          note: 'Las frutillas son realmente ricas',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 2,
          itemName: 'Carne de Res',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 3,
          itemName: 'Pollo',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 4,
          itemName: 'Chuletas',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 5,
          itemName: 'Pargo',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 6,
          itemName: 'Albacora',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
      ],
    },
    {
      id: 3,
      name: 'Cookies',
      items: [
        {
          id: 1,
          itemName: 'Galletas amor',
          note: 'Las frutillas son realmente ricas',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 2,
          itemName: 'Chips and Joy',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 3,
          itemName: 'Oreo',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 4,
          itemName: 'Coronitas',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 5,
          itemName: 'Wafles',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 6,
          itemName: 'Salticas',
          note: 'La carne es algo riquísimo',
          imageURL:
            'https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
      ],
    },
  ],
  isAdding: false,
};

export const categoriesReducer = (state = initalState, action) => {
  if (action.type === TOGGLE_ADD_ITEM) {
    return {
      ...state,
      isAdding: !state.isAdding,
    };
  }

  if (action.type === ADD_ITEM_TO_CATEGORY) {
    const categoriesUpdated = [...state.categories];
    const { payload } = action;

    const { category } = payload;

    const { note, imageURL, itemName } = payload;

    if (categoriesUpdated.some((value) => value.name === category)) {
      const categoryFind = categoriesUpdated.find((value) => value.name === category).items;

      const itemToAdd = {
        id: categoryFind.length + 1,
        note: note,
        imageURL: imageURL,
        itemName: itemName,
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
            note: note,
            imageURL: imageURL,
            itemName: itemName,
            isItemInfo: false,
          },
        ],
      });

      // Aquí se tienen que sincronizar las categorias
    }

    return {
      ...state,
      categories: [...categoriesUpdated],
    };
  }

  if (action.type === SEE_INFO_ITEM) {
    const categoriesUpdated = [...state.categories];
    const { idItem: idSeeItem, idCategory: idSeeCategory } = action.payload;

    // Buscar una mejor manera de volver el valor de isItemInfo a false
    categoriesUpdated.map((value) => {
      value.items.map((item) => {
        item.isItemInfo = false;
        return item;
      });
      return value;
    });

    categoriesUpdated[idSeeCategory - 1].items[idSeeItem - 1].isItemInfo = true;

    return {
      ...state,
      categories: [...categoriesUpdated],
    };
  }

  if (action.type === BACK_TO_SHOPPING_LIST) {
    const categoriesUpdated = [...state.categories];
    const { idItem, idCategory } = action.payload;
    categoriesUpdated[idCategory - 1].items[idItem - 1].isItemInfo = false;

    return {
      ...state,
      categories: [...categoriesUpdated],
    };
  }

  if (action.type === DELETE_ITEM_FROM_CATEGORIES) {
    const categoriesUpdated = [...state.categories];
    const { payload, shoppingCart } = action;

    const { idItem: idItemToDelete, categoryName, itemName, idCategory: idCategoryToDelete } = payload;

    // Método para eliminar un item de una categoría y actualizar los items de shopping cart
    shoppingCart[idCategoryToDelete - 1].items.map((item, index) => {
      if (item.itemName === itemName) {
        shoppingCart[idCategoryToDelete - 1].items.splice(index, 1);
      }

      return item;
    });

    categoriesUpdated.map((value) => {
      if (value.name === categoryName) {
        value.items.splice(idItemToDelete - 1, 1);
        value.items.map((item, index) => (item.id = index + 1));
      }

      return value;
    });

    return {
      ...state,
      categories: [...categoriesUpdated],
      shoppingCart: [...shoppingCart],
    };
  }

  return state;
};
