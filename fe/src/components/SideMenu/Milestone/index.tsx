import Container from '@components/Container';
import ProgressBar from '@components/SideMenu/Milestone/ProgressBar';

export default function Milestone() {
  return (
    <Container flexInfo={{ direction: 'column' }} gap={1}>
      <ProgressBar percent={40} />
      <span>마스터즈 코스</span>
    </Container>
  );
}
