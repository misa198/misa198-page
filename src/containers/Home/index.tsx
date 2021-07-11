import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import About from "src/containers/Home/components/About";
import { fetchPinnedRepositories } from "src/store/thunks/home.thunk";

const Home: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPinnedRepositories());
  }, [dispatch]);

  return (
    <>
      <About />
    </>
  );
};

export default Home;
