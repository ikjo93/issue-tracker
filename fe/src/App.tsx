import { ThemeProvider } from 'styled-components';

import { HeaderProvider } from '@contexts/HeaderProvider';
import Routes from '@pages/Routes';
import GlobalStyle from '@style/GlobalStyle';
import theme from '@style/theme';

import DefaultPage from './pages/DefaultPage';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </HeaderProvider>
    </>
  );
}
