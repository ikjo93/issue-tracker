import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';

import IconTextBox from '@components/IconTextBox';
import colors from '@constants/colors';

export default function NewIssueButton() {
  return (
    <Wrapper>
      <IconTextBox Icon={<AddIcon />} text="이슈 작성" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')}
  width: 7.5rem;
  height: 2.5rem;
  color: ${colors.offWhite};
  background: ${colors.blue};
  border-radius: 0.75rem;
`;
