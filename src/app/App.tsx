import React from 'react';

import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const App: React.FC = () => {
  console.log('process', process.env);

  const isAuthenticated = false;

  return <>{isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}</>;
};

export default App;
