import axios from 'axios';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

import Container from '@components/Container';
import Divider from '@components/Divider';
import Header from '@components/Header';
import SideMenuItem from '@components/SideMenuItem';
import Squircle from '@components/Squircle';
import TitleBar from '@components/TitleBar';
import UserIcon from '@components/UserIcon';
import colors from '@constants/colors';
import { fontSize } from '@constants/fonts';

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
        <Divider length="100%" margin="2rem" />
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
              height="30rem"
              unit="%"
            >
              <TextAreaBox name="description" placeholder="본문" />
            </Squircle>
          </Container>
          <Squircle
            borderLineColor={theme.palette.borderColor}
            height="fit-content"
          >
            <SideMenuItem type="담당자" />
            <Divider length="100%" margin="" />
            <SideMenuItem type="레이블" />
            <Divider length="100%" margin="" />
            <SideMenuItem type="마일스톤" />
          </Squircle>
        </GridContainer>
        <Divider length="100%" margin="2rem" />
        <Container
          flexInfo={{ direction: 'row' }}
          position="absolute"
          right="0"
          gap={1}
        >
          <Squircle>
            <CancleButton type="button" onClick={handleClickCancleButton}>
              작성 취소
            </CancleButton>
          </Squircle>
          <Squircle>
            <SubmitButton type="submit">완료</SubmitButton>
          </Squircle>
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
  height: 100%;
  resize: none;
  padding: 1rem;
  padding-top: 1.5rem;
`;

const Button = styled.button`
  color: ${colors.offWhite};
  font-size: ${fontSize.medium};
  width: 100%;
  height: 100%;

  opacity: 0.5;
  transition: opacity 0.2s;
  :hover {
    opacity: 1;
  }
`;

const SubmitButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary};
`;
const CancleButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.warning};
`;
