import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import DropdownModal from '@components/FilterDropdown/DropdownModal';
import useAxios from '@hooks/useAxios';
import mixin from '@style/mixin';
import { ModalContentType } from '@type/types';
import { checkIfUrlHasQuery, makeUrlQuery } from '@util/queryParser';

//  type에 STATUS_CHANGE가 들어간 이상 컴포넌트 이름이 필터드롭다운이 아니라 그냥 드롭다운이 되어야할거 같음
type FetchedFilterDropdownType = 'ASSIGNEE' | 'LABEL' | 'MILESTONE' | 'WRITER';

type PropsType = {
  title: string;
  type: FetchedFilterDropdownType;
  spacing?: string;
};

enum TypeEndPoint {
  ASSIGNEE = 'members',
  LABEL = 'labels',
  MILESTONE = 'milestones',
  WRITER = 'members',
}

export default function FetchedFilterDropDown({
  title,
  type,
  spacing,
}: PropsType) {
  const navigate = useNavigate();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { data: menus } = useAxios<ModalContentType[]>(
    `/api/${TypeEndPoint[type]}`,
    'get',
  );

  const handleClickModalItem = ({ queryKey, queryValue }) => {
    const isSelectedFilter = checkIfUrlHasQuery(queryKey, queryValue);
    const queryString = isSelectedFilter
      ? makeUrlQuery('delete', queryKey)
      : makeUrlQuery('set', queryKey, queryValue);
    navigate(`/?${queryString}`);
  };

  return (
    <DropdownContainer onClick={() => setIsModalOpened((prev) => !prev)}>
      <DropdownTitle spacing={spacing}>{title}</DropdownTitle>
      <DropdownIcon fontSize="small" />
      {isModalOpened && (
        <DropdownModal
          menus={getNewMenus(menus, type)}
          title={title}
          onClickModalItem={handleClickModalItem}
        />
      )}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  ${mixin.flexMixin({ align: 'center', justify: 'space-between' })}
  position: relative;
`;

const DropdownTitle = styled.span<{ spacing: string | undefined }>`
  margin-right: ${({ spacing }) => spacing};
`;

const DropdownIcon = styled(KeyboardArrowDownIcon)`
  color: ${({ theme }) => theme.palette.fontColor};
`;

function getNewMenus(menus, type) {
  switch (type) {
    case 'ASSIGNEE':
      return menus.map((menu) => ({
        ...menu,
        name: menu.identity,
        queryKey: 'assignee',
        queryValue: menu.identity,
      }));
    case 'WRITER':
      return menus.map((menu) => ({
        ...menu,
        name: menu.identity,
        queryKey: 'writer',
        queryValue: menu.identity,
      }));
    case 'LABEL':
      return menus.map((menu) => ({
        ...menu,
        queryKey: 'label',
        queryValue: menu.id,
      }));
    case 'MILESTONE':
      return menus.map((menu) => ({
        ...menu,
        name: menu.subject,
        queryKey: 'milestone',
        queryValue: menu.id,
      }));
    default:
      throw Error('get menus something wrong');
  }
}
