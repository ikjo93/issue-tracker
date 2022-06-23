import CachedIcon from '@mui/icons-material/Cached';
import styled from 'styled-components';

import Container from '@components/Container';
import InputBox from '@components/inputs/InputBox';
import Label from '@components/Label';
import Squircle from '@components/Squircle';
import NewButton from '@components/UtilBar/NewButton';
import colors from '@constants/colors';
import mixin from '@style/mixin';

export default function CreateLabelBody() {
  return (
    <CellContainer>
      <Wrapper>
        <Title>새로운 레이블 추가</Title>
        <CreateInfo>
          <ExampleLabel>
            <Label text="레이블 이름" bgColor="#EFF0F6" />
          </ExampleLabel>
          <InputBoxes>
            <InputBox placeholder="레이블 이름" />
            <InputBox placeholder="설명(선택)" />
            <ColorInputs>
              <ColorInputBox width="auto">
                <InputCaption>배경 색상</InputCaption>
                <Container flexInfo={{ align: 'center' }}>
                  <ColorInput value="#EFF0F6" />
                  <CachedIcon />
                </Container>
              </ColorInputBox>
              <ColorInputBox width="auto">
                <InputCaption>텍스트 색상</InputCaption>
                <Container
                  flexInfo={{ align: 'center', justify: 'space-around' }}
                >
                  <RadioButton
                    type="radio"
                    id="selectDarkBtn"
                    value="어두운 색"
                    name="darkText"
                    checked
                  />
                  <label htmlFor="selectDarkBtn">어두운 색</label>
                  <RadioButton
                    type="radio"
                    id="selectLightBtn"
                    value="밝은 색"
                    name="darkText"
                  />
                  <label htmlFor="selectLightBtn">밝은 색</label>
                </Container>
              </ColorInputBox>
            </ColorInputs>
          </InputBoxes>
        </CreateInfo>
        <ButtonBox>
          <NewButton label="완료" />
        </ButtonBox>
      </Wrapper>
    </CellContainer>
  );
}

const RadioButton = styled.input`
  appearance: none;
`;
const InputCaption = styled.span`
  color: ${colors.grey4};
  font-weight: 500;
`;

const ColorInput = styled.input`
  width: inherit;
  background-color: inherit;
  color: inherit;
`;

const ColorInputBox = styled(Squircle)`
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-gap: 0.5rem;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.darkerBgColor};
  padding: 0rem 1rem;
  :focus-visible {
    background-color: ${({ theme }) => theme.palette.bgColor};
    outline: 1px solid ${({ theme }) => theme.palette.borderColor};
  }
`;

const ColorInputs = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 1rem;
`;

const Wrapper = styled.form`
  ${mixin.flexMixin({ direction: 'column' })}
  gap:2rem;
`;

const ExampleLabel = styled.div`
  ${mixin.flexMixin({ justify: 'center', align: 'flex-end' })}
`;

const Title = styled.h5``;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const CreateInfo = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  width: 100%;
`;

const InputBoxes = styled.div`
  ${mixin.flexMixin({ direction: 'column' })}
  gap: 0.7rem;
`;

const CellContainer = styled.div`
  padding: 2rem;
  height: auto;
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
  background-color: ${({ theme }) => theme.palette.contentColor};
  :hover {
    background-color: ${({ theme }) => theme.palette.lighterBgColor};
  }
`;
