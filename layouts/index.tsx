import { FC } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Main, LayoutWrapper } from "./styled";
import Header from "components/Header";
import Footer from "components/Footer";

const App: FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <ToastContainer />
    </LayoutWrapper>
  );
};

export default App;
