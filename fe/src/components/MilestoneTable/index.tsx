import styled from 'styled-components';

import MilestoneTableBody from '@components/MilestoneTable/MilestoneTableBody';
import MilestoneTableHeader from '@components/MilestoneTable/MilestoneTableHeader';

export default function MilestoneTable() {
  return (
    <MilestoneTableContainer>
      <MilestoneTableHeader />
      <MilestoneTableBody />
    </MilestoneTableContainer>
  );
}

const MilestoneTableContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 1rem;
  margin-top: 1.5rem;
`;
