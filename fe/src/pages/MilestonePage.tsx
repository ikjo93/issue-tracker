import { useLocation, useOutletContext } from 'react-router-dom';

import CreateMilestoneBox from '@components/CreateMilestoneBox';
import MilestoneTable from '@components/MilestoneTable';
import useAxios from '@hooks/useAxios';
import { OutletContext } from '@pages/LabelMilestoneLayout';
import { IMilestoneResponse } from '@type/types';

export default function MilestonePage() {
  const [isAdding] = useOutletContext<OutletContext>();
  const { state, refetch } = useAxios<IMilestoneResponse>(
    `/api/milestones/${useLocation().search}`,
  );

  return (
    <>
      {isAdding && <CreateMilestoneBox milestonesRefetch={refetch} />}
      <MilestoneTable state={state} milestonesRefetch={refetch} />
    </>
  );
}
