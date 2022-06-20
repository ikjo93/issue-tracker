import { Checkbox } from '@mui/material';
import styled from 'styled-components';

import Container from '@components/Container';
import FilterDropDown from '@components/FilterDropdown';
import colors from '@constants/colors';
import mixin from '@style/mixin';

import OpenAndCloseFilter from './OpenAndCloseFilter';

interface IIssueTableHeaderProps {
  clickedStatusCnt: number;
  oppositeStatusCnt: number;
}
export default function IssueTableHeader({
  clickedStatusCnt,
  oppositeStatusCnt,
}: IIssueTableHeaderProps) {
  return (
    <IssueTableHeaderContainer>
      <Container flexInfo={{ align: 'center' }}>
        <Checkbox sx={{ color: colors.grey }} />
        <OpenAndCloseFilter
          clickedStatusCnt={clickedStatusCnt}
          oppositeStatusCnt={oppositeStatusCnt}
        />
      </Container>
      <Container
        width="400px"
        flexInfo={{ align: 'center', justify: 'space-around' }}
      >
        <FilterDropDown title="담당자" type="ASSIGNEE" />
        <FilterDropDown title="레이블" type="LABEL" />
        <FilterDropDown title="마일스톤" type="MILESTONE" />
        <FilterDropDown title="작성자" type="WRITER" />
      </Container>
    </IssueTableHeaderContainer>
  );
}

const IssueTableHeaderContainer = styled.div`
  ${mixin.flexMixin({ align: 'center', justify: 'space-between' })}
  height: 4rem;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.palette.lighterBgColor};
  border-radius: 1rem 1rem 0 0;
`;
