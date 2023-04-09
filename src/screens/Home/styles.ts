import { Button } from '@/components';
import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 0px 12px;
`;

export const PlusButton = styled(Button)`
  position: absolute;
  align-self: center;
  bottom: 0px;
  width: 50px;
  height: 50px;
  border-radius: 60px;
`;

export const AccordionView = styled.View`
  margin-bottom: 55px;
`;

export const CardHeaderContainer = styled.View`
  flex-direction: row;
  min-height: 60px;
  border-radius: 12px;
  align-items: center;
  justify-content: space-around;
`;

export const CardHeaderCircularIcon = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    border-radius: 12px;
    background-color: ${({theme}) => theme.colors.background.secondary};
    align-items: center;
    justify-content: center;
`;