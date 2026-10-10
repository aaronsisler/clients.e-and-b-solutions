// Fails the build when a required NEXT_PUBLIC_* variable is missing.
// Next.js only inlines `process.env.NEXT_PUBLIC_X` when written literally,
// so callers pass the value in rather than this looking it up by name.
const requireEnv = (name, value) => {
  if (!value) {
    throw new Error(`${name} must be set at build time`);
  }
  return value;
};

// Email
export const POINT_OF_CONTACT_EMAIL = "aaron.sisler@eandbsolutions.com";

// CDN URL
export const CDN_URL =
  "https://cdn-e-and-b-solutions.s3.amazonaws.com/e-and-b-solutions";

// Client Name
export const CLIENT_NAME = "E&B Solutions";

// Google Maps
export const CONTACT_ADDRESS = ["116 Teal Lake Dr", "Holly Springs, NC 27540"];
export const GOOGLE_MAPS_LOCATION =
  "https://www.google.com/maps/place/E%26B+Solutions/@35.6340987,-78.8288176,17z/data=!3m1!4b1!4m5!3m4!1s0x89ac8e17feb1e1db:0xe5c7018afbb1b31c!8m2!3d35.6340987!4d-78.8266289";

// Phone number
export const CONTACT_PHONE_NUMBER = "(910) 603-0899";

// Services Gateway
// Injected at build time (see the GitHub workflows): "beta" or "prod"
const DEPLOYED_ENVIRONMENT = requireEnv(
  "NEXT_PUBLIC_DEPLOYED_ENVIRONMENT",
  process.env.NEXT_PUBLIC_DEPLOYED_ENVIRONMENT,
);
export const SERVICES_GATEWAY_URL = `https://services.eandbsolutions.com/${DEPLOYED_ENVIRONMENT}`;
