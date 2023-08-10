import React from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
    return (
      <Route {...rest} render={(props) => (
        isAuthenticated ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )} />
    );
  }
