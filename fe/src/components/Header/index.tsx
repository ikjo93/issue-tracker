import styled from 'styled-components';

import Logo from '@components/Header/Logo';
import UserIcon from '@components/UserIcon';
import mixin from '@style/mixin';

export default function Header() {
  return (
    <HeaderContainer>
      <Logo page="main" />
      <UserIcon size="BIG" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  height: 6rem;
  padding: 0 5rem;
  ${mixin.flexMixin({ align: 'center', justify: 'space-between' })}
`;
