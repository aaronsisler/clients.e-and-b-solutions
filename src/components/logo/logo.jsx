import React from "react";
import NextLink from "next/link";
import cn from "classnames";

import "./logo.scss";

const Logo = ({ className }) => (
  <NextLink href="/">
    <div className={cn("logo", className)}>
      <svg className="logo__icon">
        <circle className="circle__inner" />
        <circle className="circle__outer" />
        <rect />
      </svg>
      <div className="logo__title">E&amp;B&nbsp;Solutions</div>
    </div>
  </NextLink>
);

export default Logo;
