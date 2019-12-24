import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { ErrorBoundary } from "react-error-boundary";
import { isAuthenticated } from "utils/cookieHelpers";
import AuthContextProvider from "contexts/AuthContext";
import ErrorBoundaryFallback from "components/ErrorBoundary";
import { Route, Redirect, useLocation } from "react-router-dom";
import Header from "layouts/Header";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const access = isAuthenticated();

  return (
    <Route {...rest}>
      {access === process.env.REACT_APP_SECRET ? (
        <AuthContextProvider>
          <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
            <Suspense fallback={<p>Loading...</p>}>
              <div>
                <Header />
                <Component />
              </div>
            </Suspense>
          </ErrorBoundary>
        </AuthContextProvider>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )}
    </Route>
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  Component: PropTypes.element
};
