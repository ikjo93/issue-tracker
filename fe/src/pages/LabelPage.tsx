import { useOutletContext } from 'react-router-dom';

import CreateLabelBox from '@components/CreateLabelBox';
import LabelTable from '@components/LabelTable';
import useAxios from '@hooks/useAxios';
import { LabelType } from '@type/types';

export default function LabelPage() {
  const { data: labels } = useAxios<LabelType[]>('/api/labels');
  const isAdding = useOutletContext();

  return (
    <>
      {isAdding && <CreateLabelBox />}
      <LabelTable labels={labels} />
    </>
  );
}
