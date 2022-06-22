import Container from '@components/Container';
import Label from '@components/Label';

export default function Labels() {
  return (
    <Container flexInfo={{ wrap: 'wrap' }} gap={0.5}>
      <Label
        key={12312}
        text="프을리이즈으"
        color="white"
        bgColor="lightcoral"
      />
      <Label key={123111112} text="기입스" color="white" bgColor="red" />
      <Label key={1124} text="미히잉" color="white" bgColor="blue" />
      <Label key={123124} text="오잉쥐" color="white" bgColor="orange" />
    </Container>
  );
}
