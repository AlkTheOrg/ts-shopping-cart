import { fireEvent, render } from "@testing-library/react";
import SearchBar from "../SearchBar";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
const mockStore = configureStore();

describe("<SearchBar />", () => {
  const renderSearchBar = () => {
    return render(
      <Provider store={mockStore()}>
        <SearchBar />
      </Provider>
    );
  };

  it("should have a label for search input", () => {
    const { getByLabelText } = renderSearchBar();
    const labelElem = getByLabelText(/search/i);
    expect(labelElem).toBeInTheDocument();
  });

  it("should render input element", () => {
    const { getByRole } = renderSearchBar();
    const inputElem = getByRole("textbox");
    expect(inputElem).toBeInTheDocument();
  });

  it("should focus to search input by default", () => {
    const { getByRole } = renderSearchBar();
    const inputElem = getByRole("textbox");
    expect(document.activeElement).toBe(inputElem);
  });

  it("should allow changing the input value", () => {
    const { getByRole } = renderSearchBar();
    const inputElem = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElem, { target: { value: "Lenovo" } });
    expect(inputElem.value).toBe("Lenovo");
  });

  it("changing the input value (with userEvent library)", () => {
    const { getByRole } = renderSearchBar();
    const inputElem = getByRole("textbox") as HTMLInputElement;
    userEvent.type(inputElem, "Lenovo");
    expect(inputElem.value).toBe("Lenovo");
  });
});
