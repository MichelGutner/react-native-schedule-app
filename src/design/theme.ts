import { background } from './colors/background';
import { button } from './colors/buttons/index';
import { icon } from './colors/icons/index';
import { text } from './colors/texts/index';
import { size } from './fonts/size/index';
import { ITheme } from './types';

export const theme: ITheme = {
  colors: {
    background,
    button,
    icon,
    text,
  },
  font: size,
};