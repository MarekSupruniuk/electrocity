import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFyZWtzdXBydW5pdWsiLCJhIjoiY2wwZTg0bHdoMGdraTNpazZ1OWV6aDFtcSJ9.qennylecHxSpfRXjGFbdNg";

export const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null); // fix type
  const [lng, setLng] = useState(23.332807);
  const [lat, setLat] = useState(53.0174394);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    const mapInstance = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lng, lat],
      zoom: zoom,
    });

    new mapboxgl.Marker({
      color: '#ff0000'
    })
      .setLngLat([lng, lat])
      .addTo(mapInstance);

    map.current = mapInstance;
  }, [lng, lat, zoom]);

  return (
    <div>
      <div ref={mapContainer} style={{ height: 400 }} />
    </div>
  );
};
