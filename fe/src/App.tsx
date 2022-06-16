import { ThemeProvider } from 'styled-components';

import { HeaderProvider } from '@contexts/HeaderProvider';
import Routes from '@pages/Routes';
import GlobalStyle from '@style/GlobalStyle';
import theme from '@style/theme';

export default function App() {
  return (
    <HeaderProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </HeaderProvider>
  );
}
