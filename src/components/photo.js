/** @format */

import React from "react";
import "../images/photo_ps.jpg";
import "../styles/photo.css";

function Photo({ photo, onPhotoChange }) {
  // Функція для обробки зміни фото
  const handlePhotoUpload = (event) => {
    const newPhoto = URL.createObjectURL(event.target.files[0]);
    onPhotoChange(newPhoto);
  };

  return (
    <div className="photo">
      <h2>Фото психолога</h2>
      <img src={photo} alt="Фото психолога" />
      <input type="file" accept="image/*" onChange={handlePhotoUpload} />
    </div>
  );
}

export default Photo;
