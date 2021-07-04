import Constants from "../constants";
import { ItemListAction, ItemListState } from "../constants/type";
import { findItemIndexById } from "./itemsReducer";

const cartReducer = (
  state: ItemListState = [],
  action: ItemListAction
): ItemListState => {
  let index;
  const item = action.payload;
  switch (action.type) {
    case Constants.ADD_TO_CART:
      index = findItemIndexById(item.id, state);
      if (index === -1) return [...state, item];
      else
        return [
          ...state.slice(0, index),
          { ...state[index], amount: state[index].amount + item.amount },
          ...state.slice(index + 1),
        ];
    case Constants.INCREASE_IN_CART:
      return state.map((cItem) =>
        cItem.id === item.id ? { ...cItem, amount: cItem.amount + 1 } : cItem
      );
    case Constants.DECREASE_IN_CART:
      index = findItemIndexById(item.id, state);
      if (index === -1) return state;
      if (state[index].amount === 1)
        return [...state.slice(0, index), ...state.slice(index + 1)];
      else
        return [
          ...state.slice(0, index),
          { ...state[index], amount: state[index].amount - 1 },
          ...state.slice(index + 1),
        ];
    default:
      return state;
  }
};

// const deleteItemFromArr = (arr: ItemData[], index: number) => {
//   return [
//     ...arr.slice(0, index),
//     ...arr.slice(index + 1)
//   ]
// }

export default cartReducer;
