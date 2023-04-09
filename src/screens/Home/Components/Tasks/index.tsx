import React from 'react';
import { HomeTaskContainer, TextView } from './styles';
import { RadioBox, Text } from '@/components';
import { theme } from '@/design';
import { formattedFullDateDay } from '@/utils';

export interface IHomeTask {
  item: any;
  onPress: (item: any) => void;
}

export const HomeTask = ({ item, onPress }: IHomeTask) => {
  const borderColor = item.isSelected
    ? theme.colors.icon.enabled
    : theme.colors.text.white;

  const handlePress = (item: any) => {
    onPress && onPress(item);
  };

  return (
    <HomeTaskContainer
      borderColor={borderColor}
      onPress={() => handlePress(item)}>
      <RadioBox isSelected={item?.isSelcted} />
      <TextView>
        <Text name="SubTitle" color={theme.colors.text.white}>
          {item.name}
        </Text>
        <Text name="Caption" color={theme.colors.text.grey}>
          {formattedFullDateDay(item.date)}
        </Text>
      </TextView>
    </HomeTaskContainer>
  );
};
