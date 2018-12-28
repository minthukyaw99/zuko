import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import styles from './style';

const Index = () => (
    <ImageBackground
        source={require('../../assets/images/cardBackground.png')}
        style={styles.imageBackgroundStyle}
        imageStyle={styles.imageBackgroundImageStyle}
    >
        <View style={styles.containerStyle}>
            <Text style={[styles.textStyle, { fontSize: 35 }]}>Zuko</Text>
        </View>
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>Min Thu Kyaw</Text>
            <Text style={styles.textStyle}>9170-9619-3421-3468</Text>
        </View>
    </ImageBackground>
);

export default Index;
