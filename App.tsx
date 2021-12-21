/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState} from 'react';
import { AppContext } from './AppContext';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Text
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Account from './Account'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [theme, setTheme] = useState("red")
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <AppContext.Provider value={theme}>

      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Account handleTheme={() => setTheme('blue')}/>
        </ScrollView>
      </SafeAreaView>

    </AppContext.Provider>
  );
};


export default App;
