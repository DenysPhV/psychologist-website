/** @format */

import React from "react";

import "../styles/services.css";

function Services({ servicesData }) {
  return (
    <div className="services-container">
      <h2 className="services-title">Послуги психолога</h2>
      <ul className="services-list">
        {servicesData.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
