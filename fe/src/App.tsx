import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@style/GlobalStyle';
import theme from '@style/theme';

import DefaultPage from './pages/DefaultPage';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <DefaultPage />
      </ThemeProvider>
    </>
  );
}
