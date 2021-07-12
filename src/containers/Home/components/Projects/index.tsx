import { FC } from "react";

import ProjectCard from "src/components/ProjectCard";
import { ProjectsWrapper, ProjectsContainer, ProjectsTitle } from "./styled";

const Projects: FC = () => {
  return (
    <ProjectsWrapper>
      <ProjectsContainer>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectCard
          repository={{
            owner: "Misabot",
            repo: "misabot-discord",
            link: "https://github.com/Misabot/misabot-discord",
            description: "Play Music in Discord.",
            language: "TypeScript",
            stars: "3",
            forks: 0,
          }}
        />
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
