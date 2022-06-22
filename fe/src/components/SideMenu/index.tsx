import { useTheme } from 'styled-components';

import Divider from '@components/Divider';
import SideMenuItem from '@components/SideMenu/SideMenuItem';
import Squircle from '@components/Squircle';

export default function SideMenu() {
  const theme = useTheme();

  return (
    <Squircle borderLineColor={theme.palette.borderColor} height="fit-content">
      <SideMenuItem type="ASSIGNEE" />
      <Divider margin="" />
      <SideMenuItem type="LABEL" />
      <Divider margin="" />
      <SideMenuItem type="MILESTONE" />
    </Squircle>
  );
}
