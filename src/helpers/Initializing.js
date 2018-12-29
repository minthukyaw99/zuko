import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';

import { AccessToken } from 'react-native-fbsdk';

import {goToAuth, goHome} from './navigation';

import { USER_KEY } from '../config';
import Wrapper from './Wrapper';

export default class Initialising extends React.Component {
    async componentDidMount() {
        try {
            const accessToken = await AccessToken.getCurrentAccessToken();
            console.log(`Zuko -------- access token is ${JSON.stringify(accessToken)}`)

            if (accessToken == null) {
                goToAuth(); //goHome(shopping, wallet, notifications);//
            } else {
                alert('---- going to home ----');
                const [shopping, wallet, notifications] = await Wrapper();
                goHome(shopping, wallet, notifications);
            }

        } catch (err) {
            console.log('error: ', err)
            goToAuth()
        }
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