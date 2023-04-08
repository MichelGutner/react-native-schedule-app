import React from 'react';
import ReactNativeModal from 'react-native-modal';
import { STYLES_BOTTOM_SHEET } from './constants';
import { TBottomSheetProps } from './types';

const BottomSheet = ({
  children,
  isVisible,
  onPressBackDrop,
  testID,
  coverScreen = true,
  ...rest
}: TBottomSheetProps) => {
  return (
    <ReactNativeModal
      isVisible={isVisible}
      testID={testID}
      coverScreen={coverScreen}
      style={STYLES_BOTTOM_SHEET}
      onBackdropPress={onPressBackDrop}
      onBackButtonPress={onPressBackDrop}
      statusBarTranslucent
      useNativeDriver
      hideModalContentWhileAnimating
      useNativeDriverForBackdrop={true}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      backdropOpacity={0.3}
      {...rest}>
      {children}
    </ReactNativeModal>
  );
};

export { BottomSheet };
