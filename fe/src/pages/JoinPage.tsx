import { FormEvent } from 'react';
import styled from 'styled-components';

import Squircle from '@components/Squircle';
import colors from '@constants/colors';
import { fontSize } from '@constants/fonts';

export default function JoinPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    // TODO: custom required UX
    <Wrapper onSubmit={handleSubmit}>
      <Squircle>
        <InputBox placeholder="아이디(이메일)" required />
      </Squircle>
      <Squircle>
        <InputBox placeholder="닉네임" required />
      </Squircle>
      <Squircle>
        <InputBox type="password" placeholder="비밀번호" required />
      </Squircle>
      <Squircle>
        <JoinButton type="submit">회원 가입</JoinButton>
      </Squircle>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 0.5rem;
  ${({ theme }) =>
    theme.mixin.flexMixin({
      direction: 'column',
      align: 'center',
      justify: 'center',
    })}
`;

const InputBox = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${colors.inputBg};
  padding: 0rem 1rem;
`;

const JoinButton = styled.button`
  color: ${colors.offWhite};
  font-size: ${fontSize.medium};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.primary};
  opacity: 0.5;
  transition: opacity 0.2s;
  :hover {
    opacity: 1;
  }
`;
