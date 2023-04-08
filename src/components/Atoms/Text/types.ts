import { TextStyle } from 'react-native';

export type TText = 'SubTitle' | 'Caption' | 'Header1' | 'Body2';

export interface ITextProps {
  name: TText;
  children: string;
  color?: string;
  styles?: TextStyle;
  numberOfLines?: number;
}
