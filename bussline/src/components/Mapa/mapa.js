import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmljdG9ybm92YWlzIiwiYSI6ImNtMm51N25zcDA3OXQyaW9xbmZlbGo3eTMifQ._eTE_oq4wSfdvkVzRRc4-w";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const route = useRef([]);
  const marker = useRef(null);
  const stepIndex = useRef(0);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-38.41321120563727, -12.94767196829192],
      zoom: 18,
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

        marker.current = new mapboxgl.Marker()
          .setLngLat(routeCoordinates[0])
          .addTo(map.current);

        animateMarker();
      });
    }

    function animateMarker() {
      const interval = setInterval(() => {
        if (stepIndex.current < route.current.length - 1) {
          stepIndex.current += 1;

          marker.current.setLngLat(route.current[stepIndex.current]);
          map.current.panTo(route.current[stepIndex.current]);

          const remainingRoute = route.current.slice(stepIndex.current);
          map.current.getSource("route").setData({
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: remainingRoute,
            },
          });
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }

    getRoute();
  }, []);

  return <div ref={mapContainer} className="map-container"></div>;
}
