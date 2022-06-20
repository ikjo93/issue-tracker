import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import styled from 'styled-components';

import Container from '@components/Container';
import DropdownModal from '@components/FilterDropdown/DropdownModal';
//  dropDownInfo는 임시. 나중에는 API서버에서 정보를 받아와 구성해야 함.
import dropDownInfo from '@constants/temp';

type ModalTypes = 'ASSIGNEE' | 'LABEL' | 'MILESTONE';

enum KoType {
  ASSIGNEE = '담당자',
  LABEL = '레이블',
  MILESTONE = '마일스톤',
}

export default function SideMenuItem({
  type,
  opendModalType,
  onClickMenuItem,
}): React.ReactElement<{
  type: string;
  opendModalType: ModalTypes;
  onClickMenuItem: () => void;
}> {
  return (
    <ClickableContainer
      position="relative"
      flexInfo={{ align: 'center', justify: 'space-between' }}
      padding="3rem 2rem"
      onClick={() => onClickMenuItem(type)}
    >
      <TypeTitle>{KoType[type]}</TypeTitle>
      <AddIcon />
      {opendModalType === type && (
        <DropdownModal left={4} top={5} info={dropDownInfo[type]} />
      )}
    </ClickableContainer>
  );
}

const ClickableContainer = styled(Container)`
  cursor: pointer;
`;

const TypeTitle = styled.h6``;
