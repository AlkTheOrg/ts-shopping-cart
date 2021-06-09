import React, { FC } from "react";
import { ItemData } from "../data";
import Item from "./Item";

interface Props {
  items: ItemData[];
  addToCart: (id: number) => void;
  changeAmountOfItemInList: (id: number, op: string) => void;
}

const ItemList: FC<Props> = ({
  items,
  addToCart,
  changeAmountOfItemInList,
}) => {
  return (
    <ul className="items-list">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Item
              {...item}
              addToCart={addToCart}
              changeAmountOfItemInList={changeAmountOfItemInList}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
