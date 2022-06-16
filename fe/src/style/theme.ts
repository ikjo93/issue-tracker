import { DefaultTheme } from 'styled-components';

import colors from '@constants/colors';

export interface IPalette {
  default: string;
  primary: string;
  warning: string;
  bgColor: string;
  fontColor: string;
  borderColor: string;
  contentColor: string;
  reverseBgColor: string;
  lighterBgColor: string;
  darkerBgColor: string;
}

export interface ITheme extends DefaultTheme {
  palette: IPalette;
}

const darkPalette: IPalette = {
  default: colors.offWhite,
  primary: colors.blue,
  warning: colors.red,
  bgColor: colors.black,
  fontColor: colors.white1,
  borderColor: colors.grey2,
  reverseBgColor: colors.white1,
  contentColor: colors.black,
  lighterBgColor: colors.black3,
  darkerBgColor: colors.black2,
};

const lightPalette: IPalette = {
  default: colors.offWhite,
  primary: colors.blue,
  warning: colors.red,
  bgColor: colors.white1,
  fontColor: colors.black,
  borderColor: colors.grey1,
  reverseBgColor: colors.black,
  contentColor: colors.white,
  lighterBgColor: colors.white1,
  darkerBgColor: colors.white3,
};

const darkTheme: ITheme = {
  palette: darkPalette,
};

const lightTheme: ITheme = {
  palette: lightPalette,
};

export { darkTheme, lightTheme };
