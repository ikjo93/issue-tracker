import React from 'react';
import styled from 'styled-components';

import MilestoneTableBody from '@components/MilestoneTable/MilestoneTableBody';
import MilestoneTableHeader from '@components/MilestoneTable/MilestoneTableHeader';
import { ResponseState } from '@hooks/useAxios';
import { IMilestoneResponse } from '@type/types';

export default function MilestoneTable({
  state,
}: {
  state: ResponseState<IMilestoneResponse>;
}) {
  const {
    data: { milestones, countOfOpenMilestones, countOfClosedMilestones } = {},
  } = state;

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
