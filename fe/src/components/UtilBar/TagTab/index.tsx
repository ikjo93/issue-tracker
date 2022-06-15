import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';
import styled from 'styled-components';

import Container from '@components/Container';
import IconTextBox from '@components/IconTextBox';
import colors from '@constants/colors';

export default function TagTab() {
  return (
    <Wrapper>
      <IconTextBox
        Icon={<LocalOfferOutlinedIcon />}
        text="레이블 (3)"
        spacing="0.625rem"
      />
      <BorderLine />
      <IconTextBox
        Icon={<SignpostOutlinedIcon />}
        text="마일스톤 (2)"
        spacing="0.625rem"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-around')};
  width: 20rem;
  height: 2.5rem;
  border: 1px solid ${colors.line};
  border-radius: 0.75rem;
`;

const BorderLine = styled.div`
  width: 1px;
  height: 100%;
  background: ${colors.line};
`;
