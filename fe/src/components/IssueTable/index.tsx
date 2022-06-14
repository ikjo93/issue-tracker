import styled from 'styled-components';

import colors from '@/constants/colors';

import IssueTableHeader from './IssueTableHeader';

const IssueTableContainer = styled.div`
  border: 1px solid ${colors.line};
  border-radius: 16px;
  overflow: hidden;
  margin-top: 24px;
`;

export default function IssueTable() {
  return (
    <IssueTableContainer>
      <IssueTableHeader />
    </IssueTableContainer>
  );
}
