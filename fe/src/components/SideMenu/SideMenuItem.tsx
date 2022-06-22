import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import styled from 'styled-components';

import Container from '@components/Container';
import DropdownModal from '@components/FilterDropdown/DropdownModal';
//  dropDownInfo는 임시. 나중에는 API서버에서 정보를 받아와 구성해야 함.
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

export default function SideMenuItem({
  type,
  opendModalType,
  onClickMenuItem,
}): React.ReactElement<{
  type: string;
  opendModalType: ModalTypes;
  onClickMenuItem: () => void;
}> {
  const { data: menus } = useAxios<ModalContentType[]>(
    `/api/${TypeEndPoint[type]}`,
    'get',
  );
  const title = `${KoType[type]} 추가`;

  return (
    <Container padding="2.5rem 2rem">
      <Container
        position="relative"
        flexInfo={{ align: 'center', justify: 'space-between' }}
        mb="1rem"
      >
        <TypeTitle>{KoType[type]}</TypeTitle>
        <AddIcon
          onClick={() => onClickMenuItem(type)}
          sx={{ cursor: 'pointer' }}
        />
        {opendModalType === type && (
          <DropdownModal left={4} top={5} title={title} menus={menus} />
        )}
      </Container>
      {getSubBoxByType(type)}
    </Container>
  );
}
const TypeTitle = styled.h6``;
