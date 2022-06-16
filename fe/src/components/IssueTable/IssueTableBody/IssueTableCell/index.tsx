import { Checkbox } from '@mui/material';
import styled from 'styled-components';

import UserIcon from '@components/UserIcon';
import colors from '@constants/colors';
import mixin from '@style/mixin';

import IssueDescription from './IssueDescription';
import IssueTitle from './IssueTitle';

export default function IssueTableCell({ issue }: { issue: any }) {
  return (
    <CellContainer>
      <CheckboxContainer>
        <Checkbox />
      </CheckboxContainer>
      <IssueInfoContainer>
        <IssueTitle title={issue.subject} labels={issue.labels} />
        <IssueDescription
          issueNum={issue.number}
          writer={issue.writer}
          createdDatetime={issue.createdDatetime}
        />
      </IssueInfoContainer>
      <UserIconContainer>
        <UserIcon size="SMALL" />
      </UserIconContainer>
    </CellContainer>
  );
}

const CellContainer = styled.div`
  position: relative;
  height: 6.25rem;
  border-top: 1px solid ${colors.line};
`;

const CheckboxContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1.5rem;
`;

const IssueInfoContainer = styled.div`
  ${mixin.flexMixin({ direction: 'column', justify: 'center' })}
  position: absolute;
  top: 1rem;
  left: 5rem;
  gap: 0.5rem;
`;

const UserIconContainer = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
`;
