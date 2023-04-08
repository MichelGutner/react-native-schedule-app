import { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';

export interface IButton extends Partial<TouchableOpacityProps> {
  onPress: () => void;
  label: string;
  testID?: string;
  labelColor?: string;
  style?: StyleProp<ViewStyle>;
}

export interface IButtonStylesProps {
  backgroundColor?: string;
}
