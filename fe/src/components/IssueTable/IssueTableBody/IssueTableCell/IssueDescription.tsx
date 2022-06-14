import Container from '@/components/Container';
import IconTextBox from '@/components/IconTextBox';
import colors from '@/constants/colors';

type TIssueDescriptionProps = {
  issueNum: number;
  writer: string;
  milestones: object;
  createdDatetime: string;
};

export default function IssueDescription({
  issueNum,
  writer,
  milestones,
  createdDatetime,
}: TIssueDescriptionProps) {
  return (
    <Container flexInfo={['row', 'center', 'flex-start', 'no-wrap']}>
      <IconTextBox
        Icon={null}
        color={colors.label}
        text={`#${issueNum}`}
        margin="0 16px 0 0"
      />
      <IconTextBox
        Icon={null}
        color={colors.label}
        text={writer}
        margin="0 16px 0 0"
      />
      <IconTextBox
        Icon={null}
        color={colors.label}
        text={createdDatetime}
        margin="0 16px 0 0"
      />
    </Container>
  );
}
