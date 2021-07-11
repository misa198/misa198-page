import { FC, Suspense } from "react";
import { Route } from "react-router-dom";

import Header from "src/components/Header";
import routes from "src/routes";

const App: FC = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Header />
      {routes.map((route) => (
        <Route {...route} />
      ))}
    </Suspense>
  );
};

export default App;
