import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import perfil1 from "../../assets/isadora.jpg";
import perfil2 from "../../assets/rafael.jpg";
import "./mapa.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmljdG9ybm92YWlzIiwiYSI6ImNtMm51N25zcDA3OXQyaW9xbmZlbGo3eTMifQ._eTE_oq4wSfdvkVzRRc4-w";

export default function MapaTrack() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-38.41321120563727, -12.94767196829192],
      zoom: 18,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    const createMarker = (lngLat, imageUrl) => {
      const marker = document.createElement("div");
      marker.className = "icon-marker";

      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = "Perfil";
      marker.appendChild(img);

      new mapboxgl.Marker(marker, { offset: [0, -920] })
        .setLngLat(lngLat)
        .addTo(map.current);
    };

    createMarker([-38.421761407779556, -12.945104053736781], perfil1);

    createMarker([-38.41321120563727, -12.94767196829192], perfil2);
  }, []);

  return <div ref={mapContainer} className="map-container"></div>;
}
