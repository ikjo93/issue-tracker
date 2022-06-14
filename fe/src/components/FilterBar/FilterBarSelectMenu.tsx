import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from 'styled-components';

import colors from '@/constants/colors';
import { fontWeight } from '@/constants/fonts';

const SelectMenuContainer = styled.div`
  width: 128px;
  height: 100%;
  background: ${colors.bg};
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')};

  span {
    color: ${colors.label};
    margin-left: 24px;
    font-weight: ${fontWeight.bold};
  }
`;

const DropdownIcon = styled(KeyboardArrowDownIcon)`
  color: ${colors.label};
  margin-right: 12px;

  :hover {
    color: ${colors.body};
  }
`;

export default function FilterBarSelectMenu() {
  return (
    <SelectMenuContainer>
      <span>필터</span>
      <DropdownIcon />
    </SelectMenuContainer>
  );
}
