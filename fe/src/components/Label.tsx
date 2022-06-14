import styled, { css } from 'styled-components';

const LabelContainer = styled.div<{ color: string; bgColor: string }>`
  padding: 4px 16px;
  border-radius: 30px;
  font-size: 0.75rem;
  width: fit-content;
  ${({ color, bgColor }) => css`
    color: ${color};
    background: ${bgColor};
  `}
`;

type PropsType = {
  text: string;
  color: string;
  bgColor: string;
};

export default function Label({ text, color, bgColor }: PropsType) {
  return (
    <LabelContainer color={color} bgColor={bgColor}>
      {text}
    </LabelContainer>
  );
}
