import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

import colors from '@/constants/colors';

import Container from '../../Container';
import IconTextBox from '../../IconTextBox';

export default function OpenAndCloseFilter({
  openedIssuesCnt,
  closedIssuesCnt,
}: {
  openedIssuesCnt: number;
  closedIssuesCnt: number;
}) {
  return (
    <Container
      width="260px"
      margin="0 30px"
      flexInfo={['row', 'center', 'space-between', 'no-wrap']}
    >
      <IconTextBox
        Icon={<ErrorOutlineIcon fontSize="small" />}
        text={`열린 이슈(${openedIssuesCnt})`}
        color={colors.titleActive}
        spacing="5px"
      />
      <IconTextBox
        Icon={<Inventory2OutlinedIcon fontSize="small" />}
        text={`닫힌 이슈(${closedIssuesCnt})`}
        color={colors.titleActive}
        spacing="5px"
      />
    </Container>
  );
}
