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
          note: 'La frutilla es una fruta que, según la región, también se conoce como fresón o fresa.',
          imageURL:
            'https://images.unsplash.com/photo-1614436164055-703ea06fc9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          isItemInfo: false,
        },
        {
          id: 2,
          itemName: 'Uvas',
          note: 'La uva es la común denominación que reciben los frutos · racimos ; Pueden ser negras, moradas, verdes, amarillas, doradas, púrpura o rosadas',
          imageURL:
            'https://images.unsplash.com/photo-1504868173-db962b7c3757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXZhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          isItemInfo: false,
        },
        {
          id: 3,
          itemName: 'Manzana',
          note: 'La manzana es el fruto comestible de la especie Malus domestica, el manzano común. Es una fruta pomácea de forma redonda y sabor muy dulce.',
          imageURL:
            'https://images.unsplash.com/photo-1591735179859-a049994205de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnphbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          isItemInfo: false,
        },
        {
          id: 4,
          itemName: 'Banano',
          note: 'El banano moderno es un cultivo, probablemente originario de la región indomalaya. Desde Indonesia se propagaron hacia el sur y el este, alcanzando Hawái',
          imageURL:
            'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          isItemInfo: false,
        },
        {
          id: 5,
          itemName: 'Mandarina',
          note: 'La mandarina es el fruto de las diferentes especies de cítricos llamados comúnmente mandarino, entre ellas Citrus reticulata, Citrus unshiu, Citrus reshni, así como sus híbridos, incluyendo Citrus tangerina, cuya taxonomía está discutida.',
          imageURL:
            'https://images.unsplash.com/photo-1603812911324-4ed337529c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuZGFyaW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          isItemInfo: false,
        },
        {
          id: 6,
          itemName: 'Melón',
          note: 'Cucumis melo, llamado comúnmente melón, es una especie de la familia de las cucurbitáceas. Domesticada hace más de cuatro mil años en la región mediterránea oriental y Asia occidental, el origen exacto de la especie silvestre es aún desconocido.',
          imageURL:
            'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbCVDMyVCM258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
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
          itemName: 'Pargo',
          note: 'El pargo es una especie de pez perciforme de la familia Sparidae. Habita el Atlántico desde las islas Británicas hasta el sur de Argentina, prefiriendo las regiones subtropicales a baja y media profundidad, y se cría también en piscifactorías para su consumo.',
          imageURL:
            'https://images.aws.nestle.recipes/resized/cd153cfbb9d153b1786c7d45adac52b2_Pargo-rojo-al-sarten_708_600.png',
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
      isAdding: action.payload,
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
