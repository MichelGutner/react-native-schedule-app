import React from 'react';
import { IIcon } from '../types';
import { SvgIconGenerator } from './generateIcon';
import { uniquePathSvg } from './path';
import { createIconMultiplePaths } from './multiplePaths';

export const Icon: React.FC<IIcon> = ({ color = 'black', name, size = 24 }) => {
  const type = name as never;

  return (
    <SvgIconGenerator
      optionalPath={createIconMultiplePaths(color, type)}
      d={uniquePathSvg[type]}
      fill={color}
      height={size}
      width={size}
      key={`svg-${name}`}
    />
  );
};
