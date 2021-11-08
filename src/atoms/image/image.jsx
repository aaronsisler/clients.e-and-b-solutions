import React from "react";
import Image from "next/image";
import cn from "classnames";

import PropTypes from "prop-types";

import styles from "./image.module.scss";

const ImageAtom = ({ altText, className, src }) => (
  <Image className={cn(styles.image, className)} src={src} alt={altText} />
);

ImageAtom.propTypes = {
  altText: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default ImageAtom;
