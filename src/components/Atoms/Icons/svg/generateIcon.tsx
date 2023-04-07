import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { TIconProps } from '../types';

const DEFAULT_BOX = '0 0 24 24';

export const SvgIconGenerator: React.FC<TIconProps> = React.memo(
  ({ d, fill = 'black', width = 24, height = 24, optionalPath }) => {
    return (
      <View style={{ width, height }}>
        <Svg viewBox={DEFAULT_BOX}>
          {optionalPath ? optionalPath : <Path d={d} fill={fill} />}
        </Svg>
      </View>
    );
  },
);
