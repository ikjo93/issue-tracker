import axios from 'axios';
import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { useHeaderDispatch } from '@/contexts/HeaderProvider';
import Logo from '@components/Header/Logo';
import Squircle from '@components/Squircle';
import colors from '@constants/colors';
import { fontSize } from '@constants/fonts';

type LoginType = 'github' | 'default';

interface ILoginButton {
  loginType?: LoginType;
}

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

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Logo page="login" />
      <Squircle>
        <InputBox name="email" placeholder="아이디(이메일)" />
      </Squircle>
      <Squircle>
        <InputBox name="password" type="password" placeholder="비밀번호" />
      </Squircle>
      <Squircle>
        <LoginButton type="submit">아이디로 로그인</LoginButton>
      </Squircle>
      <Squircle>
        <LoginButton type="button" loginType="github">
          GitHub 계정으로 로그인
        </LoginButton>
      </Squircle>
      <span>
        아직 회원이 아니신가요? <Link to="/join">회원가입</Link>
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 0.5rem;
  ${({ theme }) => theme.mixin.flexMixin('column', 'center', 'center')}
`;

const getLoginButtonBg = (theme, loginType) => {
  switch (loginType) {
    case 'github':
      return css`
        background-color: ${colors.titleActive};
      `;
    default:
      return css`
        background-color: ${theme.palette.primary};
      `;
  }
};

const InputBox = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${colors.inputBg};
  padding: 0rem 1rem;
`;

const LoginButton = styled.button<ILoginButton>`
  color: ${colors.offWhite};
  font-size: ${fontSize.medium};
  width: 100%;
  height: 100%;
  ${({ loginType, theme }) => getLoginButtonBg(theme, loginType)};
  opacity: 0.5;
  transition: opacity 0.2s;
  :hover {
    opacity: 1;
  }
`;
