import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./index.css";

import backIcon from "../../assets/back-purple-icon.svg";
import locationIcon from "../../assets/location-icon.svg";

import destiny from "../../assets/destiny.svg";
import destiny2 from "../../assets/destiny2.svg";

import perfil1 from "../../assets/isadora.jpg";

import axios from "axios";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmljdG9ybm92YWlzIiwiYSI6ImNtMm51N25zcDA3OXQyaW9xbmZlbGo3eTMifQ._eTE_oq4wSfdvkVzRRc4-w";

export default function TrackRoutes() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const route = useRef([]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-38.41321120563727, -12.94767196829192],
      zoom: 18,
      attributionControl: false,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    async function getRoute() {
      const start = [-38.41321120563727, -12.94767196829192];
      const end = [-38.421761407779556, -12.945104053736781];

      const query = await axios.get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start.join(
          ","
        )};${end.join(",")}?geometries=geojson&access_token=${
          mapboxgl.accessToken
        }`
      );

      const data = query.data.routes[0];
      const routeCoordinates = data.geometry.coordinates;

      route.current = routeCoordinates;

      const bounds = new mapboxgl.LngLatBounds();
      routeCoordinates.forEach((coord) => bounds.extend(coord));
      map.current.fitBounds(bounds, { padding: 50 });

      map.current.on("style.load", () => {
        map.current.addSource("route", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: routeCoordinates,
            },
          },
        });

        map.current.addLayer({
          id: "route",
          type: "line",
          source: "route",
          layout: {
            "line-join": "miter",
            "line-cap": "butt",
          },
          paint: {
            "line-color": "#592E83",
            "line-width": 3,
            "line-opacity": 1,
            "line-blur": 0,
          },
        });
      });
    }

    getRoute();
  }, []);

  return (
    <div className="main">
      <header>
        <div className="icon">
          <img src={backIcon} alt="voltar" />
        </div>
        <div className="icon">
          <img src={locationIcon} alt="Localização" />
        </div>
      </header>

      <div ref={mapContainer} className="map-container"></div>

      <div className={`bottom-sheet ${isSheetOpen ? "open" : ""}`}>
        <div
          className="bottom-sheet-header"
          onClick={() => setIsSheetOpen(!isSheetOpen)}
        >
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
            <img className="destiny-icon" src={destiny} alt="" />
            <p>Ponto de partida: Av. Imbuí</p>
          </div>
          <div className="distino">
            <img className="destiny-icon" src={destiny2} alt="" />
            <p>Destino: UCSal - Universidade Católica do Salvador</p>
          </div>
        </div>
        <div class="line"></div>
        <div className="user">
          <img className="perfil-icon" src={perfil1} alt="" />
          <p user-info-rota>Isadora esta a caminho!</p>
        </div>
      </div>
    </div>
  );
}
