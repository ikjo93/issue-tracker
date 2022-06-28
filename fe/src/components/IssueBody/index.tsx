import styled from 'styled-components';

import ReplySection from '@components/IssueBody/ReplySection';

import SideMenuSection from './SideMenuSection';

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
