import LabelTable from '@components/LabelTable';
import useAxios from '@hooks/useAxios';
import { LabelType } from '@type/types';

export default function LabelPage() {
  const { data: labels } = useAxios<LabelType[]>('/api/labels');
  return <LabelTable labels={labels} />;
}
