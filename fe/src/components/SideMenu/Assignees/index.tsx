import styled from 'styled-components';

import Container from '@components/Container';
import UserIcon from '@components/UserIcon';

export default function Assignees() {
  return (
    <Container flexInfo={{ direction: 'column' }} gap={1}>
      <Assignee flexInfo={{ justify: 'flex-start', align: 'center' }} gap={1}>
        <UserIcon size="BIG" />
        <span>happyGyu</span>
      </Assignee>
      <Assignee flexInfo={{ justify: 'flex-start', align: 'center' }} gap={1}>
        <UserIcon size="BIG" />
        <span>happyGyu</span>
      </Assignee>
    </Container>
  );
}

const Assignee = styled(Container)``;
