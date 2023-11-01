/** @format */

import React from "react";

function Services({ servicesData }) {
  return (
    <div className="services">
      <h2>Послуги психолога</h2>
      <ul>
        {servicesData.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
