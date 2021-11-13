import styled from "styled-components";
import { down } from "styled-breakpoints";

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

  ${down("sm")} {
    max-width: 100%;
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;

export const BlogCardImage = styled.div<{ src: string }>`
  width: 100%;
  padding-top: 62.5%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BlogCardPreview = styled.div``;

export const BlogCardPreviewTitle = styled.h1`
  max-height: 3rem;
  overflow: hidden;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.5625rem;
  user-select: none;
`;

export const BlogCardPreviewMeta = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

export const BlogCardPreviewContent = styled.p`
  color: ${(props) => props.theme.colorBlack07};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
