import Container from '@components/Container';

import FilterBar from './FilterBar';
import NewIssueButton from './NewIssueButton';
import TagTab from './TagTab';

export default function UtilBar() {
  return (
    <Container
      flexInfo={{ align: 'center', justify: 'space-between' }}
      mt="2rem"
    >
      <FilterBar />
      <Container
        flexInfo={{ align: 'center', justify: 'space-between' }}
        gap={1}
      >
        <TagTab />
        <NewIssueButton />
      </Container>
    </Container>
  );
}
