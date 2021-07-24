import { fireEvent, render, screen } from "@testing-library/react";
import ItemShow from "../ItemShow";
import data from "../../data";
import { MemoryRouter, Route } from "react-router-dom";
import { getByTextContent } from "../../lib/elemByTextContent";

const renderComponent = (itemId: number) => {
  return render(
    <MemoryRouter initialEntries={[`/item/${itemId}`]}>
      <Route path="/item/:id">
        <ItemShow />
      </Route>
    </MemoryRouter>
  );
};

describe("<ItemShow />", () => {
  it("should inform that the item is not found when param is not valid", async () => {
    renderComponent(-25);
    const headingElem = screen.getByRole("heading") as HTMLHeadingElement;
    expect(headingElem).toBeInTheDocument();
    expect(headingElem.textContent).toMatch(/item not found/i);
  });

  describe("renders the item on a valid id", () => {
    it("should render the title", async () => {
      renderComponent(1);
      // console.log(window.location.href);
      const titleElem = document.querySelector(".item-image-container")
        ?.firstElementChild as HTMLHeadingElement;
      expect(titleElem).not.toBeNull();
      expect(titleElem.textContent).toBe(data[0].title);
    });

    it("should render the first image at center", () => {
      const id = 1;
      renderComponent(id);
      const imgCenterElem = document.querySelector(
        ".img-at-center"
      ) as HTMLImageElement;
      expect(imgCenterElem.src).toBe(data[id - 1].img1);
    });

    it("should render the last image at left", () => {
      const id = 1;
      renderComponent(id);
      const imgLeftElem = document.querySelector(
        ".img-at-left"
      ) as HTMLImageElement;
      expect(imgLeftElem.src).toBe(data[id - 1].img4);
    });

    it("shouldn't render the image if the img data is empty", () => {
      const id = 2;
      renderComponent(id);
      const imgRightElem = document.querySelector(".img-at-left");
      expect(imgRightElem).toBe(null);
    });

    it("should render the price", () => {
      const id = 1;
      renderComponent(id);
      const headingElem = screen.getByText(/TL/);
      expect(headingElem).toBeInTheDocument();
    });

    it("should render the data's price in the price heading", () => {
      const id = 1;
      const { getByText } = renderComponent(id);
      const headingElem = getByTextContent(data[id - 1].price + " TL");
      expect(headingElem).toBeInTheDocument();
    });
  });

  describe("it should render the image shifter buttons", () => {
    it("left", () => {
      renderComponent(1);
      const buttonElem = document.querySelector(".shift-left");
      expect(buttonElem).toBeInTheDocument();
    });
    it("right", () => {
      renderComponent(1);
      const buttonElem = document.querySelector(".shift-right");
      expect(buttonElem).toBeInTheDocument();
    });
  });

  describe("images must be shifted when clicked to shifter buttons", () => {
    let id: number;
    let imgCenterElem: HTMLImageElement;
    beforeEach(() => {
      id = 1;
      renderComponent(id);
      imgCenterElem = document.querySelector(
        ".img-at-center"
      ) as HTMLImageElement;
    });

    it("shifts left", () => {
      const buttonElem = document.querySelector(
        ".shift-left"
      ) as HTMLButtonElement;
      fireEvent.click(buttonElem);
      expect(imgCenterElem.src).toBe(data[id - 1].img2);
    });

    it("shifts right", () => {
      const buttonElem = document.querySelector(
        ".shift-right"
      ) as HTMLButtonElement;
      fireEvent.click(buttonElem);
      expect(imgCenterElem.src).toBe(data[id - 1].img4);
    });
  });

  it("should have a add-btn that console logs 'todo' on clicked for now", () => {
    renderComponent(1);
    const buttonElem = document.querySelector(".add-btn") as HTMLButtonElement;
    expect(buttonElem).toBeInTheDocument();

    console.log = jest.fn();

    fireEvent.click(buttonElem);
    expect(console.log).toHaveBeenCalledWith("todo");

    fireEvent.click(buttonElem);
    // The first argument of the second call to the function was 'todo'
    expect(console.log.mock.calls[1][0]).toBe("todo");
  });
});
