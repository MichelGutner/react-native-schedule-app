/* eslint-disable @typescript-eslint/ban-types */
import { DefaultTheme, StyledComponent } from 'styled-components';
import { TText } from './types';
import { Text } from 'react-native';
import { Body2, Caption, Header1, SubTitle } from './styles';

export const mappedComponent: Record<
  TText,
  StyledComponent<typeof Text, DefaultTheme, {}, never>
> = {
  SubTitle: SubTitle,
  Body2: Body2,
  Caption: Caption,
  Header1: Header1,
};
