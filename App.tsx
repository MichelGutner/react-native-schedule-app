import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/design';
import { MainNavigator } from '@/navigator';
import { initialData, openRealm } from '@/config';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  // const initialize = async () => { 
  //   const data = await openRealm();

  //   // dropDB(data);
  // };

  // useEffect(() => {
  //   initialize();
  // }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.background.primary }}>
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} />

        <ThemeProvider theme={theme}>
          <MainNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;
