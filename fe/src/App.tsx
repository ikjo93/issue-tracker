import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '@style/GlobalStyle';
import theme from '@style/theme';

const Container = styled.div`
  width: 1440px;
  height: 300px;
  background: red;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <div>hi</div>
        </Container>
      </ThemeProvider>
    </>
  );
}
