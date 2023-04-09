import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type TRootStack = {
  Home: any;
  Onboarding: any;
  Schedule: any;
};

export type TNavigationProps<T extends ObjectParams> =
  NativeStackNavigationProp<NavigationStack<T>>;

export type TNavigationScreensProps<
  O extends ObjectParams,
  S extends ScreensName,
> = NativeStackScreenProps<NavigationStack<O>, S>;

type ObjectParams = Record<string, unknown>;
type ScreensName = keyof TRootStack;

type NavigationStack<T> = {
  [_Property in keyof TRootStack]: T;
};
