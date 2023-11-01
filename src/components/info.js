/** @format */
import "../styles/info.css";

import React from "react";

function Info({ psychologistInfo }) {
  return (
    <div className="info">
      <h2>Інформація про психолога</h2>
      <p>Ім'я: {psychologistInfo.name}</p>
      <p>Спеціальність: {psychologistInfo.specialty}</p>
      <p>Email: {psychologistInfo.email}</p>
      <p>Телефон: {psychologistInfo.phone}</p>
    </div>
  );
}

export default Info;
