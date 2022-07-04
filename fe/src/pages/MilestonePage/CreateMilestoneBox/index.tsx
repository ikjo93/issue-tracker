import styled from 'styled-components';

import CreateMilestoneBody from '@pages/MilestonePage/CreateMilestoneBox/CreateMilestoneBody';

export default function CreateMilestoneBox() {
  return (
    <Wrapper>
      <CreateMilestoneBody />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 1rem;
  margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.palette.contentColor};
`;
