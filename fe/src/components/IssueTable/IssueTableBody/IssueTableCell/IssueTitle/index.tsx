import ErrorIcon from '@mui/icons-material/Error';
import styled from 'styled-components';

import IconTextBox from '@components/IconTextBox';
import Label from '@components/Label';
import mixin from '@style/mixin';
import { LabelType } from '@type/types';

export default function IssueTitle({
  title,
  labels,
}: {
  title: string;
  labels: LabelType[];
}) {
  return (
    <IssueTitleContainer>
      <IconTextBox
        Icon={<ErrorIcon color="primary" fontSize="small" />}
        texts={[title]}
        spacing={0.75}
      />
      <LabelContainer>
        {labels.map((label) => (
          <Label
            key={label.id}
            text={label.name}
            color="white"
            bgColor={label.color}
          />
        ))}
      </LabelContainer>
    </IssueTitleContainer>
  );
}

const IssueTitleContainer = styled.div`
  ${mixin.flexMixin({ align: 'center' })}
  height: 2rem;
`;

const LabelContainer = styled.div`
  ${mixin.flexMixin({ align: 'center', justify: 'space-between' })}
  margin-left: 0.5rem;
  gap: 0.5rem;
`;
