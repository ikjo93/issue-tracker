import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { useHeaderDispatch, useHeaderState } from '@contexts/HeaderProvider';

const ThemeToggleButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 6px 20px ${({ theme }) => `${theme.palette.reverseBgColor}33`};
  z-index: 9;
  background-color: ${({ theme }) => theme.palette.contentColor};
  color: ${({ theme }) => theme.palette.fontColor};
  transition: background-color 0.2s, color 0.2s;
  :hover {
    background-color: ${({ theme }) => theme.palette.reverseBgColor};
    color: ${({ theme }) => theme.palette.bgColor};
  }
`;

export default function Layout() {
  const { isDark } = useHeaderState();
  const headerDispatch = useHeaderDispatch();

  const handleClickToggleButton = () => {
    headerDispatch({ type: 'THEME_TOGGLE' });
  };

  return (
    <>
      <Outlet />
      <ThemeToggleButton onClick={handleClickToggleButton}>
        {isDark ? <WbSunnyIcon /> : <NightlightIcon />}
      </ThemeToggleButton>
    </>
  );
}
