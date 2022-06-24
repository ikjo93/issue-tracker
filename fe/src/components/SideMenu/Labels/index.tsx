import Container from '@components/Container';
import Label from '@components/Label';

export default function Labels({ labels }) {
  return (
    labels && (
      <Container flexInfo={{ wrap: 'wrap' }} gap={0.5}>
        {labels.map((label) => (
          <Label
            key={label.id}
            text={label.name}
            color="white"
            bgColor={label.color}
          />
        ))}
      </Container>
    )
  );
}
