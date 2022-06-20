import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

//  dropDownInfo는 임시. 나중에는 API서버에서 정보를 받아와 구성해야 함.
import dropDownInfo from '@constants/temp';
import mixin from '@style/mixin';

import DropdownModal from './DropdownModal';

//  type에 STATUS_CHANGE가 들어간 이상 컴포넌트 이름이 필터드롭다운이 아니라 그냥 드롭다운이 되어야할거 같음
type PropsType = {
  title: string;
  type:
    | 'ISSUE'
    | 'ASSIGNEE'
    | 'LABEL'
    | 'MILESTONE'
    | 'WRITER'
    | 'STATUS_CHANGE';
  spacing?: string;
};

export default function FilterDropDown({ title, type, spacing }: PropsType) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <DropdownContainer onClick={() => setIsModalOpened((prev) => !prev)}>
      <DropdownTitle spacing={spacing}>{title}</DropdownTitle>
      <DropdownIcon fontSize="small" />
      {isModalOpened && <DropdownModal info={dropDownInfo[type]} />}
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
