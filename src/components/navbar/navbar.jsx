import React, { useState, useEffect } from "react";
import cn from "classnames";

import Logo from "../logo";
import Hyperlink from "../../atoms/hyperlink";
import Hamburger from "../../atoms/hamburger";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuToggledClass = isMenuOpen ? "navbar--open" : undefined;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("body__no-scroll");
    } else {
      document.body.classList.remove("body__no-scroll");
    }
  });

  return (
    <nav className={styles.navbar}>
      <Logo className={styles.navbar__logo} />
      <div className={styles.navbar__toggle}>
        <Hamburger
          isToggled={isMenuOpen}
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
      </div>
      <div className={cn(styles.navbar__links, menuToggledClass)}>
        <Hyperlink
          className={styles.navbar__link}
          href="/"
          onClick={() => setMenuOpen(false)}
          title="Home"
        />
        <Hyperlink
          className={styles.navbar__link}
          href="/pricing"
          onClick={() => setMenuOpen(false)}
          title="Pricing"
        />
        <Hyperlink
          className={styles.navbar__link}
          href="/contact"
          onClick={() => setMenuOpen(false)}
          title="Contact"
        />
      </div>
    </nav>
  );
};

export default Navbar;
