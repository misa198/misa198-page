import styled from "styled-components";
import { down } from "styled-breakpoints";

const timeline = `
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  position: relative;

  @keyframes placeHolderShimmer{
    0%{
      background-position: -468px 0
    }
    100%{
      background-position: 468px 0
    }
  }
`;

export const BlogCardWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  width: 100%;

  ${down("sm")} {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

export const BlogCardImageWrapper = styled.div`
  width: 100%;
  max-width: 30%;
  margin-right: 1rem;
  border-radius: 0.35rem;
  overflow: hidden;
  ${timeline}

  ${down("sm")} {
    max-width: 100%;
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;

export const BlogCardImage = styled.div`
  width: 100%;
  padding-top: 62.5%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BlogCardPreview = styled.div`
  width: 100%;
`;

export const BlogCardPreviewTitle1 = styled.div`
  width: 100%;
  max-height: 3rem;
  height: 1.25rem;
  margin-bottom: 0.5rem;
  user-select: none;
  border-radius: 0.25rem;
  ${timeline}
`;

export const BlogCardPreviewTitle2 = styled.div`
  width: 80%;
  max-height: 3rem;
  height: 1.25rem;
  margin-bottom: 0.5rem;
  user-select: none;
  border-radius: 0.25rem;
  ${timeline}
`;

export const BlogCardPreviewTitle3 = styled.div`
  width: 60%;
  max-height: 3rem;
  height: 1.25rem;
  margin-bottom: 1rem;
  user-select: none;
  border-radius: 0.25rem;
  ${timeline}
`;

export const BlogCardPreviewMeta = styled.div`
  height: 0.8rem;
  width: 30%;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  ${timeline}
`;

export const BlogCardPreviewContent1 = styled.p`
  height: 1rem;
  width: 100%;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  ${timeline}
`;

export const BlogCardPreviewContent2 = styled.p`
  height: 1rem;
  width: 80%;
  border-radius: 0.25rem;
  ${timeline}
`;
