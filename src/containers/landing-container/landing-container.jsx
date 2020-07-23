import React from "react";
import Landing from "../../components/landing";
import AboutUs from "../../components/about-us";

import "./landing-container.scss";

const LandingContainer = () => (
  <div className="landing-container">
    <Landing />
    <AboutUs />
  </div>
);

export default LandingContainer;
