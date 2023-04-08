import { TBackground } from './colors/background';
import { TButton } from './colors/buttons';
import { TIcon } from './colors/icons';
import { TText } from './colors/texts';
import { IFontSize } from './fonts';

export interface ITheme {
  colors: {
    background: TBackground;
    button: TButton;
    icon: TIcon;
    text: TText;
  };
  font: IFontSize;
}
