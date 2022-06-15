import { Checkbox } from '@mui/material';
import styled from 'styled-components';

import Container from '@/components/Container';
import FilterDropDown from '@/components/FilterDropDown';
import colors from '@/constants/colors';

import OpenAndCloseFilter from './OpenAndCloseFilter';

export default function IssueTableHeader() {
  return (
    <IssueTableHeaderContainer>
      <Container flexInfo={['row', 'center', 'flex-start', 'no-wrap']}>
        <Checkbox />
        <OpenAndCloseFilter openedIssuesCnt={3} closedIssuesCnt={0} />
      </Container>
      <Container
        width="400px"
        flexInfo={['row', 'center', 'space-around', 'no-wrap']}
      >
        <FilterDropDown title="담당자" />
        <FilterDropDown title="레이블" />
        <FilterDropDown title="마일스톤" />
        <FilterDropDown title="작성자" />
      </Container>
    </IssueTableHeaderContainer>
  );
}

const IssueTableHeaderContainer = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')}
  height: 4rem;
  padding: 0 2rem;
  background: ${colors.bg};
`;