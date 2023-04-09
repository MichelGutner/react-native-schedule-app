/* eslint-disable no-unused-vars */
import React from 'react';
import { HomeTaskContainer, TextView } from './styles';
import { RadioBox, Text } from '@/components';
import { theme } from '@/design';
import { formattedFullDateDay } from '@/utils';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { ViewToken } from 'react-native';

type ListProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  onPress: (item: any) => void;
  item: any;
};

export const AnimatedHomeTask = ({ viewableItems, item, onPress }: ListProps) => {
  const borderColor = item.isSelected
    ? theme.colors.icon.enabled
    : theme.colors.text.white;
  const opacityAnimated = useAnimatedStyle(() => {
    const isVisible = viewableItems?.value
      .filter(itemList => itemList.isViewable)
      .find(viewableItem => viewableItem.item.id === item?.id);
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0),
        },
      ],
    };
  }, []);

  const handlePress = (item: any) => {
    onPress && onPress(item);
  };

  return (
    <Animated.View style={[opacityAnimated, { marginTop: 10 }]}>
      <HomeTaskContainer
        borderColor={borderColor}
        activeOpacity={0.6}
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
    </Animated.View>
  );
};
