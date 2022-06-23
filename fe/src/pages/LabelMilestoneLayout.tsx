import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import CancelButton from '@components/UtilBar/CancleButton';
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
  const [isAdding, setIsAdding] = useState(false);

  return (
    <Body>
      <Nav>
        <TagTab activeTab={activeTab} />
        {isAdding ? (
          <CancelButton
            label="취소"
            onClick={() => {
              setIsAdding(false);
            }}
          />
        ) : (
          <NewButton
            label="추가"
            onClick={() => {
              setIsAdding(true);
            }}
          />
        )}
      </Nav>
      <Outlet context={isAdding} />
    </Body>
  );
}

const Nav = styled.nav`
  ${mixin.flexMixin({ justify: 'space-between' })}
`;
