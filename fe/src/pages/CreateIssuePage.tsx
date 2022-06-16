import styled from 'styled-components';

import Header from '@components/Header';
import IssueTable from '@components/IssueTable';
import UtilBar from '@components/UtilBar';

const Body = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export default function CreateIssuePage() {
  return (
    <>
      <Header />
      <Body>
        <UtilBar />
        <IssueTable />
      </Body>
    </>
  );
}
