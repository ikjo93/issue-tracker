import CachedIcon from '@mui/icons-material/Cached';
import React, { useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';

import Container from '@components/Container';
import InputBox from '@components/inputs/InputBox';
import Label from '@components/Label';
import Squircle from '@components/Squircle';
import NewButton from '@components/UtilBar/NewButton';
import colors from '@constants/colors';
import { fontSize } from '@constants/fonts';
import mixin from '@style/mixin';
import { debounce } from '@util/timeUtils';

const DEFAULT_LABEL_NAME = '레이블 이름';
const POSSIBLE_COLOR_HEX_LEN = 4;
const COLOR_HEX_MAX_LEN = 7;
export default function CreateLabelBody() {
  const [labelBgColor, setLabelBgColor] = useState('#EFF0F6');
  const [isLabelDarkText, setIsLabelDarkText] = useState(true);
  const [labelText, setLabelText] = useState(DEFAULT_LABEL_NAME);
  const colorInputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();

  const handleChangeLabelNameInput = debounce({
    callback: ({ target }) => {
      if (target.value === '') {
        setLabelText(DEFAULT_LABEL_NAME);
      } else {
        setLabelText(target.value);
      }
    },
    msTime: 200,
  });

  const handleChangeLabelBgColorInput = debounce({
    callback: ({ target }) => {
      const isPossbleColorCode =
        target.value.length === POSSIBLE_COLOR_HEX_LEN ||
        target.value.length === COLOR_HEX_MAX_LEN;

      if (target.value > COLOR_HEX_MAX_LEN) {
        target.value = target.value.substr(0, COLOR_HEX_MAX_LEN);
        return;
      }
      if (target.value === '') {
        target.value = '#';
      }
      if (isPossbleColorCode) {
        target.style.color = 'inherit';
        setLabelBgColor(target.value);
      } else {
        target.style.color = theme.palette.warning;
      }
    },
    msTime: 200,
  });

  const handleChangeRadioButton = ({ target }) => {
    setIsLabelDarkText(JSON.parse(target.value));
  };

  const handleClickRandomLabelButton = () => {
    if (!colorInputRef.current) return;
    const randomHex = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase();
    setLabelBgColor(`#${randomHex}`);
    colorInputRef.current.value = `#${randomHex}`;
  };
  return (
    <CellContainer>
      <Wrapper>
        <Title>새로운 레이블 추가</Title>
        <CreateInfo>
          <ExampleLabel>
            <Label
              text={labelText}
              bgColor={labelBgColor}
              darkText={isLabelDarkText}
            />
          </ExampleLabel>
          <InputBoxes>
            <InputBox
              placeholder="레이블 이름"
              onChange={handleChangeLabelNameInput}
            />
            <InputBox placeholder="설명(선택)" />
            <ColorInputs>
              <ColorInputBox width={15}>
                <InputCaption>배경 색상</InputCaption>
                <Container
                  flexInfo={{ align: 'center', justify: 'space-between' }}
                >
                  <ColorInput
                    ref={colorInputRef}
                    defaultValue={labelBgColor}
                    onChange={handleChangeLabelBgColorInput}
                  />
                  <button type="button" onClick={handleClickRandomLabelButton}>
                    <CachedIcon />
                  </button>
                </Container>
              </ColorInputBox>
              <ColorInputBox width={20}>
                <InputCaption>텍스트 색상</InputCaption>
                <Container
                  flexInfo={{ align: 'center', justify: 'space-around' }}
                >
                  <RadioButton
                    type="radio"
                    id="selectDarkBtn"
                    defaultValue="true"
                    name="darkText"
                    onChange={handleChangeRadioButton}
                    defaultChecked
                  />
                  <label htmlFor="selectDarkBtn">어두운 색</label>
                  <RadioButton
                    type="radio"
                    id="selectLightBtn"
                    defaultValue="false"
                    name="darkText"
                    onChange={handleChangeRadioButton}
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

const RadioButton = styled.input``;
const InputCaption = styled.span`
  color: ${colors.grey4};
  font-weight: 500;
`;

const ColorInput = styled.input`
  width: 4rem;
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
  display: flex;

  /* grid-template-columns: 2fr 3fr; */
  gap: 1rem;
`;

const Wrapper = styled.form`
  ${mixin.flexMixin({ direction: 'column' })}
  gap:2rem;
`;

const ExampleLabel = styled.div`
  ${mixin.flexMixin({ justify: 'center', align: 'flex-end' })}
  padding-bottom: 2rem;
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
`;
