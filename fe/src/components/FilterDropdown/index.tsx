import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import DropdownModal from '@components/FilterDropdown/DropdownModal';
import mixin from '@style/mixin';
import { checkIfUrlHasQuery, makeUrlQuery } from '@util/queryParser';

//  type에 STATUS_CHANGE가 들어간 이상 컴포넌트 이름이 필터드롭다운이 아니라 그냥 드롭다운이 되어야할거 같음
type FilterDropdownType = 'ISSUE' | 'STATUS_CHANGE';

type PropsType = {
  title: string;
  type: FilterDropdownType;
  spacing?: string;
};

export default function FilterDropDown({ title, type, spacing }: PropsType) {
  const navigate = useNavigate();
  const [isModalOpened, setIsModalOpened] = useState(false);

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
          menus={getStaticMenus(type)}
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

function getStaticMenus(type) {
  switch (type) {
    case 'ISSUE':
      return [
        {
          name: '열린 이슈',
          queryKey: 'status',
          queryValue: 'open',
        },
        {
          name: '닫힌 이슈',
          queryKey: 'status',
          queryValue: 'closed',
        },
      ];
    case 'STATUS_CHANGE':
      return [
        {
          name: '선택한 이슈 열기',
          queryKey: '',
          queryValue: '',
        },
        {
          name: '선택한 이슈 닫기',
          queryKey: '',
          queryValue: '',
        },
      ];
    default:
      throw Error('get menus something wrong');
  }
}
