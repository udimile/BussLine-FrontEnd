import "./accident.css";
import backIcon from "../../assets/back-icon.svg";
import exclamacao from "../../assets/exclamacao.svg";
import { useNavigate } from "react-router-dom";

export default function AccidentInfo() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate("/menuMain");
  };
  return (
    <>
      <main class="main-container">
        <section class="section_1">
          <div class="header">
            <div class="logo"></div>
            <button class="icon-button" onClick={handleVoltar}>
              <img src={backIcon} alt="Seta" />
            </button>
            <span class="rotas">Informações de Acidentes</span>
          </div>
        </section>

        <section class="section_2">
          <div class="contigencia">
            <div class="alinhar">
              <button>
                <img src={exclamacao} alt="Exclamação" />
              </button>
              <div class="box">
                <p>Contingência</p>
              </div>
            </div>
            <p class="description">
              Vários pontos de interdição de vias devido a fortes chuvas
            </p>
            <hr />
          </div>

          <div class="acidente">
            <div class="alinhar">
              <button>
                <img src={exclamacao} alt="Exclamação" />
              </button>
              <div class="box">
                <p>Acidente</p>
              </div>
            </div>
            <p class="description">Ônibus colide em poste (sem feridos)</p>
            <hr />
          </div>
          <div class="transito">
            <div class="alinhar">
              <button>
                <img src={exclamacao} alt="Exclamação" />
              </button>
              <div class="box">
                <p>Trânsito</p>
              </div>
            </div>
            <p class="description">
              Avenida Paralela, sentido aeroporto. Acidente interdita
              parcialmente a via
            </p>
            <hr />
          </div>
          <div class="acidente">
            <div class="alinhar">
              <button>
                <img src={exclamacao} alt="Exclamação" />
              </button>
              <div class="box">
                <p>Acidente</p>
              </div>
            </div>
            <p class="description">Engavetamento de carros no Imbuí</p>
            <hr />
          </div>
        </section>
      </main>
    </>
  );
}
