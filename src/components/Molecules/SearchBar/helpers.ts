import { Animated } from 'react-native';

export const animationPosition = (
  componentToAnimation: Animated.ValueXY | Animated.Value,
  toValue: { x: number; y: number } | number,
) =>
  Animated.timing(componentToAnimation, {
    toValue: toValue,
    useNativeDriver: true,
  });
