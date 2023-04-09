import React, { useState } from 'react';
import {
  AccordionView,
  CardHeaderCircularIcon,
  CardHeaderContainer,
  HomeContainer,
} from './styles';
import { Accordion, DatePicker, Icon, Text } from '@/components';
import { HeaderChartBar, HomeHeader, HomeTask } from './Components';
import { formattedOnlyDateDay } from '@/utils';
import { theme } from '@/design';
import { Form } from './Components/Form';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TNavigationProps } from '@/navigator/types';

export const Home = () => {
  const [date, setDate] = useState(new Date());
  const navigation = useNavigation<TNavigationProps<any>>();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const dateIconColor = showDatePicker
    ? theme.colors.icon.enabled
    : theme.colors.text.white;
  const handleOpenDatePicker = () => {
    setShowDatePicker(true);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const mockData = {
    id: '123456',
    year: 2023,
    createdAt: date,
    date: date,
    card: 'Crédito',
    description: 'nenhuma',
  };
  const mockTestData = [
    {
      id: '123456',
      name: 'Jhonny',
      date: date,
    },
    {
      id: '12456',
      name: 'Jhonny',
      date: date,
    },
    {
      id: '13456',
      name: 'Jhonny',
      date: date,
    },
  ];

  return (
    <HomeContainer>
      <HomeHeader
        iconColor={dateIconColor}
        date={formattedOnlyDateDay(date)}
        onPress={handleOpenDatePicker}
      />
      <CardHeaderContainer>
        <CardHeaderCircularIcon onPress={() => navigation.navigate('Schedule')}>
          <Icon name="plus" color={theme.colors.icon.enabled} />
        </CardHeaderCircularIcon>
        <CardHeaderCircularIcon>
          <Icon name="history" color={theme.colors.icon.enabled} />
        </CardHeaderCircularIcon>
      </CardHeaderContainer>
      <Text
        styles={{ paddingVertical: 8 }}
        name="Header1"
        color={theme.colors.text.white}>
        Próximos 3 agendados
      </Text>
      <FlatList
        scrollEnabled
        bounces={false}
        data={mockTestData}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item?.id?.toString()}
        renderItem={({ item }) => {
          return <HomeTask item={item} onPress={item => console.log(item)} />;
        }}
      />
      <AccordionView>
        <Accordion title="Total mês:  R$ 1.234">
          <>
            {[
              { id: '1234556', percent: 36, label: 'Piercing', value: 1238 },
              { id: '123456', percent: 36, label: 'Minimalist', value: 1238 },
              { id: '1236', percent: 76, label: 'Tatto', value: 1238 },
            ].map(item => (
              <HeaderChartBar key={item.id} item={item} />
            ))}
          </>
        </Accordion>
      </AccordionView>
      {/* <PlusButton label="+" onPress={handleOpenModal} /> */}
      <Form opened={openModal} onClose={setOpenModal} selectedItem={mockData} />
      <DatePicker
        date={date}
        onClose={setShowDatePicker}
        setDate={setDate}
        visible={showDatePicker}
      />
    </HomeContainer>
  );
};
