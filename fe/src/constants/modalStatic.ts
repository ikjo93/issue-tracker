import { ModalFilterType } from '@type/types';

export interface ModalIssueType extends ModalFilterType {
  name?: string;
}

export interface ModalStatusChangeType {
  name: string;
  targetStatus: string;
}

const modalStatic = {
  ISSUE: [
    {
      name: '열린 이슈',
      queryKey: 'status',
      queryValue: 'OPEN',
    },
    {
      name: '닫힌 이슈',
      queryKey: 'status',
      queryValue: 'CLOSED',
    },
  ],
  STATUS_CHANGE: [
    {
      name: '선택한 이슈 열기',
      targetStatus: 'OPEN',
    },
    {
      name: '선택한 이슈 닫기',
      targetStatus: 'CLOSED',
    },
  ],
};

export default modalStatic;
