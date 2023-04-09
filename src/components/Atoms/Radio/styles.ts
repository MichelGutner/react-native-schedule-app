import styled from 'styled-components/native';

export const RadioContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})<{borderColor: string}>`
  width: 20px;
  height: 20px;
  border-radius: 30px;
  border-width: 0.5px;
  align-items: center;
  justify-content: center;
  border-color: ${(props) => props.borderColor ||props.theme.colors.icon.enabled};
`;

export const RadioContent = styled.View`
  width: 12.5px;
  height: 12.5px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.icon.enabled};
`;
