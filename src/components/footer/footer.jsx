import React from "react";
import Hyperlink from "../../atoms/hyperlink";

import "./footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      Copyright &copy; {new Date().getFullYear()}
    </div>
    <div className="footer__links">
      <Hyperlink
        className="footer__link"
        href="/privacy-policy"
        title="Privacy Policy"
      />
    </div>
  </footer>
);

export default Footer;
