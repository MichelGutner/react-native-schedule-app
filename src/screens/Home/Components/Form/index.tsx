import React from 'react';
import { BottomSheet } from '@/components/Organism/BottomSheet';
import {
  Container,
  HeaderIconView,
  HeaderDescription,
  ContentView,
  DetailsContentView,
  ButtonView,
} from './styles';
import { Button, Text } from '@/components';
import { theme } from '@/design';
import { contentViewDetails } from './helpers';

export const Form = ({ opened, onClose, selectedItem }) => {
  const handleModal = () => {
    onClose(false);
  };
  const { data } = contentViewDetails(selectedItem);
  return (
    <BottomSheet
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={800}
      animationOutTiming={800}
      isVisible={opened}
      onPressBackDrop={handleModal}>
      <Container>
        <HeaderIconView>
          <Text name="Header1" color={theme.colors.text.white}>
            {'J'}
          </Text>
        </HeaderIconView>
        <HeaderDescription>
          <Text name="Body2" color={theme.colors.text.white}>
            {'Deseja concluir este agendamento?'}
          </Text>
        </HeaderDescription>
        <ContentView>
          {data?.map(({ key, value }) => (
            <DetailsContentView key={key}>
              <Text name="Body2" color={theme.colors.text.white}>
                {key}
              </Text>
              <Text
                numberOfLines={1}
                styles={{ maxWidth: 150 }}
                name="Caption"
                color={theme.colors.text.white}>
                {value}
              </Text>
            </DetailsContentView>
          ))}
        </ContentView>
        <ButtonView>
          <Button title="Pagar" onPress={undefined} />
        </ButtonView>
      </Container>
    </BottomSheet>
  );
};
