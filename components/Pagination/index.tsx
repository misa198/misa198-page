import { FC } from "react";

import { PaginationWrapper } from "./styled";

const Pagination: FC = () => {
  return <PaginationWrapper count={10} variant="outlined" shape="rounded" />;
};

export default Pagination;
