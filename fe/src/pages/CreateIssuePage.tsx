import axios from 'axios';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@components/Button';
import Container from '@components/Container';
import Divider from '@components/Divider';
import Header from '@components/Header';
import InputBox from '@components/inputs/InputBox';
import TextAreaBox from '@components/inputs/TextAreaBox';
import SideMenu from '@components/SideMenu';
import TitleBar from '@components/TitleBar';
import UserIcon from '@components/UserIcon';

interface IFormEventTarget extends EventTarget {
  subject?: HTMLInputElement;
  description?: HTMLTextAreaElement;
}

export default function CreateIssuePage() {
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
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

  const handleChangeTitleInput = ({ target }) => {
    if (target.value === '') {
      setIsSubmitButtonDisabled(true);
    } else if (target.value !== '' && isSubmitButtonDisabled) {
      setIsSubmitButtonDisabled(false);
    }
  };

  return (
    <>
      <Header />
      <Body onSubmit={handleSubmit}>
        <TitleBar title="새로운 이슈 작성" />
        <GridContainer>
          <UserIcon size="BIG" />
          <Container flexInfo={{ direction: 'column' }} gap={1}>
            <InputBox onChange={handleChangeTitleInput} placeholder="제목" />
            <TextAreaBox />
          </Container>
          <SideMenu />
        </GridContainer>
        <Divider margin="2rem" />
        <Container
          flexInfo={{ direction: 'row' }}
          position="absolute"
          right="0"
          gap={1}
        >
          <Button variant="warning" onClick={handleClickCancleButton}>
            작성 취소
          </Button>
          <Button type="submit" disabled={isSubmitButtonDisabled}>
            완료
          </Button>
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
