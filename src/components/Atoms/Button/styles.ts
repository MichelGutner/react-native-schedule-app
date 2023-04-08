import { IButtonStylesProps } from './types';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<IButtonStylesProps>`
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 16px;
  background-color: ${props => props.backgroundColor};
`;
