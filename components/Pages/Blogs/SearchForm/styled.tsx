import styled from "styled-components";

export const SearchFormWrapper = styled.div``;

export const SearchFormContainer = styled.form`
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colorBlack01};
  overflow: hidden;
`;

export const SearchFormInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  color: ${(props) => props.theme.colorBlack07};
`;
