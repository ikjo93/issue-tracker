import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import styled from 'styled-components';

import Container from '@components/Container';
import PopoverContainer from '@components/PopoverContainer';
import Assignees from '@components/SideMenu/Assignees';
import Labels from '@components/SideMenu/Labels';
import Milestone from '@components/SideMenu/Milestone';
import { MenuDispatchType, ModalTypes } from '@components/SideMenu/type';
import { LabelType, MemberType, MilestoneType } from '@type/types';

enum KoType {
  ASSIGNEE = '담당자',
  LABEL = '레이블',
  MILESTONE = '마일스톤',
}

const getSubBoxByType = (type, state) => {
  switch (type) {
    case 'ASSIGNEE':
      return <Assignees assignees={state} />;
    case 'LABEL':
      return <Labels labels={state} />;
    case 'MILESTONE':
      return <Milestone milestone={state} />;
    default:
      throw Error("Side Menu item's subbox is something wrong");
  }
};

export default function SideMenuItem({
  type,
  state,
  menus,
  menuDispatch,
}): React.ReactElement<{
  type: ModalTypes;
  state: MemberType[] | LabelType[] | MilestoneType;
  menuDispatch: MenuDispatchType;
}> {
  const title = `${KoType[type]} 추가`;

  const handleClickItemAddBtn = (menu) => {
    menuDispatch({ type, data: menu });
  };

  return (
    <Container padding="2.5rem 2rem">
      <Container
        position="relative"
        flexInfo={{ align: 'center', justify: 'space-between' }}
        mb="1rem"
      >
        <TypeTitle>{KoType[type]}</TypeTitle>
        <PopoverContainer
          left={-14}
          top={2}
          title={title}
          menus={getFormattedMenus(menus, type)}
          onClickPopoverItem={handleClickItemAddBtn}
        >
          <AddIcon sx={{ cursor: 'pointer' }} />
        </PopoverContainer>
      </Container>
      {getSubBoxByType(type, state)}
    </Container>
  );
}

const TypeTitle = styled.h6``;

function getFormattedMenus(menus, type) {
  switch (type) {
    case 'ASSIGNEE':
      return menus?.map((menu) => ({
        ...menu,
        name: menu.identity,
      }));
    case 'MILESTONE':
      return menus?.map((menu) => ({
        ...menu,
        name: menu.subject,
      }));
    default:
      return menus;
  }
}
