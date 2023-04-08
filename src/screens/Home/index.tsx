import React, { useState } from 'react';
import { HomeContainer, PlusButton } from './styles';
import { ChartInfo, DatePicker, Text } from '@/components';
import { HomeHeader, HomeTask } from './Components';
import { formattedOnlyDateDay } from '@/utils';
import { theme } from '@/design';

export const Home = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleOpenDatePicker = () => {
    setShowDatePicker(true);
  };

  return (
    <HomeContainer>
      <HomeHeader
        date={formattedOnlyDateDay(date)}
        onPress={handleOpenDatePicker}
      />
      <ChartInfo
        data={[
          { id: 1, color: 'blue', type: 'Machine', value: -4 },
          { id: 1, color: 'blue', type: 'Machine', value: -4 },
          { id: 1, color: 'blue', type: 'Medicine', value: -40 },
        ]}
      />
      <Text
        styles={{ paddingVertical: 24 }}
        name="Header1"
        color={theme.colors.text.white}>
        AGENDADOS
      </Text>
      <HomeTask name={'Jhonny'} day={date} />
      <PlusButton label="+" onPress={undefined} />
      <DatePicker
        date={date}
        onClose={setShowDatePicker}
        setDate={setDate}
        visible={showDatePicker}
      />
    </HomeContainer>
  );
};
