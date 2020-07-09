import React from "react";
import NextLink from "next/link";
import cn from "classnames";

import "./logo.scss";

const Logo = ({ className }) => (
  <NextLink href="/">
    <svg className={cn("logo", className)}>
      <circle className="circle__inner" />
      <circle className="circle__outer" />
      <rect />
    </svg>
  </NextLink>
);

export default Logo;
