import React, { useRef, useState } from 'react';
import { Animated, LayoutAnimation } from 'react-native';
import {
  AccordionContent,
  HeaderContent,
  AccordionContentHeader,
  Container,
} from './styles';
import { TEST_ACCORDION_BUTTON } from './constants';
import { IAccordion } from './types';
import { Icon } from '@/components';
import { theme } from '@/design';

export const Accordion = ({
  onPress,
  title,
  children,
  isExpanded,
  style,
  iconType,
  rotationDeg,
}: IAccordion): JSX.Element => {
  const [collapsed, setCollapsed] = useState(isExpanded);
  const animatedController = useRef(new Animated.Value(0)).current;
  const collapsedColor = collapsed
    ? theme.colors.icon.enabled
    : theme.colors.text.white;
  const rotation = rotationDeg ? `${rotationDeg}deg` : '-180deg';

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['-90deg', rotation],
  });

  const config = {
    friction: 100,
    duration: 300,
    toValue: collapsed ? 0 : 1,
    useNativeDriver: true,
  };

  const toggleCollapsed = () => {
    Animated.timing(animatedController, config).start();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCollapsed(!collapsed);
  };

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
    toggleCollapsed();
  };

  return (
    <Container style={{ borderColor: collapsedColor }}>
      <AccordionContent testID={TEST_ACCORDION_BUTTON} onPress={handlePress}>
        <HeaderContent>
          <AccordionContentHeader name="Body2" color={collapsedColor}>
            {title}
          </AccordionContentHeader>
          <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
            <Icon name={iconType || 'arrow_down'} color={collapsedColor} />
          </Animated.View>
        </HeaderContent>
      </AccordionContent>
      {collapsed ? children : <></>}
    </Container>
  );
};
