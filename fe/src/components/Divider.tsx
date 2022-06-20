import styled, { css } from 'styled-components';

type LineStyleTypes = 'dashed' | 'solid' | 'dotted';

const Divider = styled.div<{
  length?: string;
  isVertical?: boolean;
  color?: string;
  margin?: string;
  opacity?: number;
  lineStyle?: LineStyleTypes;
}>`
  opacity: ${({ opacity }) => opacity || 0.3};
  ${({
    isVertical = false,
    color = 'grey',
    length = isVertical ? '1rem' : '100%',
    margin = '0.7rem',
    lineStyle = 'solid',
  }) =>
    isVertical
      ? css`
          height: ${length};
          border-left: 1px ${lineStyle} ${color};
          margin: 0 ${margin};
        `
      : css`
          width: ${length};
          border-bottom: 1px ${lineStyle} ${color};
          margin: ${margin} 0;
        `}
`;

export default Divider;
