import React from "react";
import NextLink from "next/link";
import cn from "classnames";

import styles from "./logo.module.scss";

const Logo = ({ className }) => (
  <NextLink href="/">
    <div className={cn(styles.logo, className)}>
      <svg className={styles.logo__icon}>
        <circle className={styles.circle__inner} />
        <circle className={styles.circle__outer} />
        <rect />
      </svg>
      <div className={styles.logo__title}>E&amp;B&nbsp;Solutions</div>
    </div>
  </NextLink>
);

export default Logo;
