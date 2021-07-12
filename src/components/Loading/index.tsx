import { FC } from "react";
import { CircularProgress } from "@material-ui/core";

import { LoadingWrapper } from "./styled";

const Loading: FC = () => {
  return (
    <LoadingWrapper>
      <CircularProgress />
    </LoadingWrapper>
  );
};

export default Loading;
