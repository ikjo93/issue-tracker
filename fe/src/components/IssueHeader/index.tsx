import Container from '@components/Container';
import { IssueType } from '@type/types';

import IssueInfo from './IssueInfo';
import IssueUtilButtons from './IssueUtilButtons';

interface IIssueData {
  issueData: IssueType;
  refreshIssue: () => void;
}

export default function IssueHeader({ issueData, refreshIssue }: IIssueData) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  return (
    <Container flexInfo={{ justify: 'space-between' }} margin="2rem 0">
      <IssueInfo title={title} />
      <IssueUtilButtons
        setIsEditingTitle={setIsEditingTitle}
        refreshIssue={refreshIssue}
      />
    </Container>
  );
}
