import React, { lazy, Suspense } from "react";
import OpenRoutes from "routes/OpenRoutes";
import PrivateRoute from "routes/PrivateRoutes";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const Login = lazy(() => import("pages/Auth/Login"));
const Home = lazy(() => import("pages/Home"));
const NotFound = lazy(() => import("pages/NotFound"));

const Routes = () => (
  <Router>
    <Suspense fallback={<p>Loading ...</p>}>
      <Switch>
        <OpenRoutes exact path="/login" component={Login} />
        <PrivateRoute exact path={["/home", "/"]} component={Home} />
        <OpenRoutes component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
