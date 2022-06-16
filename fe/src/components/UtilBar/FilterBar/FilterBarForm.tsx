import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import mixin from '@style/mixin';
import {
  convertInputValueToQuery,
  convertUrlToInputValue,
} from '@util/queryParser';

export default function FilterBarForm() {
  const initialInputValue = convertUrlToInputValue();
  const [inputValue, setInputValue] = useState(initialInputValue);
  const searchParams = useSearchParams();

  useEffect(() => {
    setInputValue(convertUrlToInputValue());
  }, [searchParams]);

  const navigate = useNavigate();
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const queryString = convertInputValueToQuery(inputValue);
    navigate(`/?${queryString}`);
  };

  return (
    <FilterBarFormContainer onSubmit={handleFilterSubmit}>
      <FilterBarFormIcon />
      <FilterBarInput
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
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
  color: ${({ theme }) => theme.palette.placeholder};
`;

const FilterBarInput = styled.input`
  width: 100%;
  height: 1.75rem;
  margin-left: 0.625rem;
  color: ${({ theme }) => theme.palette.placeholder};
  background-color: ${({ theme }) => theme.palette.darkerBgColor};
`;
