import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./input.module.scss";

const Input = ({ hasError, label, name, refProp }) => (
  <div className={styles.input}>
    <input name={name} ref={refProp} type="text" />
    <label
      htmlFor={name}
      className={cn(styles.input__label, hasError ? "input__label--error" : "")}
    >
      <span
        className={cn(styles.input__span, hasError ? "input__span--error" : "")}
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
