import { useOutletContext } from 'react-router-dom';

import { OutletContext } from '@pages/common/layouts/LabelMilestoneLayout';
import CreateLabelBox from '@pages/LabelPage/CreateLabelBox';
import LabelTable from '@pages/LabelPage/LabelTable';

export default function LabelPage() {
  const [isAdding] = useOutletContext<OutletContext>();

  return (
    <>
      {isAdding && <CreateLabelBox />}
      <LabelTable />
    </>
  );
}
