import styled from 'styled-components';

import FilterDropDown from '@components/FilterDropdown';
import mixin from '@style/mixin';

export default function FilterBarSelectMenu() {
  return (
    <SelectMenuContainer>
      <FilterDropDown title="필터" type="ISSUE" spacing="20px" />
    </SelectMenuContainer>
  );
}

const SelectMenuContainer = styled.div`
  ${mixin.flexMixin({ align: 'center', justify: 'center' })};
  width: 8rem;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.bgColor};
  border-radius: 0.75rem 0 0 0.75rem;
`;
