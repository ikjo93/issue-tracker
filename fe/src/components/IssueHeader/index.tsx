import Container from '@components/Container';

import IssueInfo from './IssueInfo';
import IssueUtilButtons from './IssueUtilButtons';

export default function IssueHeader() {
  return (
    <Container flexInfo={{ justify: 'space-between' }}>
      <IssueInfo />
      <IssueUtilButtons />
    </Container>
  );
}
