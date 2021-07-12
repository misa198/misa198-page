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
  {
    name: "portfolio",
    path: "/portfolio",
    exact: true,
    component: lazy(() => import("src/containers/Portfolio")),
  },
  {
    name: "blogs",
    path: "/blogs",
    exact: true,
    component: lazy(() => import("src/containers/Blogs")),
  },
];

export default routes;
