import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TRootStack } from './types';
import { Home, Schedule } from '..';

const Stack = createNativeStackNavigator<TRootStack>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
