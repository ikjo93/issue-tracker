import styled, { css } from 'styled-components';

import mixin from '@style/mixin';

type FlexTypes = {
  direction?: 'row' | 'column';
  align?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  wrap?: 'wrap' | 'no-wrap';
};

const Container = styled.div<{
  width?: string;
  height?: string;
  margin?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  padding?: string;
  flexInfo?: FlexTypes;
  gap?: number;
}>`
  ${({ width, height, margin, mt, mb, ml, mr, padding, gap }) => css`
    width: ${width};
    height: ${height};
    margin: ${margin};
    ${mt && `margin-top: ${mt}`};
    ${mb && `margin-bottom: ${mb}`};
    ${ml && `margin-left: ${ml}`};
    ${mr && `margin-right: ${mr}`};
    padding: ${padding};
    gap: ${gap}rem;
  `}

  ${({ flexInfo }) => flexInfo && mixin.flexMixin(flexInfo)}
`;

export default Container;
