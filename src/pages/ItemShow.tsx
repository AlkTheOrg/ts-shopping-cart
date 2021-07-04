import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const ItemShow: React.FC = () => {
  interface Param {
    id: string;
  }
  const { id } = useParams<Param>();
  const item = data.find((i) => i.id.toString() === id);
  const [images, setImages] = React.useState<string[]>(
    item ? [item.img1, item.img2, item.img3, item.img4] : []
  );

  if (!item) return <h1>Item not Found</h1>;

  const { id: itemId, title, price, amount } = { ...item };

  const shiftLeft = () => {
    setImages([...images.slice(1), images[0]]);
  };

  const shiftRight = () => {
    setImages([
      images[images.length - 1],
      ...images.slice(0, images.length - 1),
    ]);
  };

  return (
    <div className="item-show-wrapper">
      <div className="item-show">
        <div className="item-image-container">
          <h2>{title}</h2>
          <img className="img-at-center" src={images[0]} alt={title + 1} />
          {images[2] ? (
            <img className="img-at-right" src={images[1]} alt={title + 2} />
          ) : null}
          {images[3] ? (
            <img className="img-at-right" src={images[2]} alt={title + 3} />
          ) : null}
          {images[4] ? (
            <img className="img-at-left" src={images[3]} alt={title + 4} />
          ) : null}
          <button onClick={shiftLeft} className="shift-left">
            &#60;
          </button>
          <button onClick={shiftRight} className="shift-right">
            &#62;
          </button>
        </div>
        <div className="item-hero">
          <h2>
            {price} <i>TL</i>
          </h2>
          <div className="amount-wrapper">
            <div className="amount">
              <div className="btn-container">
                <button
                  onClick={() => console.log("todo")}
                  className="decrement"
                >
                  TO
                </button>
              </div>
              <h3>{amount}</h3>
              <div className="btn-container">
                <button
                  onClick={() => console.log("todo")}
                  className="increment"
                >
                  DO
                </button>
              </div>
              <div className="btn-container">
                <button onClick={() => console.log("todo")} className="add-btn">
                  Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemShow;
