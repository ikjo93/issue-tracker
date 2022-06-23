import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import NewButton from '@components/UtilBar/NewButton';
import TagTab from '@components/UtilBar/TagTab';
import mixin from '@style/mixin';

const Body = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export default function LabelMilestoneLayout() {
  const location = useLocation();
  const activeTab = location.pathname.includes('label') ? 'label' : 'milestone';
  return (
    <Body>
      <Nav>
        <TagTab activeTab={activeTab} />
        <NewButton label="추가" linkto="/" />
      </Nav>
      <Outlet />
    </Body>
  );
}

const Nav = styled.nav`
  ${mixin.flexMixin({ justify: 'space-between' })}
`;
