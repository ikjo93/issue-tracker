import styled from 'styled-components';

import UserIcon from '@components/UserIcon';
import colors from '@constants/colors';
import { fontWeight, fontSize } from '@constants/fonts';

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>Issue Tracker</Logo>
      <UserIcon size="BIG" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  height: 6rem;
  padding: 0 5rem;
  ${({ theme }) =>
    theme.mixin.flexMixin({ align: 'center', justify: 'space-between' })}
`;

const Logo = styled.h1`
  color: ${colors.titleActive};
  font-weight: ${fontWeight.sBold};
  font-size: ${fontSize.large};
`;
