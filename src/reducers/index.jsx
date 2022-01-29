import { combineReducers } from 'redux';
import { categoriesReducer } from './categoriesReducer';
import { shoppingCartReducer } from './shoppingCartReducer';

export const reducer = combineReducers({ categoriesReducer, shoppingCartReducer });
