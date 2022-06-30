import styled from 'styled-components';

import Divider from '@components/data-display/Divider';
import FilterBarForm from '@pages/DefaultPage/UtilBar/FilterBar/FilterBarForm';
import FilterBarSelectMenu from '@pages/DefaultPage/UtilBar/FilterBar/FilterBarSelectMenu';
import mixin from '@style/mixin';

export default function FilterBar() {
  return (
    <FilterBarContainer>
      <FilterBarSelectMenu />
      <Divider isVertical length="100%" margin="0" />
      <FilterBarForm />
    </FilterBarContainer>
  );
}

const FilterBarContainer = styled.div`
  ${mixin.flexMixin({ align: 'center', justify: 'flex-start' })};
  width: 37.5rem;
  height: 2.5rem;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 0.75rem;
`;
