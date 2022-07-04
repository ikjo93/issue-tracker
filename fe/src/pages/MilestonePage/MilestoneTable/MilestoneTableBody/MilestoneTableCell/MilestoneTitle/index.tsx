import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';
import styled from 'styled-components';

import IconTextBox from '@components/data-display/IconTextBox';
import colors from '@constants/colors';
import mixin from '@style/mixin';
import { MilestoneType } from '@type/types';

export default function MilestoneTitle({
  milestone,
}): React.ReactElement<{ milestone: MilestoneType }> {
  return (
    <MilestoneTitleContainer>
      <IconTextBox
        Icon={<SignpostOutlinedIcon color="primary" fontSize="small" />}
        texts={[milestone.subject]}
        spacing={0.75}
        cursor="default"
      />
      <IconTextBox
        Icon={<CalendarTodayIcon fontSize="small" />}
        texts={[milestone.endDate]}
        spacing={0.5}
        color={colors.grey4}
        cursor="default"
      />
    </MilestoneTitleContainer>
  );
}

const MilestoneTitleContainer = styled.div`
  ${mixin.flexMixin({ align: 'center' })}
  gap: 1rem;
  height: 2rem;
`;
