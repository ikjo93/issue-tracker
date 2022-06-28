import { useContext, createContext, useMemo } from 'react';

import useAxios from '@hooks/useAxios';
import { MemberType } from '@type/types';

const MemberContext = createContext<{
  members?: MemberType[];
  refetch: () => void;
} | null>(null);

export function MemberProvider({ children }) {
  const { state, refetch } = useAxios<{
    members: MemberType[];
  }>('/api/members');

  const { data: { members } = {} } = state;
  const memberContextValue = useMemo(() => ({ members, refetch }), [state]);

  return (
    <MemberContext.Provider value={memberContextValue}>
      {children}
    </MemberContext.Provider>
  );
}

export function useMemberContext() {
  const memberState = useContext(MemberContext);
  if (!memberState) throw new Error('Cannot find MemberProvider');
  return memberState;
}
