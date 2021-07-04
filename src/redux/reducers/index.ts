import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import itemsReducer from "./itemsReducer";

const headReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
});

export default headReducer;
