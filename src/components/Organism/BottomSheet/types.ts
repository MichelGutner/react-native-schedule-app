import { PropsWithChildren } from 'react';
import { ModalProps } from 'react-native-modal';

export type TBottomSheetProps = PropsWithChildren<{
  isVisible: boolean;
  testID?: string;
  onPressBackDrop?: () => void;
}> &
  Partial<ModalProps>;
