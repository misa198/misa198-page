import { FC, lazy, LazyExoticComponent } from "react";

interface Route {
  to: string;
  exact: boolean;
  component: LazyExoticComponent<FC>;
}

const routes: Route[] = [
  {
    to: "/",
    exact: true,
    component: lazy(() => import("src/containers/Home")),
  },
];

export default routes;
