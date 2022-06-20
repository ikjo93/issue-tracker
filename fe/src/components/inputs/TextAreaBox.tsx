import { useReducer } from 'react';
import styled, { useTheme } from 'styled-components';

import Divider from '@components/Divider';
import FileInputBox from '@components/inputs/FileInputBox';
import Squircle from '@components/Squircle';

export default function TextAreaBox() {
  const theme = useTheme();
  const reducer = (state, action) => {
    switch (action.type) {
      case 'TEXT_AREA_FOCUS':
        return {
          backgroundColor: theme.palette.bgColor,
          borderLineColor: theme.palette.borderColor,
        };
      case 'TEXT_AREA_FOCUS_OUT':
        return {
          backgroundColor: theme.palette.darkerBgColor,
          borderLineColor: 'none',
        };
      default:
        throw Error("Textarea box's action type is wrong something");
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    backgroundColor: theme.palette.darkerBgColor,
    borderLineColor: 'none',
  });

  return (
    <Squircle
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
      <MyTextArea name="description" placeholder="본문" />
      <Divider margin="" lineStyle="dashed" />
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
