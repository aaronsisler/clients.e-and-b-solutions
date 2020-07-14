import React from "react";
import Hyperlink from "../../atoms/hyperlink";

import "./landing.scss";
import LandingSvg from "../landing-svg/landing-svg";

const Landing = () => (
  <div className="landing">
    <h1 className="landing__title">Technology made easy</h1>
    <p className="landing__secondary">
      Running a business is hectic enough. Let us worry about building and
      keeping your site up to date.
    </p>
    <Hyperlink
      href="/pricing"
      title="Let's Get Started"
      className="landing__cta"
    />
    <div className="landing__section-divide">
      <LandingSvg classname="svg__fill" />
      <LandingSvg classname="svg__line" />
    </div>
  </div>
);

export default Landing;
