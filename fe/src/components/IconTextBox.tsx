import styled from 'styled-components';

import mixin from '@style/mixin';

interface IIconTextBoxProps {
  Icon?: React.ReactNode;
  texts?: string[];
  color?: string;
  spacing?: number;
  fontSize?: number;
}

export default function IconTextBox({
  Icon,
  texts,
  color,
  spacing,
  fontSize,
}: IIconTextBoxProps) {
  return (
    <BoxContainer color={color} spacing={spacing} fontSize={fontSize}>
      {Icon}
      {texts?.map((text) => (
        <span>{text}</span>
      ))}
    </BoxContainer>
  );
}

const BoxContainer = styled.div<{
  color?: string;
  spacing?: number;
  fontSize?: number;
}>`
  ${mixin.flexMixin({ align: 'center' })}
  color: ${({ color }) => color};
  gap: ${({ spacing }) => spacing}rem;
  font-size: ${({ fontSize }) => fontSize}rem;
`;
