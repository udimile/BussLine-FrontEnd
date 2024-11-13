import "./config.css";
import logoIcon from "../../assets/logo.svg";
import backIcon from "../../assets/back-icon.svg";
import { useNavigate } from "react-router-dom";
export default function Config() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate("/menuMain");
  };
  return (
    <>
      <main class="container-principal">
        <div class="top">
          <div class="top-content">
            <div class="return" onClick={handleVoltar}>
              <img src={backIcon} alt="return" />
              <span class="config">Configurações</span>
            </div>
          </div>
          <div class="top-content" id="logo-config">
            <img src={logoIcon} alt="BussLine" class="logo-config" />
          </div>
        </div>
        <div class="page">
          <div class="contentPage">
            <label class="title">Geral</label>
            <div class="editConfig">
              <div class="txt">
                <h1>Acessibilidade</h1>
                <p>Mostrar apenas veículos adaptados e acessíveis</p>
              </div>
              <div class="option">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <div class="editConfig">
              <div class="txt">
                <h1>Horários</h1>
                <p>Mostrar o horário estimado de chegada de um ônibus</p>
              </div>
              <div class="option">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>

            <hr />

            <label class="title">Notificações</label>
            <div class="editConfig">
              <div class="txt">
                <h1>Padrão</h1>
                <p>Mensagens e avisos enviados pelo BussLine</p>
              </div>
              <div class="option">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <div class="editConfig">
              <div class="txt">
                <h1>Alertas</h1>
                <p>Alertas sobre acidentes</p>
              </div>
              <div class="option">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>

            <hr />

            <label class="title">Privacidade e Dados</label>
            <div class="editConfig">
              <div class="txt">
                <h1>Localização com o app aberto</h1>
                <p>Para trazer informações em tempo real</p>
              </div>
              <div class="option">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <div class="editConfig">
              <div class="txt">
                <h1>Localização em 2º plano</h1>
                <p>
                  Para que alertas funcionem e que a experiência seja completa
                </p>
              </div>
              <div class="option">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
