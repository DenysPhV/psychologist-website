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
    name: "Ім'я Психолога",
    specialty: "Спеціальність Психолога",
    email: "example@example.com",
    phone: "+1234567890",
  };

  // Дані для блоку послуг
  const servicesData = ["Перша послуга", "Друга послуга", "Третя послуга"];

  // Функція для зміни фото
  const handlePhotoChange = (newPhoto) => {
    setPhoto(newPhoto);
  };

  return (
    <div className="App">
      <h1>Психолог</h1>
      <Photo photo={photo} onPhotoChange={handlePhotoChange} />
      <Info psychologistInfo={psychologistInfo} />
      <Services servicesData={servicesData} />
    </div>
  );
}

export default App;
