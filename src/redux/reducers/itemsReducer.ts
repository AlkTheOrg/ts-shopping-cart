import data from "../../data";
import Constants from "../constants";
import { ItemListAction, ItemListState } from "../constants/type";
import { shuffleArray } from "../../lib";

export const findItemIndexById = (id: number, state: ItemListState) =>
  state.findIndex((item) => item.id === id);

const itemsReducer = (
  state: ItemListState = shuffleArray(data.slice(0)),
  action: ItemListAction
): ItemListState => {
  let index;
  const item = action.payload;
  switch (action.type) {
    case Constants.ALL_ITEMS:
      return data;
    case Constants.INCREASE_IN_LIST:
      index = findItemIndexById(item.id, state);
      if (index === -1) return state;
      else
        return [
          ...state.slice(0, index),
          { ...state[index], amount: state[index].amount + 1 },
          ...state.slice(index + 1),
        ];
    case Constants.DECREASE_IN_LIST:
      index = findItemIndexById(item.id, state);
      if (index === -1 || state[index].amount === 1) return state;
      return [
        ...state.slice(0, index),
        { ...state[index], amount: state[index].amount - 1 },
        ...state.slice(index + 1),
      ];
    default:
      return state;
  }
};

export default itemsReducer;
