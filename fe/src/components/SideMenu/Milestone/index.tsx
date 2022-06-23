import Container from '@components/Container';
import ProgressBar from '@components/SideMenu/Milestone/ProgressBar';

export default function Milestone({ milestone }) {
  return (
    milestone && (
      <Container flexInfo={{ direction: 'column' }} gap={1}>
        <ProgressBar percent={40} />
        <span>{milestone.subject}</span>
      </Container>
    )
  );
}
