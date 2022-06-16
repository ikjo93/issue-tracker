import styled, { css } from 'styled-components';

const Divider = styled.div<{
  length?: string;
  isVertical?: boolean;
  color?: string;
}>`
  opacity: 0.3;
  ${({ isVertical = false, color = 'grey', length = '20px' }) =>
    isVertical
      ? css`
          height: ${length};
          border-left: 1px solid ${color};
          margin: 0 0.7rem;
        `
      : css`
          width: ${length};
          border-bottom: 1px solid ${color};
          margin: 0.7rem 0;
        `}
`;

export default Divider;
