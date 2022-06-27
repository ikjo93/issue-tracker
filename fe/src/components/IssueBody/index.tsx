import styled from 'styled-components';

import CommentSection from '@components/IssueBody/CommentSection';
import UserIcon from '@components/UserIcon';

import SideMenuSection from './SideMenuSection';

export default function IssueBody() {
  return (
    <IssueBodyGrid>
      <UserIcon size="BIG" imgUrl="profileUrl" />
      <CommentSection />
      <SideMenuSection />
    </IssueBodyGrid>
  );
}

const IssueBodyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 15fr 5fr;
  grid-gap: 1rem;
`;
