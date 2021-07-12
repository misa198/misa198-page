import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchPinnedRepositories } from "src/store/thunks/home.thunk";
import About from "src/containers/Home/components/About";
import Projects from "./components/Projects";

const Home: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPinnedRepositories());
  }, [dispatch]);

  return (
    <>
      <About />
      <Projects />
    </>
  );
};

export default Home;
