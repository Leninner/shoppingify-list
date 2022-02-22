const initialState = {
  shoppingifyHistorial: {},
};

export const historialReducer = (state = initialState, action) => {
  const { type } = action;

  if (type === 'ADD_TO_HISTORY') {
    const { shoppingCart, shoppingListName, isCompleted } = action.payload;

    const shoppingCartFiltered = shoppingCart.filter((value) => value.items.length > 0);

    const date = new Date().toDateString();
    const month = date.split(' ')[1];
    const year = date.split(' ')[3];

    const historyToAdd = {
      id: state.shoppingifyHistorial[`${month} ${year}`]?.historial.length + 1 || 1,
      shoppingListName: shoppingListName,
      dateCompleted: new Date().toDateString(),
      isCompleted: isCompleted,
      shoppingList: [...shoppingCartFiltered],
    };

    if (!([`${month} ${year}`] in state.shoppingifyHistorial)) {
      const newState = {
        ...state,
        shoppingifyHistorial: {
          ...state.shoppingifyHistorial,
          [`${month} ${year}`]: {
            id: Object.keys(state.shoppingifyHistorial).length + 1,
            historial: [historyToAdd],
          },
        },
      };

      return newState;
    }

    return {
      ...state,
      shoppingifyHistorial: {
        ...state.shoppingifyHistorial,
        [`${month} ${year}`]: {
          ...state.shoppingifyHistorial[`${month} ${year}`],
          historial: [...state.shoppingifyHistorial[`${month} ${year}`].historial, historyToAdd],
        },
      },
    };
  }

  return state;
};
