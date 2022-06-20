import { useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';

import Divider from '@components/Divider';
import FileInputBox from '@components/inputs/FileInputBox';
import Squircle from '@components/Squircle';
import { debounce } from '@util/timeUtils';

interface TextCountBoxProps {
  isVisible: boolean;
}

const DEBOUNCE_CHECK_TIME_MS = 1000;

export default function TextAreaBox() {
  const timeRef = useRef<{ timeout: NodeJS.Timeout | null }>({ timeout: null });
  const textCountRef = useRef<HTMLSpanElement>(null);
  const theme = useTheme();
  const [isTextCountVisible, setIsTextCountVisible] = useState(false);

  // 작성을 멈추면 현재 입력된 글자 수가 2초 간 나타났다가 사라지는 기능을 구현한다.
  const handleChangeTextArea = debounce({
    msTime: DEBOUNCE_CHECK_TIME_MS,
    callback: ({ target: { value } }) => {
      if (!textCountRef.current) return;
      if (timeRef.current.timeout) {
        clearTimeout(timeRef.current.timeout);
      }
      textCountRef.current.textContent = `${value.length}`;
      if (!isTextCountVisible) {
        setIsTextCountVisible(true);
      }
      timeRef.current.timeout = setTimeout(() => {
        setIsTextCountVisible(false);
      }, 2000);
    },
  });

  return (
    <TextAreaSquircle
      backgroundColor={theme.palette.darkerBgColor}
      width={100}
      height="auto"
      unit="%"
    >
      <MyTextArea
        name="description"
        placeholder="본문"
        onChange={handleChangeTextArea}
      />
      <TextCountBox isVisible={isTextCountVisible}>
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
  border: 1px solid ${({ theme }) => theme.palette.bgColor};
  :focus-within {
    background-color: ${({ theme }) => theme.palette.bgColor};
    border: 1px solid ${({ theme }) => theme.palette.borderColor};
  }
`;

const TextCountBox = styled.div<TextCountBoxProps>`
  ${({ isVisible }) => !isVisible && 'visibility:hidden;'}
  position: absolute;
  bottom: 4rem;
  right: 2rem;
`;
