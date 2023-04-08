import React from 'react';
import { mappedComponent } from './stateful';
import { ITextProps } from './types';

export const Text = ({
  name,
  children,
  color,
  styles,
  numberOfLines,
}: ITextProps) => {
  const Component = mappedComponent[name];

  return (
    <Component numberOfLines={numberOfLines} style={[{ color }, styles]}>
      {children}
    </Component>
  );
};
