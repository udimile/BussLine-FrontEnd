import React, { useEffect, useState } from "react";
import "./config.css";
import logoIcon from "../../assets/logo.svg";
import backIcon from "../../assets/back-icon.svg";
import profile from "../../assets/profile.svg";
import api from "../../services/Api";

const EditField = ({ label, value, onEditClick }) => (
  <div className="form-group">
    <label>
      {label}: {value}
    </label>
    <input type="button" className="edit-btn" value="✎" onClick={onEditClick} />
  </div>
);

export default function EditProfile() {
  const [userData, setUserData] = useState({
    name: "------",
    ra: "------",
    cpf: "------",
    phone: "------",
    email: "------",
    school: "------",
    address: "------",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const response = await api.get("/userData", {
            headers: { Authorization: `Bearer ${token}` },
          });

          const { name, ra, cpf, phone, email, school, address } =
            response.data;
          setUserData({
            name: name || "------",
            ra: ra || "------",
            cpf: cpf || "------",
            phone: phone || "------",
            email: email || "------",
            school: school || "------",
            address: address || "------",
          });
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        setError(
          "Erro ao carregar dados do usuário. Tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    setSaving(true);

    setSaving(false);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
          <div className="top-content" id="logo-editProfile">
            <img src={logoIcon} alt="BussLine" className="logo-editProfile" />
          </div>
        </div>

        <div className="page">
          <div className="profile-info">
            <img src={profile} alt="profile-pic" />
            <span className="name">{userData.name}</span>
            <span className="ra">RA: {userData.ra}</span>
          </div>

          <div className="edit-input">
            <EditField
              label="CPF"
              value={userData.cpf}
              onEditClick={() => console.log("Editar CPF")}
            />
            <EditField
              label="Celular"
              value={userData.phone}
              onEditClick={() => console.log("Editar Celular")}
            />
            <EditField
              label="Email"
              value={userData.email}
              onEditClick={() => console.log("Editar Email")}
            />
            <EditField
              label="Escola"
              value={userData.school}
              onEditClick={() => console.log("Editar Escola")}
            />
            <EditField
              label="Endereço"
              value={userData.address}
              onEditClick={() => console.log("Editar Endereço")}
            />
          </div>

          <button className="save" onClick={handleSave} disabled={saving}>
            {saving ? "Salvando..." : "SALVAR"}
          </button>
        </div>
      </main>
    </>
  );
}
