import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = {user:{isAuthenticated:true}};
  if (user.isLoading) {
    // TODO
    return <Route {...rest} render={() => <div animation="border" variant="warning" />} />;
  }
  return (
    <Route
      {...rest}
      render={props =>
        user.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to={{ pathname: '/login', user: { from: props.location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
