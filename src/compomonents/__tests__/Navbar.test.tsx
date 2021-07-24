import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";

const renderNavbarWithRouter = (ui: JSX.Element, route = "/") => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter });
};

describe("<Navbar />", () => {
  it("should have a Home link", () => {
    const { getByRole } = renderNavbarWithRouter(<Navbar />);
    const linkElem = getByRole("link", { name: "Home" });
    expect(linkElem).toBeInTheDocument();
  });

  it("should have a About link", () => {
    const { getByRole } = renderNavbarWithRouter(<Navbar />);
    const linkElem = getByRole("link", { name: "About" });
    expect(linkElem).toBeInTheDocument();
  });

  it("should have a link with github icon", () => {
    renderNavbarWithRouter(<Navbar />);
    const iconLink =
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
    const githubLinkElem = document.getElementById("github");
    const imgElem = githubLinkElem?.firstElementChild as HTMLImageElement;
    expect(imgElem).not.toBeNull();
    expect(imgElem.src).toBe(iconLink);
  });

  it("should redirect to Home page when clicked to Home link", () => {
    const { getByRole } = renderNavbarWithRouter(<Navbar />);
    const homeElem = getByRole("link", { name: "Home" });
    fireEvent.click(homeElem);
    expect(window.location.pathname).toBe("/");
  });

  it("should redirect to About page when clicked to About link", () => {
    const { getByRole } = renderNavbarWithRouter(<Navbar />);
    const aboutElem = getByRole("link", { name: "About" });
    fireEvent.click(aboutElem);
    expect(window.location.pathname).toBe("/about");
  });

  it("should redirect to error page when clicked to Github link", async () => {
    const container = renderNavbarWithRouter(<Navbar />);
    expect(document.getElementById("github")).toHaveAttribute(
      "href",
      "/errroooor"
    );
  });
});
