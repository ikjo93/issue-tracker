import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import useAxios from '@hooks/useAxios';

import IssueTableBody from './IssueTableBody';
import IssueTableHeader from './IssueTableHeader';

export default function IssueTable() {
  const fetchUrl = `/api/issues/${useLocation().search}`;
  const { data: issueTableData } = useAxios(fetchUrl, 'get');

  return (
    issueTableData && (
      <IssueTableContainer>
        <IssueTableHeader
          clickedStatusCnt={issueTableData.issues.length}
          oppositeStatusCnt={issueTableData.oppositeStatusCnt}
        />
        <IssueTableBody issues={issueTableData.issues} />
      </IssueTableContainer>
    )
  );
}

const IssueTableContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 1rem;
  margin-top: 1.5rem;
`;
