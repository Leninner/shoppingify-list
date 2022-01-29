import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './routes/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { reducer } from './reducers';

const initialState = {
  categories: [
    {
      id: 1,
      name: 'Fruits And Vegetables',
      items: [
        {
          id: 1,
          name: 'Apples',
        },
        {
          id: 2,
          name: 'Bananas',
        },
        {
          id: 3,
          name: 'Pineapples',
        },
        {
          id: 4,
          name: 'Tomatoes',
        },
        {
          id: 5,
          name: 'Potatoes',
        },
        {
          id: 6,
          name: 'Onions',
        },
      ],
    },
    {
      id: 2,
      name: 'Meet and Fish',
      items: [
        {
          id: 1,
          name: 'Apples',
        },
        {
          id: 2,
          name: 'Bananas',
        },
        {
          id: 3,
          name: 'Pineapples',
        },
        {
          id: 4,
          name: 'Tomatoes',
        },
        {
          id: 5,
          name: 'Potatoes',
        },
        {
          id: 6,
          name: 'Onions',
        },
      ],
    },
    {
      id: 3,
      name: 'Beverages',
      items: [
        {
          id: 1,
          name: 'Apples',
        },
        {
          id: 2,
          name: 'Bananas',
        },
        {
          id: 3,
          name: 'Pineapples',
        },
        {
          id: 4,
          name: 'Tomatoes',
        },
        {
          id: 5,
          name: 'Potatoes',
        },
        {
          id: 6,
          name: 'Onions',
        },
      ],
    },
  ],
  shoppingCart: [
    {
      id: 1,
      name: 'Fruits And Vegetables',
      items: [],
    },
    {
      id: 2,
      name: 'Meet and Fish',
      items: [],
    },
    {
      id: 3,
      name: 'Beverages',
      items: [],
    },
  ],
  isAdding: false,
};

// conectar Redux devTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
