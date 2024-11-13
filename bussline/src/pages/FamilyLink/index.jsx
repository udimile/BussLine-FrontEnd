import "./familyLink.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-icon.svg";
import back from "../../assets/back-icon.svg";
import perfil1 from "../../assets/isadora.jpg";
import perfil2 from "../../assets/rafael.jpg";
import destiny from "../../assets/destiny.svg";
import destiny2 from "../../assets/destiny2.svg";
import add from "../../assets/add.svg";

export default function FamilyLink() {
  const navigate = useNavigate();

  const handleAcompanharRota = () => {
    navigate("/acompanhar-rota");
  };

  const handleVoltar = () => {
    navigate("/menuMain");
  };
  return (
    <div className="main-family ">
      <header className="header-family ">
        <div className="box-da-box">
          <div className="header-section-family ">
            <button onClick={handleVoltar}>
              <img className="back-img-family " src={back} alt="" />
            </button>
            <h1 className="page-title-family ">Family Link</h1>
          </div>
          <img className="logo-family " src={logo} alt="" />
        </div>
      </header>

      <div className="container-profile-family ">
        <div className="profile-info-family ">
          <img
            src={perfil1}
            className="perfil-icon-family  in-transit-family "
            alt="Isadora"
          />
          <div className="profile-family  svg-background-family ">
            <h1>ISADORA CARVALHO PEREIRA</h1>
          </div>
        </div>
        <div className="status-family ">
          <p className="titulo-status-family ">Isadora está em viagem.</p>
          <div className="distino-family ">
            <img className="destiny-icon-family " src={destiny} alt="" />
            <span className="span-family ">Ponto de ônibus - Imbuí</span>
          </div>
          <div className="distino-family ">
            <img className="destiny-icon-family " src={destiny2} alt="" />
            <span className="span-family ">
              UCSal - Universidade Católica do Salvador
            </span>
          </div>
          <button
            className="btn-acompanhar-family "
            onClick={handleAcompanharRota}
          >
            Acompanhar rota
          </button>
        </div>
      </div>

      <div className="line-family "></div>

      <div className="container-profile-family ">
        <div className="profile-info-family ">
          <img src={perfil2} className="perfil-icon-family " alt="Rafael" />
          <div className="profile-family  svg-background-family ">
            <h1>RAFAEL RIVAS</h1>
          </div>
        </div>
        <div className="status-family ">
          <p className="titulo-status-family ">Rafael chegou no destino!</p>
          <div className="distino-family ">
            <img className="destiny-icon-family " src={destiny} alt="" />
            <span className="span-family ">Ponto de ônibus - Imbuí</span>
          </div>
          <div className="distino-family ">
            <img className="destiny-icon-family " src={destiny2} alt="" />
            <span className="span-family ">
              UCSal - Universidade Católica do Salvador
            </span>
          </div>
          <button
            className="btn-acompanhar-family "
            onClick={handleAcompanharRota}
          >
            Acompanhar rota
          </button>
        </div>
      </div>

      <footer className="footer-button-family">
        <img src={add} alt="Adicionar membro" className="footer-icon-family" />
        <h1 className="footer-text-family">Novo membro</h1>
      </footer>
    </div>
  );
}
