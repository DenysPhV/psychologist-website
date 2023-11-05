/** @format */

import React from "react";
import "../styles/photo.css";
import photo from "../images/photo_ps.jpg";

const Photo = ({ psychologistInfo }) => {
  return (
    <div className="photo-container">
      <div className="photo">
        <img src={photo} alt="" />
      </div>
      <div className="owner-photo">
        <h1>{psychologistInfo.name}</h1>
        <p>{psychologistInfo.specialty}</p>
        <p className="advice">{psychologistInfo.advice}</p>
      </div>
    </div>
  );
};

export default Photo;
