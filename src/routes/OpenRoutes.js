import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { isAuthenticated } from "utils/cookieHelpers";
import AuthContextProvider from "contexts/AuthContext";
import ErrorBoundaryFallback from "components/ErrorBoundary";

const OpenRoutes = ({ component: Component, ...rest }) => {
  const access = isAuthenticated();

  return (
    <Route {...rest}>
      {access !== process.env.REACT_APP_SECRET ? (
        <AuthContextProvider>
          <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
            <Suspense fallback={<p>Loading...</p>}>
              <Component />
            </Suspense>
          </ErrorBoundary>
        </AuthContextProvider>
      ) : (
        <Redirect to="/" />
      )}
    </Route>
  );
};

export default OpenRoutes;

OpenRoutes.propTypes = {
  Component: PropTypes.element
};
