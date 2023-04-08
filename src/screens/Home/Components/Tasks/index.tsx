import React from 'react';
import { HomeTaskContainer, TextView } from './styles';
import { RadioBox, Text } from '@/components';
import { theme } from '@/design';
import { formattedFullDateDay } from '@/utils';

export const HomeTask = ({ name, day }) => {
  return (
    <HomeTaskContainer>
      <RadioBox isSelected={true} />
      <TextView>
        <Text name="SubTitle" color={theme.colors.text.white}>
          {name}
        </Text>
        <Text name="Caption" color={theme.colors.text.grey}>
          {formattedFullDateDay(day)}
        </Text>
      </TextView>
    </HomeTaskContainer>
  );
};
