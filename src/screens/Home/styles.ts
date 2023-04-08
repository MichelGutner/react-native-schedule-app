import { Button } from '@/components';
import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 0px 12px;
`;

export const PlusButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 60px;
`;
