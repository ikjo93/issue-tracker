import styled from 'styled-components';

import colors from '@/constants/colors';

import IssueTableBody from './IssueTableBody';
import IssueTableHeader from './IssueTableHeader';

const IssueTableContainer = styled.div`
  border: 1px solid ${colors.line};
  border-radius: 16px;
  overflow: hidden;
  margin-top: 24px;
`;

const issues = [
  {
    id: 1,
    number: 1,
    subject: '이슈1 제목',
    description: '이슈1 설명',
    writer: 'happyGyu',
    profileUrl: 'https://avatars.githubusercontent.com/u/95538993?v=4',
    status: 'open',
    createdDatetime: '2022-06-14T18:00:00',
    labels: [
      {
        id: 0,
        name: '라벨1',
      },
    ],
    milestones: [
      {
        id: 0,
        name: '마일스톤1',
      },
    ],
  },
  {
    id: 2,
    number: 2,
    subject: '이슈2 제목',
    description: '이슈2 설명',
    writer: 'happyGyu',
    profileUrl: 'https://avatars.githubusercontent.com/u/95538993?v=4',
    status: 'open',
    createdDatetime: '2022-06-14T19:00:00',
    labels: [
      {
        id: 0,
        name: '라벨1',
      },
      {
        id: 1,
        name: '라벨2',
      },
    ],
    milestones: [
      {
        id: 0,
        name: '마일스톤1',
      },
    ],
  },
];

export default function IssueTable() {
  return (
    <IssueTableContainer>
      <IssueTableHeader />
      <IssueTableBody issues={issues} />
    </IssueTableContainer>
  );
}
