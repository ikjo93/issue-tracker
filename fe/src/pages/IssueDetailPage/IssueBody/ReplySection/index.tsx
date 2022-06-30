import Container from '@components/layout/Container';
import { useIssueContext } from '@contexts/IssueProvider';
import Reply from '@pages/IssueDetailPage/IssueBody/ReplySection/Reply';
import ReplyWritingArea from '@pages/IssueDetailPage/IssueBody/ReplySection/ReplyWritingArea';

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
