import React from "react";
import AuthorizedCheck from "../../components/authorized-check";
import ApplicationSubmissionForm from "../../components/application-submission-form";
import ImageSubmissionForm from "../../components/image-submission-form";

import "./service-testing-container.scss";

const ServiceTestingContainer = () => (
  <div className="service-testing-container">
    <AuthorizedCheck />
    <ApplicationSubmissionForm />
    <ImageSubmissionForm />
  </div>
);

export default ServiceTestingContainer;
