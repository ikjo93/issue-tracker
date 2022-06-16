import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import useAxios from '@hooks/useAxios';

import IssueTableBody from './IssueTableBody';
import IssueTableHeader from './IssueTableHeader';

export default function IssueTable() {
  const fetchUrl = `/api/issues/${useLocation().search}`;
  const { data: issues } = useAxios(fetchUrl, 'get');

  return (
    <IssueTableContainer>
      <IssueTableHeader openedIssuesCnt={issues?.length || 0} />
      <IssueTableBody issues={issues?.issue} />
    </IssueTableContainer>
  );
}

const IssueTableContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 1rem;
  overflow: hidden;
  margin-top: 1.5rem;
`;
