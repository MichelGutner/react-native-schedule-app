import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@/components';
import { SearchBarContainer, SearchBarInput, SearchIconView } from './styles';
import { ISearchBar } from './types';
import { theme } from '@/design';
import { Keyboard, Animated } from 'react-native';
import { animationPosition } from './helpers';

export const SearchBar = ({
  leftIcon,
  leftIconSize,
  onChangeText,
  textStyle,
  style,
  ...rest
}: ISearchBar): JSX.Element => {
  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useState('');
  const [selectionColor, setSelectionColor] = useState('transparent');
  const animatedController = useRef(new Animated.Value(0)).current;
  const AnimatedIconView = Animated.createAnimatedComponent(SearchIconView);
  const borderColor = focused
    ? theme.colors.button.enabled
    : theme.colors.button.disabled;

  const movePlaceHolder = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const searchIconRotate = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['90deg', '0deg'],
  });

  const config = {
    duration: 300,
    toValue: focused ? 0 : 1,
    useNativeDriver: true,
  };

  const startSplashAnimation = () => {
    Animated.parallel([
      animationPosition(movePlaceHolder, { x: -28, y: 0 }),
    ]).start();
  };

  const handleChangeText = (text: string) => {
    onChangeText?.(text);
    setSearch(text);
  };

  const handleBorderColor = () => {
    setFocused(true);
  };

  const handleRemoveFocus = () => {
    setFocused(false);
    setSearch('');
    Keyboard.dismiss();
  };

  useEffect(() => {
    Animated.timing(animatedController, config).start();
    if (focused) {
      startSplashAnimation();
      setTimeout(() => setSelectionColor(theme.colors.icon.enabled), 500);
    } else {
      setSelectionColor('transparent');
    }
  }, [focused]);

  return (
    <SearchBarContainer style={[{ borderColor }, style]}>
      {leftIcon || (
        <AnimatedIconView
          style={{ transform: [{ rotateY: searchIconRotate }] }}
          disabled={true}
          onPress={handleRemoveFocus}>
          <Icon
            name={'search'}
            color={
              focused ? theme.colors.icon.enabled : theme.colors.icon.disabled
            }
            size={leftIconSize}
          />
        </AnimatedIconView>
      )}
      <Animated.View
        style={{ flex: 1, transform: [{ translateX: movePlaceHolder.x }] }}>
        <SearchBarInput
          onEndEditing={handleRemoveFocus}
          selectionColor={selectionColor}
          onFocus={handleBorderColor}
          onChangeText={handleChangeText}
          placeholderTextColor={theme.colors.text.grey}
          value={search}
          style={[{ color: theme.colors.text.white }, textStyle]}
          placeholder={selectionColor !== 'transparent' ? 'Pesquisar' : ''}
          {...rest}
        />
      </Animated.View>
    </SearchBarContainer>
  );
};
