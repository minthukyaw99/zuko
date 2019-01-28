import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { AccessToken } from 'react-native-fbsdk';

import OauthLogin from './OauthLogin';
import LocalStorage from './LocalStorage';
import Wrapper from './Wrapper';
import {goToAuth, goHome} from './navigation';
import { FB_ACCOUNT_ID } from '../constant/localStorageConstant';

class Initialising extends React.Component {
    async componentDidMount() {
        try {
            const fbAccountId = await LocalStorage.getFromLocalStorage(FB_ACCOUNT_ID);
            const fbAccessToken = await this.getFbAccessToken();
            console.log('Zuko:  ', fbAccountId, fbAccessToken);
            if (fbAccountId && fbAccessToken) {
                OauthLogin.login(fbAccountId, fbAccessToken.accessToken, this.goToHomePage);
            } else {
              goToAuth();
            }

        } catch (err) {
            console.log('Zuko: ', err)
            goToAuth()
        }
    }

    async goToHomePage() {
      console.log('Zuko ---- going to home page');
      const [shopping, wallet, notifications] = await Wrapper();
      goHome(shopping, wallet, notifications);
    }

    async getFbAccessToken() {
        console.log('Zuko .... trying to get fb access token ');
      return await AccessToken.getCurrentAccessToken();
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

export default Initialising;
