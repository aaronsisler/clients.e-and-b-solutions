import getConfig from "next/config";
import axios from "axios";
import { validate } from "email-validator";
import {
  pointOfContactEmail,
  SERVICES_API_KEY,
  servicesApiGatewayURL
} from "../config";

const { publicRuntimeConfig } = getConfig();

const createHeaders = () => {
  console.log(getConfig());
  console.log(publicRuntimeConfig);
  console.log(publicRuntimeConfig.SERVICES_API_KEY);
  console.log(process.env.TACO);
  console.log(process.env.NEXT_PUBLIC_TACO);
  const headers = {
    "Content-Type": "application/json",
    "X-Api-Key": SERVICES_API_KEY
  };

  return { headers };
};

export const isEmailValid = emailAddress => validate(emailAddress);

export const sendEmail = async (data, done, fail) => {
  const emailData = { pointOfContactEmail, ...data };

  try {
    createHeaders();
    // await axios.post(servicesApiGatewayURL, emailData, createHeaders());
    done();
  } catch (e) {
    fail();
  }
};
