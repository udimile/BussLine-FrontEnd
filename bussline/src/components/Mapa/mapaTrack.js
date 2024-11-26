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
      const offsetValue =
        window.innerWidth >= 1920
          ? [10, -800]
          : window.innerWidth === 1024
          ? [10, -950]
          : window.innerWidth === 414
          ? [10, -730]
          : window.innerWidth === 390
          ? [10, -690]
          : window.innerWidth === 375
          ? [10, -650]
          : window.innerWidth === 360
          ? [10, -720]
          : window.innerWidth === 820
          ? [10, -1100]
          : window.innerWidth === 768
          ? [10, -950]
          : [10, -1000];
      new mapboxgl.Marker(marker, { offset: offsetValue })
        .setLngLat(lngLat)
        .addTo(map.current);
    };

    createMarker([-38.421761407779556, -12.945104053736781], perfil1);

    createMarker([-38.41321120563727, -12.94767196829192], perfil2);
  }, []);

  return <div ref={mapContainer} className="map-container"></div>;
}
