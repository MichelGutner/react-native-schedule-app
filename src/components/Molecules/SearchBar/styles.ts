import { Animated, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const SearchBarContainer = styled(Animated.View)`
  flex-direction: row;
  border-width: 2px;
  border-radius: 8px;
  height: 40px;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  border-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const SearchBarInput = styled(TextInput)`
  flex: 1;
  margin-left: 11.01px;
`;

export const SearchIconView = styled.TouchableOpacity``;
