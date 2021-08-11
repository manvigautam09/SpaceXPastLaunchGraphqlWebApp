import { ReactNode } from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";

import SpaceXDashboard from "./SpaceXDashboard";
import PageNotFound from "./PageNotFound";
import { ROOT_ROUTE } from "../utils/routeConstants";

interface RouteConfigProps {
  path: string | string[];
  component: ReactNode;
  name: string;
  exact: boolean;
  privateRoute: boolean;
}

const routesConfig = {
  home: {
    path: ROOT_ROUTE,
    component: SpaceXDashboard,
    exact: true,
    privateRoute: true,
  },
};

interface AppRouteProps {
  component: any;
  privateRoute: boolean;
}

const AppRoute = (props: RouteComponentProps & AppRouteProps) => {
  const { component: Component, privateRoute, ...rest } = props;

  return <Component {...rest} />;
};

const AppRoutes = () => {
  const routes = Object.keys(routesConfig);
  return (
    <Router>
      <Switch>
        {routes.map((route: string) => {
          const config: RouteConfigProps = routesConfig[route];

          return (
            <Route
              exact={config.exact}
              key={`${config.name}`}
              path={config.path}
              render={(props: RouteComponentProps) => {
                return (
                  <AppRoute
                    component={config.component}
                    privateRoute={config.privateRoute}
                    {...props}
                  />
                );
              }}
            />
          );
        })}

        <Route path="*" render={() => <PageNotFound />} />
      </Switch>
    </Router>
  );
};
export default AppRoutes;
