import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

import menuIcon from "../../assets/menu-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import MapHome from "../../components/Mapa/mapaHome";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleMenuClick = () => {
    navigate("/menuMain");
  };

  return (
    <div className="main-home">
      <header className="header-home">
        <div className="icon-home" onClick={handleMenuClick}>
          <img src={menuIcon} alt="Menu" />
        </div>
        <div className="icon-home">
          <img src={locationIcon} alt="Localização" />
        </div>
      </header>

      <MapHome />
    </div>
  );
}
