import { useState } from 'react';

import Container from '@components/Container';
import { IssueType } from '@type/types';

import IssueInfo from './IssueInfo';
import IssueUtilButtons from './IssueUtilButtons';

interface IIssueHeaderProps {
  issueData: IssueType;
  refreshIssue: () => void;
}

export default function IssueHeader({
  issueData,
  refreshIssue,
}: IIssueHeaderProps) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  return (
    <Container flexInfo={{ justify: 'space-between' }} margin="2rem 0">
      <IssueInfo issueData={issueData} />
      <IssueUtilButtons
        isEditingTitle={isEditingTitle}
        setIsEditingTitle={setIsEditingTitle}
        refreshIssue={refreshIssue}
      />
    </Container>
  );
}
