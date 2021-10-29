import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons/faExclamationCircle";

import styles from "./form-error.module.scss";

const FormError = ({ error }) => (
  <div className={styles.form_error}>
    <FontAwesomeIcon
      className={styles.form_error__icon}
      icon={faExclamationCircle}
    />
    &nbsp;&nbsp;{error}
  </div>
);

FormError.propTypes = {
  error: PropTypes.string.isRequired
};

export default FormError;
