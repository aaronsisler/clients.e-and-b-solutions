import React from "react";
import Hyperlink from "../../atoms/hyperlink";

import "./landing.scss";

const Landing = () => (
  <div className="landing">
    <div className="landing__content">
      <h1 className="landing__content-title">Technology made easy</h1>
      <Hyperlink href="/pricing" title="Let's Get Started" />
    </div>
  </div>
);

export default Landing;
