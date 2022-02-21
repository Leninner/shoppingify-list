const initialState = {
  historial: [],
};

export const historialReducer = (state = initialState, action) => {
  const { type } = action;

  if (type === 'ADD_TO_HISTORY') {
    const { shoppingCart, shoppingListName, isCompleted } = action.payload;

    const shoppingCartFiltered = shoppingCart.filter((value) => value.items.length > 0);

    const historyToAdd = {
      id: state.historial.length + 1,
      shoppingListName: shoppingListName,
      dateCompleted: new Date().toDateString(),
      isCompleted: isCompleted,
      shoppingList: [...shoppingCartFiltered],
    };

    return {
      ...state,
      historial: [...state.historial, historyToAdd],
    };
  }

  return state;
};
