import React, { lazy, Suspense } from "react";
import OpenRoutes from "routes/OpenRoutes";
import PrivateRoute from "routes/PrivateRoutes";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const Compare = lazy(() => import("pages/Compare"));
const Login = lazy(() => import("pages/Auth/Login"));
const NotFound = lazy(() => import("pages/NotFound"));
const Results = lazy(() => import("pages/Compare/Results"));

const Routes = () => (
  <Router>
    <Suspense fallback={<p>Loading ...</p>}>
      <Switch>
        <OpenRoutes exact path="/login" component={Login} />
        <PrivateRoute exact path={["/home", "/"]} component={Home} />
        <PrivateRoute exact path="/compare" component={Compare} />
        <PrivateRoute exact path="/results" component={Results} />

        <OpenRoutes component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
