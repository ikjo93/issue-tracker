import styled from 'styled-components';

import colors from '@constants/colors';

import FilterBarForm from './FilterBarForm';
import FilterBarSelectMenu from './FilterBarSelectMenu';

export default function FilterBar() {
  return (
    <FilterBarContainer>
      <FilterBarSelectMenu />
      <FilterBarForm />
    </FilterBarContainer>
  );
}

const FilterBarContainer = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'flex-start')};
  width: 37.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  border: 1px solid ${colors.line};
  overflow: hidden;
  margin-top: 2rem;
`;
