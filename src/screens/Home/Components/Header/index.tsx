import React from 'react';
import { HomeHeaderContainer } from './styles';
import { Icon, Text } from '@/components';
import { theme } from '@/design';
import { TouchableOpacity } from 'react-native';
import { IHomeHeader } from './types';

export const HomeHeader = ({ date, onPress, iconColor }: IHomeHeader) => {
  const handlePress = () => {
    onPress();
  };
  return (
    <HomeHeaderContainer>
      <Text name="Header1" color={theme.colors.text.white}>
        {`${date}`}
      </Text>
      <TouchableOpacity onPress={handlePress}>
        <Icon name="calender" size={34} color={iconColor} />
      </TouchableOpacity>
    </HomeHeaderContainer>
  );
};
