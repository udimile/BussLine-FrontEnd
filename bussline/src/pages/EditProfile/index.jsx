import "./config.css";
import logoIcon from "../../assets/logo.svg";
import backIcon from "../../assets/back-icon.svg";
import profile from "../../assets/profile.svg";

export default function EditProfile() {
  return (
    <>
      <main className="container-principal">
        <div className="top">
          <div className="top-content">
            <div className="return">
              <img src={backIcon} alt="return" />
              <span className="edit-profile">Editar Perfil</span>
            </div>
          </div>
          <div className="top-content" id="logo">
            <img src={logoIcon} alt="BussLine" className="logo" />
          </div>
        </div>
        <div className="page">
          <div className="profile-info">
            <img src={profile} alt="profile-pic" />
            <span className="name">Username</span>
            <span className="ra">RA: 000000000</span>
          </div>
          <div className="edit-input">
            <div className="form-group">
              <label>CPF: 000.000.000-00</label>
              <input type="button" value="✎" className="edit-btn" />
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
          <button className="save">SALVAR</button>
        </div>
      </main>
    </>
  );
}
