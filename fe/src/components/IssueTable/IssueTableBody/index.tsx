import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { IssueType } from '@type/types';

import IssueTableCell from './IssueTableCell';

interface IIssueTableBodyProps {
  issues: IssueType;
  checkedIssueIndices: boolean[];
  toggleOneIssue: (issueIdx: number, isChecked: number) => void;
}

export default function IssueTableBody({
  issues,
  checkedIssueIndices,
  toggleOneIssue,
}: IIssueTableBodyProps) {
  return (
    <IssueTableBodyContainer>
      {issues?.map((issue, idx) => (
        <IssueTableCell
          key={issue.id}
          issue={issue}
          isIssueChecked={checkedIssueIndices[idx]}
          toggleIssueCheck={(isChecked) => toggleOneIssue(idx, isChecked)}
        />
      ))}
    </IssueTableBodyContainer>
  );
}

const IssueTableBodyContainer = styled.div`
  overflow: hidden;
  border-radius: 0 0 1rem 1rem;
`;
