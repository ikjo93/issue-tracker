import { IPalette } from '@style/theme';

export type UserIconSizeType = 'BIG' | 'SMALL';

export type MemberType = {
  id: number;
  identity: string;
  name: string;
  profileUrl: string | null;
};

export type LabelType = {
  id: number;
  name: string;
  description?: string;
  color: string;
};

export type MilestoneType = {
  id: number;
  subject: string;
  description?: string;
};

export type ModalContentType = MemberType | LabelType | MilestoneType;
// 편의상 대충 만든 타입. 이후 서버에서 실제로 제공하는 데이터 구조에 따라 수정
export type IssueType = {
  id: number;
  number: number;
  subject: string;
  description: string;
  writer: string;
  profileUrl: string;
  status: string;
  createdDatetime: string;
  labels: LabelType[];
  milestone: MilestoneType;
  assignee: string[];
};

declare module 'styled-components' {
  interface DefaultTheme {
    palette: IPalette;
  }
}
