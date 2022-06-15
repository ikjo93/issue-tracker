import styled from 'styled-components';

import FilterBar from '@/components/FilterBar';
import Header from '@/components/Header';
import IssueTable from '@/components/IssueTable';

const Body = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

export default function DefaultPage() {
  return (
    <>
      <Header />
      <Body>
        <FilterBar />
        <IssueTable />
      </Body>
    </>
  );
}
