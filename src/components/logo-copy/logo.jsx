import React from "react";
import NextLink from "next/link";

import "./logo.scss";

const Logo = () => (
  <>
    {/* <svg className="logo-glow">
      <circle className="circle__inner" />
      <rect />
    </svg> */}
    <svg className="logo-double">
      <circle className="circle__inner" />
      <circle className="circle__outer" />
      <rect />
    </svg>
    {/* <svg className="logo-og">
      <circle />
      <rect />
    </svg> */}
  </>
  //   <NextLink href="/">
  //   <img className="logo__image" src={logo.src} alt={logo.alt} />
  // </NextLink>
);

export default Logo;
