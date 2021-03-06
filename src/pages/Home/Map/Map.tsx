import React, { useRef, useEffect } from 'react';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';

import { colors } from 'common/consts/colors';
import { layout } from 'common/consts/layout';
import { map } from 'common/consts/map';

mapboxgl.accessToken = map.key;

export const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null); // fix type

  useEffect(() => {
    if (mapInstanceRef.current || !mapContainerRef.current) return;

    const mapInstance = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [map.lng, map.lat],
      zoom: map.zoom,
    });

    new mapboxgl.Marker({
      color: colors.navy,
    })
      .setLngLat([map.lng, map.lat])
      .addTo(mapInstance);

    mapInstanceRef.current = mapInstance;
  }, []);

  return (
    <div>
      <div ref={mapContainerRef} style={{ height: layout.desktop.mapHeight }} />
    </div>
  );
};
