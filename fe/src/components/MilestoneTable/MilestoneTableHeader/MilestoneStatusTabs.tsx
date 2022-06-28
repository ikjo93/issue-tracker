import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import Container from '@components/Container';
import IconTextBox from '@components/IconTextBox';
import colors from '@constants/colors';
import { fontWeight } from '@constants/fonts';
import { useMilestoneContext } from '@contexts/MilestoneProvider';
import { makeUrlQuery } from '@util/queryParser';

interface StatusTabsProps {
  countOfOpenMilestones?: number;
  countOfClosedMilestones?: number;
}

export default function MilestoneStatusTabs({
  countOfOpenMilestones,
  countOfClosedMilestones,
}: StatusTabsProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const clickedStatus = searchParams.get('status') || 'OPEN';

  const handleClickStatusTab = (status) => {
    const queryString = makeUrlQuery('set', 'status', status);
    navigate(`/list/milestone/?${queryString}`);
  };

  return (
    <Container
      width="100%"
      margin="0 30px"
      flexInfo={{ align: 'center' }}
      gap={1}
    >
      <IconTextBox
        Icon={<SignpostOutlinedIcon fontSize="small" />}
        texts={['열린 마일스톤', `(${countOfOpenMilestones})`]}
        fontWeight={
          clickedStatus === 'OPEN' ? fontWeight.bold : fontWeight.regular
        }
        color={
          clickedStatus === 'OPEN' ? theme.palette.fontColor : colors.grey4
        }
        spacing={0.375}
        onClick={() => handleClickStatusTab('OPEN')}
      />
      <IconTextBox
        Icon={<Inventory2OutlinedIcon fontSize="small" />}
        texts={['닫힌 마일스톤', `(${countOfClosedMilestones})`]}
        fontWeight={
          clickedStatus === 'CLOSED' ? fontWeight.bold : fontWeight.regular
        }
        color={
          clickedStatus === 'CLOSED' ? theme.palette.fontColor : colors.grey4
        }
        spacing={0.375}
        onClick={() => handleClickStatusTab('CLOSED')}
      />
    </Container>
  );
}
