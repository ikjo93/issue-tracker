import styled, { useTheme } from 'styled-components';

import Squircle from '@components/Squircle';

export default function InputBox() {
  const theme = useTheme();

  return (
    <Squircle
      backgroundColor={theme.palette.darkerBgColor}
      width={100}
      unit="%"
    >
      <MyInput name="subject" placeholder="제목" />
    </Squircle>
  );
}

const MyInput = styled.input`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.palette.fontColor};
  background-color: ${({ theme }) => theme.palette.darkerBgColor};
  padding: 0rem 1rem;
`;
