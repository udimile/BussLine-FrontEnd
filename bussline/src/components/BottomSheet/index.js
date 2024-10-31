import React from "react";
import "./BottomSheet.css";

export default function BottomSheet({
  isOpen,
  toggleSheet,
  destiny,
  destiny2,
  perfil1,
}) {
  return (
    <div className={`bottom-sheet ${isOpen ? "open" : ""}`}>
      <div className="bottom-sheet-header" onClick={toggleSheet}>
        <div className="bottom-sheet-handle"></div>
        <button className="btn-acompanhar">Acompanhar rota</button>
      </div>
      <div className="bottom-sheet-content">
        <h3>Detalhes da viagem</h3>
        <div className="distino">
          <img className="destiny-icon" src={destiny} alt="" />
          <p>Ponto de partida: Av. Imbuí</p>
        </div>
        <div className="distino">
          <img className="destiny-icon" src={destiny2} alt="" />
          <p>Destino: UCSal - Universidade Católica do Salvador</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="user">
        <img className="perfil-icon" src={perfil1} alt="" />
        <p className="user-info-rota">Isadora está a caminho!</p>
      </div>
    </div>
  );
}
