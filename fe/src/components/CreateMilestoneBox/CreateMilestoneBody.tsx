import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { FormEvent } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@components/Button';
import Container from '@components/Container';
import InputBox from '@components/inputs/InputBox';
import { fontSize } from '@constants/fonts';
import { OutletContext } from '@pages/LabelMilestoneLayout';
import mixin from '@style/mixin';

interface IFormEventTarget extends EventTarget {
  subject?: HTMLInputElement;
  description?: HTMLInputElement;
  endDate?: HTMLInputElement;
}

export default function CreateMilestoneBody({ milestonesRefetch }) {
  const [, setIsAdding] = useOutletContext<OutletContext>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData: IFormEventTarget = e.target;
    await axios.post('/api/milestones', {
      subject: formData.subject?.value,
      description: formData.description?.value,
      endDate: formData.endDate?.value,
    });
    setIsAdding(false);
    milestonesRefetch();
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Title>새로운 마일스톤 추가</Title>
      <CreateInfo>
        <InputBoxes>
          <Container width="100%" flexInfo={{}} gap={1}>
            <InputBox name="subject" placeholder="마일스톤 이름" />
            <InputBox name="description" placeholder="설명(선택)" />
          </Container>
          <InputBox name="endDate" placeholder="완료일(선택) ex. YYYY-MM-DD" />
        </InputBoxes>
      </CreateInfo>
      <ButtonBox>
        <Button type="submit" size="small" variant="primary">
          <AddIcon />
          <span>완료</span>
        </Button>
      </ButtonBox>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  ${mixin.flexMixin({ direction: 'column' })}
  gap:2rem;
  padding: 2rem;
`;

const Title = styled.h3`
  font-size: ${fontSize.large};
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const CreateInfo = styled.div`
  display: grid;
  width: 100%;
`;

const InputBoxes = styled.div`
  gap: 0.7rem;
  ${mixin.flexMixin({ direction: 'column' })}
`;
