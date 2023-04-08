import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { TIconProps } from '../types';

const DEFAULT_VIEW_BOX = '0 0 24 24';

export const SvgIconGenerator: React.FC<TIconProps> = ({
  d,
  fill = 'black',
  width = 24,
  height = 24,
  optionalPath,
}) => {
  return (
    <View style={{ width, height }}>
      <Svg viewBox={DEFAULT_VIEW_BOX}>
        {optionalPath ? optionalPath : <Path d={d} fill={fill} />}
      </Svg>
    </View>
  );
};
