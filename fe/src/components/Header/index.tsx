import styled from 'styled-components';

import Logo from '@components/Header/Logo';
import UserIcon from '@components/UserIcon';
import { useHeaderState } from '@contexts/HeaderProvider';
import mixin from '@style/mixin';

export default function Header() {
  const { userInfo } = useHeaderState();

  return (
    <HeaderContainer>
      <Logo page="main" />
      <UserIcon size="BIG" imgUrl={userInfo?.profileUrl} />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  height: 6rem;
  padding: 0 5rem;
  ${mixin.flexMixin({ align: 'center', justify: 'space-between' })}
`;
