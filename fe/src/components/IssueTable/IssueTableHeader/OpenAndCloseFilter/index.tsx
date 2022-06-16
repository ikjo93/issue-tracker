import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { Link } from 'react-router-dom';

import Container from '@components/Container';
import IconTextBox from '@components/IconTextBox';
import colors from '@constants/colors';

interface IOpenAndCloseFilterProps {
  openedIssuesCnt: number;
  closedIssuesCnt: number;
}

export default function OpenAndCloseFilter({
  openedIssuesCnt,
  closedIssuesCnt,
}: IOpenAndCloseFilterProps) {
  return (
    <Container
      width="260px"
      margin="0 30px"
      flexInfo={{ align: 'center', justify: 'space-between' }}
    >
      <Link to="?q=is%3Aopen">
        <IconTextBox
          Icon={<ErrorOutlineIcon fontSize="small" />}
          texts={['열린 이슈', String(openedIssuesCnt)]}
          color={colors.titleActive}
          spacing={0.375}
        />
      </Link>
      <Link to="?q=is%3Aclosed">
        <IconTextBox
          Icon={<Inventory2OutlinedIcon fontSize="small" />}
          texts={['닫힌 이슈', String(closedIssuesCnt)]}
          color={colors.titleActive}
          spacing={0.375}
        />
      </Link>
    </Container>
  );
}
