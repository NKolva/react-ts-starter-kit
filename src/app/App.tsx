import React from 'react';
import logozz from 'src/assets/app/logo.svg';
import classes from './App.module.scss';

export const App: React.FC = () => {
  return (
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
  );
};

export default App;
