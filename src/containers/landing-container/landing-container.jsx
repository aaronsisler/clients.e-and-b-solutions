import React from "react";
import Landing from "../../components/landing";
import AboutUs from "../../components/about-us";

import styles from "./landing-container.module.scss";

const LandingContainer = () => (
  <div className={styles.landingContainer}>
    <Landing />
    <AboutUs />
  </div>
);

export default LandingContainer;
