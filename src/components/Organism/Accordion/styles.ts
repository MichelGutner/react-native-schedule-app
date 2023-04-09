import { Text } from '@/components';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  background: ${({ theme }) => theme.colors.background.tertiary};
  overflow: hidden;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.icon.enabled};
  border-width: 0.5px;
  margin-top: 8px;
  padding: 12px 12px;
`;

export const AccordionContent = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AccordionContentHeader = styled(Text)``;
