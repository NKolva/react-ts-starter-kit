import React, { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components';
import { ROUTE } from 'src/constants/routes';

import { ExampleFeature } from 'src/features/exampleFeature/ExampleFeature';

import './app.scss';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Fragment>
        <Routes>
          <Route path={ROUTE.DEFAULT} element={<ExampleFeature />} />
          <Route element={<Layout />}>
            <Route path={ROUTE.OVERVIEW} element={<div>Overview</div>} />
            <Route path="/2" element={<div>2</div>} />
          </Route>

          <Route path="*" element={<Navigate to={ROUTE.DEFAULT} />} />
        </Routes>
      </Fragment>
    </div>
  );
};
