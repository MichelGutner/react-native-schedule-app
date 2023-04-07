/* eslint-disable prettier/prettier */
import React from 'react';
import { IIcon } from '../types';
import { SvgIconGenerator } from './generateIcon';
import { path } from './path';
import { mappedOptionalIcons } from './optionalPaths';

export const Icon: React.FC<IIcon> = ({ color = 'black', name, size = 24 }) => {
  return (
    <SvgIconGenerator
      optionalPath={mappedOptionalIcons(color, name as any)}
      d={path[name]}
      fill={color}
      height={size}
      width={size}
      key={`svg-${name}`}
    />
  );
};
