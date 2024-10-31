import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoRegister from "../../assets/teste.svg";
import "./registerRes.css";

export default function RegisterRes() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("responsavel");

  useEffect(() => {
    setSelectedOption("responsavel");
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "responsavel") {
      navigate("/cadastro-resp");
    } else {
      navigate("/cadastro");
    }
  };

  return (
    <main className="main-resgisterRes">
      <div className="sair-resgisterRes" onClick={() => navigate("/")}>
        <svg
          width="12"
          height="20"
          viewBox="0 0 12 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.303223 10.0068C0.308757 9.81315 0.347493 9.63607 0.419434 9.47559C0.491374 9.3151 0.602051 9.16016 0.751465 9.01074L9.06885 0.958984C9.3068 0.721029 9.6001 0.602051 9.94873 0.602051C10.1812 0.602051 10.3914 0.657389 10.5796 0.768066C10.7733 0.878743 10.9255 1.02816 11.0361 1.21631C11.1523 1.40446 11.2104 1.61475 11.2104 1.84717C11.2104 2.19027 11.0804 2.49186 10.8203 2.75195L3.2998 9.99854L10.8203 17.2534C11.0804 17.519 11.2104 17.8206 11.2104 18.1582C11.2104 18.3962 11.1523 18.6092 11.0361 18.7974C10.9255 18.9855 10.7733 19.1349 10.5796 19.2456C10.3914 19.3618 10.1812 19.4199 9.94873 19.4199C9.6001 19.4199 9.3068 19.2982 9.06885 19.0547L0.751465 11.0029C0.596517 10.8535 0.483073 10.6986 0.411133 10.5381C0.339193 10.3721 0.303223 10.195 0.303223 10.0068Z"
            fill="black"
          />
        </svg>
      </div>

      <header className="header-resgisterRes">
        <img className="header-registerRes" src={logoRegister} alt="Logo" />
      </header>

      <div id="cadastro-resgisterRes">
        <form>
          <div className="opcao-resgisterRes">
            <input
              type="radio"
              id="responsavel"
              value="responsavel"
              name="opcao"
              checked={selectedOption === "responsavel"}
              onChange={handleOptionChange}
            />
            <label htmlFor="responsavel">Responsável</label>
            <input
              type="radio"
              id="estudante"
              value="estudante"
              name="opcao"
              checked={selectedOption === "estudante"}
              onChange={handleOptionChange}
            />
            <label htmlFor="estudante">Estudante</label>
          </div>

          <div className="container-resgisterRes">
            <div className="input-resgisterRes">
              <input type="text" placeholder="Nome" />
              <i className="fa-solid fa-user" style={{ color: "#592e83" }}></i>
            </div>

            <div className="input-resgisterRes">
              <input type="email" placeholder="E-mail" />
              <i
                className="fa-solid fa-envelope"
                style={{ color: "#592e83" }}
              ></i>
            </div>

            <div className="input-resgisterRes">
              <input type="password" placeholder="Senha" />
              <i className="fa-solid fa-lock" style={{ color: "#592e83" }}></i>
            </div>

            <div className="cadastrar-resgisterRes">
              <input
                type="submit"
                id="cadastrar-resgisterRes"
                value="Cadastrar"
              />
            </div>

            <p>
              Já possui uma conta? <a href="/login">Entrar</a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
