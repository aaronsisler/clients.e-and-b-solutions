import React from "react";
import PropTypes from "prop-types";

import "./file-upload.scss";

const FileUpload = ({ buttonText, idSuffix = "", onFileUpload }) => (
  <div className="file-upload">
    <input
      id={`file-upload__input${idSuffix}`}
      type="file"
      className="file-upload__input"
      onChange={onFileUpload}
    />
    <label
      htmlFor={`file-upload__input${idSuffix}`}
      className="file-upload__label"
    >
      {buttonText}
    </label>
  </div>
);

FileUpload.propTypes = {
  buttonText: PropTypes.string.isRequired,
  idSuffix: PropTypes.string,
  onFileUpload: PropTypes.func.isRequired
};

export default FileUpload;
