import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

import colors from '@constants/colors';
import mixin from '@style/mixin';

export default function FilterBarForm() {
  return (
    <FilterBarFormContainer>
      <FilterBarFormIcon />
      <FilterBarInput />
    </FilterBarFormContainer>
  );
}

const FilterBarFormContainer = styled.form`
  ${mixin.flexMixin({ align: 'center', justify: 'flex-start' })};
  background-color: ${({ theme }) => theme.palette.darkerBgColor};
  width: 30rem;
  height: 100%;
  padding: 0.5rem 1.5rem;
  border-left: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 0 0.75rem 0.75rem 0;
`;

const FilterBarFormIcon = styled(SearchIcon)`
  color: ${colors.placeholder};
`;

const FilterBarInput = styled.input`
  width: 100%;
  height: 1.75rem;
  margin-left: 0.625rem;
  color: ${colors.placeholder};
  background-color: ${({ theme }) => theme.palette.darkerBgColor};
`;
