import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import styled from 'styled-components';

import Container from '@components/Container';
import PopoverContainer from '@components/PopoverContainer';
import Assignees from '@components/SideMenu/Assignees';
import Labels from '@components/SideMenu/Labels';
import Milestone from '@components/SideMenu/Milestone';
import useAxios from '@hooks/useAxios';
import { ModalContentType } from '@type/types';

type ModalTypes = 'ASSIGNEE' | 'LABEL' | 'MILESTONE';

enum KoType {
  ASSIGNEE = '담당자',
  LABEL = '레이블',
  MILESTONE = '마일스톤',
}

enum TypeEndPoint {
  ASSIGNEE = 'members',
  LABEL = 'labels',
  MILESTONE = 'milestones',
}

const getSubBoxByType = (type) => {
  switch (type) {
    case 'ASSIGNEE':
      return <Assignees />;
    case 'LABEL':
      return <Labels />;
    case 'MILESTONE':
      return <Milestone />;
    default:
      throw Error("Side Menu item's subbox is something wrong");
  }
};

export default function SideMenuItem({ type }): React.ReactElement<{
  type: string;
  opendModalType: ModalTypes;
  onClickMenuItem?: () => void;
}> {
  const { data: menus } = useAxios<ModalContentType[]>(
    `/api/${TypeEndPoint[type]}`,
    'get',
  );
  const title = `${KoType[type]} 추가`;

  const handleClickModalMenu = (menu) => {
    console.log(menu);
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
          menus={menus}
          onClickModalItem={handleClickModalMenu}
        >
          <AddIcon sx={{ cursor: 'pointer' }} />
        </PopoverContainer>
      </Container>
      {getSubBoxByType(type)}
    </Container>
  );
}
const TypeTitle = styled.h6``;
