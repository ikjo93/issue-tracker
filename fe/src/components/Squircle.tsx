import styled from 'styled-components';

import { widths, heights } from '@constants/lengths';
import mixin from '@style/mixin';
import { ITheme } from '@style/theme';

interface ISquircleProps {
  width?: number | string;
  height?: number | string;
  unit?: string;
  opacity?: number;
  backgroundColor?: string;
  borderLineColor?: string;
  color?: string;
  theme: ITheme;
  borderRadius?: number;
}

const Squircle = styled.div<ISquircleProps>`
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}rem` : '1.2rem'};
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
    backgroundColor && `background-color: ${backgroundColor};`}
  ${({ borderLineColor }) =>
    borderLineColor && `border: 1px solid ${borderLineColor};`}
  ${({ color }) => color && `color:  ${color};`}
`;

export default Squircle;
