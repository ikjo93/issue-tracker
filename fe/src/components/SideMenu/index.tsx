import { useTheme } from 'styled-components';

import Divider from '@components/Divider';
import SideMenuItem from '@components/SideMenu/SideMenuItem';
import Squircle from '@components/Squircle';

export default function SideMenu() {
  const theme = useTheme();
  return (
    <Squircle borderLineColor={theme.palette.borderColor} height="fit-content">
      <SideMenuItem type="담당자" />
      <Divider length="100%" margin="" />
      <SideMenuItem type="레이블" />
      <Divider length="100%" margin="" />
      <SideMenuItem type="마일스톤" />
    </Squircle>
  );
}
