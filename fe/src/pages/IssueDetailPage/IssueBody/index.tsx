import styled from 'styled-components';

import ReplySection from '@pages/IssueDetailPage/IssueBody/ReplySection';
import SideMenuSection from '@pages/IssueDetailPage/IssueBody/SideMenuSection';

export default function IssueBody() {
  return (
    <IssueBodyGrid>
      <ReplySection />
      <SideMenuSection />
    </IssueBodyGrid>
  );
}

const IssueBodyGrid = styled.div`
  display: grid;
  grid-template-columns: 16fr 5fr;
  grid-gap: 1rem;
`;
