import React from 'react';
import { HeaderChartContent, Fill, HeaderChartContainer } from './styles';
import { Text } from '@/components';
import { theme } from '@/design';

export const HeaderChartBar = ({ item }) => {
  console.log('🚀 ~ file: index.tsx:7 ~ HeaderChartBar ~ item:', item);
  return (
    <HeaderChartContainer>
      <Text name="Body2" color={theme.colors.text.white}>
        {item.label}
      </Text>
      <HeaderChartContent>
        <Fill width={item.percent} />
        <Text
          styles={{ position: 'absolute', alignSelf: 'center' }}
          name="Caption"
          color={theme.colors.text.white}>
          {`${item.percent}% - R$${item.value}`}
        </Text>
      </HeaderChartContent>
    </HeaderChartContainer>
  );
};
