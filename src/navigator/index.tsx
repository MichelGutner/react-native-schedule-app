import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TRootStack } from './types';
import { Home, Onboarding } from '..';

const Stack = createNativeStackNavigator<TRootStack>();

export const MainNavigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
