import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./menu.css";
import backIcon from "../../assets/back-icon.svg";
import logoIcon from "../../assets/logo.svg";
import profileIcon from "../../assets/profile.svg";
import qrIcon from "../../assets/qrcode.svg";
import helpCenter from "../../assets/helpCenter.svg";
import homeIcon from "../../assets/home.svg";
import favoriteIcon from "../../assets/favorite.svg";
import routesIcon from "../../assets/routes.svg";
import accidentIcon from "../../assets/accidentInfo.svg";
import configIcon from "../../assets/config.svg";
import aboutIcon from "../../assets/about.svg";
import logoutIcon from "../../assets/logout.svg";
import Loading from "../../components/Loading/Loading";
import api from "../../services/Api";
export default function Menu() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "", email: "" });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const response = await api.get("/userData", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUserData({ name: response.data.name, email: response.data.email });
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };
  const handleQRCodeClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/em-rota");
    }, 2000);
  };
  return (
    <>
      {isLoading && <Loading />}
      <nav className="sidebar-menu">
        <div className="top-menu">
          <div className="box-box">
            <div className="top-content-menu">
              <div className="return-menu">
                <img src={backIcon} alt="return" />
                <span className="menu">Menu</span>
              </div>
            </div>
            <div className="top-content-menu" id="logo-menu">
              <img src={logoIcon} alt="BussLine" className="logo-menu" />
            </div>
          </div>
        </div>

        <ul className="ul-menu">
          <li className="sidebar-content-menu">
            <Link to="#">
              <img src={profileIcon} alt="profile-pic" className="icon-menu" />
            </Link>
            <div className="info-menu">
              <span className="name-menu">{userData.name || "Nome"}</span>
              <span className="email-menu">
                {userData.email || "email@dominio.com"}
              </span>
              <span className="editprofile-menu">
                <Link to="/editprofile">Editar perfil</Link>
              </span>
            </div>
          </li>

          <li className="sidebar-content-menu">
            <button
              onClick={handleQRCodeClick}
              className="icon-menu-bar-button"
            >
              <img src={qrIcon} alt="qrcode" className="icon-menu-bar" />
            </button>
            <span className="name-menu-bar">QRCODE</span>
          </li>

          <li className="sidebar-content-menu">
            <Link to="/help-center">
              <img
                src={helpCenter}
                alt="helpCenter"
                className="icon-menu-bar"
              />
            </Link>
            <span className="name-menu-bar">CENTRAL DE AJUDA</span>
          </li>

          <hr className="hr-menu" />

          <li className="sidebar-content-menu">
            <Link to="/home">
              <img src={homeIcon} alt="home" className="icon-menu-bar" />
            </Link>
            <span className="name-menu-bar">MAPA</span>
          </li>

          <li className="sidebar-content-menu">
            <Link to="/routes">
              <img src={routesIcon} alt="routes" className="icon-menu-bar" />
            </Link>
            <span className="name-menu-bar">ROTAS</span>
          </li>

          <li className="sidebar-content-menu">
            <Link to="/favorite">
              <img
                src={favoriteIcon}
                alt="favorite"
                className="icon-menu-bar"
              />
            </Link>
            <span className="name-menu-bar">FAVORITOS</span>
          </li>

          <hr className="hr-menu" />

          <li className="sidebar-content-menu">
            <Link to="/accident-info">
              <img
                src={accidentIcon}
                alt="accidentInfo"
                className="icon-menu-bar"
              />
            </Link>
            <span className="name-menu-bar">INFORMAÇÕES DE ACIDENTES</span>
          </li>

          <hr className="hr-menu" />

          <li className="sidebar-content-menu">
            <Link to="/config">
              <img src={configIcon} alt="config" className="icon-menu-bar" />
            </Link>
            <span className="name-menu-bar">CONFIGURAÇÕES</span>
          </li>

          <li className="sidebar-content-menu">
            <Link to="/about">
              <img src={aboutIcon} alt="about" className="icon-menu-bar" />
            </Link>
            <span className="name-menu-bar">SOBRE</span>
          </li>

          <li className="sidebar-content-menu">
            <button onClick={handleLogout} className="logout-button">
              <Link to="#">
                <img
                  src={logoutIcon}
                  alt="logout"
                  className="icon-menu-bar"
                  id="logout-menu"
                />
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
