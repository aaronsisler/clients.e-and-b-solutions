import React from "react";
import Landing from "../../components/landing";
import AboutUs from "../../components/about-us";
import Portfolio from "../../components/portfolio";

import "./landing-container.scss";

const LandingContainer = () => (
  <div className="landing-container">
    <Landing />
    <AboutUs />
    <Portfolio />
  </div>
);

export default LandingContainer;
