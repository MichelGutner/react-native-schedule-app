import React from 'react';
import { RadioContainer, RadioContent } from './styles';

export const RadioBox = ({ isSelected }: { isSelected: boolean }) => {
  return (
    <RadioContainer disabled={true}>
      {isSelected ? <RadioContent /> : <></>}
    </RadioContainer>
  );
};
