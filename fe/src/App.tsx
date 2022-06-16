import { ThemeProvider } from 'styled-components';

import { useHeaderState } from '@contexts/HeaderProvider';
import Routes from '@pages/Routes';
import GlobalStyle from '@style/GlobalStyle';
import { darkTheme, lightTheme } from '@style/theme';

export default function App() {
  const { isDark } = useHeaderState();

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}
