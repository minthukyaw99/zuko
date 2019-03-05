import { authorize } from 'react-native-app-auth/index';

import AppConfig from '../config/appConfig';
import Client from '../apollo/Client';
import GetCardNumber from '../graphql/cardNumber';
import GetBalance from '../graphql/balance';
import LocalStorage from './LocalStorage';
import {
  CARD_NUMBER,
  OAUTH_ACCESS_TOKEN,
  OAUTH_REFRESH_TOKEN,
  OAUTH_ACCESS_TOKEN_EXPIRATION_DATE
} from '../constant/localStorageConstant';

class OauthLogin {
  static async login(fbAccountId, fbAccessToken, callBack, errorHandler) {
    const config = {
      serviceConfiguration: {
        authorizationEndpoint: `${AppConfig.AUTH_BASE_URL}/auth`, //'http://127.0.0.1:5000/auth', // 'https://10.0.2.2:5000/auth',
        tokenEndpoint:  `${AppConfig.AUTH_BASE_URL}/token`, //'http://127.0.0.1:5000/token', // 'https://10.0.2.2:5000/token',
      },
      clientId: AppConfig.CLISENT_ID,
      clientSecret: AppConfig.CLIENT_SECRET,
      redirectUrl: 'com.zuko.app:/com.zuko.app',
      scopes: ['offline_access', 'openid'],
      additionalParameters: { fbAccountId, fbAccessToken, cardType: 'buyer' },
      dangerouslyAllowInsecureHttpRequests: true,
    };

    try {
      const result = await authorize(config);
      console.log('Zuko auth response ----------- : ', result);
      OauthLogin.saveCredential(result);
      OauthLogin.fetchUserInfo(result.accessToken);
      callBack();
    } catch (error) {
      alert(error);
      errorHandler();
    }
  }

  static fetchUserInfo(accessToken, goToHome = null, goToAuth = null) {
    console.log('----- access token is ', accessToken);
    fetch(`${AppConfig.AUTH_BASE_URL}/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      cache: "no-cache",
    }).then(response => {
      const data = JSON.parse(response._bodyText);
      OauthLogin.saveDataToCache(data);
      goToHome();
    }).catch(e => {
      console.log('--- fetch user info error ', e.message)
      goToAuth();
    })
  }

  static saveCredential(result) {
    const { accessToken, accessTokenExpirationDate, refreshToken } = result;
    LocalStorage.saveToLocalStorage(OAUTH_ACCESS_TOKEN, accessToken);
    LocalStorage.saveToLocalStorage(OAUTH_ACCESS_TOKEN_EXPIRATION_DATE, accessTokenExpirationDate);
    LocalStorage.saveToLocalStorage(OAUTH_REFRESH_TOKEN, refreshToken);
  }

  static async fetchNewAccessToken(pinNumber, successPage, errorPage) {
    const refreshToken = await LocalStorage.getFromLocalStorage(OAUTH_REFRESH_TOKEN);
    const url = `${AppConfig.AUTH_BASE_URL}/token`;
    const body = {
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
      client_id: AppConfig.CLISENT_ID,
      client_secret: AppConfig.CLIENT_SECRET,
      pin: pinNumber,
    };
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: 'no-cache',
    }).then(response => {
      const { access_token, refresh_token, expires_in } = JSON.parse(response._bodyText);

      const data = {
        accessToken: access_token,
        refreshToken: refresh_token,
        accessTokenExpirationDate: expires_in,
      };

      OauthLogin.saveCredential(data);
      OauthLogin.fetchUserInfo(access_token, successPage, errorPage);
    }).catch(e => {

    });
  }

  static saveDataToCache(userInfo) {
    Client.writeQuery({
      query: GetCardNumber,
      data: { cardNumber: userInfo.cardNumber }
    });

    Client.writeQuery({
      query: GetBalance,
      variables: { id: userInfo.cardNumber },
      data: { balance: userInfo.balance }
    })
  }
}

export default OauthLogin;
