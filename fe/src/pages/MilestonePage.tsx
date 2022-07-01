import { useOutletContext } from 'react-router-dom';

import CreateMilestoneBox from '@components/CreateMilestoneBox';
import MilestoneTable from '@components/MilestoneTable';
import { OutletContext } from '@pages/LabelMilestoneLayout';

export default function MilestonePage() {
  const [isAdding] = useOutletContext<OutletContext>();

  return (
    <>
      {isAdding && <CreateMilestoneBox />}
      <MilestoneTable />
    </>
  );
}
