import "./favorite.css";
import backIcon from "../../assets/back-icon.svg";
import lupa from "../../assets/lupa.svg";
import favoritar from "../../assets/favoritar.svg";
import locIcon from "../../assets/locIcon.svg";
import { useNavigate } from "react-router-dom";

export default function Favorite() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate("/menuMain");
  };
  return (
    <>
      <main className="main-container">
        <section className="section_1">
          <div className="header">
            <div className="logo"></div>
            <button className="icon-button" onClick={handleVoltar}>
              <img src={backIcon} alt="Seta" />
            </button>
            <span className="rotas">Favoritos</span>
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

        <div className="titleArchive">
          <h1>Histórico</h1>
        </div>

        <section className="favRoutes">
          <div className="favItem">
            <img src={locIcon} alt="loc simbol" />
            <div className="txt_section">
              <p className="locName">
                UCsal - Universidade Católica do Salvador
              </p>
              <p className="adress">
                Av. Prof. Pinto de Aguiar, 2589 - Pituaçu
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
