import styled from 'styled-components';

import IconTextBox from '@components/IconTextBox';
import colors from '@constants/colors';

interface IIssueDescriptionProps {
  issueNum: number;
  writer: string;
  milestones: object;
  createdDatetime: string;
}

export default function IssueDescription({
  issueNum,
  writer,
  milestones,
  createdDatetime,
}: IIssueDescriptionProps) {
  return (
    <Wrapper>
      <IconTextBox color={colors.label} texts={[`#${issueNum}`]} />
      <IconTextBox color={colors.label} texts={[writer]} />
      <IconTextBox color={colors.label} texts={[createdDatetime]} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center')}
  height: 1.75rem;
  gap: 1rem;
  color: ${colors.label};
`;
