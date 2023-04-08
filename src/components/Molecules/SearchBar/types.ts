import { TextInputProps, TextStyle } from 'react-native';

export interface ISearchBar extends TextInputProps {
  leftIcon?: JSX.Element;
  leftIconColor?: string;
  leftIconSize?: number;
  textStyle?: TextStyle;
}
