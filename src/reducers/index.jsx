import { combineReducers } from 'redux';
import { categoriesReducer } from './categoriesReducer';
import { shoppingCartReducer } from './shoppingCartReducer';
import { historialReducer } from './historialReducer';

export const reducer = combineReducers({ categoriesReducer, shoppingCartReducer, historialReducer });
