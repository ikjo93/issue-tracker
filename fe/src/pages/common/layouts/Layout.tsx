import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Container from '@components/layout/Container';
import { useHeaderDispatch, useHeaderState } from '@contexts/HeaderProvider';
import { LabelProvider } from '@contexts/LabelProvider';
import { MemberProvider } from '@contexts/MemberProvider';
import { MilestoneProvider } from '@contexts/MilestoneProvider';
import Header from '@pages/common/layouts/Header';

export default function Layout() {
  const { isDarkMode } = useHeaderState();
  const headerDispatch = useHeaderDispatch();

  const handleClickToggleButton = () => {
    headerDispatch({ type: 'THEME_TOGGLE' });
  };

  return (
    <LabelProvider>
      <MemberProvider>
        <MilestoneProvider>
          <Header />
          <Container padding="0 2rem">
            <Outlet />
            <ThemeToggleButton onClick={handleClickToggleButton}>
              {isDarkMode ? <WbSunnyIcon /> : <NightlightIcon />}
            </ThemeToggleButton>
          </Container>
        </MilestoneProvider>
      </MemberProvider>
    </LabelProvider>
  );
}

const ThemeToggleButton = styled.button`
  position: fixed;
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
