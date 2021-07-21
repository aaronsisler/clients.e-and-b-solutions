import React, { useState } from "react";
import axios from "axios";
import { SERVICES_GATEWAY_URL } from "../../config";

import "./authorized-check.scss";

const AuthorizedCheck = () => {
  const [isAuthorized, setIsAuthorized] = useState(undefined);

  const handleButtonClick = async () => {
    const { data } = await axios.get(`${SERVICES_GATEWAY_URL}/authorize`);
    console.log(data);

    return setIsAuthorized(data);
  };

  return (
    <div className="authorized-check">
      <button className="authorized-check__button" onClick={handleButtonClick}>
        Authorized?
      </button>
      &nbsp;
      <span>Is Authorized: {isAuthorized}</span>
    </div>
  );
};

export default AuthorizedCheck;
