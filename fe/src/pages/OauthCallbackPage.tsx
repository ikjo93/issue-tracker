import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useHeaderDispatch } from '@contexts/HeaderProvider';

export default function OauthCallbackPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const headerDispatch = useHeaderDispatch();
  const code = searchParams.get('code');
  const loginUrl = `http://3.38.208.189/api/login?code=${code}`;

  const refreshAccessToken = (newAccessToken) => {
    headerDispatch({ type: 'REFRESH_TOKEN', accessToken: newAccessToken });
  };

  const setRefreshInterval = () => {
    const intervalTime = Number(process.env.TOKEN_REFRESH_INTERVAL) ?? 50000;
    setInterval(refreshAccessToken, intervalTime);
  };

  useEffect(() => {
    (async () => {
      const res = await axios.get(loginUrl);
      const accessToken = res.headers['access-token'];
      console.log(accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      const res2 = await axios.get('http://3.38.208.189/api/mine');
      console.log(res2);
      // setRefreshInterval();
    })();
  }, [loginUrl]);

  return <div>로그인 중</div>;
}
