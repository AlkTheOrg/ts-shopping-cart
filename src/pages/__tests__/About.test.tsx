import { render, screen } from "@testing-library/react";
import About from "../About";

describe("<About />", () => {
  beforeEach(() => {
    render(<About />);
  });

  it("should render about heading", () => {
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toBeInTheDocument();
  });

  it("Heading should have inline style of textAlign: center", () => {
    const headerElement = screen.getByRole("heading");
    expect(headerElement.style.textAlign).toBe("center");
  });
});
