/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  LogBox
} from 'react-native';
import { authorize, refresh } from 'react-native-app-auth';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const config = {
  issuer: 'https://accounts.google.com',
  clientId: '216589142324-rch6di1ses7eag6s1lvmrcoticsnpkma.apps.googleusercontent.com',
  redirectUrl: 'com.googleusercontent.apps.216589142324-rch6di1ses7eag6s1lvmrcoticsnpkma:/oauth2redirect/google',
  scopes: ['openid', 'profile']
}


const Section: React.FC<{
  title: string;
}> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleAuth = async () => {

    // alert('you tapped button')
    console.log('handle auth clicked')

    try {
      const authState = await authorize(config)
      console.log(authState)
      // Refresh token
      // const refreshedState = await refresh(config, {
      //   refreshToken: authState.refreshToken
      // });

      // console.log(refreshedState)
    } catch (e) {
      console.log('Try CATCH ERROR:')
      console.log(e)
    }
    // const refreshedState = await refresh(config, {
    //   refreshToken: authState.refreshToken
    // });
    // console.log(authState, refreshedState)
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}><Button onPress={handleAuth} title='LOOOO' /></ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
