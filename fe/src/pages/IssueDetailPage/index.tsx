import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Divider from '@components/data-display/Divider';
import { IssueProvider } from '@contexts/IssueProvider';
import IssueBody from '@pages/IssueDetailPage/IssueBody';
import IssueHeader from '@pages/IssueDetailPage/IssueHeader';

export default function IssueDetailPage() {
  const issueId = useParams().id;

  if (!issueId) throw Error("Can't found this issue id page");

  return (
    <IssueProvider issueId={Number(issueId)}>
      <Body>
        <IssueHeader />
        <Divider margin="2rem" />
        <IssueBody />
      </Body>
    </IssueProvider>
  );
}

const Body = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
