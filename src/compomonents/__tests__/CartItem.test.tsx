import { fireEvent, render } from "@testing-library/react";
import CartItem, { Props } from "../CartItem";
import data, { ItemData } from "../../data";
import { BrowserRouter } from "react-router-dom";
import { getByTextContent } from "../../lib/elemByTextContent";

describe("<CartItem />", () => {
  const renderCartItemWithRouter = (item: ItemData, props?: Partial<Props>) => {
    window.history.pushState({}, "Home Page", "/");
    const defaultProps: Props = {
      id: item.id,
      title: item.title,
      price: item.price,
      img1: item.img1,
      amount: item.amount,
      decreaseInCart: () => ({ type: "", payload: item }),
      increaseInCart: () => ({ type: "", payload: item }),
      deleteFromCart: () => ({ type: "", payload: item }),
    };
    return render(<CartItem {...defaultProps} {...props} />, {
      wrapper: BrowserRouter,
    });
  };

  let item: ItemData;

  const renderDefaultWithItem0 = () => {
    item = data[0];
    return renderCartItemWithRouter(item);
  };

  it("should have a delete button", () => {
    renderDefaultWithItem0();
    const elem = getByTextContent("X");
    expect(elem.parentElement?.tagName).toBe("button".toUpperCase());
  });

  it("should have a decrease button", () => {
    renderDefaultWithItem0();
    const elem = getByTextContent("-");
    expect(elem.tagName).toBe("button".toUpperCase());
  });

  it("should have a increase button", () => {
    renderDefaultWithItem0();
    const elem = document.querySelector(
      ".inc-item-amount"
    ) as HTMLButtonElement;
    expect(elem.tagName).toBe("button".toUpperCase());
  });

  it("should show the total price of the CartItem", () => {
    renderDefaultWithItem0();
    const totalPriceHeading = getByTextContent(
      item.price * item.amount + " TL"
    );
    expect(totalPriceHeading.tagName).toBe("H4");
  });

  it("should allow to delete item from cart", () => {
    item = data[0];
    const deleteFromCart = jest.fn();
    renderCartItemWithRouter(item, { deleteFromCart });
    expect(deleteFromCart).not.toHaveBeenCalled();

    const delBtn = getByTextContent("X");
    fireEvent.click(delBtn);
    expect(deleteFromCart).toHaveBeenCalledTimes(1);
  });

  it("should allow to increase item in cart", () => {
    item = data[0];
    const increaseInCart = jest.fn();
    renderCartItemWithRouter(item, { increaseInCart });
    expect(increaseInCart).not.toHaveBeenCalled();

    const increaseBtn = document.querySelector(
      ".inc-item-amount"
    ) as HTMLButtonElement;
    fireEvent.click(increaseBtn);
    expect(increaseInCart).toHaveBeenCalledTimes(1);
  });

  it("should allow to decrease item from cart", () => {
    item = data[0];
    const decreaseInCart = jest.fn();
    renderCartItemWithRouter(item, { decreaseInCart });
    expect(decreaseInCart).not.toHaveBeenCalled();

    const decreaseBtn = getByTextContent("-");

    fireEvent.click(decreaseBtn);
    expect(decreaseInCart).toHaveBeenCalledTimes(1);
  });
});
