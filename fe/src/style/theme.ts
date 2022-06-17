import { css, FlattenSimpleInterpolation } from 'styled-components';

import colors from '@constants/colors';

interface IMixin {
  flexMixin: (object) => FlattenSimpleInterpolation;
}

interface IPalette {
  default: string;
  primary: string;
}

export interface ITheme {
  mixin: IMixin;
  palette: IPalette;
}

const mixin: IMixin = {
  flexMixin: ({
    direction = 'row',
    align = 'flex-start',
    justify = 'flex-start',
    wrap = 'no-wrap',
  }) => css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    flex-wrap: ${wrap};
  `,
};

const palette: IPalette = {
  default: colors.offWhite,
  primary: colors.blue,
};

const theme: ITheme = {
  mixin,
  palette,
};

export default theme;
