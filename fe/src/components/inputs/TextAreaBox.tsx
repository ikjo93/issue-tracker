import { useReducer, useRef } from 'react';
import styled, { useTheme } from 'styled-components';

import Divider from '@components/Divider';
import FileInputBox from '@components/inputs/FileInputBox';
import Squircle from '@components/Squircle';

interface TextCountBoxProps {
  isVisible: boolean;
}

export default function TextAreaBox() {
  const textCountRef = useRef<HTMLSpanElement>(null);
  const theme = useTheme();
  const reducer = (_, action) => {
    switch (action.type) {
      case 'TEXT_AREA_FOCUS':
        return {
          isTextCountVisible: true,
          backgroundColor: theme.palette.bgColor,
          borderLineColor: theme.palette.borderColor,
        };
      case 'TEXT_AREA_FOCUS_OUT':
        return {
          isTextCountVisible: false,
          backgroundColor: theme.palette.darkerBgColor,
          borderLineColor: theme.palette.darkerBgColor,
        };
      default:
        throw Error("Textarea box's action type is wrong something");
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    isTextCountVisible: false,
    backgroundColor: theme.palette.darkerBgColor,
    borderLineColor: theme.palette.darkerBgColor,
  });

  const handleChangeTextArea = ({ target: { value } }) => {
    if (textCountRef.current) {
      textCountRef.current.textContent = `${value.length}`;
    }
  };

  return (
    <TextAreaSquircle
      backgroundColor={state.backgroundColor}
      borderLineColor={state.borderLineColor}
      onFocus={() => {
        dispatch({ type: 'TEXT_AREA_FOCUS' });
      }}
      onBlur={() => {
        dispatch({ type: 'TEXT_AREA_FOCUS_OUT' });
      }}
      width={100}
      height="auto"
      unit="%"
    >
      <MyTextArea
        name="description"
        placeholder="본문"
        onChange={handleChangeTextArea}
      />
      <TextCountBox isVisible={state.isTextCountVisible}>
        <span>띄어쓰기 포함 </span>
        <span ref={textCountRef}>0</span>
        <span>자</span>
      </TextCountBox>
      <Divider margin="" lineStyle="dashed" />
      <FileInputBox />
    </TextAreaSquircle>
  );
}

const MyTextArea = styled.textarea`
  width: 100%;
  min-height: 20rem;
  resize: vertical;
  padding: 1rem;
  padding-top: 1.5rem;
`;

const TextAreaSquircle = styled(Squircle)`
  position: relative;
`;

const TextCountBox = styled.div<TextCountBoxProps>`
  ${({ isVisible }) => !isVisible && 'visibility:hidden;'}
  position: absolute;
  bottom: 4rem;
  right: 2rem;
`;
