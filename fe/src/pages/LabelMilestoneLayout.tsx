import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Body = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export default function LabelMilestoneLayout() {
  return (
    <Body>
      <Outlet />
    </Body>
  );
}
