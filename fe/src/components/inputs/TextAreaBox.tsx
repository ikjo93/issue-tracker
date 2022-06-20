import styled, { useTheme } from 'styled-components';

import Divider from '@components/Divider';
import FileInputBox from '@components/inputs/FileInputBox';
import Squircle from '@components/Squircle';

export default function TextAreaBox() {
  const theme = useTheme();

  return (
    <Squircle
      backgroundColor={theme.palette.darkerBgColor}
      width={100}
      height="auto"
      unit="%"
    >
      <MyTextArea name="description" placeholder="본문" />
      <Divider length="100%" margin="" lineStyle="dashed" />
      <FileInputBox />
    </Squircle>
  );
}

const MyTextArea = styled.textarea`
  width: 100%;
  min-height: 20rem;
  resize: vertical;
  padding: 1rem;
  padding-top: 1.5rem;
`;
