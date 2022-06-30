import axios from 'axios';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@components/input/Button';
import InputBox from '@components/input/InputBox';
import Container from '@components/layout/Container';

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
    <Wrapper flexInfo={{ align: 'center', justify: 'center' }}>
      <MyForm onSubmit={handleSubmit}>
        <InputBox name="email" placeholder="아이디(이메일)" required />
        <InputBox name="name" placeholder="닉네임" required />
        <InputBox
          name="password"
          type="password"
          placeholder="비밀번호"
          required
        />
        <Button type="submit">회원 가입</Button>
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
