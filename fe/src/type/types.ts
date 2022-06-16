import { IPalette } from '@style/theme';

export type UserIconSizeType = 'BIG' | 'SMALL';
export type Test = string;

declare module 'styled-components' {
  interface DefaultTheme {
    palette: IPalette;
  }
}
