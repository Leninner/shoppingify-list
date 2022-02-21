const initialState = {
  historial: [],
};

export const historialReducer = (state = initialState, action) => {
  const { type } = action;

  if (type === 'ADD_TO_HISTORY') {
    const { shoppingCart, shoppingListName } = action.payload;

    const historyToAdd = {
      id: state.historial.length + 1,
      shoppingListName: shoppingListName,
      dateCompleted: new Date().toDateString(),
      shoppingList: [...shoppingCart],
    };

    return {
      ...state,
      historial: [...state.historial, historyToAdd],
    };
  }

  return state;
};
