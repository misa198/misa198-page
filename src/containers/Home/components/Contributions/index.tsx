import { FC } from "react";
import GitHubCalendar from "react-github-calendar";

import {
  ContributionsWrapper,
  ContributionsContainer,
  ContributionsTitle,
  ContributionsCalendarWrapper,
} from "./styled";

const Contributions: FC = () => {
  return (
    <ContributionsWrapper>
      <ContributionsContainer>
        <ContributionsTitle>Github contributions</ContributionsTitle>
        <ContributionsCalendarWrapper>
          <GitHubCalendar
            showTotalCount
            username="misa198"
            fontSize={16}
            blockSize={22}
          />
        </ContributionsCalendarWrapper>
      </ContributionsContainer>
    </ContributionsWrapper>
  );
};

export default Contributions;
