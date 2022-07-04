import styled from 'styled-components';

import UserIcon from '@components/data-display/UserIcon';
import Container from '@components/layout/Container';

export default function Assignees({ assignees }) {
  return (
    assignees && (
      <Container flexInfo={{ direction: 'column' }} gap={1}>
        {assignees.map((assignee) => (
          <Assignee
            key={assignee.id}
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
