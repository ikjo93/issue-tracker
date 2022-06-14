import styled from 'styled-components';

import colors from '@/constants/colors';

import FilterDropDown from '../FilterDropDown';

const SelectMenuContainer = styled.div`
  width: 128px;
  height: 100%;
  background: ${colors.bg};
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')};
`;

export default function FilterBarSelectMenu() {
  return (
    <SelectMenuContainer>
      <FilterDropDown title="필터" spacing="20px" />
    </SelectMenuContainer>
  );
}
