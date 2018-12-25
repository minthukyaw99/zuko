import {Navigation} from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('screens.home', () => require('../screens/Home').default);
    Navigation.registerComponent('screens.sideMenuScreen', () => require('../screens/SideMenuScreen').default);
    Navigation.registerComponent('helpers.Initializing', (sc) => require('./Initializing').default);
    Navigation.registerComponent('screens.auth.signIn', () => require('../screens/auth/SignIn').default);
    Navigation.registerComponent('screens.auth.signUp', () => require('../screens/auth/SignUp').default);
    Navigation.registerComponent('screens.bottomTabs.scanQrCode', () => require('../screens/bottomTabs/scanQrCode').default);
}