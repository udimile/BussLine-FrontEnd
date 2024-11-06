import api from "./Api";

export const getUserData = async (token) => {
  try {
    const response = await api.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados do usuário:", error);
    throw error;
  }
};
