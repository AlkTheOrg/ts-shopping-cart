import { ItemData } from "../../data";

export type ItemListState = ItemData[];

export type ItemListAction = {
  type: string;
  payload: ItemData;
};

export type RootState = {
  items: ItemListState;
  cart: ItemListState;
  searchFilter: SearchFilterState;
};

export type SearchFilterAction = {
  type: string;
  payload: string;
};

export type SearchFilterState = string;

export type DispatchType = (args: ItemListAction) => ItemListAction;
