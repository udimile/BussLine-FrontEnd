import Success from "../../assets/success.svg";
import Erro from "../../assets/erro.svg";
import Save from "../../assets/save.svg";

import { useEffect } from "react";
import "./alert.css";

export default function Alert({ type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="alert-overlay">
      <div className="alert-container">
        <img
          src={type === "success" ? Success : type === "error" ? Erro : Save}
          alt="Alerta"
          className="alert-icon"
        />
      </div>
    </div>
  );
}
