import ErrorIcon from '@mui/icons-material/Error';
import styled from 'styled-components';

import IconTextBox from '@/components/IconTextBox';
import Label from '@/components/Label';
import colors from '@/constants/colors';

export default function IssueTitle({ title, labels }: any) {
  return (
    <IssueTitleContainer>
      <IconTextBox
        Icon={<ErrorIcon color="primary" fontSize="small" />}
        texts={[title]}
        spacing={0.75}
        color={colors.titleActive}
      />
      <LabelContainer>
        {labels.map((label) => (
          <Label text={label.name} color="white" bgColor="blue" />
        ))}
      </LabelContainer>
    </IssueTitleContainer>
  );
}

const IssueTitleContainer = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center')}
`;

const LabelContainer = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')}
  margin-left: 8px;
`;