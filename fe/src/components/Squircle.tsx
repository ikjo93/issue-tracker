import styled from 'styled-components';

import { widths, heights } from '@constants/lengths';
import { ITheme } from '@style/theme';

interface ISquircleProps {
  width?: number;
  height?: number;
  opacity?: number;
  backgroundColor?: string;
  theme: ITheme;
}

const Squircle = styled.div<ISquircleProps>`
  border-radius: 1.2rem;
  width: ${({ width }) => (width ? `${width}rem` : widths.squircle.default)};
  height: ${({ height }) =>
    height ? `${height}rem` : heights.squircle.default};
  opacity: ${({ opacity }) => opacity || 1};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.palette.default};
`;

export default Squircle;
