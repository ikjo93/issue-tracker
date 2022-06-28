import styled from 'styled-components';

import CreateMilestoneBody from '@components/CreateMilestoneBox/CreateMilestoneBody';

export default function CreateMilestoneBox({ milestonesRefetch }) {
  return (
    <Wrapper>
      <CreateMilestoneBody milestonesRefetch={milestonesRefetch} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 1rem;
  margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.palette.contentColor};
`;
