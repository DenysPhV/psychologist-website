/** @format */

import React, { useState } from "react";
import "./App.css";
import Photo from "./components/photo";
import Info from "./components/info";
import Services from "./components/services";

function App() {
  // Створюємо стан для фото
  const [photo, setPhoto] = useState(null);

  // Дані про психолога
  const psychologistInfo = {
    name: "Катерина Ганжа",
    specialty: "Практикуючий психолог",
    email: "ganzhakaterine@gmail.com",
    phone: "+380980519715",
  };

  // Дані для блоку послуг
  const servicesData = [
    "Когнітивно-поведінкова терапія",
    "Гештальт-терапія",
    "Клієнт-центрована терапія",
    "Сімейна терапія",
    "Транзактний аналіз",
  ];

  // Функція для зміни фото
  const handlePhotoChange = (newPhoto) => {
    setPhoto(newPhoto);
  };

  return (
    <div className="App">
      <Photo photo={photo} onPhotoChange={handlePhotoChange} psychologistInfo={psychologistInfo} />
      <div className="info-service">
        <Info psychologistInfo={psychologistInfo} />
        <Services servicesData={servicesData} />
      </div>
    </div>
  );
}

export default App;
