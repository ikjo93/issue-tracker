import Container from '@components/Container';

import FilterBar from './FilterBar';
import NewIssueButton from './NewIssueButton';
import TagTab from './TagTab';

export default function UtilBar() {
  return (
    <Container flexInfo={['row', 'center', 'space-between', 'no-wrap']}>
      <FilterBar />
      <Container
        flexInfo={['row', 'center', 'space-between', 'no-wrap']}
        gap={1}
      >
        <TagTab />
        <NewIssueButton />
      </Container>
    </Container>
  );
}
