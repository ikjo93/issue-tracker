import Container from '@components/layout/Container';
import ProgressBar from '@pages/common/organisms/SideMenu/Milestone/ProgressBar';

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
