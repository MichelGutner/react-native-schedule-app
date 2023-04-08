import React from 'react';
import {
  Container,
  Content,
  DescriptionDetails,
  DescriptionView,
  PieCategoryBol,
} from './styles';
import { Text } from '@/components';
import { IChartInfo } from './types';
import PieChart from 'react-native-pie-chart';
import { theme } from '@/design';

export const ChartInfo = ({ data }: IChartInfo) => {
  let result: IEntryPropertiesProps[] = [];
  const checkData = data?.length > 0;

  data?.forEach(function (a) {
    if (!this[a.type]) {
      this[a.type] = { type: a.type, color: a.color, value: 0 };
      result.push(this[a.type]);
    }
    this[a.type].value += a.value;
  }, Object.create(null));

  let serie = [];
  let serieLabelData = [];
  let pieBolColor: Array<string> = [];
  const getSerie = (index: number) => result[index]?.value * -1;
  const getSerieLabel = (index: number) => result[index];
  const sliceColor = ['#2196F3', '#F44336', '#FFEB3B', '#4CAF50', '#ed54a8'];

  for (let i = 0; i < result?.length; i++) {
    if (i < 5 && result?.length) {
      serie.push(getSerie(i));
      serieLabelData.push(getSerieLabel(i));
      pieBolColor.push(sliceColor[i]);
    }
  }

  return (
    <Container style={{ elevation: 10 }}>
      <Text
        name="Caption"
        color={theme.colors.text.white}
        styles={{ marginBottom: 8 }}>
        {'Despesas por categoria'.toLocaleUpperCase()}
      </Text>
      <Content>
        <PieChart
          widthAndHeight={90}
          series={serie?.length < 1 ? [1] : serie}
          sliceColor={sliceColor}
          doughnut={true}
          coverRadius={0.7}
          coverFill={theme.colors.background.primary}
        />
        <DescriptionDetails>
          {serieLabelData?.map((item, index) => (
            <DescriptionView key={index}>
              <PieCategoryBol
                style={{ backgroundColor: pieBolColor[index], borderRadius: 5 }}
              />
              <Text
                name="Caption"
                color={theme.colors.text.white}
                styles={{ flex: 1, paddingLeft: 8 }}>
                {item?.type}
              </Text>
              <Text name="Caption" color={theme.colors.text.white}>
                {checkData ? item?.value : 0}
              </Text>
            </DescriptionView>
          ))}
        </DescriptionDetails>
      </Content>
    </Container>
  );
};
