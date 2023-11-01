/** @format */

import React from "react";
import "../styles/photo.css";
import photo from "../images/photo_ps.jpg";

const Photo = () => {
  return (
    <div className="photo">
      <img src={photo} alt="" />
    </div>
  );
};

export default Photo;
