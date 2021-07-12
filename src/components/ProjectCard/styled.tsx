import styled from "styled-components";

export const ProjectCardLinkWrapper = styled.div`
  width: 300px;
`;

export const ProjectCardLink = styled.a`
  width: fit-content;
  height: fit-content;
`;

export const ProjectCardWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 1rem;
  background: rgb(255, 255, 255);
  overflow: hidden;
  box-shadow: ${(props) => props.theme.colorBlack02} 0px 1px 4px;
  border-radius: 0.5rem;
  transition: all 300ms;
  user-select: none;
  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => props.theme.colorBlack04} 0px 1px 4px;
  }
`;

export const ProjectCardTitle = styled.h4`
  margin: 0.75rem 0 1.45rem 0;
  padding: 0px;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.1;
`;

export const ProjectCardDescription = styled.p`
  color: ${(props) => props.theme.colorBlack06};
  height: 3.7rem;
  font-size: 0.95rem;
  line-height: 1.3;
  margin-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ProjectCardMeta = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProjectMetaTraffic = styled.div`
  display: flex;
`;

export const ProjectCardMetaItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const ProjectCardMetaIcon = styled.span`
  margin-right: 0.5rem;
`;

export const ProjectCardMetaValue = styled.span`
  font-size: 0.9rem;
`;

export const ProjectCardLanguage = styled.div`
  font-size: 0.95rem;
  color: ${(props) => props.theme.colorBlack07};
`;
