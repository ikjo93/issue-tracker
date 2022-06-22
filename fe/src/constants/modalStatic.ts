import { ModalFilterType } from '@type/types';

export interface ModalIssueType extends ModalFilterType {
  name?: string;
}

export interface ModalStatusChangeType extends ModalFilterType {
  name?: string;
}

const modalStatic = {
  ISSUE: [
    {
      name: '열린 이슈',
      queryKey: 'status',
      queryValue: 'open',
    },
    {
      name: '닫힌 이슈',
      queryKey: 'status',
      queryValue: 'closed',
    },
  ],
  STATUS_CHANGE: [
    {
      name: '선택한 이슈 열기',
      queryKey: '',
      queryValue: '',
    },
    {
      name: '선택한 이슈 닫기',
      queryKey: '',
      queryValue: '',
    },
  ],
};

export default modalStatic;
