import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';
import styled from 'styled-components';

import Divider from '@components/Divider';
import IconTextBox from '@components/IconTextBox';
import mixin from '@style/mixin';

export default function TagTab() {
  return (
    <Wrapper>
      <IconTextBox
        Icon={<LocalOfferOutlinedIcon />}
        texts={['레이블', '(3)']}
        spacing={0.625}
      />
      <Divider isVertical length="100%" margin="0" />
      <IconTextBox
        Icon={<SignpostOutlinedIcon />}
        texts={['마일스톤', '(2)']}
        spacing={0.625}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mixin.flexMixin({ align: 'center', justify: 'space-around' })};
  width: 20rem;
  height: 2.5rem;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 0.75rem;
  padding: 0 0.5rem;
`;

