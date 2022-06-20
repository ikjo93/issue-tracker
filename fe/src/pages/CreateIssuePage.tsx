import axios from 'axios';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

import Button from '@components/Button';
import Container from '@components/Container';
import Divider from '@components/Divider';
import Header from '@components/Header';
import SideMenu from '@components/SideMenu';
import Squircle from '@components/Squircle';
import TitleBar from '@components/TitleBar';
import UserIcon from '@components/UserIcon';

interface IFormEventTarget extends EventTarget {
  subject?: HTMLInputElement;
  description?: HTMLTextAreaElement;
}

export default function CreateIssuePage() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData: IFormEventTarget = e.target;
    const subject = formData.subject?.value;
    const description = formData.description?.value;
    await axios.post('/api/createIssue', {
      subject,
      description,
    });
    navigate('/');
  };

  const handleClickCancleButton = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <Body onSubmit={handleSubmit}>
        <TitleBar title="새로운 이슈 작성" />
        <GridContainer>
          <UserIcon size="BIG" />
          <Container flexInfo={{ direction: 'column' }} gap={1}>
            <Squircle
              backgroundColor={theme.palette.darkerBgColor}
              width={100}
              unit="%"
            >
              <InputBox name="subject" placeholder="제목" />
            </Squircle>
            <Squircle
              backgroundColor={theme.palette.darkerBgColor}
              width={100}
              height="auto"
              unit="%"
            >
              <TextAreaBox name="description" placeholder="본문" />
            </Squircle>
          </Container>
          <SideMenu />
        </GridContainer>
        <Divider length="100%" margin="2rem" />
        <Container
          flexInfo={{ direction: 'row' }}
          position="absolute"
          right="0"
          gap={1}
        >
          <Button variant="warning" onClick={handleClickCancleButton}>
            작성 취소
          </Button>
          <Button type="submit">완료</Button>
        </Container>
      </Body>
    </>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 15fr 5fr;
  grid-gap: 1rem;
`;

const Body = styled.form`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
`;

const InputBox = styled.input`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.palette.fontColor};
  background-color: ${({ theme }) => theme.palette.darkerBgColor};
  padding: 0rem 1rem;
`;

const TextAreaBox = styled.textarea`
  width: 100%;
  min-height: 20rem;
  resize: vertical;
  padding: 1rem;
  padding-top: 1.5rem;
`;
