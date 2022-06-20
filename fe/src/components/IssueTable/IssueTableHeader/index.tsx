import { Checkbox } from '@mui/material';
import { MouseEvent } from 'react';
import styled from 'styled-components';

import Container from '@components/Container';
import FilterDropDown from '@components/FilterDropdown';
import colors from '@constants/colors';
import mixin from '@style/mixin';

import OpenAndCloseFilter from './OpenAndCloseFilter';

interface IIssueTableHeaderProps {
  clickedStatusCnt: number;
  oppositeStatusCnt: number;
  toggleAllIssues: (boolean) => void;
  checkedIssueIndices: boolean[];
}
export default function IssueTableHeader({
  clickedStatusCnt,
  oppositeStatusCnt,
  toggleAllIssues,
  checkedIssueIndices,
}: IIssueTableHeaderProps) {
  const handleCheckboxClick = (e: MouseEvent) => {
    toggleAllIssues(e.target.checked);
  };

  const isAllIssueChecked = !checkedIssueIndices.some(
    (isChecked) => !isChecked,
  );

  const isAnyIssueChecked = checkedIssueIndices.some((isChecked) => isChecked);

  return (
    <IssueTableHeaderContainer>
      <Container flexInfo={{ align: 'center' }}>
        <Checkbox
          checked={isAllIssueChecked}
          sx={{ color: colors.grey }}
          onClick={handleCheckboxClick}
        />
        <OpenAndCloseFilter
          clickedStatusCnt={clickedStatusCnt}
          oppositeStatusCnt={oppositeStatusCnt}
        />
      </Container>
      <Container
        gap={2}
        flexInfo={{ align: 'center', justify: 'space-around' }}
      >
        {isAnyIssueChecked ? (
          <FilterDropDown title="상태수정" type="STATUS_CHANGE" />
        ) : (
          <>
            <FilterDropDown title="담당자" type="ASSIGNEE" />
            <FilterDropDown title="레이블" type="LABEL" />
            <FilterDropDown title="마일스톤" type="MILESTONE" />
            <FilterDropDown title="작성자" type="WRITER" />
          </>
        )}
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
