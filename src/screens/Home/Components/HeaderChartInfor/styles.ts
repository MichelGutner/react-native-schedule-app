import styled from 'styled-components/native';

export const HeaderChartContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

export const HeaderChartContent = styled.View`
  width: 60%;
  height: 15px;
  justify-content: center;
  border-color: ${({ theme }) => theme.colors.icon.enabled};
  border-width: 0.2px;
  border-radius: 12px;
`;

export const Fill = styled.View<{ width: number }>`
  flex: 1;
  width: ${props => props.width || 0}%;
  opacity: 0.6;
  background-color: ${({ theme }) => theme.colors.text.selected};
  border-color: ${({ theme }) => theme.colors.icon.enabled};
  border-width: 0.2px;
  border-radius: 12px;
`;
