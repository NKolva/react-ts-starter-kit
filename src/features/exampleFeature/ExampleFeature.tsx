import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppDispatch } from 'src/app/rootStore';

import { exampleListSelector, fetchList } from 'src/store/example';

import { ROUTE } from 'src/constants/routes';

import { LogoImage } from 'src/assets';
import './exampleFeature.scss';

export const ExampleFeature: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const exampleList = useSelector(exampleListSelector);

  useEffect(() => {
    i18n.changeLanguage('ua');
  }, []);

  console.log(process.env);

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  console.log('exampleList', exampleList);

  const onClickDashboard = useCallback(() => {
    navigate(ROUTE.OVERVIEW);
  }, []);

  return (
    <header className="exampleFeature-header">
      <img src={LogoImage} className="exampleFeature-logo" alt="logo" />
      <button onClick={onClickDashboard}>{t('buttons:overview')}</button>
    </header>
  );
};
