import { lazy, Suspense } from 'react';

import { Wrapper } from './map.styles';

const Mapbox = lazy(() => import('./Mapbox'));
const isPrerendering = navigator.userAgent === 'ReactSnap';

export const Map = () => {
  return (
    <Wrapper>
      {!isPrerendering ? (
        <Suspense fallback={<div>wczytywnie mapy...</div>}>
          <Mapbox />
        </Suspense>
      ) : (
        <div>loading...</div>
      )}
    </Wrapper>
  );
};
