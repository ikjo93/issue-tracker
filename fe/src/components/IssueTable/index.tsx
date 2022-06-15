import styled from 'styled-components';

import colors from '@/constants/colors';
import useAxios from '@hooks/useAxios';

import IssueTableBody from './IssueTableBody';
import IssueTableHeader from './IssueTableHeader';

const IssueTableContainer = styled.div`
  border: 1px solid ${colors.line};
  border-radius: 16px;
  overflow: hidden;
  margin-top: 24px;
`;

export default function IssueTable() {
  const { data: issues } = useAxios('/api/issues', 'get');

  return (
    <IssueTableContainer>
      <IssueTableHeader openedIssuesCnt={issues?.length || 0} />
      <IssueTableBody issues={issues} />
    </IssueTableContainer>
  );
}
