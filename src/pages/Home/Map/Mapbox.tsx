import { useRef, useEffect } from 'react';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';

import { colors } from 'common/consts/colors';
import { map } from 'common/consts/map';

import { MapContainer } from './map.styles';

mapboxgl.accessToken = map.key;

export const Mapbox = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null); // fix type

  useEffect(() => {
    if (mapInstanceRef.current || !mapContainerRef.current) return;

    const mapInstance = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: map.style,
      center: [map.lng, map.lat],
      zoom: map.zoom,
    });

    new mapboxgl.Marker({
      color: colors.gold,
    })
      .setLngLat([map.lng, map.lat])
      .addTo(mapInstance);

    mapInstanceRef.current = mapInstance;
  }, []);

  return (<MapContainer ref={mapContainerRef} />);
};

export default Mapbox;