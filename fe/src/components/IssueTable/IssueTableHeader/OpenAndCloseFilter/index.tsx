import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { useNavigate } from 'react-router-dom';

import Container from '@components/Container';
import IconTextBox from '@components/IconTextBox';
import { fontWeight } from '@constants/fonts';
import { makeUrlQuery } from '@util/queryParser';

type OpenAndCloseFilterProps = {
  countOfOpenIssues: number;
  countOfClosedIssues: number;
};

export default function OpenAndCloseFilter({
  countOfOpenIssues,
  countOfClosedIssues,
}: OpenAndCloseFilterProps) {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const clickedStatus = searchParams.get('status');
  const handleClickStatusTab = (status) => {
    const queryString = makeUrlQuery('set', 'status', status);
    navigate(`/?${queryString}`);
  };

  return (
    <Container
      width="260px"
      margin="0 30px"
      flexInfo={{ align: 'center', justify: 'space-between' }}
    >
      <IconTextBox
        Icon={<ErrorOutlineIcon fontSize="small" />}
        texts={['열린 이슈', `(${countOfOpenIssues})`]}
        fontWeight={
          clickedStatus === 'OPEN' ? fontWeight.bold : fontWeight.regular
        }
        spacing={0.375}
        onClick={() => handleClickStatusTab('OPEN')}
      />
      <IconTextBox
        Icon={<Inventory2OutlinedIcon fontSize="small" />}
        texts={['닫힌 이슈', `(${countOfClosedIssues})`]}
        fontWeight={
          clickedStatus === 'CLOSED' ? fontWeight.bold : fontWeight.regular
        }
        spacing={0.375}
        onClick={() => handleClickStatusTab('CLOSED')}
      />
    </Container>
  );
}
