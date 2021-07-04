import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="main-nav">
      <ul className="nav-list">
        <div className="react-nav-links">
          <li className="react-nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="react-nav-link">
            <Link to="/about">About</Link>
          </li>
        </div>
        <li className="nav-list-elem">
          <a id="github" href="github.com/AlkTheOrg">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt=""
              style={{ width: "44px", mixBlendMode: "multiply" }}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
