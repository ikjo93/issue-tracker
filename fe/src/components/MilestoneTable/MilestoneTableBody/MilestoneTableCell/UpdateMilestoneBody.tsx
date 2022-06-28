import AddIcon from '@mui/icons-material/Add';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import axios from 'axios';
import { FormEvent } from 'react';
import styled from 'styled-components';

import Button from '@components/Button';
import Container from '@components/Container';
import InputBox from '@components/inputs/InputBox';
import { fontSize } from '@constants/fonts';
import mixin from '@style/mixin';

interface IFormEventTarget extends EventTarget {
  subject?: HTMLInputElement;
  description?: HTMLInputElement;
  endDate?: HTMLInputElement;
}

export default function UpdateMilestoneBody({
  milestone,
  toggleIsEditing,
  milestonesRefetch,
}) {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData: IFormEventTarget = e.target;
    await axios.patch(`/api/milestones/${milestone.id}`, {
      subject: formData.subject?.value,
      description: formData.description?.value,
      endDate: formData.endDate?.value,
    });
    toggleIsEditing();
    milestonesRefetch();
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Title>마일스톤 편집</Title>
      <CreateInfo>
        <InputBoxes>
          <Container width="100%" flexInfo={{}} gap={1}>
            <InputBox
              name="subject"
              placeholder="마일스톤 이름"
              defaultValue={milestone.subject}
            />
            <InputBox
              name="description"
              placeholder="설명(선택)"
              defaultValue={milestone.description}
            />
          </Container>
          <InputBox
            name="endDate"
            placeholder="완료일(선택) ex. YYYY-MM-DD"
            defaultValue={milestone.endDate}
          />
        </InputBoxes>
      </CreateInfo>
      <ButtonBox>
        <Button size="small" variant="outlined" onClick={toggleIsEditing}>
          <CancelOutlinedIcon />
          <span>취소</span>
        </Button>
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
  gap: 1rem;
`;

const CreateInfo = styled.div`
  display: grid;
  width: 100%;
`;

const InputBoxes = styled.div`
  gap: 0.7rem;
  ${mixin.flexMixin({ direction: 'column' })}
`;
