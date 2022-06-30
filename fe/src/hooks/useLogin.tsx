import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { useHeaderDispatch } from '@contexts/HeaderProvider';

export default function useLogin() {
  const navigate = useNavigate();
  const headerDispatch = useHeaderDispatch();
  let refreshIntervalId: NodeJS.Timer;

  const setAccessTokenOnHeader = (accessToken: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  };

  const setRefreshInterval = () => {
    const intervalTime = Number(process.env.TOKEN_REFRESH_INTERVAL) ?? 50000;
    refreshIntervalId = setInterval(reissueAccessToken, intervalTime);
  };

  const reissueAccessToken = async () => {
    try {
      const res = await axios.post('/api/access-token/reissue');
      const accessToken = res.headers['access-token'];
      setAccessTokenOnHeader(accessToken);
    } catch (err) {
      const error = err as Error | AxiosError;
      if (!axios.isAxiosError(error)) {
        throw err;
      }
      //  logOut();
      clearInterval(refreshIntervalId);
      console.error(
        `access-token 재발급에 실패했습니다. 에러코드 ${error.response?.status}`,
      );
    }
  };

  const logOut = () => {
    headerDispatch({ type: 'LOGOUT' });
    document.cookie = `refresh-token=expires. ${new Date().toISOString()}`;
  };

  const getAndStoreUserInfo = async () => {
    const { data: userInfo } = await axios.get(`/api/mine`);
    headerDispatch({ type: 'LOGIN', userInfo });
    setRefreshInterval();
    navigate('/');
  };

  const login = async (loginUrl) => {
    const jwtResponse = await axios.get(loginUrl);
    const accessToken = jwtResponse.headers['access-token'];
    setAccessTokenOnHeader(accessToken);
    getAndStoreUserInfo();
  };

  const reLogin = async () => {
    try {
      await reissueAccessToken();
      await getAndStoreUserInfo();
    } catch (err) {
      console.error('재로그인이 불가합니다.');
    }
  };

  return { login, reLogin };
}
