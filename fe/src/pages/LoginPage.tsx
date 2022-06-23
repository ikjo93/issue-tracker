import axios from 'axios';
import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@components/Button';
import Container from '@components/Container';
import Logo from '@components/Header/Logo';
import InputBox from '@components/inputs/InputBox';
import { useHeaderDispatch } from '@contexts/HeaderProvider';

interface IFormEventTarget extends EventTarget {
  email?: HTMLInputElement;
  password?: HTMLInputElement;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const headerDispatch = useHeaderDispatch();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData: IFormEventTarget = e.target;
    const email = formData.email?.value;
    const password = formData.password?.value;
    const {
      data: { profileUrl },
    } = await axios.post('/api/login', {
      email,
      password,
    });
    headerDispatch({ type: 'LOGIN', profileUrl });
    navigate('/');
  };

  const handleClickGithubLogin = async () => {
    // const githubAuthUrl = 'https://github.com/login/oauth/authorize';
    // const queryConfig = {
    //   scope: 'user',
    //   client_id: process.env.CLIENT_ID,
    // };
    // const queryString = convertKeyValueToQuery(queryConfig);
    // const url = githubAuthUrl + queryString;
    // window.location.href(url);
    // 원래 로직은 github login 을 위한 페이지로 href
    const {
      data: { profileUrl },
    } = await axios.get('/api/github-login');
    headerDispatch({ type: 'LOGIN', profileUrl });
    navigate('/');
  };

  return (
    <Wrapper flexInfo={{ align: 'center', justify: 'center' }}>
      <MyForm onSubmit={handleSubmit}>
        <Logo page="login" />
        <InputBox name="email" placeholder="아이디(이메일)" />
        <InputBox name="password" type="password" placeholder="비밀번호" />
        <Button width="100%" type="submit">
          아이디로 로그인
        </Button>
        <Button width="100%" variant="github" onClick={handleClickGithubLogin}>
          GitHub 계정으로 로그인
        </Button>
        <span>
          아직 회원이 아니신가요? <Link to="/join">회원가입</Link>
        </span>
      </MyForm>
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  width: 100%;
  height: 100vh;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: center;
`;
