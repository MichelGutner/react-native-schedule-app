import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { Home } from './src';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/design';

const App = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.background.primary }}>
      <StatusBar barStyle={'light-content'} />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaView>
  );
};
export default App;
