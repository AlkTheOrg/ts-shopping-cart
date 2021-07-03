import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  price: number;
  img1: string;
  amount: number;
  addToCart: (id: number) => void;
  changeAmountOfItemInList: (id: number, op: string) => void;
}

const Item: FC<Props> = ({
  id,
  title,
  price,
  img1,
  amount,
  addToCart,
  changeAmountOfItemInList,
}): JSX.Element => {
  return (
    <div className="item-wrapper">
      <div className="item">
        <Link to={`/item/${id}`}>
          <h1>{title}</h1>
          <img src={img1} alt="item" className="item-img" />
        </Link>
        <div className="item-body">
          <h2>{price}</h2>
          <div className="amount-wrapper">
            <div className="amount">
              <div className="btn-container">
                <button
                  onClick={() => changeAmountOfItemInList(id, "DEC")}
                  className="decrement"
                >
                  -
                </button>
              </div>
              <h3>{amount}</h3>
              <div className="btn-container">
                <button
                  onClick={() => changeAmountOfItemInList(id, "INC")}
                  className="increment"
                >
                  +
                </button>
              </div>
              <div className="btn-container">
                <button onClick={() => addToCart(id)} className="add-btn">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
