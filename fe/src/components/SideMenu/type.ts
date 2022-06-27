import { Dispatch } from 'react';

import { LabelType, MemberType, MilestoneType } from '@type/types';

export type MenuStateType = {
  assignees: MemberType[];
  labels: LabelType[];
  milestone?: MilestoneType;
};

export type ActionType =
  | { type: 'ASSIGNEE'; data: MemberType }
  | { type: 'LABEL'; data: LabelType }
  | { type: 'MILESTONE'; data: MilestoneType }
  | { type: 'ALL'; data: MenuStateType };

export type MenuDispatchType = Dispatch<ActionType>;

export type ModalTypes = 'ASSIGNEE' | 'LABEL' | 'MILESTONE';
