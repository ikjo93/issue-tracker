import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import mixin from '@style/mixin';
import { checkIfUrlHasQuery, makeUrlQuery } from '@util/queryParser';

export default function ModalMenu({ modalContent }) {
  const { method, queryKey, queryValue, name } = modalContent;
  const isSelectedFilter = checkIfUrlHasQuery(queryKey, queryValue);

  const navigate = useNavigate();

  // 이전: 모달 메뉴 클릭하면 해당 url 을 만들어서 이동
  // 이후: 전달받은 callback 실행
  const handleMenuClick = () => {
    const queryString = isSelectedFilter
      ? makeUrlQuery('delete', queryKey)
      : makeUrlQuery(method, queryKey, queryValue);
    navigate(`/?${queryString}`);
  };

  return (
    <ModalMenuContainer onClick={handleMenuClick}>
      <span>{name}</span>
      {isSelectedFilter ? (
        <CheckCircleOutlineIcon />
      ) : (
        <RadioButtonUncheckedIcon />
      )}
    </ModalMenuContainer>
  );
}

const ModalMenuContainer = styled.div`
  ${mixin.flexMixin({ align: 'center', justify: 'space-between' })}
  width: 100%;
  height: 2.75rem;
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
  background: ${({ theme }) => theme.palette.contentColor};
  padding: 0 1rem;
`;
