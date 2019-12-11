import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from 'react-redux';

const PrivateRoute = ({ isAuthenticated, children }) => {
  return (
    <Route
      render={(
        { location }) => isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = state => (
  {
    isAuthenticated: state.tokenReducer.isAuthenticated,
  }
);

export default connect(mapStateToProps, null)(PrivateRoute);