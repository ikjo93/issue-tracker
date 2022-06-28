import styled from 'styled-components';

import ButtonBoxes from '@components/MilestoneTable/MilestoneTableBody/MilestoneTableCell/ButtonBoxes';
import MilestoneDescription from '@components/MilestoneTable/MilestoneTableBody/MilestoneTableCell/MilestoneDescription';
import MilestoneTitle from '@components/MilestoneTable/MilestoneTableBody/MilestoneTableCell/MilestoneTitle';
import ProgressBar from '@components/SideMenu/Milestone/ProgressBar';
import colors from '@constants/colors';
import { fontSize } from '@constants/fonts';
import mixin from '@style/mixin';

export default function MilestoneTableCellItem({
  milestone,
  toggleIsEditing,
  milestonesRefetch,
}) {
  const openIssueCount =
    milestone.totalCountOfIssues - milestone.countOfClosedIssues;
  const progressBarPercent =
    milestone.totalCountOfIssues === 0
      ? 0
      : Math.floor(
          (milestone.countOfClosedIssues / milestone.totalCountOfIssues) * 100,
        );
  return (
    <>
      <MilestoneInfoContainer>
        <MilestoneTitle milestone={milestone} />
        <MilestoneDescription description={milestone.description} />
      </MilestoneInfoContainer>
      <RightWrapper>
        <ButtonBoxes
          milestoneId={milestone.id}
          toggleIsEditing={toggleIsEditing}
          milestonesRefetch={milestonesRefetch}
        />
        <ProgressBar percent={progressBarPercent} />
        <MilestoneProgressStatus>
          <div>
            <span>{progressBarPercent}%</span>
          </div>
          <IssueStatus>
            <span>열린 이슈 {openIssueCount}</span>
            <span>닫힌 이슈 {milestone.countOfClosedIssues}</span>
          </IssueStatus>
        </MilestoneProgressStatus>
      </RightWrapper>
    </>
  );
}

const MilestoneInfoContainer = styled.div`
  ${mixin.flexMixin({ justify: 'center', direction: 'column' })};
`;

const RightWrapper = styled.div`
  ${mixin.flexMixin({
    direction: 'column',
    align: 'flex-end',
    justify: 'space-around',
  })};
  gap: 0.5rem;
  padding: 1rem 0rem;
`;

const MilestoneProgressStatus = styled.div`
  font-size: ${fontSize.xsmall};
  color: ${colors.grey4};
  width: 100%;
  ${mixin.flexMixin({ justify: 'space-between' })};
`;

const IssueStatus = styled.div`
  display: flex;
  gap: 1rem;
`;
