import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import './layoutItem.scss';

interface Props {
  title: string;
  routeTo: string;
}

export const MenuItem: React.FC<Props> = (props) => {
  const { title, routeTo } = props;

  const { pathname } = useLocation();

  const linkClasses = classNames({
    ['layout-item--active']: pathname === routeTo,
    ['layout-item']: pathname !== routeTo,
  });

  return (
    <Link className={linkClasses} to={routeTo}>
      {title}
      {/* <div className={pathname === routeTo ? MenuItemSelected : MenuItemSelectedHidden} /> */}
    </Link>
  );
};
