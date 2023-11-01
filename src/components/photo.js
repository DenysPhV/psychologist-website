/** @format */
import "../images/photo_ps.jpg";
import "../styles/photo.css";

import React, { useEffect, useState } from "react";

function Photo({ onPhotoChange }) {
  // Спробуємо отримати фото з локального сховища при завантаженні сторінки
  const storedPhoto = localStorage.getItem("psychologistPhoto");
  const [photo, setPhoto] = useState(storedPhoto);

  // Функція для обробки зміни фото
  const handlePhotoUpload = (event) => {
    const newPhoto = URL.createObjectURL(event.target.files[0]);
    setPhoto(newPhoto);

    // Зберігаємо нове фото в локальному сховищі
    localStorage.setItem("psychologistPhoto", newPhoto);

    // Викликаємо функцію батьківського компонента для збереження фото
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
