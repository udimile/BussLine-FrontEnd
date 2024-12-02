import "./index.css";
import backIcon from "../../assets/back-icon.svg";
import lupa from "../../assets/lupa.svg";
import favoritar from "../../assets/favoritar.svg";
import { useNavigate } from "react-router-dom";

export default function Rotas() {
  const navigate = useNavigate();
  const handleMenuClick = () => {
    navigate("/menuMain");
  };
  return (
    <>
      <main className="main-container">
        <section className="section_1">
          <div className="header">
            <div className="logo"></div>
            <button className="icon-button" onClick={handleMenuClick}>
              <img src={backIcon} alt="Seta" />
            </button>
            <span className="rotas">Rotas</span>
          </div>
        </section>

        <section className="section_2">
          <nav className="nav-container">
            <div className="nav-box">
              <div className="nav_buscar">
                <button className="search">
                  <img src={lupa} alt="Lupa" />
                </button>
                <span className="Buscar_rotas">Buscar Rotas</span>
              </div>
              <div className="favoritar">
                <label class="switch_routes">
                  <input type="checkbox" />
                  <span class="slider_routes round_routes"></span>
                </label>
              </div>
            </div>
          </nav>
        </section>

        <section className="section_3">
          <h1>
            <span className="historico">Histórico</span>
          </h1>
          <p className="p_rotas">Você não possui rotas recentes.</p>
        </section>
      </main>
    </>
  );
}
