import { FC } from "react";
import { ItemListAction } from "../redux/constants/type";

export interface Props {
  id: number;
  title: string;
  price: number;
  img1: string;
  amount: number;
  decreaseInCart: () => ItemListAction;
  increaseInCart: () => ItemListAction;
  deleteFromCart: () => ItemListAction;
}

const CartItem: FC<Props> = ({
  id,
  title,
  price,
  img1,
  amount,
  decreaseInCart,
  increaseInCart,
  deleteFromCart,
}): JSX.Element => {
  return (
    <div className="cart-item">
      <button className="del-icon" onClick={() => deleteFromCart()}>
        <p>X</p>
      </button>
      <h3>{title.length >= 50 ? `${title.slice(0, 50)}...` : title}</h3>
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
              onClick={() => increaseInCart()}
              className="inc-item-amount"
            >
              +
            </button>
          </div>
          <h4>
            {price * amount} <i>TL</i>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
