import { HANDLE_ADD_ITEM } from '../types';

export const reducer = (state, action) => {
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
