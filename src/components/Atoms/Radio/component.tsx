import React from 'react';
import { RadioContainer, RadioContent } from './styles';
import { theme } from '@/design';

export const RadioBox = ({ isSelected }: { isSelected: boolean }) => {
  const borderColor = isSelected
    ? theme.colors.text.selected
    : theme.colors.text.white;
  return (
    <RadioContainer borderColor={borderColor} disabled={true}>
      {isSelected ? <RadioContent /> : <></>}
    </RadioContainer>
  );
};
