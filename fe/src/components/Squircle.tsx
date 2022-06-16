import styled from 'styled-components';

import { widths, heights } from '@constants/lengths';
import { ITheme } from '@style/theme';

interface ISquircleProps {
  width?: number | string;
  height?: number | string;
  unit?: string;
  opacity?: number;
  backgroundColor?: string;
  borderLineColor?: string;
  theme: ITheme;
}

const Squircle = styled.div<ISquircleProps>`
  border-radius: 1.2rem;
  width: ${({ width, unit }) =>
    typeof width === 'number'
      ? `${width}${unit || 'rem'}`
      : width || widths.squircle.default};
  height: ${({ height, unit }) =>
    typeof height === 'number'
      ? `${height}${unit || 'rem'}`
      : height || heights.squircle.default};
  opacity: ${({ opacity }) => opacity || 1};
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({ borderLineColor }) =>
    borderLineColor && `border: 1px solid ${borderLineColor}`}
`;

export default Squircle;
