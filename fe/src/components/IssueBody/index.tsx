import { useReducer, useState } from 'react';
import styled from 'styled-components';

import CommentSection from '@components/IssueBody/CommentSection';
import SideMenu from '@components/SideMenu';
import { MenuStateType } from '@components/SideMenu/type';
import UserIcon from '@components/UserIcon';
import { MemberType } from '@type/types';
import sideMenuReducer from '@util/sideMenuReducer';

type CommentType = {
  id: number;
  writer: MemberType;
  createdTime: string;
  content: string;
};

export default function IssueBody() {
  const [menuState, menuDispatch] = useReducer(sideMenuReducer, initState);
  const [comments, setComments] = useState<CommentType[]>([]);

  return (
    <IssueBodyGrid>
      <UserIcon size="BIG" />
      <CommentSection comments={comments} />
      <SideMenu menuState={menuState} menuDispatch={menuDispatch} />
    </IssueBodyGrid>
  );
}

const initState: MenuStateType = {
  assignees: [
    {
      id: 1,
      identity: 'ikjo',
      name: '익조',
      profileUrl: 'https://avatars.githubusercontent.com/u/82401504?v=4',
    },
  ],
  labels: [
    {
      id: 3,
      name: 'bug',
      description: '버그 해결',
      color: '#ff7675',
    },
    {
      id: 2,
      name: 'fe',
      description: '프론트엔드 라벨',
      color: '#a29bfe',
    },
  ],
  milestone: {
    id: 1,
    subject: '이슈 트래커 서비스 구현',
    description: '프론트 및 백엔드 구현',
  },
};

const IssueBodyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 15fr 5fr;
  grid-gap: 1rem;
`;
