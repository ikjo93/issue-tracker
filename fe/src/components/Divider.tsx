import styled, { css } from 'styled-components';

const Divider = styled.div<{
  length?: string;
  isVertical?: boolean;
  color?: string;
  margin?: string;
}>`
  opacity: 0.3;
  ${({
    isVertical = false,
    color = 'grey',
    length = '20px',
    margin = '0.7rem',
  }) =>
    isVertical
      ? css`
          height: ${length};
          border-left: 1px solid ${color};
          margin: 0 ${margin};
        `
      : css`
          width: ${length};
          border-bottom: 1px solid ${color};
          margin: ${margin} 0;
        `}
`;

export default Divider;
