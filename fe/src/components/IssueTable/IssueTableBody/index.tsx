import styled from 'styled-components';

import IssueTableCell from '@components/IssueTable/IssueTableBody/IssueTableCell';
import mixin from '@style/mixin';
import { IssueType } from '@type/types';


interface IIssueTableBodyProps {
  issues: IssueType[];
  checkedIssueIds: number[];
  toggleOneIssue: (issueId: number) => void;
}

export default function IssueTableBody({
  issues,
  checkedIssueIds,
  toggleOneIssue,
}: IIssueTableBodyProps) {
  return (
    <IssueTableBodyContainer>
      {issues.length ? (
        issues.map((issue) => (
          <IssueTableCell
            key={issue.id}
            issue={issue}
            isIssueChecked={checkedIssueIds.includes(issue.id)}
            toggleIssueCheck={() => toggleOneIssue(issue.id)}
          />
        ))
      ) : (
        <NoIssueMessage>검색과 일치하는 결과가 없습니다.</NoIssueMessage>
      )}
    </IssueTableBodyContainer>
  );
}

const IssueTableBodyContainer = styled.div`
  overflow: hidden;
  border-radius: 0 0 1rem 1rem;
`;

const NoIssueMessage = styled.div`
  ${mixin.flexMixin({ align: 'center', justify: 'center' })}
  height: 6.25rem;
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
  background: ${({ theme }) => theme.palette.contentColor};
  color: ${({ theme }) => theme.palette.placeholder};
`;
