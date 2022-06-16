import { DefaultTheme } from 'styled-components';

import colors from '@constants/colors';

export interface IPalette {
  default: string;
  primary: string;
  bgColor: string;
}

export interface ITheme extends DefaultTheme {
  palette: IPalette;
}

const palette: IPalette = {
  default: colors.offWhite,
  primary: colors.blue,
  bgColor: colors.white2,
};

const theme: ITheme = {
  palette,
};

export default theme;
