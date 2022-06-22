import styled from 'styled-components';

import Container from '@components/Container';
import UserIcon from '@components/UserIcon';

export default function Assignees({ assignees }) {
  return (
    assignees && (
      <Container flexInfo={{ direction: 'column' }} gap={1}>
        {assignees.map((assignee) => (
          <Assignee
            flexInfo={{ justify: 'flex-start', align: 'center' }}
            gap={1}
          >
            <UserIcon size="BIG" imgUrl={assignee.profileUrl} />
            <span>{assignee.identity}</span>
          </Assignee>
        ))}
      </Container>
    )
  );
}

const Assignee = styled(Container)``;
