import styled from 'styled-components';

import Container from '@components/Container';
import { fontSize } from '@constants/fonts';

const Title = styled.h1`
  font-size: ${fontSize.large};
`;

export default function TitleBar({ title }) {
  return (
    <Container mt="3rem">
      <Title>{title}</Title>
    </Container>
  );
}
