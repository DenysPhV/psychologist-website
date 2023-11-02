/** @format */
import "../styles/info.css";

import React from "react";

import { BsFillEnvelopeHeartFill as IconEmail } from "react-icons/bs";
import { BsFillTelephoneInboundFill as IconPhone } from "react-icons/bs";

function Info({ psychologistInfo }) {
  return (
    <div className="info-container">
      <h2>контакти</h2>
      <ul className="info-list">
        <li>
          <div className="info-list-icon">
            <IconEmail style={{ color: "blue", fontSize: "16px" }} />
          </div>
          {psychologistInfo.email}
        </li>

        <li>
          <div className="info-list-icon">
            <IconPhone style={{ color: "blue", fontSize: "16px" }} />
          </div>
          {psychologistInfo.phone}
        </li>
      </ul>
    </div>
  );
}

export default Info;
