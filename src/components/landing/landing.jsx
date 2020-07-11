import React from "react";
import Hyperlink from "../../atoms/hyperlink";

import "./landing.scss";

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
  </div>
);

export default Landing;
