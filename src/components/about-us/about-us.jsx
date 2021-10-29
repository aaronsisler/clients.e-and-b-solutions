import React from "react";

import styles from "./about-us.module.scss";

const AboutUs = () => (
  <div className={styles.aboutUs}>
    <h2 className={styles.aboutUs__title}>Who are we?</h2>
    <p className={styles.aboutUs__text}>
      E&amp;B Solutions was established in 2016 as a challenge to see how ten
      years of software experience could help small businesses. Reaching out to
      local businesses showed there was a need for zero maintenance websites.
      Businesses just wanted to set it and forget it.
    </p>
    <p className={styles.aboutUs__text}>
      The internet of today is very different than the internet of yesterday,
      and we think the internet of tomorrow is just around the corner. We're
      writing software to take you all the way from yesterday to today, and then
      safely to tomorrow and beyond.
    </p>
  </div>
);

export default AboutUs;
