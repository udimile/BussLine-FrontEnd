import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { jwtDecode } from "jwt-decode";
import menuIcon from "../../assets/menu-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import MapHome from "../../components/Mapa/mapaHome";

export default function Home() {
  const navigate = useNavigate();
  const [menuType, setMenuType] = useState("menu");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const accountType = decodedToken.type;

      if (accountType === "responsavel") {
        setMenuType("menu-responsavel");
      } else {
        setMenuType("menu");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleMenuClick = () => {
    navigate(`/${menuType}`);
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
