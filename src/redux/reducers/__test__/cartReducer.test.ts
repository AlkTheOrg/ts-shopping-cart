import data from "../../../data";
import Constants from "../../constants";
import cartReducer from "../cartReducer";

describe("cartReducer", () => {
  it("should return the initial state", () => {
    expect(cartReducer(undefined, { type: "", payload: data[0] })).toEqual([]);
  });

  it("should handle an item being added to an empty cart", () => {
    expect(
      cartReducer(undefined, { type: Constants.ADD_TO_CART, payload: data[0] })
    ).toEqual([data[0]]);
  });

  it("should handle an item being added to an existing cart", () => {
    expect(
      cartReducer([data[0]], { type: Constants.ADD_TO_CART, payload: data[1] })
    ).toEqual([data[0], data[1]]);
  });

  it("should handle increasing the amount by the item amount while adding to cart if the item is already in the cart", () => {
    const increaseAmount = 3;
    const existingItem = data[0];
    const itemToBeAdded = { ...existingItem, amount: increaseAmount };
    const previousState = [existingItem];
    expect(
      cartReducer(previousState, {
        type: Constants.ADD_TO_CART,
        payload: itemToBeAdded,
      })
    ).toEqual([
      { ...existingItem, amount: existingItem.amount + increaseAmount },
    ]);
  });

  it("should handle increasing an existing cart item's amount", () => {
    const item = data[0];
    expect(
      cartReducer([item], {
        type: Constants.INCREASE_IN_CART,
        payload: item,
      })
    ).toEqual([{ ...item, amount: item.amount + 1 }]);
  });

  it("should return the previous state when trying to increase an item that is not in the cart", () => {
    const previousState = [data[0]];
    expect(
      cartReducer(previousState, {
        type: Constants.INCREASE_IN_CART,
        payload: data[1],
      })
    ).toEqual(previousState);
  });

  it("should handle decreasing an existing cart item's amount", () => {
    const previousAmount = 5;
    const item = { ...data[0], amount: previousAmount };
    expect(
      cartReducer([item], { type: Constants.DECREASE_IN_CART, payload: item })
    ).toEqual([{ ...item, amount: item.amount - 1 }]);
  });

  it("should handle removing on decrease if the cart item's amount is 1", () => {
    const item = { ...data[0], amount: 1 };
    expect(
      cartReducer([item], { type: Constants.DECREASE_IN_CART, payload: item })
    ).toEqual([]);
  });

  it("should return the previous state on decreasing a non cart item", () => {
    const previousState = [data[0]];
    expect(
      cartReducer(previousState, {
        type: Constants.DECREASE_IN_CART,
        payload: data[1],
      })
    ).toEqual(previousState);
  });

  it("should handle removing a cart item from the cart", () => {
    expect(
      cartReducer([data[0]], {
        type: Constants.DEL_FROM_CART,
        payload: data[0],
      })
    ).toEqual([]);
  });

  it("should return the previous state on removing a non cart item", () => {
    const prevState = [data[0]];
    expect(
      cartReducer(prevState, {
        type: Constants.DEL_FROM_CART,
        payload: data[1],
      })
    ).toEqual(prevState);
  });
});
