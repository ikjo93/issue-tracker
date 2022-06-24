import { useTheme } from 'styled-components';

import Divider from '@components/Divider';
import SideMenuItem from '@components/SideMenu/SideMenuItem';
import Squircle from '@components/Squircle';

export default function SideMenu({ menuState, menuDispatch }) {
  const theme = useTheme();

  return (
    <Squircle borderLineColor={theme.palette.borderColor} height="fit-content">
      <SideMenuItem
        type="ASSIGNEE"
        state={menuState.assignees}
        menuDispatch={menuDispatch}
      />
      <Divider margin="" />
      <SideMenuItem
        type="LABEL"
        state={menuState.labels}
        menuDispatch={menuDispatch}
      />
      <Divider margin="" />
      <SideMenuItem
        type="MILESTONE"
        state={menuState.milestone}
        menuDispatch={menuDispatch}
      />
    </Squircle>
  );
}
