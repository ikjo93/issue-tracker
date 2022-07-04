import styled from 'styled-components';

import IssueTable from '@pages/DefaultPage/IssueTable';
import UtilBar from '@pages/DefaultPage/UtilBar';

const Body = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export default function DefaultPage() {
  return (
    <Body>
      <UtilBar />
      <IssueTable />
    </Body>
  );
}
