import styled from 'styled-components';

import colors from '@/constants/colors';

import FilterBarForm from './FilterBarForm';
import FilterBarSelectMenu from './FilterBarSelectMenu';

const FilterBarContainer = styled.div`
  width: 600px;
  height: 40px;
  border-radius: 11px;
  border: 1px solid ${colors.line};
  overflow: hidden;
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'flex-start')};
`;

export default function FilterBar() {
  return (
    <FilterBarContainer>
      <FilterBarSelectMenu />
      <FilterBarForm />
    </FilterBarContainer>
  );
}
