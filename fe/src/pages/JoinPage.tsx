import axios from 'axios';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Squircle from '@components/Squircle';
import colors from '@constants/colors';
import { fontSize } from '@constants/fonts';
import mixin from '@style/mixin';

interface IFormEventTarget extends EventTarget {
  email?: HTMLInputElement;
  password?: HTMLInputElement;
  name?: HTMLInputElement;
}

export default function JoinPage() {
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData: IFormEventTarget = e.target;
    const email = formData.email?.value;
    const password = formData.password?.value;
    const name = formData.name?.value;
    await axios.post('/api/join', {
      email,
      password,
      name,
    });
    navigate('/login');
  };

  return (
    // TODO: custom required UX
    <Wrapper onSubmit={handleSubmit}>
      <Squircle>
        <InputBox name="email" placeholder="아이디(이메일)" required />
      </Squircle>
      <Squircle>
        <InputBox name="name" placeholder="닉네임" required />
      </Squircle>
      <Squircle>
        <InputBox
          name="password"
          type="password"
          placeholder="비밀번호"
          required
        />
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
  ${mixin.flexMixin({
    direction: 'column',
    align: 'center',
    justify: 'center',
  })}
`;

const InputBox = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.darkerBgColor};
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
