import { FC, memo } from "react";
import { useSelector } from "react-redux";

import ProjectList from "components/ProjectList";
import { RootState } from "store";
import {
  ProjectsWrapper,
  ProjectsContainer,
  ProjectsTitle,
  ProjectsLoading,
} from "./styled";

const Projects: FC = () => {
  const pinnedRepositoriesState = useSelector(
    (state: RootState) => state.home.pinnedRepositories,
  );

  return (
    <ProjectsWrapper>
      <ProjectsContainer>
        <ProjectsTitle>Projects</ProjectsTitle>
        {pinnedRepositoriesState.loading ? (
          <ProjectsLoading />
        ) : (
          <ProjectList repositories={pinnedRepositoriesState.data} />
        )}
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};

export default memo(Projects);
