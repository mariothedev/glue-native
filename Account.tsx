
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useContext } from 'react';
import { AppContext } from './AppContext';
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
import * as jose from 'jose'
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
    scopes: ['openid', 'profile', 'email']
}

function AuthView() {

    const value = useContext(AppContext)
    const handleAuth = async () => {

        // alert('you tapped button')
        console.log('handle auth 2')


        // console.log(value)
        // try {
        //   const authState = await authorize(config)
        //   console.log(authState)
        // } catch (e) {
        //   console.log('Try CATCH ERROR:')
        //   console.log(e)
        // }
    }

    return (

        <View>


            {/* <Button onPress={handleAuth} title='LOOOO' /> */}
            <Text>{value}</Text>
        </View>
    )
}

const Account = (props: any) => {
    const isDarkMode = useColorScheme() === 'dark';

    const { handleTheme } = props;
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };


    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <AuthView /> 
                <Button onPress={handleTheme} title='WOORDD' />
            </ScrollView>

        </SafeAreaView>
    );
};


export default Account;
