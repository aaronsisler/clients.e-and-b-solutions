import axios from "axios";
import { validate } from "email-validator";
import {
  POINT_OF_CONTACT_EMAIL,
  SERVICES_API_KEY,
  SERVICES_GATEWAY_URL
} from "../config";

const createHeaders = () => {
  console.log(SERVICES_API_KEY);
  const headers = {
    "Content-Type": "application/json",
    "X-Api-Key": SERVICES_API_KEY
  };

  return { headers };
};

export const isEmailValid = emailAddress => validate(emailAddress);

export const sendEmail = async (data, done, fail) => {
  // const emailData = { pointOfContactEmail: POINT_OF_CONTACT_EMAIL, ...data };

  try {
    createHeaders();

    // await axios.post(
    //   `${SERVICES_GATEWAY_URL}/email`,
    //   emailData,
    //   createHeaders()
    // );

    done();
  } catch (e) {
    fail();
  }
};
