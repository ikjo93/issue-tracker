import styled from 'styled-components';

import Header from '@components/Header';
import IssueHeader from '@components/IssueHeader';

export default function IssueDetailPage() {
  return (
    <>
      <Header />
      <Body>
        <IssueHeader />
      </Body>
    </>
  );
}

const Body = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
