import { FC, lazy, LazyExoticComponent } from "react";

interface Route {
  name: string;
  to: string;
  exact: boolean;
  component: LazyExoticComponent<FC>;
}

const routes: Route[] = [
  {
    name: "home",
    to: "/",
    exact: true,
    component: lazy(() => import("src/containers/Home")),
  },
];

export default routes;
