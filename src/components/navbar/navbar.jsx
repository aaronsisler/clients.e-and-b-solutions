import React, { useState } from "react";
import cn from "classnames";
import Hyperlink from "../../atoms/hyperlink";
import Hamburger from "../../atoms/hamburger";

import "./navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuToggledClass = isMenuOpen ? "navbar__links--open" : undefined;

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Hyperlink
          className="navbar__brand-link"
          href="/"
          title="E&amp;B Solutions"
        />
      </div>
      <div className="navbar__toggle">
        <Hamburger
          isToggled={isMenuOpen}
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
      </div>
      <div className={cn("navbar__links", menuToggledClass)}>
        <Hyperlink
          className="navbar__link"
          href="/"
          onClick={() => setMenuOpen(false)}
          title="Home"
        />
        <Hyperlink
          className="navbar__link"
          href="/pricing"
          onClick={() => setMenuOpen(false)}
          title="Pricing"
        />
        <Hyperlink
          className="navbar__link"
          href="/portfolio"
          onClick={() => setMenuOpen(false)}
          title="Portfolio"
        />
        <Hyperlink
          className="navbar__link"
          href="/contact"
          onClick={() => setMenuOpen(false)}
          title="Contact"
        />
      </div>
    </nav>
  );
};

export default Navbar;
