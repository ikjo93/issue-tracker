import Label from '@components/data-display/Label';
import Container from '@components/layout/Container';

export default function Labels({ labels }) {
  return (
    labels && (
      <Container flexInfo={{ wrap: 'wrap' }} gap={0.5}>
        {labels.map((label) => (
          <Label
            key={label.id}
            text={label.name}
            darkText={label.darkText}
            bgColor={label.color}
          />
        ))}
      </Container>
    )
  );
}
