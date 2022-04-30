import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export const PrivateRoutes: React.FC = () => {
  const userPermissions = ['private-one', 'private-two'];

  console.log(userPermissions.includes('private-one'));

  return (
    <>
      <Switch>
        <Route path="/private-home" exact component={() => <div>private-home</div>} />
        {userPermissions.includes('private-one') && (
          <Route path="/private-one" component={() => <div>private-one</div>} />
        )}
        {userPermissions.includes('private-two') && (
          <Route path="/private-two" component={() => <div>private-two</div>} />
        )}
        {userPermissions.includes('private-three') && (
          <Route path="/private-three" component={() => <div>private-three</div>} />
        )}
        <Redirect to="/private-home" />
      </Switch>
    </>
  );
};
