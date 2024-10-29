import "./index.css";

import logo from "../../assets/logo-icon.svg";
import back from "../../assets/back-icon.svg";
import perfil1 from "../../assets/isadora.jpg";
import perfil2 from "../../assets/rafael.jpg";
import destiny from "../../assets/destiny.svg";
import destiny2 from "../../assets/destiny2.svg";
import add from "../../assets/add.svg";
export default function FamilyLink() {
  return (
    <div className="main">
      <header>
        <div className="header-section">
          <img className="back-img" src={back} alt="" />
          <h1 className="page-title">Family Link</h1>
        </div>

        <img className="logo" src={logo} alt="" />
      </header>

      <div className="container-profile">
        <div className="profile-info">
          <img
            src={perfil1}
            className="perfil-icon in-transit "
            alt="isadora"
          />
          <div className="profile svg-background">
            <h1>ISADORA CARVALHO PEREIRA</h1>
          </div>
        </div>
        <div className="status">
          <p className="titulo-status">Isadora esta em viagem.</p>
          <div className="distino">
            <img className="destiny-icon " src={destiny} alt="" />
            <span>Ponto de ônibus - Imbuí</span>
          </div>
          <div className="distino">
            <img className="destiny-icon " src={destiny2} alt="" />
            <span>UCSal - Universidade Católica do Salvador</span>
          </div>
          <button className="btn-acompanhar">Acompanhar rota</button>
        </div>
      </div>

      <div class="line"></div>

      <div className="container-profile">
        <div className="profile-info">
          <img src={perfil2} className="perfil-icon" alt="Rafael" />
          <div className="profile svg-background">
            <h1>RAFAEL RIVAS</h1>
          </div>
        </div>
        <div className="status">
          <p className="titulo-status">Rafael chegou no destino!</p>
          <div className="distino">
            <img className="destiny-icon" src={destiny} alt="" />
            <span>Ponto de ônibus - Imbuí</span>
          </div>
          <div className="distino">
            <img className="destiny-icon" src={destiny2} alt="" />
            <span>UCSal - Universidade Católica do Salvador</span>
          </div>
          <button className="btn-acompanhar">Acompanhar rota</button>
        </div>
      </div>

      <footer className="footer-button">
        <img src={add} alt="Adicionar membro" className="footer-icon" />
        <h1 className="footer-text">Novo membro</h1>
      </footer>
    </div>
  );
}
