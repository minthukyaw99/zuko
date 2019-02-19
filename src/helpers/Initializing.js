import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { AccessToken } from 'react-native-fbsdk';

import OauthLogin from './OauthLogin';
import LocalStorage from './LocalStorage';
import Wrapper from './Wrapper';
import {goToAuth, goHome, goToVerifyPin} from './navigation';
import {
  FB_ACCOUNT_ID,
  OAUTH_ACCESS_TOKEN,
  OAUTH_REFRESH_TOKEN,
  OAUTH_ACCESS_TOKEN_EXPIRATION_DATE,
} from '../constant/localStorageConstant';

class Initialising extends React.Component {
    async componentDidMount() {
        try {
            const fbAccountId = await LocalStorage.getFromLocalStorage(FB_ACCOUNT_ID);
            const fbAccessToken = await this.getFbAccessToken();
            const authAccessToken = await this.hasAccessToken();
            const hadExpired = await this.hasExpired();
            console.log('----- had expired ', hadExpired);
             if (authAccessToken && hadExpired) {
                 console.log('---- go to verify pin page')
                 goToVerifyPin();
             } else if (authAccessToken && !hadExpired) {
               console.log('---- has access token and not expire yet;')
               OauthLogin.fetchUserInfo(authAccessToken, this.goToHomePage, goToAuth);
             }
             else if (fbAccountId && fbAccessToken) {
                console.log('------ has fb access token ---- ');
                OauthLogin.login(fbAccountId, fbAccessToken.accessToken, this.goToHomePage, goToAuth);
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

    async hasAccessToken() {
      const accessToken = await LocalStorage.getFromLocalStorage(OAUTH_ACCESS_TOKEN);

      if (accessToken) {
          return accessToken;
      }

      return false;
    }

    async hasExpired() {
      const accessTokenExpirationDate = await LocalStorage.getFromLocalStorage(OAUTH_ACCESS_TOKEN_EXPIRATION_DATE);
      const expiredDate = Date.parse(accessTokenExpirationDate);
      const currentDate = new Date();
      const currentTimeStamp = Date.parse(currentDate);

      if (currentTimeStamp > expiredDate) {
          return true;
      }

      return false;
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
