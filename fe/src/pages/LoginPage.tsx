import { FormEvent } from 'react';
import styled, { css } from 'styled-components';

import Squircle from '@components/Squircle';
import colors from '@constants/colors';
import { fontSize } from '@constants/fonts';

type LoginType = 'github' | 'default';

interface ILoginButton {
  loginType?: LoginType;
}

export default function LoginPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Squircle>
        <InputBox placeholder="아이디" />
      </Squircle>
      <Squircle>
        <InputBox type="password" placeholder="비밀번호" />
      </Squircle>
      <Squircle>
        <LoginButton>아이디로 로그인</LoginButton>
      </Squircle>
      <Squircle>
        <LoginButton loginType="github">GitHub 계정으로 로그인</LoginButton>
      </Squircle>
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
