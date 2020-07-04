import React from "react";
import Hyperlink from "../../atoms/hyperlink";

import "./landing.scss";

const Landing = () => (
  <div className="landing">
    <div className="landing__splash">
      <div className="landing__splash-text">It&apos;s nice to meet you</div>
      <div className="landing__splash-link">
        <Hyperlink href="/pricing" title="Let's Get Started" />
      </div>
    </div>
  </div>
);

export default Landing;
