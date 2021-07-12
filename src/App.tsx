import { FC, Suspense } from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Main, AppWrapper } from "src/styled";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import routes from "src/routes";

const App: FC = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <AppWrapper>
        <Header />
        <Main>
          {routes.map((route) => (
            <Route {...route} key={route.name} />
          ))}
        </Main>
        <Footer />
        <ToastContainer />
      </AppWrapper>
    </Suspense>
  );
};

export default App;
