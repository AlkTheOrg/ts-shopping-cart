import React, { FC } from "react";

interface Props {
  id: number;
  title: string;
  price: number;
  img1: string;
  amount: number;
  subtractFromCard: (id: number) => void;
  increaseInCard: (id: number) => void;
}

const CartItem: FC<Props> = ({
  id,
  title,
  price,
  img1,
  amount,
  subtractFromCard,
  increaseInCard,
}): JSX.Element => {
  return (
    <div className="cart-item">
      <h3>{title}</h3>
      <div className="cart-item-body">
        <img src={img1} alt="cart-item" />
        <div className="cart-item-hero">
          <div className="cart-item-amount">
            <button
              onClick={() => subtractFromCard(id)}
              className="dec-item-amount"
            >
              -
            </button>
            <p>{amount}</p>
            <button
              onClick={() => increaseInCard(id)}
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
