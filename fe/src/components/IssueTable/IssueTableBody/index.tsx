import styled from 'styled-components';

import IssueTableCell from './IssueTableCell';

export default function IssueTableBody({ issues }) {
  return (
    <IssueTableBodyContainer>
      {issues?.map((issue) => (
        <IssueTableCell key={issue.id} issue={issue} />
      ))}
    </IssueTableBodyContainer>
  );
}

const IssueTableBodyContainer = styled.div`
  overflow: hidden;
  border-radius: 0 0 1rem 1rem;
`;
