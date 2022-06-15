import styled from 'styled-components';

import Container from '@components/Container';

import FilterBar from './FilterBar';
import NewIssueButton from './NewIssueButton';
import TagTab from './TagTab';

export default function UtilBar() {
  return (
    <Wrapper>
      <FilterBar />
      <Container
        flexInfo={{ align: 'center', justify: 'space-between' }}
        gap={1}
      >
        <TagTab />
        <NewIssueButton />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexMixin({ align: 'center', justify: 'space-between' })}
  margin-top: 2rem;
`;
