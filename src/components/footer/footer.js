import React from "react";
import Link from "next/link";

import "./footer.scss";

const Footer = () => (
  <footer>
    <div>Copyright &copy; {new Date().getFullYear()}</div>
    <div>
      <Link href="/privacy-policy">
        <div className="navbar__link">Privacy Policy</div>
      </Link>
    </div>
  </footer>
);

export default Footer;
