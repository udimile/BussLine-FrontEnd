import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import menuIcon from "../../assets/menu-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import Map from "../../components/Mapa/mapa";

export default function Home() {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/menu");
  };

  return (
    <div className="main">
      <header>
        <div className="icon" onClick={handleMenuClick}>
          <img src={menuIcon} alt="Menu" />
        </div>
        <div className="icon">
          <img src={locationIcon} alt="Localização" />
        </div>
      </header>

      <Map />
    </div>
  );
}
