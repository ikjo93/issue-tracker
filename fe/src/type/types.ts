import { IPalette } from '@style/theme';

export type UserIconSizeType = 'BIG' | 'SMALL';

type LabelType = {
  id: number;
  name: string;
  color: string;
};

type MilestoneType = {
  id: number;
  name: string;
};

export type IssueType = {
  id: number;
  number: number;
  subject: string;
  description: string;
  writer: string;
  profileUrl: string;
  status: 'open' | 'closed';
  createdDatetime: string;
  labels: LabelType[];
  milestone: MilestoneType;
};

declare module 'styled-components' {
  interface DefaultTheme {
    palette: IPalette;
  }
}

