import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';
import styled from 'styled-components';

import IconTextBox from '@components/IconTextBox';
import colors from '@constants/colors';
import mixin from '@style/mixin';

export default function TagTab() {
  return (
    <Wrapper>
      <IconTextBox
        Icon={<LocalOfferOutlinedIcon />}
        texts={['레이블', '(3)']}
        spacing={0.625}
      />
      <BorderLine />
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
  border: 1px solid ${colors.line};
  border-radius: 0.75rem;
  padding: 0 0.5rem;
`;

const BorderLine = styled.div`
  width: 1px;
  height: 100%;
  background: ${colors.line};
`;
