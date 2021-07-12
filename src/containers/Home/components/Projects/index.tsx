import { FC, memo } from "react";
import { useSelector } from "react-redux";

import ProjectList from "src/components/ProjectList";
import { RootState } from "src/store";
import { ProjectsWrapper, ProjectsContainer, ProjectsTitle } from "./styled";

const Projects: FC = () => {
  const pinnedRepositoriesState = useSelector(
    (state: RootState) => state.home.pinnedRepositories
  );

  return (
    <ProjectsWrapper>
      <ProjectsContainer>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectList repositories={pinnedRepositoriesState.data} />
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};

export default memo(Projects);
