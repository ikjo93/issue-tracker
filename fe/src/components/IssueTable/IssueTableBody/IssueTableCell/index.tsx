import { Checkbox } from '@mui/material';
import styled from 'styled-components';

import colors from '@/constants/colors';

import IssueDescription from './IssueDescription';
import IssueTitle from './IssueTitle';

const CellContainer = styled.div`
  position: relative;
  height: 100px;
  border-top: 1px solid ${colors.line};
`;

const CheckboxContainer = styled.div`
  position: absolute;
  top: 12px;
  left: 23px;
`;

const IssueTitleContainer = styled.div`
  position: absolute;
  top: 16px;
  left: 80px;
`;

export default function IssueTableCell({ issue }: { issue: any }) {
  return (
    <CellContainer>
      <CheckboxContainer>
        <Checkbox />
      </CheckboxContainer>
      <IssueTitleContainer>
        <IssueTitle title={issue.subject} labels={issue.labels} />
        {/* <IssueDescription
          issueNum={issue.number}
          writer={issue.writer}
          milestones={issue.milestones}
          createdDatetime={issue.createdDatetime}
        /> */}
      </IssueTitleContainer>
    </CellContainer>
  );
}
