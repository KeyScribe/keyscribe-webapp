import React, { lazy, Suspense } from 'react';

const LazyKeyboard = lazy(() => import('./Keyboard'));

const Keyboard = props => (
  <Suspense fallback={null}>
    <LazyKeyboard {...props} />
  </Suspense>
);

export default Keyboard;
