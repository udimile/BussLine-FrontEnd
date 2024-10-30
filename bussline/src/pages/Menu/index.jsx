import { Link } from "react-router-dom";
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

export default function Menu() {
  return (
    <>
      <nav className="sidebar">
        <div className="top">
          <div className="top-content">
            <div className="return">
              <img src={backIcon} alt="return" />
              <span className="menu">Menu</span>
            </div>
          </div>
          <div className="top-content" id="logo">
            <img src={logoIcon} alt="BussLine" className="logo" />
          </div>
        </div>

        <ul>
          <li className="sidebar-content">
            <Link to="#">
              <img src={profileIcon} alt="profile-pic" className="icon" />
            </Link>
            <div className="info">
              <span className="name">Username</span>
              <span className="email">user@email.com</span>
              <span className="editprofile">
                <Link to="#">Editar perfil</Link>
              </span>
            </div>
          </li>

          <li className="sidebar-content">
            <Link to="/home">
              {" "}
              <img src={qrIcon} alt="qrcode" className="icon" />
            </Link>
            <span className="name">QRCODE</span>
          </li>

          <li className="sidebar-content">
            <Link to="/help-center">
              <img src={helpCenter} alt="helpCenter" className="icon" />
            </Link>
            <span className="name">CENTRAL DE AJUDA</span>
          </li>

          <hr />

          <li className="sidebar-content">
            <Link to="/home">
              <img src={homeIcon} alt="home" className="icon" />
            </Link>
            <span className="name">MAPA</span>
          </li>

          <li className="sidebar-content">
            <Link to="/routes">
              <img src={routesIcon} alt="routes" className="icon" />
            </Link>
            <span className="name">ROTAS</span>
          </li>

          <li className="sidebar-content">
            <Link to="/favorite">
              <img src={favoriteIcon} alt="favorite" className="icon" />
            </Link>
            <span className="name">FAVORITOS</span>
          </li>

          <hr />

          <li className="sidebar-content">
            <Link to="/accident-info">
              <img src={accidentIcon} alt="accidentInfo" className="icon" />
            </Link>
            <span className="name">INFORMAÇÕES DE ACIDENTES</span>
          </li>

          <hr />

          <li className="sidebar-content">
            <Link to="/config">
              <img src={configIcon} alt="config" className="icon" />
            </Link>
            <span className="name">CONFIGURAÇÕES</span>
          </li>

          <li className="sidebar-content">
            <Link to="/about">
              <img src={aboutIcon} alt="about" className="icon" />
            </Link>
            <span className="name">SOBRE</span>
          </li>

          <li className="sidebar-content">
            <Link to="#">
              <img src={logoutIcon} alt="logout" className="icon" id="logout" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
