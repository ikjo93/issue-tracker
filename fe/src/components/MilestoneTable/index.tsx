import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import MilestoneTableBody from '@components/MilestoneTable/MilestoneTableBody';
import MilestoneTableHeader from '@components/MilestoneTable/MilestoneTableHeader';
import useAxios from '@hooks/useAxios';
import { MilestoneType } from '@type/types';

interface IMilestoneResponse {
  countOfOpenMilestones: number;
  countOfClosedMilestones: number;
  milestones: MilestoneType[];
}

export default function MilestoneTable() {
  const {
    state: {
      data: { milestones, countOfOpenMilestones, countOfClosedMilestones } = {},
    },
    refetch,
  } = useAxios<IMilestoneResponse>(`/api/milestones/${useLocation().search}`);

  return (
    <MilestoneTableContainer>
      <MilestoneTableHeader
        countOfOpenMilestones={countOfOpenMilestones}
        countOfClosedMilestones={countOfClosedMilestones}
      />
      <MilestoneTableBody milestones={milestones} />
    </MilestoneTableContainer>
  );
}

const MilestoneTableContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 1rem;
  margin-top: 1.5rem;
`;
