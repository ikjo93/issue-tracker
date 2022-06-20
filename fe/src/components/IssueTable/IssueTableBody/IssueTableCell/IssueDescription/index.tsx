import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';
import styled from 'styled-components';

import IconTextBox from '@components/IconTextBox';
import colors from '@constants/colors';
import mixin from '@style/mixin';
import { calTimePassed } from '@util/dateHandler';

interface IMilestone {
  id: number;
  name: string;
}

interface IIssueDescriptionProps {
  issueNum: number;
  writer: string;
  createdDatetime: string;
  milestone: IMilestone;
}

export default function IssueDescription({
  issueNum,
  writer,
  createdDatetime,
  milestone,
}: IIssueDescriptionProps) {
  const writerAndTimeDescription = `이 이슈가 ${calTimePassed(
    new Date(createdDatetime),
  )} 전, ${writer}님에 의해 작성되었습니다.`;

  return (
    <Wrapper>
      <IconTextBox color={colors.label} texts={[`#${issueNum}`]} />
      <IconTextBox color={colors.label} texts={[writerAndTimeDescription]} />
      <IconTextBox
        Icon={<SignpostOutlinedIcon fontSize="small" />}
        color={colors.label}
        texts={[milestone.name]}
        spacing={0.5}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mixin.flexMixin({ align: 'center' })}
  height: 1.75rem;
  gap: 1rem;
  color: ${colors.label};
`;
