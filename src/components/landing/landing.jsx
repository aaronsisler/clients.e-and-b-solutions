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
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path d="M0,160L80,170.7C160,181,320,203,480,181.3C640,160,800,96,960,64C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg> */}
      <svg className="fill" viewBox="0 0 1440 250" preserveAspectRatio="none">
        <path d="M0,224L80,218.7C160,213,320,203,480,202.7C640,203,800,213,960,186.7C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      <svg className="line" viewBox="0 0 1440 250" preserveAspectRatio="none">
        <path d="M0,224L80,218.7C160,213,320,203,480,202.7C640,203,800,213,960,186.7C1120,160,1280,96,1360,64L1440,32"></path>
      </svg>
    </div>
  </div>
);

export default Landing;
