import { CircularProgress } from '@mui/material';
import axios, { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useHeaderDispatch } from '@contexts/HeaderProvider';

export default function OauthCallbackPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const headerDispatch = useHeaderDispatch();
  const code = searchParams.get('code');
  const loginUrl = `/api/login?code=${code}`;
  let accessToken = '';

  const setAccessTokenOnHeader = () => {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  };

  const setRefreshInterval = () => {
    const intervalTime = Number(process.env.TOKEN_REFRESH_INTERVAL) ?? 50000;
    setInterval(refreshCachedAccessToken, intervalTime);
  };

  const logOut = () => {
    headerDispatch({ type: 'LOGOUT' });
    accessToken = '';
    document.cookie = `refresh-token=expires. ${new Date().toISOString()}`;
    navigate('/');
  };

  const refreshCachedAccessToken = async () => {
    console.log(document.cookie);
    try {
      const res = await axios.post('/api/access-token/reissue');
      accessToken = res.headers['access-token'];
      setAccessTokenOnHeader();
    } catch (err) {
      console.log(err);
      const error = err as Error | AxiosError;
      if (!axios.isAxiosError(error)) {
        throw err;
      }
      if (error.response?.status === 403) {
        logOut();
      } else {
        throw new Error(
          `access-token 재발급에 실패했습니다. 에러코드 ${error.response?.status}`,
        );
      }
    }
  };

  useEffect(() => {
    (async () => {
      const jwtResponse = await axios.get(loginUrl);
      accessToken = jwtResponse.headers['access-token'];
      setAccessTokenOnHeader();

      const { data: userInfo } = await axios.get(`/api/mine`);
      headerDispatch({ type: 'LOGIN', userInfo });
      setRefreshInterval();
      navigate('/');

      // local환경에서 set cookie가 되지 않아서 임시로 사용하는 로직.
      // const refreshToken = jwtResponse.headers['refresh-token'];
      // document.cookie = `refresh-token=${refreshToken}`;
    })();
  }, [loginUrl]);

  return <LoadingSpinner size="5rem" />;
}

const LoadingSpinner = styled(CircularProgress)`
  position: fixed;
  top: calc(50vh - 2.5rem);
  left: calc(50vw - 2.5rem);
`;
