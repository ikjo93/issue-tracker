import styled, { css } from 'styled-components';

type FlexTypes = [
  'row' | 'column',
  'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
  'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
  'wrap' | 'no-wrap',
];

const Container = styled.div<{
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  flexInfo?: FlexTypes;
}>`
  ${({ width, height, margin, padding }) => css`
    width: ${width};
    height: ${height};
    margin: ${margin};
    padding: ${padding};
  `}

  ${({ flexInfo, theme }) => flexInfo && theme.mixin.flexMixin(...flexInfo)}
`;

export default Container;
