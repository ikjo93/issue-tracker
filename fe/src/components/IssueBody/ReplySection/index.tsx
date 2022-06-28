import Container from '@components/Container';
import Reply from '@components/IssueBody/ReplySection/Reply';
import ReplyWritingArea from '@components/IssueBody/ReplySection/ReplyWritingArea';
import { useIssueContext } from '@contexts/IssueProvider';

export default function ReplySection() {
  const { issue: { replies } = {} } = useIssueContext();
  return (
    <Container>
      {replies?.map((reply) => (
        <Reply key={reply.id} replyData={reply} />
      ))}
      <ReplyWritingArea type="NEW" />
    </Container>
  );
}
