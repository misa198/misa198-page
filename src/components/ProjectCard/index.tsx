import { FC } from "react";
import { Star, GitPullRequest } from "react-feather";

import { PinnedRepository } from "src/types/PinnedRepository";

import {
  ProjectCardLinkWrapper,
  ProjectCardLink,
  ProjectCardWrapper,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardMeta,
  ProjectMetaTraffic,
  ProjectCardMetaItem,
  ProjectCardMetaIcon,
  ProjectCardMetaValue,
  ProjectCardLanguage,
} from "./styled";

interface PropTypes {
  repository: PinnedRepository;
}

const ProjectCard: FC<PropTypes> = ({ repository }) => {
  return (
    <ProjectCardLinkWrapper>
      <ProjectCardLink
        href={`https://github.com/${repository.owner}/${repository.repo}`}
        target="_blank"
      >
        <ProjectCardWrapper>
          <ProjectCardTitle>{`${repository.owner} / ${repository.repo}`}</ProjectCardTitle>
          <ProjectCardDescription>
            {repository.description}
          </ProjectCardDescription>
          <ProjectCardMeta>
            <ProjectMetaTraffic>
              <ProjectCardMetaItem>
                <ProjectCardMetaIcon>
                  <Star size={16} />
                </ProjectCardMetaIcon>
                <ProjectCardMetaValue>{repository.stars}</ProjectCardMetaValue>
              </ProjectCardMetaItem>
              <ProjectCardMetaItem>
                <ProjectCardMetaIcon>
                  <GitPullRequest size={16} />
                </ProjectCardMetaIcon>
                <ProjectCardMetaValue>{repository.forks}</ProjectCardMetaValue>
              </ProjectCardMetaItem>
            </ProjectMetaTraffic>
            <ProjectCardLanguage>{repository.language}</ProjectCardLanguage>
          </ProjectCardMeta>
        </ProjectCardWrapper>
      </ProjectCardLink>
    </ProjectCardLinkWrapper>
  );
};

export default ProjectCard;
