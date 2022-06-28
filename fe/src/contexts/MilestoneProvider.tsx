import { useContext, createContext, ReactNode, useMemo } from 'react';

import useAxios from '@hooks/useAxios';
import { MilestoneType } from '@type/types';

interface IMilestoneResponse {
  countOfOpenMilestones: number;
  countOfClosedMilestones: number;
  milestones: MilestoneType[];
}
const MilestoneContext = createContext<{
  data?: IMilestoneResponse;
  refetch: () => void;
} | null>(null);

export function MilestoneProvider({ children }) {
  const { state, refetch } = useAxios<IMilestoneResponse>('/api/milestones');

  const milestoneContextValue = useMemo(
    () => ({ data: state.data, refetch }),
    [state],
  );

  return (
    <MilestoneContext.Provider value={milestoneContextValue}>
      {children}
    </MilestoneContext.Provider>
  );
}

export function useMilestoneContext() {
  const milestoneState = useContext(MilestoneContext);
  if (!milestoneState) throw new Error('Cannot find Milestone Provider');
  return milestoneState;
}
