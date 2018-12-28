import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';

import {goToAuth, goHome} from './navigation';

import { USER_KEY } from '../config';
import Wrapper from './Wrapper';

export default class Initialising extends React.Component {
    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem(USER_KEY)

            if (user == null) {
                const [shopping, card, barcode] = await Wrapper();
                goHome(shopping, card, barcode);// goToAuth();
            } else {

                goHome();
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