import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

import mixin from '@style/mixin';

interface IIconTextBoxProps {
  Icon?: React.ReactNode;
  texts?: string[];
  color?: string;
  spacing?: number;
  fontSize?: number;
  fontWeight?: number;
  onClick?: () => void;
}

export default function IconTextBox({
  Icon,
  texts,
  color,
  spacing,
  fontSize,
  fontWeight,
  onClick,
}: IIconTextBoxProps) {
  return (
    <BoxContainer
      color={color}
      spacing={spacing}
      fontSize={fontSize}
      fontWeight={fontWeight}
      onClick={onClick}
    >
      {Icon}
      {texts?.map((text) => (
        <span key={uuid()}>{text}</span>
      ))}
    </BoxContainer>
  );
}

const BoxContainer = styled.div<{
  color?: string;
  spacing?: number;
  fontSize?: number;
  fontWeight?: number;
}>`
  ${mixin.flexMixin({ align: 'center' })}
  color: ${({ color }) => color};
  gap: ${({ spacing }) => spacing}rem;
  font-size: ${({ fontSize }) => fontSize}rem;
  font-weight: ${({ fontWeight }) => fontWeight};
`;
