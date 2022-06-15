import styled from 'styled-components';

import useAxios from '@/hooks/useAxios';
import colors from '@constants/colors';

import IssueTableBody from './IssueTableBody';
import IssueTableHeader from './IssueTableHeader';

export default function IssueTable() {
  const { data: issues } = useAxios('/api/issues', 'get');

  return (
    <IssueTableContainer>
      <IssueTableHeader openedIssuesCnt={issues?.length || 0} />
      <IssueTableBody issues={issues} />
    </IssueTableContainer>
  );
}

const IssueTableContainer = styled.div`
  border: 1px solid ${colors.line};
  border-radius: 1rem;
  overflow: hidden;
  margin-top: 1.5rem;
`;
