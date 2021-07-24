import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import data, { ItemData } from "../../data";
import Item, { Props } from "../Item";
import { getByTextContent } from "../../lib/elemByTextContent";

describe("<Item />", () => {
  const renderItemWithRouter = (
    item: ItemData,
    props?: Partial<Props>,
    route = "/"
  ) => {
    window.history.pushState({}, "Home page", route);
    const defaultProps: Props = {
      id: item.id,
      title: item.title,
      price: item.price,
      img1: item.img1,
      amount: item.amount,
      addToCart: () => ({ type: "", payload: item }),
      increase: () => ({ type: "", payload: item }),
      decrease: () => ({ type: "", payload: item }),
    };
    return render(<Item {...defaultProps} {...props} />, {
      wrapper: BrowserRouter,
    });
  };

  it("should render a link element that redirects to item/:id", () => {
    const item = data[0];
    const { getByRole } = renderItemWithRouter(item);
    expect(getByRole("link")).toHaveAttribute("href", `/item/${item.id}`);
  });

  it("link element's heading should be the title of the item", () => {
    const item = data[0];
    const { getByRole } = renderItemWithRouter(item, { title: "My title" });
    expect(getByRole("link").firstElementChild?.textContent).toBe("My title");
  });

  it("should slice the title when it is longer than 49 characters", () => {
    const item = data[0];
    const { getByRole } = renderItemWithRouter(item);
    expect(getByRole("link").firstElementChild?.textContent).toBe(
      item.title.slice(0, 50) + "..."
    );
  });

  it("should render the price", () => {
    const item = data[0];
    renderItemWithRouter(item);
    const headingELem = getByTextContent(item.price + " TL");
    expect(headingELem).toBeInTheDocument();
  });

  it("should allow decreasing the amount", () => {
    const decrease = jest.fn();
    const item = data[0];
    const { getByRole } = renderItemWithRouter(item, { decrease });
    expect(decrease).not.toHaveBeenCalled();

    const decreaseBtn = getByRole("button", { name: "-" });
    expect(decreaseBtn).toBeInTheDocument();
    fireEvent.click(decreaseBtn);
    expect(decrease).toHaveBeenCalledTimes(1);
  });

  it("should allow increasing the amount", () => {
    const increase = jest.fn();
    const item = data[0];
    const { getByRole } = renderItemWithRouter(item, { increase });
    expect(increase).not.toHaveBeenCalled();

    const increaseBtn = getByRole("button", { name: "+" });
    expect(increaseBtn).toBeInTheDocument();
    fireEvent.click(increaseBtn);
    expect(increase).toHaveBeenCalledTimes(1);
  });

  it("should allow adding to cart", () => {
    const add = jest.fn();
    const item = data[0];
    const { getByRole } = renderItemWithRouter(item, { addToCart: add });
    expect(add).not.toHaveBeenCalled();

    const addBtn = getByRole("button", { name: "Add" });
    expect(addBtn).toBeInTheDocument();
    fireEvent.click(addBtn);
    expect(add).toHaveBeenCalledTimes(1);
  });
});
