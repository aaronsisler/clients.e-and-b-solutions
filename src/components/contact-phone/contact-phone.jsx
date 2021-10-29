import React from "react";
import { CONTACT_PHONE_NUMBER } from "../../config";

import styles from "./contact-phone.module.scss";

const ContactPhone = () => (
  <div className="contact-phone">
    <h2>{CONTACT_PHONE_NUMBER}</h2>
  </div>
);

export default ContactPhone;
