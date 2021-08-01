import { ChangeEvent, FC } from "react";

import { PaginationWrapper } from "./styled";

interface PropTypes {
  page: number;
  totalPages: number;
  onChange: (e: ChangeEvent<unknown>, page: number) => void;
}

const Pagination: FC<PropTypes> = ({ page, totalPages, onChange }) => {
  return (
    <PaginationWrapper
      count={totalPages}
      page={page ?? 1}
      variant="outlined"
      shape="rounded"
      color="primary"
      onChange={onChange}
    />
  );
};

export default Pagination;
