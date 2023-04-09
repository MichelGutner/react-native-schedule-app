import { EIconName } from '@/components/atoms';
import { TextStyle } from 'react-native';
export interface IAccordion {
  title: string;
  onPress?: () => void;
  children: JSX.Element;
  isExpanded?: boolean;
  style?: TextStyle;
  iconType?: EIconName;
  rotationDeg?: number;
}
