import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    Linking,
} from 'react-native';
import { authorize } from 'react-native-app-auth/index';
//import { AccessToken } from 'react-native-fbsdk';

import {goToAuth, goHome} from './navigation';

import { USER_KEY } from '../config';
import Wrapper from './Wrapper';
// import {facebookService} from "../services/FbService";

export default class Initialising extends React.Component {
    async componentDidMount() {
        try {
            //const accessToken = await AccessToken.getCurrentAccessToken();
            //console.log(`Zuko -------- access token is ${JSON.stringify(accessToken)}`)
            const pin = await this.getUserPin();
            console.log('Zuko ----- user pin is ' + pin);
            if (pin == null) {
                //const userData = facebookService.fetchUserData();
                const config = {
                    //issuer: 'https://10.0.2.2:5000',
                    serviceConfiguration: {
                        authorizationEndpoint: 'https://10.0.2.2:5000/auth',
                        tokenEndpoint: 'https://10.0.2.2:5000/token',
                    },
                    clientId: 'com.zukoapp',
                    clientSecret: 'Gw3yEGT66K',
                    redirectUrl: 'com.zuko.app:/com.zuko.app',
                    scopes: ['offline_access', 'openid'],
                    dangerouslyAllowInsecureHttpRequests: true,
                };

                try {
                    const result = await authorize(config);
                    alert(JSON.stringify(result));
                    console.log('Zuko ------- auth result ----- ' + JSON.stringify(result));
                    // result includes accessToken, accessTokenExpirationDate and refreshToken
                } catch (error) {
                    alert(error)
                    console.log(`Zuko ----- auth error -------- ${JSON.stringify(error)}`);
                }

                goToAuth(); //goHome(shopping, wallet, notifications);//
            } else {
                console.log('Zuko ---- going to home page');
                const [shopping, wallet, notifications] = await Wrapper();
               // goHome(shopping, wallet, notifications);
            }

        } catch (err) {
            console.log('error: ', err)
            goToAuth()
        }
    }

    async getUserPin() {
        let userId = '';
        try {
            userId = await AsyncStorage.getItem('userPin') || null;
            return userId;
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
        return userId;

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Loading</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 28
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});