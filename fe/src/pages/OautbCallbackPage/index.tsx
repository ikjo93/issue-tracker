import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import styled from 'styled-components';

import useLogin from '@hooks/useLogin';

export default function OauthCallbackPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const { login } = useLogin();
  const code = searchParams.get('code');
  const loginUrl = `/api/login?code=${code}`;

  useEffect(() => {
    login(loginUrl);
  }, [loginUrl]);

  return <LoadingSpinner size="5rem" />;
}

const LoadingSpinner = styled(CircularProgress)`
  position: fixed;
  top: calc(50vh - 2.5rem);
  left: calc(50vw - 2.5rem);
`;
