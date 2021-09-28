
import { createStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers";

// initial state
const rootState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: ''
}

// define store
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), rootState
  );


// export store
export default store;