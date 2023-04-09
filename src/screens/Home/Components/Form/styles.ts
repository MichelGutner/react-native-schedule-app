import styled from 'styled-components/native';

export const Container = styled.View`
  height: 80%;
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-color: ${({ theme }) => theme.colors.icon.enabled};
  border-width: 0.2px;
`;

export const HeaderIconView = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  border-color: ${({ theme }) => theme.colors.icon.enabled};
  border-width: 0.2px;
  align-self: center;
  margin-top: 30px;
`;

export const HeaderDescription = styled.View`
  align-self: center;
  align-items: center;
  margin-top: 16px;
`;

export const ContentView = styled.View`
  flex: 1;
  padding: 24px 16px;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
`;

export const DetailsContentView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 12px 0px 12px;
`;

export const ButtonView = styled.View`
  padding: 0px 16px 32px 16px;
`;
