import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import LabelTableBody from '@components/LabelTable/LabelTableBody';
import LabelTableHeader from '@components/LabelTable/LabelTableHeader';
import useAxios from '@hooks/useAxios';
import { IssueType } from '@type/types';

type IssueTableDataType = {
  issues: IssueType[];
  countOfOpenIssues: number;
  countOfClosedIssues: number;
};

export default function LabelTable() {
  const fetchUrl = `/api/issues/${useLocation().search}`;
  const { data: issueTableData } = useAxios<IssueTableDataType>(fetchUrl);

  return issueTableData ? (
    <LabelTableContainer>
      <LabelTableHeader />
      <LabelTableBody />
    </LabelTableContainer>
  ) : null;
}

const LabelTableContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 1rem;
  margin-top: 1.5rem;
`;
