import data from "../../../data";
import Constants from "../../constants";
import itemsReducer from "../itemsReducer";

describe("itemsReducer", () => {
  it("should use the shuffled data by default state", () => {
    const newState = itemsReducer(undefined, {
      type: "",
      payload: data[0],
    }).sort((i1, i2) => (i1.id > i2.id ? 1 : -1));
    expect(newState).toEqual(data);
    // expect(new Set(newState)).toEqual(new Set(data));
  });

  it("should return data on all items action", () => {
    expect(
      itemsReducer([], { type: Constants.ALL_ITEMS, payload: data[0] })
    ).toEqual(data);
  });

  it("should handle increasing an existing list item's amount", () => {
    const item = data[0];
    expect(
      itemsReducer([item], {
        type: Constants.INCREASE_IN_LIST,
        payload: item,
      })
    ).toEqual([{ ...item, amount: item.amount + 1 }]);
  });

  it("should return the previous state when trying to increase an item that is not in the list", () => {
    const previousState = [data[0]];
    expect(
      itemsReducer(previousState, {
        type: Constants.INCREASE_IN_LIST,
        payload: data[1],
      })
    ).toEqual(previousState);
  });

  it("should handle decreasing an existing list item's amount", () => {
    const previousAmount = 5;
    const item = { ...data[0], amount: previousAmount };
    expect(
      itemsReducer([item], { type: Constants.DECREASE_IN_LIST, payload: item })
    ).toEqual([{ ...item, amount: item.amount - 1 }]);
  });

  it("should return the previous state when decreasing a list item with amount of 1", () => {
    const item = { ...data[0], amount: 1 };
    expect(
      itemsReducer([item], { type: Constants.DECREASE_IN_LIST, payload: item })
    ).toEqual([item]);
  });

  it("should return the previous state on decreasing a non list item", () => {
    const previousState = [data[0]];
    expect(
      itemsReducer(previousState, {
        type: Constants.DECREASE_IN_LIST,
        payload: data[1],
      })
    ).toEqual(previousState);
  });
});
