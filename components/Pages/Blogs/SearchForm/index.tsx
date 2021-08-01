import { ChangeEvent, FC, FormEvent } from "react";

import {
  SearchFormWrapper,
  SearchFormContainer,
  SearchFormInput,
} from "./styled";

interface PropTypes {
  keyword: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

const SearchFrom: FC<PropTypes> = ({ keyword, onChange, onSubmit }) => {
  return (
    <SearchFormWrapper>
      <SearchFormContainer onSubmit={onSubmit}>
        <SearchFormInput
          placeholder="Search something..."
          value={keyword}
          onChange={onChange}
        />
      </SearchFormContainer>
    </SearchFormWrapper>
  );
};

export default SearchFrom;
