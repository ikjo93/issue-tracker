import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { SyntheticEvent } from 'react';
import styled from 'styled-components';

import IconTextBox from '@components/IconTextBox';
import colors from '@constants/colors';
import mixin from '@style/mixin';

export default function CancelButton({
  label,
  onClick,
}: {
  label: string;
  onClick?: (event: Event | SyntheticEvent) => void;
}) {
  return (
    <button type="button" onClick={onClick}>
      <Wrapper>
        <IconTextBox
          Icon={<CancelOutlinedIcon />}
          texts={[label]}
          fontSize={0.75}
          spacing={0.3}
        />
      </Wrapper>
    </button>
  );
}

const Wrapper = styled.div`
  ${mixin.flexMixin({ align: 'center', justify: 'center' })}
  width: 7.5rem;
  height: 2.5rem;
  color: ${colors.blue};
  border: 2px solid ${colors.blue};
  border-radius: 0.75rem;
`;
