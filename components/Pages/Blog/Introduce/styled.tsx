import styled from "styled-components";

export const BlogIntroduceWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const BlogIntroduceTitle = styled.h2`
  text-align: left;
  line-height: 1.2;
  font-weight: 700;
  word-wrap: break-word;
  word-break: break-word;
  font-size: 2.5rem;
`;

export const BlogIntroduceMeta = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colorBlack07};
`;
