import React from 'react';
import { Outlet } from 'react-router-dom';

import { LogoImage } from 'src/assets';
import './layout.scss';

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="layout">
      <div className="layout-menu">
        <img src={LogoImage} alt="LogoImage" className="layout-menu-logo" />
        <div className="layout-logout">Go back</div>
      </div>
      <div className="layout-content">{children ?? <Outlet />}</div>
    </div>
  );
};
