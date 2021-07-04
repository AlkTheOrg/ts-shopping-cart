import React, { FC } from "react";
import { ItemListAction } from "../redux/constants/type";

interface Props {
  id: number;
  title: string;
  price: number;
  img1: string;
  amount: number;
  decreaseInCart: () => ItemListAction;
  increaseInCart: () => ItemListAction;
}

const CartItem: FC<Props> = ({
  id,
  title,
  price,
  img1,
  amount,
  decreaseInCart,
  increaseInCart: increaseInCard,
}): JSX.Element => {
  return (
    <div className="cart-item">
      <h3>{title}</h3>
      <div className="cart-item-body">
        <img src={img1} alt="cart-item" className="blend-white-bg-img" />
        <div className="cart-item-hero">
          <div className="cart-item-amount">
            <button
              onClick={() => decreaseInCart()}
              className="dec-item-amount"
            >
              -
            </button>
            <p>{amount}</p>
            <button
              onClick={() => increaseInCard()}
              className="inc-item-amount"
            >
              +
            </button>
          </div>
          <h4>{price * amount} TL</h4>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
