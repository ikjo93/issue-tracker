import styled from 'styled-components';

import colors from '@/constants/colors';

const BoxContainer = styled.div<{
  color?: string;
  spacing?: string;
  margin?: string;
}>`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center')}
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};

  span {
    margin-left: ${({ spacing }) => spacing};
  }
`;

type TIconTextBoxProps = {
  Icon?: React.ReactNode;
  text?: string;
  color?: string;
  spacing?: string;
  margin?: string;
};

export default function IconTextBox({
  Icon,
  text,
  color,
  spacing,
  margin,
}: TIconTextBoxProps) {
  return (
    <BoxContainer color={color} spacing={spacing} margin={margin}>
      {Icon}
      <span>{text}</span>
    </BoxContainer>
  );
}


