import styled from 'styled-components';

import FilterDropDown from '@components/FilterDropDown';
import colors from '@constants/colors';

export default function FilterBarSelectMenu() {
  return (
    <SelectMenuContainer>
      <FilterDropDown title="필터" spacing="20px" />
    </SelectMenuContainer>
  );
}

const SelectMenuContainer = styled.div`
  ${({ theme }) =>
    theme.mixin.flexMixin({ align: 'center', justify: 'center' })};
  width: 8rem;
  height: 100%;
  background: ${colors.bg};
`;

