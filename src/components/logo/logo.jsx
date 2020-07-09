import React from "react";
import NextLink from "next/link";

import "./logo.scss";

const Logo = () => (
  <NextLink href="/">
    <svg className="logo">
      <circle className="circle__inner" />
      <circle className="circle__outer" />
      <rect />
    </svg>
  </NextLink>
);

export default Logo;
