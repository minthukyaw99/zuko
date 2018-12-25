import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import {COLOR} from "react-native-material-ui";

const styles = StyleSheet.create({
    branding: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexShrink: 2,
    },
    logoTextStyle: {
        color: COLOR.lightBlue600,
        fontSize: 70,
        fontFamily: 'Roboto-Thin'
    },
});

const SignInBranding = ({ showText = false }) => {
    return (
        <View style={styles.branding}>
            <Image
                style={{ width: 125, height: 125 }}
                source={require('../../assets/images/logo-blue.png')}
            />
            <Text style={styles.logoTextStyle}>Zuko</Text>
        </View>
    )
};

export default SignInBranding;