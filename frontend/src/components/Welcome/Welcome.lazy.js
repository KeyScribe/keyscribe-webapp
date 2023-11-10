import React, { lazy, Suspense } from 'react';

const LazyWelcome = lazy(() => import('./Welcome'));

const Welcome = props => (
  <Suspense fallback={null}>
    <LazyWelcome {...props} />
  </Suspense>
);

export default Welcome;
