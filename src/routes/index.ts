import { FC, lazy, LazyExoticComponent } from "react";

interface Route {
  name: string;
  path: string;
  exact: boolean;
  component: LazyExoticComponent<FC>;
}

const routes: Route[] = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() => import("src/containers/Home")),
  },
];

export default routes;
