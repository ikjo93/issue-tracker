import { useState } from 'react';
import { useTheme } from 'styled-components';

import Divider from '@components/Divider';
import SideMenuItem from '@components/SideMenu/SideMenuItem';
import Squircle from '@components/Squircle';

export default function SideMenu() {
  const theme = useTheme();
  const [opendModalType, setOpendModalType] = useState(null);

  const handleClickSideMenuItem = (type) => {
    setOpendModalType(type);
  };

  const handleClickModalAway = () => {
    if (opendModalType) {
      setOpendModalType(null);
    }
  };

  return (
    <Squircle
      borderLineColor={theme.palette.borderColor}
      height="fit-content"
      onClick={handleClickModalAway}
    >
      <SideMenuItem
        type="ASSIGNEE"
        opendModalType={opendModalType}
        onClickMenuItem={handleClickSideMenuItem}
      />
      <Divider margin="" />
      <SideMenuItem
        type="LABEL"
        opendModalType={opendModalType}
        onClickMenuItem={handleClickSideMenuItem}
      />
      <Divider margin="" />
      <SideMenuItem
        type="MILESTONE"
        opendModalType={opendModalType}
        onClickMenuItem={handleClickSideMenuItem}
      />
    </Squircle>
  );
}
