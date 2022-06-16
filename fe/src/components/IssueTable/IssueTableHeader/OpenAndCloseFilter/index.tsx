import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { useNavigate } from 'react-router-dom';

import Container from '@components/Container';
import IconTextBox from '@components/IconTextBox';
import { fontWeight } from '@constants/fonts';
import { handleUrlQuery } from '@util/urlParser';

export default function OpenAndCloseFilter({
  clickedStatusCnt,
  oppositeStatusCnt,
}: {
  clickedStatusCnt: number;
  oppositeStatusCnt: number;
}) {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const clickedStatus = searchParams.get('status');
  const handleClickStatusTab = (status) => {
    const queryString = handleUrlQuery('set', 'status', status);
    navigate(`/?${queryString}`);
  };

  const [openCnt, closedCnt] =
    clickedStatus === 'open'
      ? [clickedStatusCnt, oppositeStatusCnt]
      : [oppositeStatusCnt, clickedStatusCnt];

  return (
    <Container
      width="260px"
      margin="0 30px"
      flexInfo={{ align: 'center', justify: 'space-between' }}
    >
      <IconTextBox
        Icon={<ErrorOutlineIcon fontSize="small" />}
        texts={['열린 이슈', `(${openCnt})`]}
        fontWeight={
          clickedStatus === 'open' ? fontWeight.bold : fontWeight.regular
        }
        spacing={0.375}
        onClick={() => handleClickStatusTab('open')}
      />
      <IconTextBox
        Icon={<Inventory2OutlinedIcon fontSize="small" />}
        texts={['닫힌 이슈', `(${closedCnt})`]}
        fontWeight={
          clickedStatus === 'closed' ? fontWeight.bold : fontWeight.regular
        }
        spacing={0.375}
        onClick={() => handleClickStatusTab('closed')}
      />
    </Container>
  );
}
