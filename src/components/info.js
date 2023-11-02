/** @format */
import "../styles/info.css";

import React from "react";

function Info({ psychologistInfo }) {
  return (
    <div className="info">
      <h2>контакти</h2>
      <ul>
        <li>Email: {psychologistInfo.email}</li>
        <li>Телефон: {psychologistInfo.phone}</li>
      </ul>
    </div>
  );
}

export default Info;
