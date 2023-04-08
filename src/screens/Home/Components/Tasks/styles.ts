import styled from 'styled-components/native';

export const HomeTaskContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 24px;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  border-color: ${({ theme }) => theme.colors.icon.enabled};
  border-width: 0.17px;
  border-radius: 16px;
`;

export const TextView = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-left: 18px;
`;
