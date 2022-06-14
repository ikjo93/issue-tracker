import styled from 'styled-components';

const BoxContainer = styled.div<{ color: string; spacing: string }>`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center')}
  color: ${({ color }) => color};

  span {
    margin-left: ${({ spacing }) => spacing};
  }
`;

export default function IconTextBox({
  Icon,
  text,
  color,
  spacing,
}: {
  Icon: React.ReactNode;
  text: string;
  color: string;
  spacing: string;
}) {
  return (
    <BoxContainer color={color} spacing={spacing}>
      {Icon}
      <span>{text}</span>
    </BoxContainer>
  );
}
