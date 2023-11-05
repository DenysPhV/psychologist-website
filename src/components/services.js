/** @format */

import React from "react";

import "../styles/services.css";

import { BsFillPersonCheckFill as IconPoint } from "react-icons/bs";

function Services({ servicesData }) {
  return (
    <div className="services-container">
      <h2 className="services-title">Працюю в напрямках</h2>
      <ul className="services-list">
        {servicesData.map((service, index) => (
          <li key={index}>
            <IconPoint style={{ color: "#9a031e", fontSize: "20px", marginRight: "5px" }} />
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
