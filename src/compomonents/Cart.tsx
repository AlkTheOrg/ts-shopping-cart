import React, { FC } from "react";
import { ItemData } from "../data";
import CartItem from "./CartItem";

interface Props {
  cart: ItemData[];
  totalCost: number;
  subtractFromCard: (id: number) => void;
  increaseInCard: (id: number) => void;
}

// function Cart2(): JSX.Element {
//   return <div></div>;
// }

/* Without FC<Props> Cart is an anynmous function
that returns JSX.Element. Now it s an FC<Props> element.
*/
const Cart: FC<Props> = ({
  cart,
  totalCost,
  subtractFromCard,
  increaseInCard,
}): JSX.Element => {
  return (
    <aside className="Cart">
      <h1>Cart</h1>
      {cart.map((item: ItemData) => {
        return (
          <CartItem
            {...item}
            subtractFromCard={subtractFromCard}
            increaseInCard={increaseInCard}
          />
        );
      })}
      <h2 className="total-cost">{totalCost} TL</h2>
      <button className="proceed">PROCEED</button>
    </aside>
  );
};

export default Cart;
