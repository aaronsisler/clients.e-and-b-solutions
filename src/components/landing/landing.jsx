import React from "react";
import Hyperlink from "../../atoms/hyperlink";
import LandingSvg from "../landing-svg/landing-svg";

import styles from "./landing.module.scss";

const Landing = () => (
  <div className={styles.landing}>
    <h1 className={styles.landing__title}>Technology made easy1</h1>
    <p className={styles.landing__secondary}>
      Running a business is hectic enough. Let us worry about building and
      keeping your site up to date.
    </p>
    <Hyperlink
      href="/pricing"
      title="Let's Get Started"
      className={styles.landing__cta}
    />
    <div className={styles.landing__sectionDivide}>
      <LandingSvg classname={styles.svg__fill} />
      <LandingSvg classname={styles.svg__line} />
    </div>
  </div>
);

export default Landing;
