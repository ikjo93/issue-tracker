import styled from 'styled-components';

import mixin from '@style/mixin';

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
  ${mixin.flexMixin({ align: 'center', justify: 'flex-start' })};
  width: 37.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  overflow: hidden;
`;
