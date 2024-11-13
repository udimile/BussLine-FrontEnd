import "./EditProflie.css";
import logoIcon from "../../assets/logo.svg";
import backIcon from "../../assets/back-icon.svg";
import profile from "../../assets/profile.svg";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate("/menuMain");
  };
  return (
    <>
      <main className="container-principal-edit">
        <div className="top-edit">
          <div className="top-content-edit">
            <div className="return" onClick={handleVoltar}>
              <img src={backIcon} alt="return" />
              <span className="edit-profile">Editar Perfil</span>
            </div>
          </div>
          <div className="top-content-edit" id="logo-editProfile-edit">
            <img src={logoIcon} alt="BussLine" className="logo-editProfile" />
          </div>
        </div>
        <div className="page-profile">
          <div className="profile-info">
            <img src={profile} alt="profile-pic" />
            <span className="name">Username</span>
            <span className="ra">RA: 000000000</span>
          </div>
          <div className="edit-input">
            <div className="form-group">
              <label>CPF: 000.000.000-00</label>
              <input type="button" className="edit-btn" />
            </div>
            <div className="form-group">
              <label>Celular: (71) 90000-0000</label>
              <input type="button" value="✎" className="edit-btn" />
            </div>
            <div className="form-group">
              <label>Email: user@email.com</label>
              <input type="button" value="✎" className="edit-btn" />
            </div>
            <div className="form-group">
              <label>Escola: UCSal - Universidade Católica do Salvador</label>
              <input type="button" value="✎" className="edit-btn" />
            </div>
            <div className="form-group">
              <label>Endereço: Av. Luís Viana Filho, 3056</label>
              <input type="button" value="✎" className="edit-btn" />
            </div>
          </div>
          <button className="save ">SALVAR</button>
        </div>
      </main>
    </>
  );
}
