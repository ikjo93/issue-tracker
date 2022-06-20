import styled from 'styled-components';

import mixin from '@style/mixin';
import { IssueType } from '@type/types';

import IssueTableCell from './IssueTableCell';

interface IIssueTableBodyProps {
  issues: IssueType[];
  checkedIssueIndices: boolean[];
  toggleOneIssue: (issueIdx: number, isChecked: boolean) => void;
}

export default function IssueTableBody({
  issues,
  checkedIssueIndices,
  toggleOneIssue,
}: IIssueTableBodyProps) {
  return (
    <IssueTableBodyContainer>
      {issues.length ? (
        issues.map((issue, idx) => (
          <IssueTableCell
            key={issue.id}
            issue={issue}
            isIssueChecked={checkedIssueIndices[idx]}
            toggleIssueCheck={(isChecked) => toggleOneIssue(idx, isChecked)}
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
