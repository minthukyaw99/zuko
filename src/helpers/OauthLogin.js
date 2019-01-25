import { authorize } from 'react-native-app-auth/index';

import LocalStorage from './LocalStorage';
import { OAUTH_ACCESS_TOKEN, OAUTH_REFRESH_TOKEN } from '../constant/localStorageConstant';

class OauthLogin {
  static async login(fbAccountId, fbAccessToken, callBack) {
    const config = {
      serviceConfiguration: {
        authorizationEndpoint: 'https://10.0.2.2:5000/auth',
        tokenEndpoint: 'https://10.0.2.2:5000/token',
      },
      clientId: 'com.zukoapp',
      clientSecret: 'Gw3yEGT66K',
      redirectUrl: 'com.zuko.app:/com.zuko.app',
      scopes: ['offline_access', 'openid'],
      additionalParameters: { fbAccountId, fbAccessToken },
      dangerouslyAllowInsecureHttpRequests: true,
    };

    try {
      const result = await authorize(config);
      const { accessToken, refreshToken } = result;
      await LocalStorage.saveToLocalStorage(OAUTH_ACCESS_TOKEN, accessToken);
      await LocalStorage.saveToLocalStorage(OAUTH_REFRESH_TOKEN, refreshToken);
      return true;
    } catch (error) {
      alert(error)
      console.log(`Zuko ----- auth error -------- ${JSON.stringify(error)}`);
    }
  }
}

export default OauthLogin;