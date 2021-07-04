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

  return (
    <div className="item-show-wrapper">
      <div className="item-show">
        <h2>{title}</h2>
        <div className="item-image-container">
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
          <button onClick={() => console.log("TODO")} className="shift-left">
            &#60;
          </button>
          <button onClick={() => console.log("TODO")} className="shift-right">
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemShow;
