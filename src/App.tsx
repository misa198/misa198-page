import { FC, Suspense } from "react";
import { Route } from "react-router-dom";

import { Main } from "src/styled";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import routes from "src/routes";

const App: FC = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Header />
      <Main>
        {routes.map((route) => (
          <Route {...route} key={route.name} />
        ))}
      </Main>
      <Footer />
    </Suspense>
  );
};

export default App;
