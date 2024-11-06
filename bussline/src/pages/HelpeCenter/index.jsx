import "./helpCenter.css";
import backIcon from "../../assets/back-icon.svg";
import lupa from "../../assets/lupa.svg";
import expandir from "../../assets/expandir.svg";
import { useNavigate } from "react-router-dom";

export default function HelpCenter() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate("/menuMain");
  };
  return (
    <>
      <body className="help-center">
        <header className="header_container_about">
          <section className="section_1">
            <div className="header">
              <div className="logo"></div>
              <button className="icon-button" onClick={handleVoltar}>
                <img src={backIcon} alt="Seta" />
              </button>
              <span className="rotas">Central de ajuda</span>
            </div>
          </section>
        </header>

        <section className="section_helpCenter">
          <nav className="nav-container_helpCenter">
            <div className="nav-box_helpCenter">
              <div className="nav_buscar_helpCenter">
                <button className="search">
                  <img src={lupa} alt="Lupa" />
                </button>
                <span className="procurar_hc">Procurar</span>
              </div>
            </div>
          </nav>
        </section>

        <div class="perguntas">
          <img src={expandir} alt="Expandir" />
          <p>PERGUNTAS FREQUENTES</p>
        </div>

        <section id="principal">
          <div class="pergunta">
            <p>+ Sobre o aplicativo</p>
          </div>

          <div class="pergunta">
            <p>+ Como relatar acidentes</p>
          </div>

          <div class="pergunta">
            <p>+ Reportar problema</p>
          </div>

          <div class="pergunta">
            <p>+ Favoritos</p>
          </div>

          <div class="pergunta">
            <p>+ Suporte online</p>
          </div>

          <div class="pergunta">
            <p>+ Informação de cadastro</p>
          </div>

          <div class="pergunta">
            <p>+ Previsão de ônibus</p>
          </div>

          <div class="pergunta">
            <p>+ Mais dúvidas</p>
          </div>
        </section>
      </body>
    </>
  );
}
