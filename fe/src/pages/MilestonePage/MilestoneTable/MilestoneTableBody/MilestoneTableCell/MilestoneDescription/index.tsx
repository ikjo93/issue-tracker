import styled from 'styled-components';

import IconTextBox from '@components/data-display/IconTextBox';
import colors from '@constants/colors';
import mixin from '@style/mixin';

export default function MilestoneDescription({
  description,
}): React.ReactElement<{ description: string }> {
  return (
    <Wrapper>
      <IconTextBox
        color={colors.grey4}
        texts={[description]}
        cursor="default"
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  ${mixin.flexMixin({ align: 'center' })}
  height: 1.75rem;
  gap: 1rem;
  color: ${colors.grey4};
`;
