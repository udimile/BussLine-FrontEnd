import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import menuIcon from "../../assets/menu-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import Map from "../../components/Mapa/mapa";

export default function InTransit() {
  const navigate = useNavigate();

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

      <Map />
    </div>
  );
}
