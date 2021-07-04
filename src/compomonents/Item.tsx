import { FC } from "react";
import { Link } from "react-router-dom";
import { ItemListAction } from "../redux/constants/type";

interface Props {
  id: number;
  title: string;
  price: number;
  img1: string;
  amount: number;
  addToCart: () => ItemListAction;
  increase: () => ItemListAction;
  decrease: () => ItemListAction;
}

const Item: FC<Props> = ({
  id,
  title,
  price,
  img1,
  amount,
  addToCart,
  increase,
  decrease,
}): JSX.Element => {
  return (
    <div className="item-wrapper">
      <div className="item">
        <Link to={`/item/${id}`}>
          <h1>{title.length >= 50 ? `${title.slice(0, 50)}...` : title}</h1>
          <img src={img1} alt="item" className="item-img blend-white-bg-img " />
        </Link>
        <div className="item-body">
          <h2>{price}</h2>
          <div className="amount-wrapper">
            <div className="amount">
              <div className="btn-container">
                <button onClick={() => decrease()} className="decrement">
                  -
                </button>
              </div>
              <h3>{amount}</h3>
              <div className="btn-container">
                <button onClick={() => increase()} className="increment">
                  +
                </button>
              </div>
              <div className="btn-container">
                <button onClick={() => addToCart()} className="add-btn">
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
