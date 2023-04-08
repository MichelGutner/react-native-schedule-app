import styled from 'styled-components/native';

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.font.medium};
  letter-spacing: 0.4px;
  font-weight: 600;
  line-height: 19.2px;
  color: ${({ theme }) => theme.colors.text.white};
`;
export const Caption = styled.Text`
  font-size: ${({ theme }) => theme.font.thin};
  letter-spacing: 0.4px;
  line-height: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.white};
`;

export const Header1 = styled.Text`
  font-size: ${({ theme }) => theme.font.large};
  font-weight: 700;
`;

export const Body2 = styled.Text`
  font-size: ${({ theme }) => theme.font.small};
  letter-spacing: 0.4px;
  line-height: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.white};
`;
