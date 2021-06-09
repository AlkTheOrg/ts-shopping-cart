import React, { FC } from "react";
import Item from "./Item";

interface Props {
  items: {
    id: number;
    title: string;
    price: number;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    amount: number;
  }[];
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
