import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/Api";
import Loading from "../../components/Loading/Loading";

export default function MenuMain() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const response = await api.get("/userData", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const { type } = response.data;
          setUserType(type);

          if (type === "student") {
            navigate("/menu");
          } else if (type === "guardian") {
            navigate("/menu-responsavel");
          }
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <>
      <Loading />
    </>
  );
}
