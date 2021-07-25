import Constants from "../../constants";
import searchFilterReducer from "../searchFilterReducer";

describe("searchFilterReducer", () => {
  test("should return the initial state", () => {
    expect(searchFilterReducer(undefined, { type: "", payload: "" })).toEqual(
      ""
    );
  });

  test("should update the searchterm", () => {
    expect(
      searchFilterReducer("", {
        type: Constants.SET_SEARCH_TERM,
        payload: "Lenovo",
      })
    ).toEqual("Lenovo");
  });
});
