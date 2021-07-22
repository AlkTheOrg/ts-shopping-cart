import { render, screen } from "@testing-library/react";
import Error from "../Error";
describe("<Error />", () => {
  beforeEach(() => {
    render(<Error />);
  });

  it("should render error heading", () => {
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  it("Heading should have an inline style of textAlign: center", () => {
    const headingElem = screen.getByRole("heading");
    expect(headingElem.style.textAlign).toBe("center");
  });
});
