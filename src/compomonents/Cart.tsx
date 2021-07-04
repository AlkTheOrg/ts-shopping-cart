import { FC, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { ItemData } from "../data";
import { RootState } from "../redux/constants/type";
import CartItem from "./CartItem";
import * as Actions from "../redux/actions/index";

interface Props {
  cart: ItemData[];
}

// function Cart2(): JSX.Element {
//   return <div></div>;
// }

/* Without FC<Props> Cart is an anynmous function
that returns JSX.Element. Now it s an FC<Props> element.
*/
const Cart: FC<Props> = ({ cart }): JSX.Element => {
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const cost: number = cart.reduce(
      (sum: number, item: ItemData) => sum + item.price * item.amount,
      0
    );
    setTotalCost(cost);
  }, [cart]);

  const dispatch = useDispatch();
  const increaseInCart = (item: ItemData) =>
    dispatch(Actions.increaseInCart(item));
  const decreaseInCart = (item: ItemData) =>
    dispatch(Actions.decreaseInCart(item));
  return (
    <aside className="Cart">
      <div className="Cart-inside">
        <h1>Cart</h1>
        {cart.map((item: ItemData) => {
          return (
            <CartItem
              key={item.id}
              {...item}
              decreaseInCart={() => decreaseInCart(item)}
              increaseInCart={() => increaseInCart(item)}
            />
          );
        })}
        <h2 className="total-cost">{totalCost} TL</h2>
        <button className="proceed">PROCEED</button>
      </div>
    </aside>
  );
};

const mapStateToProps = (state: RootState) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
