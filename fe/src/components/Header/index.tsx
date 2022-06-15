import styled from 'styled-components';

import Logo from '@components/Header/Logo';

import UserIcon from '../UserIcon';

const HeaderContainer = styled.div`
  height: 94px;
  padding: 0 80px;
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')}
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo page="main" />
      <UserIcon size="BIG" />
    </HeaderContainer>
  );
}
