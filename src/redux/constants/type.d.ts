import { ItemData } from "../../data";

export type ItemListState = ItemData[];

export type ItemListAction = {
  type: string;
  payload: ItemData;
};

export type RootState = {
  items: ItemListState;
  cart: ItemListState;
};

export type DispatchType = (args: ItemListAction) => ItemListAction;
