import { ItemData } from "../../data";
import Constants from "../constants";

export const getAllItems = () => ({
  type: Constants.ALL_ITEMS,
});

export const increaseInList = (item: ItemData) => ({
  type: Constants.INCREASE_IN_LIST,
  payload: item,
});

export const decreaseInList = (item: ItemData) => ({
  type: Constants.DECREASE_IN_LIST,
  payload: item,
});

export const addToCart = (item: ItemData) => ({
  type: Constants.ADD_TO_CART,
  payload: item,
});

export const delFromCart = (item: ItemData) => ({
  type: Constants.DEL_FROM_CART,
  payload: item,
});

export const increaseInCart = (item: ItemData) => ({
  type: Constants.INCREASE_IN_CART,
  payload: item,
});

export const decreaseInCart = (item: ItemData) => ({
  type: Constants.DECREASE_IN_CART,
  payload: item,
});
