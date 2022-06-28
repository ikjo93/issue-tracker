import { useOutletContext } from 'react-router-dom';

import CreateLabelBox from '@components/CreateLabelBox';
import MilestoneTable from '@components/MilestoneTable';
import { OutletContext } from '@pages/LabelMilestoneLayout';

export default function MilestonePage() {
  const [isAdding] = useOutletContext<OutletContext>();

  return (
    <>
      {isAdding && <CreateLabelBox />}
      <MilestoneTable />
    </>
  );
}
