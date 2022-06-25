import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Divider from '@components/Divider';
import IssueBody from '@components/IssueBody';
import IssueHeader from '@components/IssueHeader';
import { IssueProvider } from '@contexts/IssueProvider';
import useAxios from '@hooks/useAxios';
import { IssueType } from '@type/types';

export default function IssueDetailPage() {
  const issueId = useParams().id;
  const [, setRefreshFlag] = useState(false);
  const { data: issueData } = useAxios<IssueType>(`/api/detail/${issueId}`);

  const refreshIssue = () => {
    setRefreshFlag((prev) => !prev);
  };

  return (
    issueData && (
      <IssueProvider issueId={Number(issueId)}>
        <Body>
          <IssueHeader issueData={issueData} refreshIssue={refreshIssue} />
          <Divider margin="2rem" />
          <IssueBody />
        </Body>
      </IssueProvider>
    )
  );
}

const Body = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
