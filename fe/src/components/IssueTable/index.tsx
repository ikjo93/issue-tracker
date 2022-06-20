import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import useAxios from '@hooks/useAxios';

import IssueTableBody from './IssueTableBody';
import IssueTableHeader from './IssueTableHeader';

export default function IssueTable() {
  const [checkedIssueIndices, setCheckedIssueIndices] = useState<boolean[]>([]);
  const fetchUrl = `/api/issues/${useLocation().search}`;
  const { data: issueTableData } = useAxios(fetchUrl, 'get');

  useEffect(() => {
    if (!issueTableData) return;
    const initCheckedIssueIndices = new Array(
      issueTableData.issues.length,
    ).fill(false);
    setCheckedIssueIndices(initCheckedIssueIndices);
  }, [issueTableData]);

  const toggleAllIssues = (isChecked: boolean) => {
    setCheckedIssueIndices((prev) => prev.map((_) => isChecked));
  };

  const toggleOneIssue = (issueIdx: number, isChecked: boolean) => {
    setCheckedIssueIndices((prev) => {
      const newState = [...prev];
      newState[issueIdx] = !isChecked;
      return newState;
    });
  };

  return (
    issueTableData?.issues.length === checkedIssueIndices.length && (
      <IssueTableContainer>
        <IssueTableHeader
          clickedStatusCnt={issueTableData.issues.length}
          oppositeStatusCnt={issueTableData.oppositeStatusCnt}
          checkedIssueIndices={checkedIssueIndices}
          toggleAllIssues={toggleAllIssues}
        />
        <IssueTableBody
          issues={issueTableData.issues}
          checkedIssueIndices={checkedIssueIndices}
          toggleOneIssue={toggleOneIssue}
        />
      </IssueTableContainer>
    )
  );
}

const IssueTableContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 1rem;
  margin-top: 1.5rem;
`;
