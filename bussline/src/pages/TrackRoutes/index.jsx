import React, { useState } from "react";
import mapboxgl from "mapbox-gl";
import BottomSheet from "../../components/BottomSheet/index";
import backIcon from "../../assets/back-purple-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import destiny from "../../assets/destiny.svg";
import destiny2 from "../../assets/destiny2.svg";
import perfil1 from "../../assets/isadora.jpg";
import Map from "../../components/Mapa/mapaTrack"; // ajuste o caminho se necessário
import "./trackRoutes.css";
import MapaTrack from "../../components/Mapa/mapaTrack";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmljdG9ybm92YWlzIiwiYSI6ImNtMm51N25zcDA3OXQyaW9xbmZlbGo3eTMifQ._eTE_oq4wSfdvkVzRRc4-w";

export default function TrackRoutes() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="main">
      <header className="header-trackRoutes">
        <div className="icon">
          <img src={backIcon} alt="voltar" />
        </div>
        <div className="icon">
          <img src={locationIcon} alt="Localização" />
        </div>
      </header>

      <MapaTrack />

      <BottomSheet
        isOpen={isSheetOpen}
        toggleSheet={() => setIsSheetOpen(!isSheetOpen)}
        destiny={destiny}
        destiny2={destiny2}
        perfil1={perfil1}
      />
    </div>
  );
}
