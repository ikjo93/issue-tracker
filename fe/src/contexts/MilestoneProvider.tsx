import { useContext, createContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import useAxios from '@hooks/useAxios';
import { IMilestoneResponse } from '@type/types';

const MilestoneContext = createContext<{
  data?: IMilestoneResponse;
  refetch: () => void;
} | null>(null);

export function MilestoneProvider({ children }) {
  const { state, refetch } = useAxios<IMilestoneResponse>(
    `/api/milestones/${useLocation().search}`,
  );

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
