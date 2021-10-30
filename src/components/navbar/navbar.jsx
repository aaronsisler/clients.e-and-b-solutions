import React, { useState, useEffect } from "react";
import cn from "classnames";

import Logo from "../logo";
import Hyperlink from "../../atoms/hyperlink";
import Hamburger from "../../atoms/hamburger";

import navbarStyles from "./navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuToggledClass = isMenuOpen ? navbarStyles.navbar__open : undefined;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("body__noScroll");
    } else {
      document.body.classList.remove("body__noScroll");
    }
  });

  return (
    <nav className={navbarStyles.navbar}>
      <Logo className={navbarStyles.navbar__logo} />
      <div className={navbarStyles.navbar__toggle}>
        <Hamburger
          isToggled={isMenuOpen}
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
      </div>
      <div className={cn(navbarStyles.navbar__links, menuToggledClass)}>
        <Hyperlink
          className={navbarStyles.navbar__link}
          href="/"
          onClick={() => setMenuOpen(false)}
          title="Home"
        />
        <Hyperlink
          className={navbarStyles.navbar__link}
          href="/pricing"
          onClick={() => setMenuOpen(false)}
          title="Pricing"
        />
        <Hyperlink
          className={navbarStyles.navbar__link}
          href="/contact"
          onClick={() => setMenuOpen(false)}
          title="Contact"
        />
      </div>
    </nav>
  );
};

export default Navbar;
