import React from "react";
import ApplicationSubmissionForm from "../../components/application-submission-form";
import ImageSubmissionForm from "../../components/image-submission-form";

import "./service-testing-container.scss";

const ServiceTestingContainer = () => (
  <div className="service-testing-container">
    <ApplicationSubmissionForm />
    <ImageSubmissionForm />
  </div>
);

export default ServiceTestingContainer;
