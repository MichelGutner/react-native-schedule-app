import styled from 'styled-components/native';

export const Container = styled.View`
  min-height: 70px;
  padding: 16px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  border-color: ${({ theme }) => theme.colors.icon.enabled};
  border-width: 0.17px;
  margin-top: 15px;
  align-items: center;
`;

export const DescriptionView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
  padding: 8px;
  min-width: 100%;
  min-height: 100px;
`;

export const DescriptionDetails = styled.View`
  flex-direction: column;
  flex: 1;
  padding: 8px 16px;
`;

export const PieCategoryBol = styled.View`
  width: 5px;
  height: 5px;
`;
