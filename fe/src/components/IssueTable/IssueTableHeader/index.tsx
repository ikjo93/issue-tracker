import { Checkbox } from '@mui/material';
import styled from 'styled-components';

import Container from '@/components/Container';
import FilterDropDown from '@/components/FilterDropDown';
import colors from '@/constants/colors';

import OpenAndCloseFilter from './OpenAndCloseFilter';

export default function IssueTableHeader() {
  return (
    <IssueTableHeaderContainer>
      <Container flexInfo={{ align: 'center' }}>
        <Checkbox />
        <OpenAndCloseFilter openedIssuesCnt={3} closedIssuesCnt={0} />
      </Container>
      <Container
        width="400px"
        flexInfo={{ align: 'center', justify: 'space-around' }}
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
  ${({ theme }) =>
    theme.mixin.flexMixin({ align: 'center', justify: 'space-between' })}
  height: 4rem;
  padding: 0 2rem;
  background: ${colors.bg};
`;