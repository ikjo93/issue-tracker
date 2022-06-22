import { Checkbox } from '@mui/material';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

import Container from '@components/Container';
import FetchedFilterDropDown from '@components/FetchedFilterDropdown';
import FilterDropDown from '@components/FilterDropdown';
import colors from '@constants/colors';
import mixin from '@style/mixin';

import OpenAndCloseFilter from './OpenAndCloseFilter';

interface IIssueTableHeaderProps {
  clickedStatusCnt: number;
  oppositeStatusCnt: number;
  toggleAllIssues: (isChecked: boolean) => void;
  checkedIssueIndices: boolean[];
}
export default function IssueTableHeader({
  clickedStatusCnt,
  oppositeStatusCnt,
  toggleAllIssues,
  checkedIssueIndices,
}: IIssueTableHeaderProps) {
  const handleCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
    toggleAllIssues(e.target.checked);
  };

  const isAllIssueChecked =
    checkedIssueIndices.length !== 0 &&
    checkedIssueIndices.every((isChecked) => isChecked);

  const isAnyIssueChecked = checkedIssueIndices.some((isChecked) => isChecked);

  return (
    <IssueTableHeaderContainer>
      <Container flexInfo={{ align: 'center' }}>
        <Checkbox
          checked={isAllIssueChecked}
          sx={{ color: colors.grey }}
          onChange={handleCheckboxClick}
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
            <FetchedFilterDropDown title="담당자" type="ASSIGNEE" />
            <FetchedFilterDropDown title="레이블" type="LABEL" />
            <FetchedFilterDropDown title="마일스톤" type="MILESTONE" />
            <FetchedFilterDropDown title="작성자" type="WRITER" />
          </>
        )}
      </Container>
    </IssueTableHeaderContainer>
  );
}

const IssueTableHeaderContainer = styled.div`
  ${mixin.flexMixin({ align: 'center', justify: 'space-between' })}
  height: 4rem;
  padding: 0 2rem 0 1.5rem;
  background-color: ${({ theme }) => theme.palette.lighterBgColor};
  border-radius: 1rem 1rem 0 0;
`;
