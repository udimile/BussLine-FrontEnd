import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";
import logoRegister from "../../assets/teste.svg";
import api from "../../services/Api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tipo, setTipo] = useState("estudante");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await api.post("/login", { email, password });
      const { token } = response.data;

      localStorage.setItem("token", token);

      if (tipo === "responsavel") {
        navigate("/login-res");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.error("Erro no login:", error.response.data.message);
      alert("Login falhou. Verifique suas credenciais e tente novamente.");
    }
  };

  const handleTipoChange = (event) => {
    const selectedTipo = event.target.value;
    setTipo(selectedTipo);

    if (selectedTipo === "responsavel") {
      navigate("/login-res");
    }
  };
  return (
    <>
      <main className="main-login">
        <div className="sair-login">
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
        <header className="header-login">
          <img src={logoRegister} alt="" />
        </header>
        <div id="login-login">
          <form onSubmit={handleSubmit}>
            <div className="opcao-login">
              <input
                type="radio"
                id="responsavel"
                value="responsavel"
                name="opcao"
                checked={tipo === "responsavel"}
                onChange={handleTipoChange}
              />
              <label htmlFor="responsavel">Responsável</label>

              <input
                type="radio"
                id="estudante"
                value="estudante"
                name="opcao"
                checked={tipo === "estudante"}
                onChange={handleTipoChange}
                defaultChecked
              />
              <label htmlFor="estudante">Estudante</label>
            </div>

            <div className="container-login">
              <div className="input-login">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i
                  className="fa-solid fa-qrcode"
                  style={{ color: "#592e83" }}
                ></i>
              </div>

              <div className="input-login">
                <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className="fa-solid fa-lock"
                  style={{ color: "#592e83" }}
                ></i>
              </div>

              <h4>Esqueceu a senha?</h4>

              <div className="entrar-login">
                <input type="submit" id="entrar-login" value="Entrar" />
              </div>

              <p>
                Não possui uma conta?
                <Link to="/cadastro">Cadastre-se</Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
