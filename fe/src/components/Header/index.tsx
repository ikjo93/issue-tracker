import styled from 'styled-components';

import colors from '@/constants/colors';
import { fontWeight, fontSize } from '@/constants/fonts';

import UserIcon from '../UserIcon';

const HeaderContainer = styled.div`
  height: 94px;
  padding: 0 80px;
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')}
`;

const Logo = styled.h1`
  color: ${colors.titleActive};
  font-weight: ${fontWeight.sBold};
  font-size: ${fontSize.large};
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>Issue Tracker</Logo>
      <UserIcon size="BIG" />
    </HeaderContainer>
  );
}
