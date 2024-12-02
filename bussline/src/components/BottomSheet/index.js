import React, { useState, useEffect } from "react";
import "./BottomSheet.css";

export default function BottomSheet({
  isOpen,
  toggleSheet,
  destiny,
  destiny2,
  perfil1,
}) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else if (!isOpen && isAnimating) {
      const timeoutId = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, isAnimating]);

  return (
    <div
      className={`bottom-sheet ${
        isAnimating ? (isOpen ? "open" : "closing") : ""
      }`}
    >
      <div className="bottom-sheet-header" onClick={toggleSheet}>
        <div className="bottom-sheet-handle"></div>
        <div
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#592E83",
            borderRadius: "2px",
            marginBottom: "19px",
          }}
        ></div>
        <button className="btn-acompanhar">Acompanhar rota</button>
      </div>
      <div className="bottom-sheet-content">
        <h3>Detalhes da viagem</h3>
        <div className="distino">
          <img className="destiny-icon" src={destiny} alt="Ícone de destino" />
          <p>Ponto de partida: Av. Imbuí</p>
        </div>
        <div className="distino">
          <img className="destiny-icon" src={destiny2} alt="Ícone de destino" />
          <p>Destino: UCSal - Universidade Católica do Salvador</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="user">
        <img className="perfil-icon" src={perfil1} alt="Ícone de perfil" />
        <p className="user-info-rota">Isadora está a caminho!</p>
      </div>
    </div>
  );
}
