import { render } from "@testing-library/react";
import Loading from "../Loading";

describe("<Loading />", () => {
  it("should render loading heading", () => {
    const { getByRole } = render(<Loading />);
    const headingElem = getByRole("loading");
    expect(headingElem).toBeInTheDocument();
  });
});
