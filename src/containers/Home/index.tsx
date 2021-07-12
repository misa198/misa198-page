import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchPinnedRepositories } from "src/store/thunks/home.thunk";
import About from "src/containers/Home/components/About";
import Projects from "./components/Projects";
import Contributions from "./components/Contributions";
import Introduce from "./components/Introduce";

const Home: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPinnedRepositories());
  }, [dispatch]);

  return (
    <>
      <About />
      <Projects />
      <Contributions />
      <Introduce />
    </>
  );
};

export default Home;
