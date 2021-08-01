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

export const BlogIntroduceContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BlogIntroduceMeta = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colorBlack07};
`;

export const BlogIntroduceShare = styled.div`
  display: flex;
  width: fit-content;
`;

export const BlogIntroduceShareButton = styled.div`
  width: fit-content;
  height: fit-content;
  margin-left: 0.75rem;

  * {
    color: ${(props) => props.theme.colorBlack05};
    font-size: 0.7rem;
    transition: color 200ms;
  }

  &:hover {
    * {
      color: ${(props) => props.theme.colorPrimary};
    }
  }
`;
