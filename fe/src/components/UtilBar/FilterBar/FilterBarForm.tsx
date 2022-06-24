import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect, FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import mixin from '@style/mixin';
import {
  convertInputValueToQuery,
  convertUrlToInputValue,
} from '@util/queryParser';

const initialInputValue = convertUrlToInputValue();
export default function FilterBarForm() {
  const [inputValue, setInputValue] = useState(initialInputValue);
  const queryString = useLocation().search;
  const navigate = useNavigate();

  const handleFilterSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newQueryString = convertInputValueToQuery(inputValue);
    navigate(`/?${newQueryString}`);
  };

  useEffect(() => {
    setInputValue(convertUrlToInputValue());
  }, [queryString]);

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
