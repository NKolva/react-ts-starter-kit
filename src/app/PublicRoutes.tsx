import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

const Home = () => <h2>Home</h2>;

const About = () => <h2>Public One</h2>;

const Header = () => {
  const history = useHistory();

  return (
    <>
      <div>
        <button onClick={() => history.push('/')}>Home</button>
        <button onClick={() => history.push('/public-one')}>Public One</button>
        <button onClick={() => history.push('/private-one')}>Private One</button>
      </div>
    </>
  );
};

export const PublicRoutes: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/public-one" component={About} />
        <Route path="/public-two" component={() => <div>Public Two</div>} />
        <Route path="/public-three" component={() => <div>Public Three</div>} />

        <Redirect to="/" />
      </Switch>
    </>
  );
};
