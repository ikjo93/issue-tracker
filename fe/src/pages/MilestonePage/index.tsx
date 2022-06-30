import { useOutletContext } from 'react-router-dom';

import { OutletContext } from '@pages/common/layouts/LabelMilestoneLayout';
import CreateMilestoneBox from '@pages/MilestonePage/CreateMilestoneBox';
import MilestoneTable from '@pages/MilestonePage/MilestoneTable';

export default function MilestonePage() {
  const [isAdding] = useOutletContext<OutletContext>();

  return (
    <>
      {isAdding && <CreateMilestoneBox />}
      <MilestoneTable />
    </>
  );
}
