import {Navigation} from 'react-native-navigation';
import { registerScreens } from './src/helpers/registerScreens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'helpers.Initializing'
            }
        },
    });
});