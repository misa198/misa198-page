import { FC } from "react";

import {
  SearchFormWrapper,
  SearchFormContainer,
  SearchFormInput,
} from "./styled";

const SearchFrom: FC = () => {
  return (
    <SearchFormWrapper>
      <SearchFormContainer>
        <SearchFormInput placeholder="Search something..." />
      </SearchFormContainer>
    </SearchFormWrapper>
  );
};

export default SearchFrom;
