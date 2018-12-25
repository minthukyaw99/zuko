import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import {COLOR} from "react-native-material-ui";

const styles = StyleSheet.create({
    branding: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLOR.lightBlue50,
    },
});

const SignUpBranding = ({ showText = false }) => {
    return (
        <View style={styles.branding}>
            <Image
                style={{ width: 50, height: 50 }}
                source={require('../../assets/images/logo-blue.png')}
            />
        </View>
    )
};

export default SignUpBranding;