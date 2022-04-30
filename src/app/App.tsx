import React from 'react';

import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

import logo from 'src/assets/app/logo.svg';

import classes from './app.module.scss';

export const App: React.FC = () => {
  console.log('process', process.env);

  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
      <div className={classes.App}>
        <header className={classes.App_header}>
          <img src={logo} className={classes.App_logo} alt="logo" />
          <p>
            Editt <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className={classes.App_link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
};

export default App;
