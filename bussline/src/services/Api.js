import axios from "axios";

const api = axios.create({
  baseURL: "http://bussline.mooo.com:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(
        "Erro da API:",
        error.response.data.message || error.message
      );
    }
    return Promise.reject(error);
  }
);

export default api;