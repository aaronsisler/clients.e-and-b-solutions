import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./input.module.scss";

const Input = ({ hasError, label, name, refProp }) => (
  <div className={styles.input}>
    <input name={name} ref={refProp} type="text" />
    <label
      htmlFor={name}
      className={cn(
        styles.input__label,
        hasError ? styles.input__labelError : ""
      )}
    >
      <span
        className={cn(
          styles.input__span,
          hasError ? styles.input__labelSpan : ""
        )}
      >
        {label}
      </span>
    </label>
  </div>
);

Input.propTypes = {
  hasError: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  refProp: PropTypes.func.isRequired
};

export default Input;
