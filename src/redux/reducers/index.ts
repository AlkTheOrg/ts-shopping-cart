import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import itemsReducer from "./itemsReducer";
import searchFilterReducer from "./searchFilterReducer";

const headReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
  searchFilter: searchFilterReducer,
});

export default headReducer;
