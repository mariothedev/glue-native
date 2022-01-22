
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useContext, useState } from 'react';
import { Buffer } from 'buffer'
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
import * as Keychain from 'react-native-keychain'
import base64 from 'react-native-base64'
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
    const [ googleResponse, setGoogleResponse ] = useState("")
    const handleAuth = async () => {

        // alert('you tapped button')
        console.log('handle auth 2')


        // console.log(value)
        try {
          const authState = await authorize(config)
          const ca = authState.idToken
          const base64Url = ca.split('.')[1]

        //   Alert.alert(base64Url)
        //   Alert.alert(base64.decode(base64Url))

        //   const body = base64.decode(base64Url)

          console.log("ADENTROOOO")
        //   console.log(body)
        //   console.log(typeof body)
        //   console.log(body.toString())
        //   console.log(JSON.parse(body))
        // const aa = body.toString(); from 'buffer'
        const bb = Buffer.from(base64Url, 'base64').toString()
        const res = JSON.parse(bb)
        console.log(res.email)
        //   setGoogleResponse(typeof )

        // const re = JSON.parse(body) 
        // console.log(re)
        //   setGoogleResponse(body.email)

        
        //   const decodedValue = JSON.parse(base64.decode(base64Url))
        //   console.log(decodedValue)
        //   const jwt = authState.idToken
        

        //   const accessToken = authState.accessToken
          
        //   const { payload, protectHeader } = await jose.jwtDecrypt(jwt, accessToken)


        //   console.log(payload, protectHeader)

        //   console.log(authState)
        //   await Keychain.setGenericPassword(authState)
        } catch (e) {
          console.log('Try CATCH ERROR:')
          console.log(e)
        }
    }

    return (

        <View>
            <Button onPress={handleAuth} title='Log In' />
            {/* <Text>{value}</Text> */}
            {/* <Text>{googleResponse}</Text> */}
        </View>
    )
}

const Account = (props: any) => {
    const isDarkMode = useColorScheme() === 'dark';

    const { handleResponse } = props;
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
                <Button onPress={handleResponse} title='WOORDD' />
                <Text>Coming soon</Text>
            </ScrollView>

        </SafeAreaView>
    );
};
// https://dmitripavlutin.com/react-context-and-usecontext/
// https://redux.js.org/introduction/getting-started
// https://blog.bitsrc.io/using-keychain-in-react-native-and-keeping-the-app-session-alive-ff8f8850119c

export default Account;

