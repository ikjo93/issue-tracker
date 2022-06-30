import { useState, useRef } from 'react';

import Container from '@components/layout/Container';
import IssueInfo from '@pages/IssueDetailPage/IssueHeader/IssueInfo';
import IssueUtilButtons from '@pages/IssueDetailPage/IssueHeader/IssueUtilButtons';

export default function IssueHeader() {
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);

  return (
    <Container flexInfo={{ justify: 'space-between' }} margin="2rem 0">
      <IssueInfo isTitleEditing={isTitleEditing} titleRef={titleRef} />
      <IssueUtilButtons
        titleRef={titleRef}
        isTitleEditing={isTitleEditing}
        setIsTitleEditing={setIsTitleEditing}
      />
    </Container>
  );
}
