import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

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
      flexInfo={['row', 'center', 'space-between', 'no-wrap']}
    >
      <IconTextBox
        Icon={<ErrorOutlineIcon fontSize="small" />}
        texts={['열린 이슈', String(openedIssuesCnt)]}
        color={colors.titleActive}
        spacing={0.375}
      />
      <IconTextBox
        Icon={<Inventory2OutlinedIcon fontSize="small" />}
        texts={['닫힌 이슈', String(closedIssuesCnt)]}
        color={colors.titleActive}
        spacing={0.375}
      />
    </Container>
  );
}
