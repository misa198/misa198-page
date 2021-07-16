import { FC, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Main, AppWrapper } from "src/styled";
import Loading from "src/components/Loading";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import routes from "src/routes";

const App: FC = () => {
  return (
    <AppWrapper>
      <Header />
      <Main>
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map((route) => (
              <Route {...route} key={route.name} />
            ))}
          </Switch>
        </Suspense>
      </Main>
      <Footer />
      <ToastContainer />
    </AppWrapper>
  );
};

export default App;
