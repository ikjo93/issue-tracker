import { ThemeProvider } from 'styled-components';

import { useHeaderState } from '@contexts/HeaderProvider';
import useLogin from '@hooks/useLogin';
import Routes from '@pages/Routes';
import GlobalStyle from '@style/GlobalStyle';
import { darkTheme, lightTheme } from '@style/theme';

export default function App() {
  const { isLogin, reissueAccessToken } = useLogin();
  const { isDarkMode } = useHeaderState();

  if (!isLogin) {
    reissueAccessToken();
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}
