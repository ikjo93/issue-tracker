import styled from 'styled-components';

import Divider from '@components/Divider';
import Header from '@components/Header';
import IssueBody from '@components/IssueBody';
import IssueHeader from '@components/IssueHeader';

export default function IssueDetailPage() {
  return (
    <>
      <Header />
      <Body>
        <IssueHeader />
        <Divider margin="2rem" />
        <IssueBody />
      </Body>
    </>
  );
}

const Body = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
