import axios from 'axios';
import { useEffect } from 'react';

import { useHeaderDispatch } from '@contexts/HeaderProvider';

export default function OauthCallbackPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const headerDispatch = useHeaderDispatch();
  const code = searchParams.get('code');
  const loginUrl = `http://3.38.208.189/api/login?code=${code}`;

  useEffect(() => {
    (async () => {
      const res = await axios.get(loginUrl);
      console.log(res.headers);
      console.log(document.cookie);
    })();
  }, []);

  return <div>로그인 중</div>;
}
