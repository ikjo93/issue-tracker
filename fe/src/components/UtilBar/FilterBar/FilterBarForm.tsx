import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

import colors from '@/constants/colors';

const FilterBarFormContainer = styled.form`
  background: ${colors.inputBg};
  width: 472px;
  height: 100%;
  padding: 6px 24px;
  border-left: 1px solid ${colors.line};
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'flex-start')};
`;

const FilterBarFormIcon = styled(SearchIcon)`
  color: ${colors.placeholder};
`;

const FilterBarInput = styled.input`
  margin-left: 10px;
  width: 100%;
  height: 28px;
  outline: none;
  border: 0;
  color: ${colors.placeholder};
  background: ${colors.inputBg};
`;

export default function FilterBarForm() {
  return (
    <FilterBarFormContainer>
      <FilterBarFormIcon />
      <FilterBarInput />
    </FilterBarFormContainer>
  );
}
