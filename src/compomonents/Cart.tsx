import React, { FC } from "react";

interface Props {}

// function Cart2(): JSX.Element {
//   return <div></div>;
// }

/* Without FC<Props> Cart is an anynmous function
that returns JSX.Element. Now it s an FC<Props> element.
*/
const Cart: FC<Props> = (): JSX.Element => {
  return <div></div>;
};

export default Cart;
