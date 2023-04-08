import React from 'react';
import { Text } from '../Text';
import { Container } from './styles';
import { IButton } from './types';
import { theme } from '@/design';

const ButtonComponent = ({
  onPress,
  label,
  labelColor,
  disabled,
  style,
  ...rest
}: IButton) => {
  const background = disabled
    ? theme.colors.button.disabled
    : theme.colors.button.enabled;

  return (
    <Container
      backgroundColor={background}
      disabled={disabled}
      style={style}
      onPress={onPress}
      {...rest}>
      <Text name="Body2" color={labelColor}>
        {label}
      </Text>
    </Container>
  );
};

const Button = React.memo(ButtonComponent);
export { Button };
