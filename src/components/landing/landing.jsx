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
    <div className="landing__section-divide">
      <svg className="svg__fill" viewBox="0 0 1440 120">
        <path d="M0,64L40,69.3C80,75,160,85,240,96C320,107,400,117,480,101.3C560,85,640,43,720,26.7C800,11,880,21,960,42.7C1040,64,1120,96,1200,106.7C1280,117,1360,107,1400,101.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
      <svg className="svg__line" viewBox="0 0 1440 120">
        <path d="M0,64L40,69.3C80,75,160,85,240,96C320,107,400,117,480,101.3C560,85,640,43,720,26.7C800,11,880,21,960,42.7C1040,64,1120,96,1200,106.7C1280,117,1360,107,1400,101.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
    </div>
  </div>
);

export default Landing;
