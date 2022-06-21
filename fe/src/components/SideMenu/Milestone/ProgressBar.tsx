import styled from 'styled-components';

import colors from '@constants/colors';

interface IProcessing {
  percent: number;
}

export default function ProgressBar({ percent }) {
  return (
    <ProgressWrapper>
      <Progressing percent={percent} />
    </ProgressWrapper>
  );
}

const ProgressWrapper = styled.div`
  width: 100%;
  height: 1rem;
  border-radius: 1rem;
  background-color: ${colors.grey};
`;

const Progressing = styled.div<IProcessing>`
  width: ${({ percent }) => `${percent}%`};
  height: 1rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.palette.primary};
`;
