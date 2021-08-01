import { FC } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProgressBar from "components/ProgressBar";
import Header from "components/Header";
import Footer from "components/Footer";
import { Main, LayoutWrapper } from "./styled";

const App: FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <ProgressBar />
      <Header />
      <Main>{children}</Main>
      <Footer />
      <ToastContainer />
    </LayoutWrapper>
  );
};

export default App;
